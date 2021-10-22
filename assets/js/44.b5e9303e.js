(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{535:function(s,a,t){"use strict";t.r(a);var n=t(4),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("ul",[t("li",[s._v("常用脚本")]),s._v(" "),t("li",[s._v("Bash/Python/Hive/Hbase")])])]),s._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#hive相关"}},[s._v("Hive相关")]),t("ul",[t("li",[t("a",{attrs:{href:"#数据导出"}},[s._v("数据导出")])])])]),t("li",[t("a",{attrs:{href:"#bash脚本"}},[s._v("Bash脚本")]),t("ul",[t("li",[t("a",{attrs:{href:"#格式化输出日志rkecho"}},[s._v("格式化输出日志rkecho")])]),t("li",[t("a",{attrs:{href:"#绑定退出事件"}},[s._v("绑定退出事件")])]),t("li",[t("a",{attrs:{href:"#耗时时间"}},[s._v("耗时时间")])]),t("li",[t("a",{attrs:{href:"#循环处理"}},[s._v("循环处理")])])])]),t("li",[t("a",{attrs:{href:"#python相关"}},[s._v("Python相关")])]),t("li",[t("a",{attrs:{href:"#hbase相关"}},[s._v("Hbase相关")])])])]),t("p"),s._v(" "),t("h2",{attrs:{id:"hive相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hive相关"}},[s._v("#")]),s._v(" Hive相关")]),s._v(" "),t("h3",{attrs:{id:"数据导出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据导出"}},[s._v("#")]),s._v(" 数据导出")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("hive -e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"  \nset mapred.job.queue.name=root.tianchuang;  \nset hive.cli.print.header=true;  \nset hive.resultset.use.unique.column.names=false;  \n\nselect * from db_name.table_name where 1=1;  \n  \n"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/["),t("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),s._v("]/,/g'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -v "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'WARN'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" out_data.csv  \n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h2",{attrs:{id:"bash脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bash脚本"}},[s._v("#")]),s._v(" Bash脚本")]),s._v(" "),t("h3",{attrs:{id:"格式化输出日志rkecho"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#格式化输出日志rkecho"}},[s._v("#")]),s._v(" 格式化输出日志rkecho")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("rkecho")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("var_str")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("var_curr_timestamp")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"+%Y-%m-%d %H:%M:%S"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 判断参数1 是否是空字符串")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"x'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${var_str}")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"x"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v(" \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("t_str")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"['),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${var_curr_timestamp}")]),s._v('][RK_Log_TAG]"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("p_str")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${var_str}")]),s._v('"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 打印输出")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${t_str}")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${p_str}")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nrkecho "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"测试"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("h3",{attrs:{id:"绑定退出事件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#绑定退出事件"}},[s._v("#")]),s._v(" 绑定退出事件")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 绑定结束事件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("script_exit_hook")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"GAME OVER"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("trap")]),s._v(" script_exit_hook EXIT\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"耗时时间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#耗时时间"}},[s._v("#")]),s._v(" 耗时时间")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ts_start")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +%s"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# do sth")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ts_end")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +%s"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ts_spend")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$((")]),s._v(" ts_end "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" ts_start "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("))")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("((")]),s._v("sec"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ts_spend"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ts_spend"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" min"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ts_spend"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" hrs"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ts_spend"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ts_spend_str")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%02d:%02d:%02d"')]),s._v(" $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("hrs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("min"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("sec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ts_spend_str}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ts_stop")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%Y-%m-%d %H:%M:%S'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"耗时:'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ts_spend_str}")]),s._v(",结束时间:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ts_stop}")]),s._v('"')]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h3",{attrs:{id:"循环处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#循环处理"}},[s._v("#")]),s._v(" 循环处理")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("pys")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"b"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"c"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"d"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"e"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"f"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("var")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${pys"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Do smth with var ")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${var}")]),s._v('"')]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$?")]),s._v(" -ne "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ERROR: '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${var}")]),s._v('数据计算失败!"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${var}")]),s._v('数据计算成功."')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h2",{attrs:{id:"python相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#python相关"}},[s._v("#")]),s._v(" Python相关")]),s._v(" "),t("h2",{attrs:{id:"hbase相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hbase相关"}},[s._v("#")]),s._v(" Hbase相关")])])}),[],!1,null,null,null);a.default=e.exports}}]);