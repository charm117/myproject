/**
 * Project: Tips.js
 * Author: Mr.yang
 * Describe: 解决弹窗和提示的问题，适用于移动端，设计稿750px，需要链接上rem.js
 * Date: 2021-03-12 
 *
 * rem.js:
 *      (function(doc, win) {
 *         var docEl = doc.documentElement,
 *             resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
 *             recalc = function() {
 *                var clientWidth = docEl.clientWidth;
 *               if (!clientWidth) return;
 *                // 这里的750 取决于设计稿的宽度
 *                if (clientWidth >= 750) {
 *                   docEl.style.fontSize = '100px';
 *              } else {
 *                    docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
 *                }
 *            };
 *         if (!doc.addEventListener) return;
 *           win.addEventListener(resizeEvt, recalc, false);
 *         doc.addEventListener('DOMContentLoaded', recalc, false);
 *      })(document, window);
 */

// 初始化
(function() {
    try {
        let style = document.createElement('style'),
            div = document.createElement('div'),
            styleContent = `body {
          width: 100%;
          height: 100%;
          padding: 0;
          margin: 0;
        }
        .MrYang-model {
          position: relative;
          z-index: 9999;
          display: none;
          justify-content: center;
          align-items: center;
        }
        .MrYang-model .tips1 {
          position: fixed;
          top: 50%;
          left: 50%;
          z-index: 9999;
          transform: translate(-50%, -50%);
          padding: 0.1rem 0.2rem;
          background: rgba(0, 0, 0, 0.8);
          border-radius: 0.1rem;
          font-size: 0.2rem;
          color: #fafafa;
          text-align: center;
        }
        .MrYang-model .tips2 {
          position: fixed;
          top: 50%;
          left: 50%;
          z-index: 9999;
          transform: translate(-50%, -50%);
          width: 5rem;
          padding: 0.1rem 0.2rem;
          background: #fff;
          border-radius: 0.25rem;
          color: #333;
        }
        .MrYang-model .tips2 .MrYang-model-title {
          position: relative;
          padding: 0.2rem;
          border-bottom:  0.01rem solid #e5e5e5;
          font-size: 0.32rem;
          font-weight: bold;
        }
        .MrYang-model .tips2 .MrYang-model-msg {
          padding: 0.2rem;
          font-size: 0.3rem;
          border-bottom:  0.01rem solid #e5e5e5;
        }
        .MrYang-model .tips2 .MrYang-model-options {
          display: flex;
          justify-content: space-between;
        }
        .MrYang-model .tips2 .MrYang-model-options a.cancel,
        .MrYang-model .tips2 .MrYang-model-options a.confirm {
          flex: 1;
          padding: 0.15rem;
          margin: 0.2rem;
          border: 0.01rem solid;
          border-radius: 0.1rem;
          color: #333;
          font-size: 0.24rem;
          text-align: center;
          text-decoration: none;
        }
        .MrYang-model .tips2 .MrYang-model-options a.confirm {
          color: #fff;
          background-color: #337ab7;
          border-color: #2e6da4;
        }
        .MrYang-model .tips3 {
          position: fixed;
          top: 50%;
          left: 50%;
          z-index: 9999;
          transform: translate(-50%, -50%);
          width: 6rem;
          padding: 0.1rem 0.2rem;
          background: #fff;
          border-radius: 0.25rem;
          color: #333;
        }
        .MrYang-model .tips3 .MrYang-model-title {
          position: relative;
          padding: 0.2rem;
          border-bottom:  0.01rem solid #e5e5e5;
          font-size: 0.32rem;
          font-weight: bold;
        }
        .MrYang-model .tips3 .MrYang-model-title p {
          width: 5.3rem;
          margin: 0;
          color: #333;
        }
        .MrYang-model .tips3 .MrYang-model-title .close {
          position: absolute;
          top: 0.2rem;
          right: 0;
          width: 0.3rem;
          height: 0.3rem;
          border-radius: 50%;
        }
        .MrYang-model .tips3 .MrYang-model-title .close:before {
          content: '×';
          position: absolute;
          top: 50%;
          left: 50%;
          color: #ccc;
          transform: translate(-50%, -50%);
        }
        .MrYang-model .tips3 .MrYang-model-msg {
          padding: 0.2rem;
          border-bottom:  0.01rem solid #e5e5e5;
          font-size: 0.3rem;
          color: #666;
        }
        .MrYang-model .tips3 .MrYang-model-options {
          display: flex;
          justify-content: space-between;
        }
        .MrYang-model .tips3 .MrYang-model-options a.cancel,
        .MrYang-model .tips3 .MrYang-model-options a.confirm {
          flex: 1;
          padding: 0.15rem;
          margin: 0.2rem;
          border: 0.01rem solid;
          border-radius: 0.1rem;
          color: #333;
          font-size: 0.24rem;
          text-align: center;
          text-decoration: none;
        }
        .MrYang-model .tips3 .MrYang-model-options a.cancel {
          background: #fff;
          border-color: #ccc;
        }
        .MrYang-model .tips3 .MrYang-model-options a.confirm {
          color: #fff;
          background-color: #337ab7;
          border-color: #2e6da4;
        }
        .MrYang-model .mask {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 999;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
        }
        `;
        style.innerHTML = styleContent;
        div.className = 'MrYang-model';
        document.head.appendChild(style);
        document.body.appendChild(div);
    } catch (error) {
        console.error(error.name + ": " + error.message, );
        console.error(` 解决方案：请把 jquery.tips-1.0.2.js 写在body标签内 `);
    }


}());

function YangTips() {
    "use strict";
    let that = this,
        model = $(".MrYang-model"), // 获取到 model 框
        cancelBtn, // 取消
        confirmBtn, // 确认
        closeBtn, // 关闭
        maskBtn; // 蒙版

    that.tips = function(obj) {
        obj.title = obj.title || "提示";
        obj.msg = obj.msg || "";
        obj.time = +obj.time || 500;
        model.html(`
          <div class="mask" style="background: rgba(0,0,0,0)"></div>
          <div class="tips1">
              <div class="MrYang-model-msg">${obj.msg}</div>
          </div>
        `);
        model.stop().fadeIn(obj.time, function() {
            model.delay(obj.time).fadeOut(obj.time, function() {
                model.empty();
            });
        });
    };

    that.alert = function(obj) {
        obj.title = obj.title || "提示";
        obj.msg = obj.msg || "";
        obj.options = obj.options || ["确认"];
        obj.time = +obj.time || 500;
        model.html(`
        <div class="mask"></div>
        <div class="tips2">
            <div class="MrYang-model-title">${obj.title}</div>
            <div class="MrYang-model-msg">${obj.msg}</div>
            <div class="MrYang-model-options">
                <a href="javascript: void(0);" class="confirm">${obj.options[0]}</a>
            </div>
        </div>
      `);
        model.fadeIn(obj.time);
        confirmBtn = $(".confirm");
        confirmBtn.on('click', function() {
            that.close(obj.time);
            !!obj.confirm ? obj.confirm() : "";
        });
    };
    that.confirm = function(obj) {
        model.empty(); // 清除残存的代码
        obj.title = obj.title || "提示";
        obj.msg = obj.msg || "";
        obj.options = obj.options || ["取消", "确认"];
        obj.time = +obj.time || 500;
        model.html(`
          <div class="mask"></div>
          <div class="tips3">
              <div class="MrYang-model-title">
                  <p>${obj.title}</p>
                  <div class="close"></div>
              </div>
              <div class="MrYang-model-msg">
                  ${obj.msg}
              </div>
              <div class="MrYang-model-options">
                  <a href="javascript: void(0);" class="cancel">${obj.options[0]}</a>
                  <a href="javascript: void(0);" class="confirm">${obj.options[1]}</a>
              </div>
          </div>
        `);
        model.fadeIn(obj.time);
        cancelBtn = $(".cancel"); // 取消
        confirmBtn = $(".confirm"); // 确认
        closeBtn = $('.close'); // 关闭
        maskBtn = $(".mask"); // 蒙版
        // 确认按钮回调
        confirmBtn.on('click', function() {
            !!obj.close ? that.close(obj.time) : "";
            !!obj.confirm ? obj.confirm() : "";
        });

        // 取消按钮回调
        cancelBtn.on('click', function() {
            that.close(obj.time);
            !!obj.cancel ? obj.cancel() : "";
        });

        // 关闭按钮
        closeBtn.on('click', function() {
            that.close(obj.time);
        });
        // 蒙版
        maskBtn.on('click', function() {
            that.close(obj.time);
        });
    };
    // 关闭
    that.close = function(time) {
        time = time ? time : 500;
        model.stop().fadeOut(time, function() {
            model.delay(time).empty();
        });
    };
}