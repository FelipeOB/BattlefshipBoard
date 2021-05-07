//criar divs que representaram os fields dos campos
const fieldDiv = document.querySelectorAll(".fieldcontainer")
for (let i = 0; i < 100; i++) {
        var div = document.createElement("div");
        div.setAttribute("class", "field");
        div.setAttribute("id", i);
        div.classList.add("field");
        fieldDiv[0].append(div);
}