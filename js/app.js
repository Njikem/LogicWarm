
let tickets_sold = 1000;
let venue_capacity = 3000;
let performer = 'David';
let is_sold_out = false;

if(is_sold_out ===true){
    print('All sold out');
    console.log('All sold out');
}else{
    print('Tickets still available');
    console.log('Tickets still available');
}

let tickets = tickets_sold/venue_capacity

if(tickets>=0.9){
    print('Almost sold out');
    console.log('Almost sold out');
}else if(tickets>=0.5){
    print('Tickets selling fast');
    console.log('Ticket selling fast');
}else{
    console.log('Ticket are on sale now');

}

if(tickets_sold>venue_capacity){
    print('system error');
    console.log('sytem error');
}else if(tickets_sold === venue_capacity && is_sold_out ===false){

}else if(performer ==="Alex Bymoen" && is_sold_out ===false){
    console.log('system error');

}else{
    console.log('All good');
}

let special_performer_1 = 'Geo';
let special_performer_2 = 'Alex Bymoen';
let special_performer_3 = 'Josh';
let special_performer_4 = 'Colins';
let special_performer_5 = 'Nancy';

if(special_performer_1==='Alex Bymoen'){
    console.log('lucky you!');
}else if(special_performer_2 ==='Alex Bymoen'){
    console.log('Lucky you!');

}else if(special_performer_3 ==='Shrek'){
    console.log('Lucky you!');
}else{
    console.log('sorry for that');
}