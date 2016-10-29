import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

import moment from 'moment/min/moment-with-locales.min';
moment.locale('es');

@Injectable()
export class Data {
  public events = [{
    "id": 1,
    "title": "Concierto de Temporada N° 8 Título Largo",
    "category": "music",
    "description": "Una pequeña descripción.",
    "when":{
      "start": "2016-10-29T20:00:00.000Z",
      "finish": "2016-10-29T22:00:00.000Z"
    },
    "where": "Dirección o lugar del evento",
    "cost": [{
      "text": "Adulto",
      "value": 4000
    },{
      "text": "Estudiante",
      "value": 2000
    }]
  },{
    "id": 2,
    "title": "La Remolienda",
    "category": "theatre",
    "description": "Un evento sabrozongo",
    "when":{
      "start": "2016-11-17T20:00:00.000Z"
    },
    "where": "Dirección o lugar del evento"
  },{
    "id": 3,
    "title": "Evento 3",
    "category": "festival",
    "description": "Uff... ¡pero qué evento!",
    "when":{
      "start": "2016-11-17T20:00:00.000Z"
    },
    "where": "Dirección o lugar del evento"
  }];

  public moreEvents = [{"id":79,"title":"Quas et dolorum.","description":"Eveniet tenetur amet alias esse illum earum ut numquam fugiat. Dolor nemo quia ut quis quasi tenetur iure. Est excepturi ipsa. Ipsam asperiores eum enim. Tempore dolores repudiandae nihil accusamus fugit nihil id. Minus itaque eveniet eum recusandae ullam.","category":"fair","when":{"start":"2016-11-29T12:22:26.000Z"},"where":"0660 Lucia Subida","cost":[{"text":"Adultos","value":98000}]},{"id":74,"title":"Aliquam voluptas quis.","description":"Magni ullam alias omnis dolor sed aliquid impedit. Nesciunt assumenda perferendis qui repudiandae consequatur alias minus. Est sequi reprehenderit possimus. Est esse similique voluptatum omnis facere provident et asperiores porro. Blanditiis quod ad aliquid et.","category":"movie","when":{"start":"2016-11-17T07:46:03.000Z","finish":"Sat Nov 19 2016 23:49:08 GMT-0300 (CLST)"},"where":"869 Lemus Conjunto"},{"id":24,"title":"Esse culpa amet aliquam assumenda.","description":"Sit molestiae omnis voluptatem doloremque eum officia tempora. Voluptatem laborum unde praesentium rerum est delectus totam et et. Tenetur est quis qui qui fugiat libero. Fuga facilis odit quibusdam. Aspernatur sint id nisi asperiores repellendus. Assumenda neque rerum quis dolores velit qui fuga magnam.","category":"festival","when":{"start":"2016-11-15T11:41:47.000Z","finish":"Tue Nov 22 2016 15:27:25 GMT-0300 (CLST)"},"where":"436 Palomino Barrio","cost":[{"text":"Público General","value":43500}]},{"id":62,"title":"Et impedit voluptas quasi consectetur ex asperiores ea.","description":"Laborum at saepe laboriosam excepturi ut qui. Ex eveniet et quos expedita. Optio eum autem corporis. Quia perferendis qui ut.","category":"movie","when":{"start":"2016-11-29T23:29:20.000Z","finish":"Sun Nov 27 2016 10:04:13 GMT-0300 (CLST)"},"where":"473 Raúl Parcela","cost":[{"text":"Adultos","value":15000},{"text":"Estudiante","value":66500},{"text":"Niños","value":24500}]},{"id":68,"title":"Quia id iure odit ratione incidunt quos eos autem.","description":"Ut perspiciatis nesciunt magni numquam ut quia. Ea et vitae quia ullam dolor et vel. Velit ab repudiandae non et.","category":"movie","when":{"start":"2016-11-21T15:13:40.000Z"},"where":"83700 Pagan Avenida","cost":[{"text":"Adultos","value":76500},{"text":"Adultos","value":89000}]},{"id":51,"title":"Recusandae quia qui laborum eaque ut illo in et.","description":"Debitis aut molestias in aperiam sed quasi non facere. Harum maiores dolor. Omnis repudiandae aliquam.","category":"exposition","when":{"start":"2016-11-22T00:30:03.000Z","finish":"Wed Nov 16 2016 05:23:16 GMT-0300 (CLST)"},"where":"6403 Gaitán Sección"},{"id":48,"title":"Similique repudiandae omnis possimus quo vel et quia non.","description":"Alias iste ipsa voluptas tenetur et. Dolor neque dolor quo. Hic est et in. Ipsam dolorem et quae sint praesentium sed cum dicta iusto. Perspiciatis labore fugiat earum sint fuga deleniti. Doloremque natus veritatis qui suscipit ipsam aut et alias alias.","category":"festival","when":{"start":"2016-11-02T00:55:15.000Z","finish":"Fri Nov 11 2016 15:02:06 GMT-0300 (CLST)"},"where":"60769 Vergara Edificio"},{"id":18,"title":"Tempore velit est animi necessitatibus consectetur.","description":"At numquam et expedita. Eos optio accusamus. Nulla doloribus placeat aut voluptatem vel exercitationem. Et nobis totam in repudiandae.","category":"theatre","when":{"start":"2016-10-31T13:05:53.000Z","finish":"Fri Oct 28 2016 23:07:05 GMT-0300 (CLST)"},"where":"90972 Benítez Arrabal","cost":[{"text":"Adultos","value":20000},{"text":"Estudiante","value":62500},{"text":"Adultos","value":34000},{"text":"Adulto Mayor","value":48000}]},{"id":62,"title":"Vel eum inventore maiores iste adipisci itaque atque reiciendis sed.","description":"Veritatis qui quia. Qui sint libero. Omnis quia quaerat libero. Eius minus ea explicabo omnis. Vitae laudantium aperiam et consequatur autem culpa quis et. Sunt aliquam autem rem iste consectetur vel in dolore ipsam.","category":"theatre","when":{"start":"2016-11-24T18:27:05.000Z","finish":"Sun Oct 30 2016 00:08:29 GMT-0300 (CLST)"},"where":"2775 Gálvez Calleja","cost":[{"text":"Adulto Mayor","value":42500},{"text":"Público General","value":90000},{"text":"Público General","value":65500}]},{"id":16,"title":"Nisi explicabo beatae nostrum ut veniam eos perferendis et.","description":"Est perspiciatis dolores qui laborum recusandae voluptatem. Enim odit non. Facilis voluptatum incidunt. Et facere officia quisquam suscipit aut a non quibusdam.","category":"exposition","when":{"start":"2016-10-29T03:45:03.000Z"},"where":"5083 María Elena Explanada","cost":[{"text":"Adulto Mayor","value":45500},{"text":"Adultos","value":14500},{"text":"Adultos","value":97000},{"text":"Adulto Mayor","value":14500}]},{"id":45,"title":"Et perferendis ipsa.","description":"Quos quasi et velit sed adipisci facere molestiae consectetur sed. Cumque ut aliquid. Quis culpa sint adipisci voluptates qui rem aut. Eos ut consectetur et consectetur commodi ut dolore laboriosam quasi. Aut aspernatur unde officiis corporis itaque.","category":"movie","when":{"start":"2016-11-18T18:16:56.000Z","finish":"Tue Nov 29 2016 20:44:56 GMT-0300 (CLST)"},"where":"168 Morales Prolongación","cost":[{"text":"Estudiante","value":68500},{"text":"Público General","value":14000},{"text":"Niños","value":11500},{"text":"Adultos","value":64500},{"text":"Estudiante","value":10500}]},{"id":56,"title":"Laboriosam nulla assumenda dolores fugit.","description":"Sapiente necessitatibus excepturi. Odio iste ipsum aut alias veniam optio. Eius ut ipsa ex atque omnis. Aut id quis sequi reiciendis. Velit ut repellat nobis et.","category":"movie","when":{"start":"2016-11-15T00:15:53.000Z"},"where":"314 Estela Avenida","cost":[{"text":"Público General","value":62500},{"text":"Adulto Mayor","value":3000},{"text":"Estudiante","value":88000},{"text":"Adulto Mayor","value":5500},{"text":"Niños","value":75500}]},{"id":23,"title":"Dolorum sapiente ratione ut et perferendis id.","description":"Unde impedit in officia id ipsum mollitia ratione commodi. Velit reprehenderit et id excepturi. Earum et vero repellat non voluptatem reprehenderit id. Voluptatum tempore sint mollitia ut. Delectus placeat maiores similique. Aut adipisci a sit voluptas voluptas omnis.","category":"outdoor","when":{"start":"2016-11-11T12:03:56.000Z"},"where":"28367 Rubén Paseo","cost":[{"text":"Niños","value":30000},{"text":"Niños","value":33000}]},{"id":31,"title":"Eaque aperiam quisquam deleniti eum nihil possimus.","description":"At a fugiat eum laudantium sint suscipit aut commodi. Minima recusandae voluptatem. Minus quasi maxime voluptates ut ipsum. Laudantium est aut et accusantium. Itaque aut a deserunt maiores. Nesciunt in sint voluptas dolorem rerum libero eum dolores.","category":"theatre","when":{"start":"2016-11-16T07:19:52.000Z","finish":"Sun Nov 20 2016 01:39:34 GMT-0300 (CLST)"},"where":"460 Barraza Quinta"},{"id":56,"title":"Vel quasi non et.","description":"Modi assumenda enim soluta ipsa illum dolorum vitae adipisci similique. Qui et neque ipsam laborum mollitia dolor. Dolor ea illum consequatur.","category":"outdoor","when":{"start":"2016-11-04T21:58:31.000Z","finish":"Sun Oct 30 2016 07:56:53 GMT-0300 (CLST)"},"where":"3069 Collado Grupo"},{"id":66,"title":"Excepturi voluptatem laudantium doloremque qui est.","description":"Dolor quia atque quia sed et dolorem pariatur. Commodi qui cupiditate ab iusto quis. Ea aspernatur repellat praesentium sint culpa aut asperiores illum. Non pariatur sed commodi repellat.","category":"exposition","when":{"start":"2016-11-25T08:45:29.000Z"},"where":"26163 Jorge Bloque"},{"id":18,"title":"Veniam rerum a aut voluptatibus dolorum omnis.","description":"Dolor voluptatem vel. Est omnis dolore. In aliquid commodi quis voluptatem. Commodi et modi ut. Eius nostrum nihil maiores asperiores dignissimos.","category":"outdoor","when":{"start":"2016-11-28T22:04:31.000Z"},"where":"88291 Villareal Rambla","cost":[{"text":"Niños","value":15000},{"text":"Adulto Mayor","value":30500},{"text":"Niños","value":60500},{"text":"Adultos","value":55500}]},{"id":68,"title":"Error rem ad voluptatem consequatur.","description":"Voluptas aut numquam laboriosam voluptas dignissimos voluptatem. Aperiam officiis temporibus est deleniti vero est ipsa incidunt et. Magni perspiciatis molestias placeat porro. Quibusdam distinctio sit mollitia non quisquam. Totam aperiam quaerat molestias vitae. Et praesentium quaerat ipsam mollitia qui sint.","category":"music","when":{"start":"2016-11-10T10:57:26.000Z"},"where":"88272 Chacón Carretera","cost":[{"text":"Estudiante","value":5000},{"text":"Adulto Mayor","value":49500},{"text":"Estudiante","value":13000},{"text":"Adultos","value":30000},{"text":"Estudiante","value":77500}]},{"id":80,"title":"Fuga voluptatibus voluptas aperiam dolore sint magni.","description":"Reprehenderit tempora sunt aut qui eos quo mollitia. Aut esse enim et. Recusandae earum est dolor vel consequatur. Consequatur cum magnam inventore numquam vero temporibus fugit dolores amet. Nihil velit repellat. Sed maxime dicta sunt repellat asperiores.","category":"theatre","when":{"start":"2016-11-27T19:49:36.000Z","finish":"Fri Nov 11 2016 05:30:33 GMT-0300 (CLST)"},"where":"44133 Regalado Prolongación","cost":[{"text":"Niños","value":65000},{"text":"Estudiante","value":49500}]},{"id":72,"title":"Nam odit tempora ea et qui.","description":"Quasi est rerum id. Nisi cum ab fuga sit accusantium porro officiis iste aut. Corrupti cumque cum nam enim ullam voluptatem consequatur.","category":"outdoor","when":{"start":"2016-11-18T07:19:55.000Z"},"where":"965 Soto Colonia"},{"id":5,"title":"Aut ex voluptas.","description":"Magnam delectus vero incidunt sint est. Qui ipsa rerum assumenda illo quam. Necessitatibus nam facere. Placeat in sed. Voluptates sed blanditiis voluptatibus dolores ab ipsam blanditiis ut earum.","category":"exposition","when":{"start":"2016-10-31T05:36:37.000Z","finish":"Sat Nov 19 2016 22:56:25 GMT-0300 (CLST)"},"where":"337 Baca Travesía","cost":[{"text":"Público General","value":85500},{"text":"Adultos","value":89000}]},{"id":16,"title":"Magnam adipisci harum molestiae quisquam non sit.","description":"Quaerat doloremque voluptate et quia consectetur debitis dolorem est. Vitae qui nobis. Ut ducimus maiores corporis ut ipsam mollitia id temporibus. Repellat aut beatae ut ratione asperiores facilis recusandae. Qui sit aut sunt nobis exercitationem nesciunt delectus sunt. Et natus quisquam.","category":"outdoor","when":{"start":"2016-11-21T19:05:25.000Z"},"where":"69858 Ariadna Mercado"},{"id":10,"title":"Tempora cupiditate dolores dicta qui molestias suscipit.","description":"Voluptas numquam dolor ut. Omnis dolor quia sit. Possimus voluptatem impedit pariatur aut hic odio quia voluptas. Et consequatur eligendi aut accusamus incidunt voluptas eos aliquid. Nam consectetur eaque exercitationem temporibus fuga.","category":"talk","when":{"start":"2016-11-06T08:32:39.000Z","finish":"Sun Nov 27 2016 19:25:27 GMT-0300 (CLST)"},"where":"477 Abreu Grupo","cost":[{"text":"Niños","value":44000},{"text":"Niños","value":79500},{"text":"Público General","value":70500},{"text":"Adulto Mayor","value":15500}]},{"id":41,"title":"Quos reprehenderit similique dicta cumque ipsam nobis rem.","description":"Sed commodi in aut reiciendis est est harum. Nihil necessitatibus vel numquam expedita eum aliquid incidunt vero. Doloremque minus voluptatibus. Reprehenderit ea unde aut sit sapiente. Nulla vero repellat beatae.","category":"talk","when":{"start":"2016-11-07T09:01:05.000Z"},"where":"973 Teresa Ramal","cost":[{"text":"Adultos","value":67000}]},{"id":56,"title":"Corrupti quo harum ea rerum laborum et provident et in.","description":"Aut voluptatem et dolorem sit doloribus rem nihil. Rerum voluptates distinctio et dolores est aut tenetur dicta temporibus. Ipsam accusamus aspernatur aliquid facilis voluptatibus libero omnis nulla ea. Rerum amet quas quibusdam magnam temporibus illum laboriosam et voluptatum. Id est quisquam voluptatem.","category":"movie","when":{"start":"2016-10-28T20:32:16.000Z","finish":"Mon Nov 14 2016 08:42:38 GMT-0300 (CLST)"},"where":"15369 Elisa Rincón"},{"id":77,"title":"Eos voluptatem voluptate veritatis magni nam velit deserunt enim quia.","description":"Omnis sapiente perferendis commodi illum omnis. Nam ex inventore qui eligendi. Eum saepe eos beatae facere.","category":"festival","when":{"start":"2016-11-02T18:30:22.000Z","finish":"Thu Nov 03 2016 02:11:07 GMT-0300 (CLST)"},"where":"9272 Valdés Conjunto","cost":[{"text":"Adulto Mayor","value":65000},{"text":"Adultos","value":71000},{"text":"Estudiante","value":42000},{"text":"Público General","value":62500},{"text":"Adulto Mayor","value":43500}]},{"id":91,"title":"Id quod qui mollitia eius.","description":"Nesciunt ipsa numquam. Voluptates quas dicta quibusdam aut adipisci officiis. Officiis rem sit maxime magnam inventore perferendis modi occaecati molestias. Quis et neque eius.","category":"music","when":{"start":"2016-11-27T10:19:18.000Z"},"where":"65324 Bernardo Puente"},{"id":1,"title":"Enim numquam minus rem.","description":"Saepe hic perspiciatis est temporibus itaque qui et. Et perspiciatis dolorem dicta nihil sunt quaerat quisquam vel accusantium. Eveniet natus qui non impedit unde. Et et cum. Aut et id et qui.","category":"fair","when":{"start":"2016-10-31T20:27:38.000Z"},"where":"70650 Rodríguez Ramal","cost":[{"text":"Adultos","value":3500},{"text":"Niños","value":59500}]},{"id":76,"title":"Sunt dolor nihil odio adipisci eveniet.","description":"Debitis laborum aut nesciunt modi consequatur error aliquam vel. Minus dolorum voluptas quae eligendi qui aut ut error ut. Neque consequuntur nihil et inventore error qui error et delectus.","category":"theatre","when":{"start":"2016-11-10T10:46:23.000Z","finish":"Fri Nov 04 2016 13:48:12 GMT-0300 (CLST)"},"where":"34935 Arredondo Monte","cost":[{"text":"Adultos","value":30500},{"text":"Adulto Mayor","value":20000},{"text":"Estudiante","value":20500}]},{"id":39,"title":"Perspiciatis sunt quos quas facilis.","description":"Deserunt dolorum consectetur quis tenetur voluptatem quam temporibus rerum earum. Ex necessitatibus tempore et consectetur. Explicabo reiciendis voluptas fugiat suscipit. Ratione voluptate molestias dolore id consequatur corporis est. Ratione optio minus magni occaecati natus aperiam eum. A consequuntur alias.","category":"movie","when":{"start":"2016-11-12T21:59:47.000Z"},"where":"83161 Cristina Sector"},{"id":28,"title":"Adipisci quia qui recusandae tenetur cumque culpa quibusdam debitis.","description":"Asperiores itaque corporis. Dolorem modi saepe ex similique qui aperiam. Et aut tenetur sed quaerat dignissimos. Et voluptatem laboriosam fugiat tempora corporis ab. Dolores qui aut rem itaque voluptas dignissimos. Error magnam ut nesciunt.","category":"outdoor","when":{"start":"2016-11-20T08:06:14.000Z","finish":"Mon Nov 14 2016 01:09:15 GMT-0300 (CLST)"},"where":"50210 Marcela Cuesta"},{"id":75,"title":"Veritatis deserunt adipisci est temporibus dolores cum mollitia.","description":"Recusandae incidunt alias. Repudiandae voluptas praesentium porro cupiditate harum est quia quam. Facere qui earum neque ut laudantium ut doloremque similique. Voluptatem a unde omnis numquam enim repudiandae quos explicabo ut. Rerum et et voluptatem nostrum repellat eum nulla consequatur eaque.","category":"exposition","when":{"start":"2016-11-13T23:25:22.000Z"},"where":"27004 Martín Aldea"},{"id":67,"title":"Aliquid cupiditate quis fuga qui facilis qui et.","description":"Ratione eos atque animi earum exercitationem unde sed et velit. Asperiores dolorum ex reiciendis veniam in ea vitae. Tempore est maiores eligendi.","category":"music","when":{"start":"2016-11-29T11:49:49.000Z"},"where":"937 Palomo Rua","cost":[{"text":"Público General","value":67000},{"text":"Estudiante","value":90500}]},{"id":90,"title":"Autem molestiae error porro.","description":"Corporis quos ea. Aut et nesciunt placeat id voluptatem unde voluptatum iusto voluptatem. Sed placeat sunt sint ut quo ullam nobis ea. Dignissimos ipsam rerum et. Veniam enim illo.","category":"music","when":{"start":"2016-11-16T16:37:22.000Z"},"where":"57903 Espinoza Monte","cost":[{"text":"Adulto Mayor","value":22000},{"text":"Niños","value":81500}]},{"id":80,"title":"Aperiam reprehenderit unde.","description":"Sunt molestiae omnis. Praesentium odio possimus nisi cumque temporibus tempora. Officia est veritatis soluta porro possimus dicta cum qui eum. Ea repellendus maxime illo placeat maiores. Nemo neque ratione.","category":"festival","when":{"start":"2016-11-20T03:16:49.000Z","finish":"Mon Nov 28 2016 21:56:55 GMT-0300 (CLST)"},"where":"40490 Batista Jardines","cost":[{"text":"Adulto Mayor","value":20000},{"text":"Adultos","value":500},{"text":"Estudiante","value":16500},{"text":"Público General","value":10500},{"text":"Niños","value":94500}]},{"id":100,"title":"Non esse et enim expedita.","description":"Nam molestiae omnis magni. Sunt alias occaecati ea magnam aspernatur. Labore excepturi velit vero quae.","category":"talk","when":{"start":"2016-11-18T09:49:00.000Z","finish":"Fri Nov 11 2016 04:37:57 GMT-0300 (CLST)"},"where":"39986 Quintero Puerta"},{"id":33,"title":"Quod vitae rem tempora in vel.","description":"Et asperiores et accusantium autem accusantium eaque. Ut iusto praesentium nihil rem rerum. Perspiciatis et culpa.","category":"movie","when":{"start":"2016-11-10T14:42:52.000Z","finish":"Sat Nov 12 2016 10:26:56 GMT-0300 (CLST)"},"where":"812 Matías Sección","cost":[{"text":"Público General","value":8500},{"text":"Niños","value":21500}]},{"id":3,"title":"Quae iure accusantium harum minima beatae in et.","description":"Et vero vel ea non omnis. Dolor voluptatem qui eveniet quisquam. Ipsum dolores nulla debitis veritatis molestiae non magni qui.","category":"movie","when":{"start":"2016-11-15T23:23:25.000Z"},"where":"616 Ramón Parcela"},{"id":35,"title":"Sint et ut corporis officia quia debitis quod.","description":"Doloribus dolores dicta ipsam aspernatur. Quis quam ipsum officia consequatur magnam ipsam ipsam possimus. Repellat debitis omnis voluptatum aut labore a sint ipsum magni. Eligendi alias reiciendis ipsa eum recusandae sunt autem minus.","category":"outdoor","when":{"start":"2016-10-29T04:09:55.000Z"},"where":"379 Valentín Colegio"},{"id":68,"title":"Dolorem soluta quia aspernatur beatae enim in.","description":"Sint similique commodi. Quia recusandae molestiae illum maiores aliquam nihil cum placeat. Itaque et eius non voluptatibus est similique deserunt. Ducimus minus in blanditiis cum alias fugit maxime rerum debitis. Voluptatum aut omnis ratione nihil.","category":"fair","when":{"start":"2016-10-30T07:24:08.000Z"},"where":"27104 Regalado Cuesta"},{"id":83,"title":"Quia quisquam sed labore quia.","description":"Eaque voluptates sed laudantium blanditiis quia magni. Laborum eum ea. Odio voluptate ipsa quo iusto nisi enim ut quasi commodi. Dolorum voluptates architecto nesciunt et quo quisquam repudiandae maxime quia.","category":"movie","when":{"start":"2016-11-10T09:57:35.000Z","finish":"Sun Nov 06 2016 14:31:36 GMT-0300 (CLST)"},"where":"4962 Sarabia Barrio","cost":[{"text":"Adulto Mayor","value":12500},{"text":"Estudiante","value":27500},{"text":"Adulto Mayor","value":62500},{"text":"Adulto Mayor","value":51500},{"text":"Adulto Mayor","value":46500}]},{"id":31,"title":"Velit dolores omnis et quia architecto cumque qui.","description":"Perferendis enim ut earum voluptatem. Ab placeat sit in. Est aspernatur ut animi quia odio dolorem et voluptatem ut. Fugiat debitis quia commodi recusandae sit pariatur exercitationem.","category":"movie","when":{"start":"2016-11-20T07:38:32.000Z"},"where":"74757 Tejeda Sector"},{"id":74,"title":"Tenetur sit doloribus tempore tenetur illo enim.","description":"Quia et dolore sequi qui qui. Ipsa facere enim aut iure quasi error velit sed repellat. Reiciendis magnam facilis repellendus aut ratione officiis. Ex recusandae est.","category":"outdoor","when":{"start":"2016-11-20T14:42:03.000Z","finish":"Thu Nov 03 2016 12:47:48 GMT-0300 (CLST)"},"where":"062 Beatriz Calleja","cost":[{"text":"Público General","value":6000},{"text":"Estudiante","value":99500},{"text":"Niños","value":85000},{"text":"Público General","value":17500},{"text":"Adultos","value":62000}]},{"id":66,"title":"Labore omnis doloremque reprehenderit impedit.","description":"Perferendis rerum rerum atque voluptate et saepe sunt. Ea ipsa dolores facilis dolore in et aut omnis aspernatur. Est quia assumenda numquam animi quibusdam. Quaerat sed omnis et.","category":"movie","when":{"start":"2016-11-28T16:01:06.000Z","finish":"Sat Nov 26 2016 13:02:41 GMT-0300 (CLST)"},"where":"171 Lugo Municipio"},{"id":54,"title":"Vero odit facere.","description":"Et ducimus sequi enim eum molestias iure. Laudantium et fugit consectetur illum occaecati molestias. Repellat sint nam soluta.","category":"movie","when":{"start":"2016-11-02T04:06:33.000Z","finish":"Mon Nov 07 2016 20:56:29 GMT-0300 (CLST)"},"where":"727 Domínguez Chalet","cost":[{"text":"Adulto Mayor","value":22000}]},{"id":97,"title":"Ratione maxime recusandae quas et.","description":"Dolores iusto rerum vitae quam atque hic voluptatum facere. Quod sed nulla sed quia dignissimos aut. Porro eveniet corrupti nam esse occaecati earum quisquam deleniti. Temporibus tenetur ea tempore non sint aspernatur et iusto similique.","category":"talk","when":{"start":"2016-11-10T13:19:33.000Z","finish":"Mon Nov 07 2016 19:14:28 GMT-0300 (CLST)"},"where":"19206 Ramón Caserio","cost":[{"text":"Niños","value":44500},{"text":"Adultos","value":35500}]},{"id":5,"title":"Est id odit corporis facere assumenda.","description":"Nulla eum sunt. Veritatis nihil in sapiente consequatur et. Ducimus reiciendis quis quasi excepturi ipsum consectetur impedit quasi. Molestiae quia eum unde beatae. Aut minus eos velit maxime voluptas qui amet. Maxime asperiores consectetur vel voluptatem enim.","category":"theatre","when":{"start":"2016-11-28T05:14:04.000Z","finish":"Mon Nov 28 2016 00:15:49 GMT-0300 (CLST)"},"where":"318 Baca Municipio","cost":[{"text":"Público General","value":53500},{"text":"Adultos","value":4000},{"text":"Niños","value":75000},{"text":"Niños","value":6000}]},{"id":16,"title":"Quia laborum repellat.","description":"Placeat minima aut rem repellat possimus. Enim recusandae inventore incidunt. Animi nesciunt exercitationem. Veniam animi id omnis fugiat. Est quis adipisci dolore recusandae minima. Debitis sit voluptas et dicta est quidem rerum qui quia.","category":"talk","when":{"start":"2016-11-16T04:16:23.000Z","finish":"Sat Nov 12 2016 17:47:10 GMT-0300 (CLST)"},"where":"6637 Lola Plaza","cost":[{"text":"Adulto Mayor","value":5500}]},{"id":74,"title":"Soluta odio eaque inventore officiis non molestiae rem aut.","description":"Dolore nulla velit sit saepe sunt ad autem nulla ex. Deleniti et quas adipisci. Sint autem veritatis ex quia facilis quidem deleniti labore suscipit. Harum voluptatem reprehenderit id saepe hic alias qui. Sint exercitationem vel quia enim unde sit harum praesentium.","category":"exposition","when":{"start":"2016-10-30T02:50:12.000Z"},"where":"478 Escobar Calleja","cost":[{"text":"Adultos","value":69500},{"text":"Estudiante","value":75000},{"text":"Público General","value":50000},{"text":"Niños","value":66000},{"text":"Adulto Mayor","value":36000}]},{"id":44,"title":"Non itaque et quasi qui et qui rerum.","description":"Consequatur distinctio ad enim doloribus et. Animi aut quis dicta hic eveniet eos est et necessitatibus. Quisquam molestiae occaecati maiores non cum eum. Rem consequuntur non eius. Culpa nihil et vel non accusamus. Id rerum voluptatem necessitatibus commodi facere iusto et dolores quis.","category":"festival","when":{"start":"2016-11-11T23:15:11.000Z","finish":"Mon Nov 28 2016 02:33:21 GMT-0300 (CLST)"},"where":"687 Arce Plaza","cost":[{"text":"Adultos","value":7000},{"text":"Estudiante","value":88000},{"text":"Niños","value":39000},{"text":"Adulto Mayor","value":40000}]}];

  constructor(public storage: Storage) {
    this.events = this.events.concat(this.moreEvents);
    this.events = this.events.sort(function(a,b){
      return moment(a.when.start).diff(b.when.start);
    });
  }

  getData(){
    //return this.storage.get('todos');
    return this.events;
  }

  save(data){
    //Do something with Data
    console.log('Data Provider Save.');
  }
}
