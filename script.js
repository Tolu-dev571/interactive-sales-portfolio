let leads = [];

function addLead(){

    let leadName = document.getElementById("leadName").value;

    let companyName = document.getElementById("companyName").value;

    if (leadName.trim() === "" || companyName.trim() === "") {
        alert("please enter both Lead Name and company");
        return;
    }

    let lead = {
        name: leadName,
        company: companyName
    };
    
    leads.push(lead);

    localStorage.setItem("leads", JSON.stringify(leads));

    dislayLeads();

    document.getElementById("leadName").value = "";
    document.getElementById("companyName").value = "";
    document.getElementById("leadName").focus();
}

function dislayLeads(){

    let list = document.getElementById("leadList");
    list.innerHTML = "";

    for (let i = 0; i < leads.length; i++) {

        let li = document.createElement("li");
        li.textContent = leads[i].name + " - " + leads[i].company;
        list.appendChild(li);
    }

    document.getElementById("totalLeads").innerText = "Total Leads: " + leads.length;
}

document.getElementById("calculateBtn").addEventListener("click", function(){

    let numberOfLeads = parseFloat(document.getElementById("leads").value);

    let conversionRate = parseFloat(document.getElementById("conversionRate").value);

    let price = parseFloat(document.getElementById("price").value);

    let conversions = (numberOfLeads * conversionRate) / 100;

    let revenue = conversions * price;

document.getElementById("result").innerText =
"Expected Sales: " + conversions + " | Expected Revenue: $" + revenue;

});