const objectToCsv = function(data){

            const csvRows = [];
            const headers = Object.keys(data[0]);
            csvRows.push(headers.join(','));
            // console.log(headers);
        
            for (const row of data){
                const values =headers.map(header =>{
                    const escaped = (''+row[header]).replace(/"/g,'\\"');
                    return `"${escaped}"`;
                })    
                csvRows.push(values.join(',')); 
            }

            return csvRows.join('\n');
};
const download = function(data){
            const blob = new Blob([data] , {type:'text/csv'});
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.setAttribute('hidden' , '');
            a.setAttribute('href' , url);
            a.setAttribute('download' , 'App_User_Data.csv');
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
}
const getReport = async function(){
            const jsonUrl = 'https://ngo-platform.firebaseio.com/Customer.json' ;
            const res = await fetch(jsonUrl);
            console.log(res)
            const json = await res.json();
            var data = [];
            Object.keys(json).forEach((item)=>{
                data.push(json[item]);
            });
            
           console.log(data)
            const csvData = objectToCsv(data);
            download(csvData);
        // }
        
};
(function(){
            const button = document.getElementById('myButton');
            button.addEventListener('click' , getReport);
})();
 