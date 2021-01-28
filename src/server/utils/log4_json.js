const log4json = {
    // 输出到控制台的内容，同时也输出到日志文件中
    replaceConsole: true,
    appenders: {
      out: {
        type: "stdout",
        layout: {
          type: "colored",
        },
      },
      globalError: {
        type: "file",
        filename: __dirname + "/logs/error.log",
      },
      everything: { type: 'dateFile', filename:__dirname + "/logs/all-the-logs.log" }
    },
    categories: {
      default: { appenders: ["out","everything", "globalError"], level:'error' },
    },
  };
export default log4json;
  