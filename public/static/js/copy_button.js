import lodash from 'lodash';
import Clipboard from 'clipboard';

try {
  // Node js will throw an error
  this === window;
  new Clipboard('.code-copy-button');
} catch (_) { }

const defaultOptions = {
  iconStyle: 'padding: 0px 1em 7px 0px; display:none',
  iconClass: '',
  iconAlt: '',
  iconSrc: '',
  textStyle: 'padding-right: 10px; vertical-align:middle;',
  textClass: '',
  textContent: 'copy',
  buttonStyle: 'width: 100%; text-align: right;',
  buttonClass: ''
};

function renderCode(origRule, options) {
  options = lodash.merge(defaultOptions, options);
  return (...args) => {
    const [tokens, idx] = args;
    const content = tokens[idx].content
      .replaceAll('"', '&quot;')
      .replaceAll("'", "&lt;");
    const origRendered = origRule(...args);

    if (content.length === 0) {
      return origRendered;
    }
    return `
      <div class="button-parent">
        ${origRendered}
        <button class="code-copy-button ${options.buttonClass}" data-clipboard-text="${content}" style="${options.buttonStyle}" title="Copy code in block">
            <img class="code-copy-button-icon ${options.iconClass}" src="${options.iconSrc}" alt="${options.iconAlt}" style="${options.iconStyle}"/>
            <div class="code-copy-button-text ${options.textClass}" style="${options.textStyle}">${options.textContent}</>
        </button>
      </div>
    `;
  };
}

module.exports = (md, options) => {
  md.renderer.rules.code_block = renderCode(md.renderer.rules.code_block, options);
  md.renderer.rules.fence = renderCode(md.renderer.rules.fence, options);
};
