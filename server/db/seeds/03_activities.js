
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('activities').del()
    .then(function () {
      // Inserts seed entries
      return knex('activities').insert([
        {
          activity_name: "Skydiving",
          location: "8 Pankratz Way",
          date: "01/01/19",
          time: "4:36 PM",
          price: "81.08",
          type: "Outdoor",
          votes: 2,
          reservation: "Yes",
          notes: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
          image: "http://dummyimage.com/150x150.jpg/5fa2dd/ffffff",
          user_id: 1,
          trip_id: 1
        }, {
          activity_name: "Skating in Paris",
          location: "2041 Dawn Hill",
          date: "01/03/19",
          time: "1:00 PM",
          price: "26.22",
          type: "Outdoor",
          votes: 3,
          reservation: "No",
          notes: "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
          image: "http://dummyimage.com/150x150.png/cc0000/ffffff",
          user_id: 1,
          trip_id: 1
        }, {
          activity_name: "Quad Bike Trek",
          location: "05714 Toban Pass",
          date: "01/05/19",
          time: "5:25 PM",
          price: "55.52",
          type: "Food",
          votes: 93,
          reservation: "Yes",
          notes: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
          image: "http://dummyimage.com/150x150.png/5fa2dd/ffffff",
          user_id: 1,
          trip_id: 1
        }, {
          activity_name: "Bike Tour",
          location: "10384 Pleasure Lane",
          date: "01/05/19",
          time: "2:10 PM",
          price: "131.84",
          type: "Indoor",
          votes: 4,
          reservation: "Yes",
          notes: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
          image: "http://dummyimage.com/150x150.png/dddddd/000000",
          user_id: 1,
          trip_id: 1
        }, {
          activity_name: "El Celler de Can Roca",
          location: "0498 Menomonie Lane",
          date: "01/06/19",
          time: "7:50 AM",
          price: "57.37",
          type: "Outdoor",
          votes: 48,
          reservation: "Yes",
          notes: "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
          image: "http://dummyimage.com/150x150.bmp/dddddd/000000",
          user_id: 1,
          trip_id: 1
        }, {
          activity_name: "Quad Bike Trek",
          location: "333 Rutledge Center",
          date: "01/10/2018",
          time: "12:00 PM",
          price: "0.48",
          type: "Sightseeing",
          votes: 3,
          reservation: "No",
          notes: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
          image: "http://dummyimage.com/150x150.png/dddddd/000000",
          user_id: 1,
          trip_id: 1
        }, {
          activity_name: "Climbing",
          location: "8 Anzinger Junction",
          date: "02/15/2018",
          time: "1:53 PM",
          price: "159.34",
          type: "Food",
          votes: 1,
          reservation: "Yes",
          notes: "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
          image: "http://dummyimage.com/150x150.bmp/dddddd/000000",
          user_id: 2,
          trip_id: 2
        }, {
          activity_name: "Bootcamp Training",
          location: "90194 Northfield Circle",
          date: "02/16/19",
          time: "11:46 AM",
          price: "194.13",
          type: "Sightseeing",
          votes: 4,
          reservation: "No",
          notes: "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
          image: "http://dummyimage.com/150x150.bmp/5fa2dd/ffffff",
          user_id: 3,
          trip_id: 2
        }, {
          activity_name: "Adventure Park",
          location: "722 Walton Street",
          date: "02/19/19",
          time: "9:50 AM",
          price: "117.27",
          type: "Sightseeing",
          votes: 2,
          reservation: "No",
          notes: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
          image: "http://dummyimage.com/150x150.png/5fa2dd/ffffff",
          user_id: 4,
          trip_id: 2
        }, {
          activity_name: "Quad Bike Trek",
          location: "5 Dahle Hill",
          date: "02/20/19",
          time: "7:36 AM",
          price: "160.95",
          type: "Food",
          votes: 37,
          reservation: "No",
          notes: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
          image: "http://dummyimage.com/150x150.png/cc0000/ffffff",
          user_id: 2,
          trip_id: 2
        }, {
          activity_name: "Kart Racing",
          location: "4407 5th Alley",
          date: "04/23/19",
          time: "1:48 PM",
          price: "67.66",
          type: "Sightseeing",
          votes: 2,
          reservation: "No",
          notes: "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
          image: "http://dummyimage.com/150x150.bmp/dddddd/000000",
          user_id: 2,
          trip_id: 3
        }, {
          activity_name: "El Celler de Can Roca",
          location: "7 Towne Lane",
          date: "04/24/19",
          time: "11:00 AM",
          price: "40.23",
          type: "Outdoor",
          votes: 2,
          reservation: "No",
          notes: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
          image: "http://dummyimage.com/150x150.png/cc0000/ffffff",
          user_id: 2,
          trip_id: 3
        }, {
          activity_name: "Kart Racing",
          location: "4407 5th Alley",
          date: "04/23/19",
          time: "1:48 PM",
          price: "67.66",
          type: "Sightseeing",
          votes: 2,
          reservation: "No",
          notes: "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
          image: "http://dummyimage.com/150x150.bmp/dddddd/000000",
          user_id: 3,
          trip_id: 3
        }, {
          activity_name: "Indoor Free-fall Simulator",
          location: "99902 John Wall Road",
          date: "10/12/19",
          time: "9:00 AM",
          price: "182.11",
          type: "Sightseeing",
          votes: 3,
          reservation: "Yes",
          notes: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
          image: "http://dummyimage.com/150x150.jpg/cc0000/ffffff",
          user_id: 4,
          trip_id: 4
        }, {
          activity_name: "Swedish Fit",
          location: "153 Daystar Street",
          date: "10/15/19",
          time: "1:00 PM",
          price: "51.63",
          type: "Outdoor",
          votes: 2,
          reservation: "No",
          notes: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
          image: "http://dummyimage.com/150x150.jpg/dddddd/000000",
          user_id: 4,
          trip_id: 4
        }, {
          activity_name: "Skydiving",
          location: "08 Riverside Pass",
          date: "10/19/19",
          time: "3:24 PM",
          price: "84.40",
          type: "Sightseeing",
          votes: 4,
          reservation: "No",
          notes: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
          image: "http://dummyimage.com/150x150.bmp/ff4444/ffffff",
          user_id: 4,
          trip_id: 4
        }, {
          activity_name: "Osteria Francescana",
          location: "626 Hansons Street",
          date: "10/20/19",
          time: "8:57 AM",
          price: "116.19",
          type: "Sightseeing",
          votes: 2,
          reservation: "Yes",
          notes: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
          image: "http://dummyimage.com/150x150.bmp/dddddd/000000",
          user_id: 4,
          trip_id: 4
        }, {
          activity_name: "Skating in Paris",
          location: "11151 Parkside Parkway",
          date: "10/19/19",
          time: "2:18 PM",
          price: "111.45",
          type: "Outdoor",
          votes: 4,
          reservation: "No",
          notes: "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
          image: "http://dummyimage.com/150x150.jpg/cc0000/ffffff",
          user_id: 4,
          trip_id: 4
        }, {
          activity_name: "Bootcamp Training",
          location: "3 Prentice Parkway",
          date: "10/14/19",
          time: "8:39 AM",
          price: "124.90",
          type: "Outdoor",
          votes: 2,
          reservation: "No",
          notes: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
          image: "http://dummyimage.com/150x150.png/cc0000/ffffff",
          user_id: 1,
          trip_id: 4
        }, {
          activity_name: "Skydiving",
          location: "1524 Colorado Trail",
          date: "04/25/2018",
          time: "1:28 PM",
          price: "182.94",
          type: "Outdoor",
          votes: 4,
          reservation: "No",
          notes: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
          image: "http://dummyimage.com/150x150.png/cc0000/ffffff",
          user_id: 2,
          trip_id: 3
        }, {
          activity_name: "Paper Chase in Paris",
          location: "5531 Artisan Trail",
          date: "04/24/19",
          time: "4:54 PM",
          price: "172.18",
          type: "Indoor",
          votes: 2,
          reservation: "Yes",
          notes: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
          image: "http://dummyimage.com/150x150.jpg/5fa2dd/ffffff",
          user_id: 4,
          trip_id: 3
        }, {
          activity_name: "Fly Yoga",
          location: "70968 Hudson Center",
          date: "02/19/19",
          time: "3:19 PM",
          price: "59.33",
          type: "Food",
          votes: 4,
          reservation: "No",
          notes: "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
          image: "http://dummyimage.com/150x150.bmp/ff4444/ffffff",
          user_id: 3,
          trip_id: 2
        }, {
          activity_name: "Skydiving",
          location: "75 Graceland Terrace",
          date: "10/12/19",
          time: "8:35 PM",
          price: "53.34",
          type: "Sightseeing",
          votes: 5,
          reservation: "No",
          notes: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
          image: "http://dummyimage.com/150x150.bmp/cc0000/ffffff",
          user_id: 2,
          trip_id: 4
        }, {
          activity_name: "Indoor Free-fall Simulator",
          location: "29819 Marcy Plaza",
          date: "10/14/19",
          time: "10:05 PM",
          price: "72.77",
          type: "Sightseeing",
          votes: 1,
          reservation: "Yes",
          notes: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
          image: "http://dummyimage.com/150x150.png/cc0000/ffffff",
          user_id: 3,
          trip_id: 4
        }, {
          activity_name: "Skating in Paris",
          location: "7 Redwing Street",
          date: "10/14/19",
          time: "8:17 AM",
          price: "83.25",
          type: "Sight",
          votes: 4,
          reservation: "Yes",
          notes: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
          image: "http://dummyimage.com/150x150.jpg/5fa2dd/ffffff",
          user_id: 3,
          trip_id: 4
        }, {
          activity_name: "Water Skiing on the Seine",
          location: "22024 Lukken Court",
          date: "02/19/19",
          time: "3:12 PM",
          price: "52.75",
          type: "Outdoor",
          votes: 2,
          reservation: "Yes",
          notes: "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
          image: "http://dummyimage.com/150x150.png/dddddd/000000",
          user_id: 3,
          trip_id: 2
        }, {
          activity_name: "Paper Chase in Paris",
          location: "88926 Moulton Road",
          date: "10/19/19",
          time: "6:15 PM",
          price: "191.52",
          type: "Indoor",
          votes: 2,
          reservation: "No",
          notes: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
          image: "http://dummyimage.com/150x150.png/ff4444/ffffff",
          user_id: 2,
          trip_id: 4
        }, {
          activity_name: "Kart Racing",
          location: "44547 Gina Lane",
          date: "10/14/19",
          time: "12:33 PM",
          price: "123.01",
          type: "Outdoor",
          votes: 1,
          reservation: "No",
          notes: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
          image: "http://dummyimage.com/150x150.jpg/dddddd/000000",
          user_id: 4,
          trip_id: 4
        }, {
          activity_name: "Bike Tour",
          location: "2324 Glendale Park",
          date: "01/6/19",
          time: "6:45 PM",
          price: "60.33",
          type: "Outdoor",
          votes: 2,
          reservation: "Yes",
          notes: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
          image: "http://dummyimage.com/150x150.bmp/dddddd/000000",
          user_id: 4,
          trip_id: 1
        }, {
          activity_name: "Kart Racing",
          location: "123 Lindbergh Trail",
          date: "02/19/19",
          time: "8:35 PM",
          price: "93.27",
          type: "Sight",
          votes: 3,
          reservation: "No",
          notes: "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
          image: "http://dummyimage.com/150x150.png/cc0000/ffffff",
          user_id: 4,
          trip_id: 2
        },
        {
          activity_name: "Bike Tour",
          location: "2324 Glendale Park",
          date: "03/13/19",
          time: "6:45 PM",
          price: "60.33",
          type: "Outdoor",
          votes: 2,
          reservation: "Yes",
          notes: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
          image: "http://dummyimage.com/150x150.bmp/dddddd/000000",
          user_id: 4,
          trip_id: 5
        }, {
          activity_name: "Kart Racing",
          location: "123 Lindbergh Trail",
          date: "05/09/19",
          time: "8:35 PM",
          price: "93.27",
          type: "Sight",
          votes: 3,
          reservation: "No",
          notes: "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
          image: "http://dummyimage.com/150x150.png/cc0000/ffffff",
          user_id: 4,
          trip_id: 6
        }, {
          activity_name: "Bike Tour",
          location: "2324 Glendale Park",
          date: "08/03/19",
          time: "6:45 PM",
          price: "60.33",
          type: "Outdoor",
          votes: 2,
          reservation: "Yes",
          notes: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
          image: "http://dummyimage.com/150x150.bmp/dddddd/000000",
          user_id: 4,
          trip_id: 7
        }, {
          activity_name: "Kart Racing",
          location: "123 Lindbergh Trail",
          date: "07/25/19",
          time: "8:35 PM",
          price: "93.27",
          type: "Sight",
          votes: 3,
          reservation: "No",
          notes: "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
          image: "http://dummyimage.com/150x150.png/cc0000/ffffff",
          user_id: 4,
          trip_id: 8
        }, {
          activity_name: "Bike Tour",
          location: "2324 Glendale Park",
          date: "07/24/19",
          time: "6:45 PM",
          price: "60.33",
          type: "Outdoor",
          votes: 2,
          reservation: "Yes",
          notes: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
          image: "http://dummyimage.com/150x150.bmp/dddddd/000000",
          user_id: 4,
          trip_id: 8
        }, {
          activity_name: "Kart Racing",
          location: "123 Lindbergh Trail",
          date: "08/03/19",
          time: "8:35 PM",
          price: "93.27",
          type: "Sight",
          votes: 3,
          reservation: "No",
          notes: "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
          image: "http://dummyimage.com/150x150.png/cc0000/ffffff",
          user_id: 4,
          trip_id: 7
        }, {
          activity_name: "Bike Tour",
          location: "2324 Glendale Park",
          date: "05/07/19",
          time: "6:45 PM",
          price: "60.33",
          type: "Outdoor",
          votes: 2,
          reservation: "Yes",
          notes: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
          image: "http://dummyimage.com/150x150.bmp/dddddd/000000",
          user_id: 4,
          trip_id: 6
        }, {
          activity_name: "Kart Racing",
          location: "123 Lindbergh Trail",
          date: "03/19/19",
          time: "8:35 PM",
          price: "93.27",
          type: "Sight",
          votes: 3,
          reservation: "No",
          notes: "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
          image: "http://dummyimage.com/150x150.png/cc0000/ffffff",
          user_id: 4,
          trip_id: 5
        }


      ]);
    });
};
