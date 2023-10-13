var staff = [
{
    name:'Chris Murphy',
    role:'Bjj Coach',
    image:"images/placeholderPerson.jpg",
    description:'Chris Murphy is a black belt in Brazilian jiu-jitsu. He coaches here at lifestyle training center.',
    button:{
    label:'BJJ',
    link:'#',
    },
},
{
    name:'Name of other coach',
    role:'What they do',
    image:"images/placeholderPerson.jpg",
    description:'This is a placeholder card for another coach',
    button:{
    label:'Button',
    link:'#',
    },
},
{
    name:'Name of other coach',
    role:'What they do',
    image:"images/placeholderPerson.jpg",
    description:'This is a placeholder card for another coach',
    button:{
    label:'Button',
    link:'#',
    },
},
{
    name:'Name of other coach',
    role:'What they do',
    image:"images/placeholderPerson.jpg",
    description:'This is a placeholder card for another coach',
    button:{
    label:'Button',
    link:'#',
    },
},
{
    name:'Name of other coach',
    role:'What they do',
    image:"images/placeholderPerson.jpg",
    description:'This is a placeholder card for another coach',
    button:{
    label:'Button',
    link:'#',
    },
},
{
    name:'Name of other coach',
    role:'What they do',
    image:"images/placeholderPerson.jpg",
    description:'This is a placeholder card for another coach',
    button:{
    label:'Button',
    link:'#',
    },
},
];

for(var i = 0; i < staff.length; i++){
var toAdd = '';
toAdd += '<div class="card" style="width: 18rem;">\n';
toAdd += '<img src="'+staff[i].image+'" class="card-img-top" alt="Staff member">\n';
toAdd += '<div class="card-body">\n';
toAdd +=   '<h5 class="card-title">'+staff[i].name+'</h5>\n';
toAdd +=   '<p class="card-text"><strong>'+staff[i].role+'</strong></p>\n';
toAdd +=   '<p class="card-text">'+staff[i].description+'</p>\n';
if(staff[i].button){
toAdd +=   '<a href="'+staff[i].button.link+'" class="btn btn-primary">'+staff[i].button.label+'</a>\n';
}
toAdd +=  '</div>\n';
toAdd +=  '</div>\n';
document.getElementById('staffCards').innerHTML += toAdd;
}