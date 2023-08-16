

module.exports.addReview= function(req,res){
    res.render('location-review-form',{title:'review'});
};
/*GET homepage*/
module.exports.homelist = function(req,res){
    res.render('location-list',{
        title:'Loc8r -find a place to work with wifi',
        pageHeader:{
            strapline: 'Find places to work with wifi near you!'
    },
    sidebar : "Looking for wifi and a seat?Loc8r helps you find places to work when out and about and about.Perhaps with coffee,cake or a pint?Let Loc8r help you find the place youre looking for.",
    locations:[{
        name:'Starcups',
        adress: '125 High street,Reading,RG6 1PS',
        rating: 3,
        facilities:['Hot drinks','Food','premium wifi'],
        distance: '100m'
    },{
        name:'Cafe Hero',
        adress: '125 High street,Reading,RG6 1PS',
        rating: 4,
        facilities:['Hot drinks','Food','premium wifi'],
        distance: '200m'
    },{
        name:'Burger Queen',
        adress: '125 High street,Reading,RG6 1PS',
        rating: 2,
        facilities:['Hot drinks','Food','premium wifi'],
        distance: '250m'
    }]
});

        };
        

/*GET 'Location info'page*/
module.exports.locationInfo=function(req,res){
    res.render('location-info',{title: 'Location info'});
};
/*GET 'Add review'page*/
module.exports.addReview=function(req,res){
    res.render('location-review-form',{title: 'Add review'});
};
/*GET 'Location info1'page*/
module.exports.locationInfo=function(req,res){
    res.render('location-info',{title: 'Location info'});
};