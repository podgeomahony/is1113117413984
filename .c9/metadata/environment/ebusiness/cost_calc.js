{"filter":false,"title":"cost_calc.js","tooltip":"/ebusiness/cost_calc.js","undoManager":{"mark":3,"position":3,"stack":[[{"start":{"row":32,"column":0},"end":{"row":33,"column":0},"action":"insert","lines":["",""],"id":497}],[{"start":{"row":33,"column":0},"end":{"row":64,"column":1},"action":"insert","lines":["/* global $ */","","function calcSub(){","    ","    var argSubTotal;","    ","    if(document.getElementById('salesforce').checked) {","      argSubTotal = 100;","    }","    else {","      argSubTotal = 300;","    }","    ","    display(argSubTotal);","}","","function display(parm1){","  ","  document.getElementById(\"subtotal\").value = parm1;","  document.getElementById(\"total\").value = parm1;","        ","  enablebtnProceed();","}","","","function enablebtnProceed(){","    $('#btnProceed').prop('disabled', false);","}","","function disablebtnProceed() {","    $('#btnProceed').prop('disabled', true);","}"],"id":498}],[{"start":{"row":0,"column":0},"end":{"row":64,"column":1},"action":"remove","lines":["/* global $ */","","function calcSub(){","    ","    var argSubTotal;","    ","    if(document.getElementById('salesforce').checked) {","        argSubTotal = 100;","    }","    else {","        argSubTotal = 300;","    }","    ","    display(argSubTotal); ","}","","function display(parm1){","    ","    document.getElementById(\"subtotal\").value = parm1;","    document.getElementById(\"total\").value = parm1; ","    ","    enablebtnProceed();","}","","","function enablebtnProceed(){","    $('#btnproceed').prop('disabled', false);","}","","function disablebtnProceed() {","    $('#btnproceed').prop('disabled', true);","}","","/* global $ */","","function calcSub(){","    ","    var argSubTotal;","    ","    if(document.getElementById('salesforce').checked) {","      argSubTotal = 100;","    }","    else {","      argSubTotal = 300;","    }","    ","    display(argSubTotal);","}","","function display(parm1){","  ","  document.getElementById(\"subtotal\").value = parm1;","  document.getElementById(\"total\").value = parm1;","        ","  enablebtnProceed();","}","","","function enablebtnProceed(){","    $('#btnProceed').prop('disabled', false);","}","","function disablebtnProceed() {","    $('#btnProceed').prop('disabled', true);","}"],"id":499}],[{"start":{"row":0,"column":0},"end":{"row":31,"column":1},"action":"insert","lines":["/* global $ */","","function calcSub(){","    ","    var argSubTotal;","    ","    if(document.getElementById('salesforce').checked) {","      argSubTotal = 100;","    }","    else {","      argSubTotal = 300;","    }","    ","    display(argSubTotal);","}","","function display(parm1){","  ","  document.getElementById(\"subtotal\").value = parm1;","  document.getElementById(\"total\").value = parm1;","        ","  enablebtnProceed();","}","","","function enablebtnProceed(){","    $('#btnProceed').prop('disabled', false);","}","","function disablebtnProceed() {","    $('#btnProceed').prop('disabled', true);","}"],"id":500}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":31,"column":1},"end":{"row":31,"column":1},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1519673328804,"hash":"37ca6ac062fff2d70c9d380a51d85aff587d35e6"}