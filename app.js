const arithmetic = document.getElementById('arithmetic')
const arFirstTerm = document.getElementById('arFirstTerm')
const arSecondTerm = document.getElementById('arSecondTerm')
const arNumberOfTerm = document.getElementById('arNumberOfTerm')
const geometric = document.getElementById('geometric')
const geFirstTerm = document.getElementById('geFirstTerm')
const geSecondTerm = document.getElementById('geSecondTerm')
const geNumberOfTerm = document.getElementById('geNumberOfTerm')
const submitBtn = document.getElementById('submitBtn')





selectId.addEventListener('change', () =>{
    const selectId = document.getElementById('selectId')
    const selectIdValue = selectId.options[selectId.selectedIndex].value;
    if(selectIdValue==='arithmetic'){
        document.getElementById('first__section').style.display='block'
        document.getElementById('second__section').style.display='none';
        submitBtn.style.display='block';
        submitBtn.style.margin='0 auto';
    }
    else if(selectIdValue==='geometric'){
        document.getElementById('second__section').style.display='block';
        document.getElementById('first__section').style.display='none';
        submitBtn.style.display='block';
        submitBtn.style.margin='0 auto';
    }
    else if (selectIdValue===''){
        document.getElementById('first__section').style.display='none';
        document.getElementById('second__section').style.display='none';
        submitBtn.style.display='none';
    }
});



submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const selectId = document.getElementById('selectId')
    const selectIdValue = selectId.options[selectId.selectedIndex].value;
    const arFirstTermValue = parseInt(arFirstTerm.value)
    const arSecondTermValue = parseInt(arSecondTerm.value)
    const arNumberOfTermValue = parseInt(arNumberOfTerm.value)
    const geFirstTermValue = parseInt(geFirstTerm.value)
    const geSecondTermValue = parseInt(geSecondTerm.value)
    const geNumberOfTermValue = parseInt(geNumberOfTerm.value)
    if(selectIdValue==='arithmetic'){      
            const d = arSecondTermValue - arFirstTermValue;
            const sumation = (arNumberOfTermValue/2)*(2*arFirstTermValue+(arNumberOfTermValue-1)*d)
            if(Number.isNaN(d) && Number.isNaN(sumation)){
                swal({
                title: "দয়া করে সঠিক সংখ্যা প্রবেশ করান",
                text: '',
                icon: "warning",
                button:"ঠিক আছে"
                });
            }
            else{
                 swal({
                title: "ধারাটির" + " " + arNumberOfTermValue + " " +"টি পদের সমষ্টি " + sumation,
                text: '',
                icon: "success",
                });
            }
                
            
        
    }
    else if (selectIdValue==='geometric'){
        const r = geSecondTermValue/geFirstTermValue;
        if(Number.isNaN(r)){
            swal({
                title: "দয়া করে সঠিক সংখ্যা প্রবেশ করান",
                text: '',
                icon: "warning",
                button:"ঠিক আছে"
                });
        }
        else{
         
            if(r>1){
                sumation = (geFirstTermValue*((r**geNumberOfTermValue)-1))/(r-1);
                swal({
                title: "ধারাটির" + " " + geNumberOfTermValue + " " +"টি পদের সমষ্টি " + sumation,
                text: '',
                icon: "success",
                });
            }
            else if (r<1){
                sumation = (geFirstTermValue*(1-(r**geNumberOfTermValue)))/(1-r);
                swal({
                title: "ধারাটির" + " " + geNumberOfTermValue + " " +"টি পদের সমষ্টি " + sumation,
                text: '',
                icon: "success",
                });
            }
           
        }
    }
    
    handleReset()
})


const handleReset = () => {
    arFirstTerm.value =''
    arSecondTerm.value =''
    arNumberOfTerm.value=''
    geFirstTerm.value =''
    geSecondTerm.value =''
    geNumberOfTerm.value=''
}