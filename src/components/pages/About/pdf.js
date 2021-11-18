/* eslint-disable no-undef */


function pdf(x) {
   
            myTempWindow = window.open(x,'','left=10000,screenX=10000');
            myTempWindow.document.execCommand('SaveAs','null','cv1.pdf');
            myTempWindow.close();
        
}
