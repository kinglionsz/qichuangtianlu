/**
 * Lighthouse CI Puppeteer 脚本
 * 用于在 CI 环境中启动开发服务器并等待其就绪
 */

const spawn = require('child_process').spawn;
const http = require('http');

const SERVER_START_TIMEOUT = 60000;
const SERVER_START_POLL_INTERVAL = 500;

function waitForServerStart(url, timeout) {
  const startTime = Date.now();

  return new Promise((resolve, reject) => {
    function poll() {
      http.get(url, (res) => {
        if (res.statusCode === 200) {
          resolve();
        } else {
          setTimeout(poll, SERVER_START_POLL_INTERVAL);
        }
      }).on('error', () => {
        if (Date.now() - startTime >= timeout) {
          reject(new Error(`Server did not start within ${timeout}ms`));
        } else {
          setTimeout(poll, SERVER_START_POLL_INTERVAL);
        }
      });
    }

    poll();
  });
}

module.exports = async (launcher, options) => {
  const { chrome } = launcher;

  // 启动开发服务器
  const serverProcess = spawn('npm', ['run', 'dev'], {
    stdio: 'pipe',
    shell: true,
    detached: false
  });

  let serverOutput = '';

  serverProcess.stdout.on('data', (data) => {
    serverOutput += data.toString();
    process.stdout.write(data);
  });

  serverProcess.stderr.on('data', (data) => {
    process.stderr.write(data);
  });

  try {
    // 等待服务器启动
    console.log('Waiting for dev server to start...');
    await waitForServerStart('http://localhost:3000/', SERVER_START_TIMEOUT);
    console.log('Dev server is ready!');

    // 启动 Chrome
    const browser = await chrome.launch(options);
    const page = await browser.newPage();

    // 导航到页面
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });

    return { browser, page };
  } finally {
    // 清理：杀死服务器进程
    if (serverProcess && !serverProcess.killed) {
      serverProcess.kill('SIGTERM');
    }
  }
};