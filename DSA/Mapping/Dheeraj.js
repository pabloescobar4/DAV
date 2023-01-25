let abc = "['Login to your MakeForms account','Goto Settings>Integrations>Webhook','Click on + Add a webhook', 'Paste the copied URL under Endpoint URL field','Select method name as Get next to url','Inside Custom header give name as Accept and Value as application/json','Click on Add', 'Select the required form','Choose Data Format as JSON','Click on Save' ]"
let ev = eval(abc)

    ev.map((e) => {
        console.log(e);
    })


// console.log(ev);