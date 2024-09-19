//Author: Jayven Cachola

var fs = require('fs');

test('test selectEvent',()=>{

    //Read the index.html file into a string
    var html = fs.readFileSync('public/index.html','utf8');
    expect(html).toEqual(expect.anything());

    //put the html into a testing DOM
    document.body.innerHTML = html;
    const $ = require('jquery');
    expect($('h1.testing-js').html()).toBe("Cheesecake Order Form");
})
