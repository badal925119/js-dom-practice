const mainContent = document.getElementById('main-content')
const section = document.createElement('section')
const h1 =document.createElement('h1')
h1.innerText='My best food list'
section.appendChild(h1);
const ul = document.createElement('ul')

const li1 = document.createElement('li')
li1.innerText='Birani'
ul.appendChild(li1)

const li2 = document.createElement('li')
li2.innerText='khichori'
ul.appendChild(li2)

const li3 = document.createElement('li')
li3.innerText='nan roti'
ul.appendChild(li3)

const li4 = document.createElement('li')
li4.innerText='khacchi'
ul.appendChild(li4)

section.appendChild(ul);

mainContent.appendChild(section)




const dreesList =document.createElement('section')
dreesList.innerHTML=`
<h1> my dress list</h1>
<ul>
<li> panjabi</li>
<li> pant</li>
<li> shirt</li>
<li> longi</li>

</ul>


`
mainContent.appendChild(dreesList);


const vistCountriy = document.createElement('section')
vistCountriy.innerHTML=`
<h1> my best tourist countriy</h1>
<ul>
<li>Japan</li>
<li>Pakistan</li>
<li>nepal</li>
<li>indonishia</li>

</ul>

`
mainContent.appendChild(vistCountriy);
