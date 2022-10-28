const launchingBlocks = document.querySelectorAll('#launching-a-contest > .faq_block');
const buyingBlocks = document.querySelectorAll('#buying-from-marketplace > .faq_block');
const managedBlocks = document.querySelectorAll('#managed-contests > .faq_block');
const forCreativesBlocks = document.querySelectorAll('#for-creatives > .faq_block');

const questionActiveClass = 'active';

function questionTabs(block, className) {
  block.forEach(item => {
    item.addEventListener('click', function() {
      block.forEach(item => item.classList.remove(className));
      item.classList.toggle(className);
    })
  });
}

questionTabs(launchingBlocks, questionActiveClass);
questionTabs(buyingBlocks, questionActiveClass);
questionTabs(managedBlocks, questionActiveClass);
questionTabs(forCreativesBlocks, questionActiveClass);