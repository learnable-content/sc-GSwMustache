//########## Introduction to Mustache.js : Code Snippits

//--------------------------------------------------------------------------------

//########## Including mustache.js in your web page

    //The un-minified CDN-based Mustache.js resource

    <script src="http://cdnjs.cloudflare.com/ajax/libs/mustache.js/0.8.1/mustache.js"></script>

    //The minified CDN-based  Mustache.js resource

    <script src="http://cdnjs.cloudflare.com/ajax/libs/mustache.js/0.8.1/mustache.min.js"></script>

    //Using a locally saved copy of Mustache.js

    <script src="mustache.js"></script>

//--------------------------------------------------------------------------------
//########## Creating HTML Templates

    '<p>{{data}}</p>'

    '<p><b>{{name}}</b> {{title}}</p>'

//--------------------------------------------------------------------------------
//########## Rendering an HTML Template with data

    //ex 1

    Mustache.render(TEMPLATE,DATA);


    //ex 2

    var TEMPLATE = '<div class="dataItem"><b>{{name}}</b> {{title}}</div>';
    
    var DATA = {
        name: 'James Frost',
        title: 'Manager'
    };

    Mustache.render(TEMPLATE,DATA);


    //ex 3

    $('body').append( Mustache.render(TEMPLATE,DATA) );


//--------------------------------------------------------------------------------
//########## Rendering a List of Values in a Template

    var myData = [
            {
                "name": "Joe Smith",
                "phone": "(212) 555-1212",
                "accountNumber": "123456",
                "title": "East Coast Sales"
            },
            {
                "name": "Sue Frost",
                "phone": "(212) 555-3131",
                "accountNumber": "654321",
                "title": "West Coast Sales"
            },
            {
                "name": "Jim Murphy",
                "phone": "(212) 555-4545",
                "accountNumber": "987654",
                "title": "International Sales"
            }
        ];

    $.each(myData,function(index,item){

        var html = ''
                + '<div class="dataItem">'
                    + '<p><b>{{name}}:</b> {{title}}</p>'
                + '</div>';

        $('body').append(Mustache.render(html,item));
    });

//--------------------------------------------------------------------------------
//########## Expanding the Template

    $.each(myData,function(index,item){

        var html = ''
                + '<div class="dataItem">'
                    + '<p><b>Name:</b> {{name}}</p>'
                    + '<p><b>Title:</b> {{title}}</p>'
                    + '<p><b>Account Number:</b> {{accountNumber}}</p>'
                    + '<p><b>Phone:</b> {{phone}}</p>'
                + '</div>';

        $('body').append(Mustache.render(html,item));
    });
//--------------------------------------------------------------------------------
