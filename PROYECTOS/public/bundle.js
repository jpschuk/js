'use strict';

var data = {
  fotos: {
    america: [
      {
        id: 1,
        name: "America 1",
        description:
          "America 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/america/1.jpg",
      },
      {
        id: 2,
        name: "America 2",
        description:
          "America 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/america/2.jpg",
      },
      {
        id: 3,
        name: "America 3",
        description:
          "America 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/america/3.jpg",
      },
      {
        id: 4,
        name: "America 4",
        description:
          "America 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/america/4.jpg",
      },
      {
        id: 5,
        name: "America 5",
        description:
          "America 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/america/5.jpg",
      },
      {
        id: 6,
        name: "America 6",
        description:
          "America 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/america/6.jpg",
      },
      {
        id: 7,
        name: "America 7",
        description:
          "America 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/america/7.jpg",
      },
      {
        id: 8,
        name: "America 8",
        description:
          "America 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/america/8.jpg",
      },
      {
        id: 9,
        name: "America 9",
        description:
          "America 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/america/9.jpg",
      },
      {
        id: 10,
        name: "America 10",
        description:
          "America 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/america/10.jpg",
      },
    ],
    europa: [
      {
        id: 11,
        name: "Europa 1",
        description:
          "Europa 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/europa/1.jpg",
      },
      {
        id: 12,
        name: "Europa 2",
        description:
          "Europa 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/europa/2.jpg",
      },
      {
        id: 13,
        name: "Europa 3",
        description:
          "Europa 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/europa/3.jpg",
      },
      {
        id: 14,
        name: "Europa 4",
        description:
          "Europa 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/europa/4.jpg",
      },
      {
        id: 15,
        name: "Europa 5",
        description:
          "Europa 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/europa/5.jpg",
      },
      {
        id: 16,
        name: "Europa 6",
        description:
          "Europa 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/europa/6.jpg",
      },
      {
        id: 17,
        name: "Europa 7",
        description:
          "Europa 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/europa/7.jpg",
      },
      {
        id: 18,
        name: "Europa 8",
        description:
          "Europa 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/europa/8.jpg",
      },
      {
        id: 19,
        name: "Europa 9",
        description:
          "Europa 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/europa/9.jpg",
      },
      {
        id: 20,
        name: "Europa 10",
        description:
          "Europa 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/europa/10.jpg",
      },
    ],

    africa: [
      {
        id: 21,
        name: "África 1",
        description:
          "África 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/africa/1.jpg",
      },
      {
        id: 22,
        name: "África 2",
        description:
          "África 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/africa/2.jpg",
      },
      {
        id: 23,
        name: "África 3",
        description:
          "África 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/africa/3.jpg",
      },
      {
        id: 24,
        name: "África 4",
        description:
          "África 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/africa/4.jpg",
      },
      {
        id: 25,
        name: "África 5",
        description:
          "África 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/africa/5.jpg",
      },
      {
        id: 26,
        name: "África 6",
        description:
          "África 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/africa/6.jpg",
      },
      {
        id: 27,
        name: "África 7",
        description:
          "África 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/africa/7.jpg",
      },
      {
        id: 28,
        name: "África 8",
        description:
          "África 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/africa/8.jpg",
      },
      {
        id: 29,
        name: "África 9",
        description:
          "África 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/africa/9.jpg",
      },
      {
        id: 30,
        name: "África 10",
        description:
          "África 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/africa/10.jpg",
      },
    ],
    asia: [
      {
        id: 31,
        name: "Asia 1",
        description:
          "Asia 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/asia/1.jpg",
      },
      {
        id: 32,
        name: "Asia 2",
        description:
          "Asia 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/asia/2.jpg",
      },
      {
        id: 33,
        name: "Asia 3",
        description:
          "Asia 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/asia/3.jpg",
      },
      {
        id: 34,
        name: "Asia 4",
        description:
          "Asia 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/asia/4.jpg",
      },
      {
        id: 35,
        name: "Asia 5",
        description:
          "Asia 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/asia/5.jpg",
      },
      {
        id: 36,
        name: "Asia 6",
        description:
          "Asia 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/asia/6.jpg",
      },
      {
        id: 37,
        name: "Asia 7",
        description:
          "Asia 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/asia/7.jpg",
      },
      {
        id: 38,
        name: "Asia 8",
        description:
          "Asia 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/asia/8.jpg",
      },
      {
        id: 39,
        name: "Asia 9",
        description:
          "Asia 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/asia/9.jpg",
      },
      {
        id: 40,
        name: "Asia 10",
        description:
          "Asia 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/asia/10.jpg",
      },
    ],
    oceania: [
      {
        id: 41,
        name: "Oceania 1",
        description:
          "Oceania 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/oceania/1.jpg",
      },
      {
        id: 42,
        name: "Oceania 2",
        description:
          "Oceania 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/oceania/2.jpg",
      },
      {
        id: 43,
        name: "Oceania 3",
        description:
          "Oceania 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/oceania/3.jpg",
      },
      {
        id: 44,
        name: "Oceania 4",
        description:
          "Oceania 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/oceania/4.jpg",
      },
      {
        id: 45,
        name: "Oceania 5",
        description:
          "Oceania 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/oceania/5.jpg",
      },
      {
        id: 46,
        name: "Oceania 6",
        description:
          "Oceania 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/oceania/6.jpg",
      },
      {
        id: 47,
        name: "Oceania 7",
        description:
          "Oceania 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/oceania/7.jpg",
      },
      {
        id: 48,
        name: "Oceania 8",
        description:
          "Oceania 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/oceania/8.jpg",
      },
      {
        id: 49,
        name: "Oceania 9",
        description:
          "Oceania 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/oceania/9.jpg",
      },
      {
        id: 50,
        name: "Oceania 10",
        description:
          "Oceania 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/oceania/10.jpg",
      },
    ],
    antartida: [
      {
        id: 51,
        name: "Antártida 1",
        description:
          "Antártida 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/antartida/1.jpg",
      },
      {
        id: 52,
        name: "Antártida 2",
        description:
          "Antártida 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/antartida/2.jpg",
      },
      {
        id: 53,
        name: "Antártida 3",
        description:
          "Antártida 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/antartida/3.jpg",
      },
      {
        id: 54,
        name: "Antártida 4",
        description:
          "Antártida 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/antartida/4.jpg",
      },
      {
        id: 55,
        name: "Antártida 5",
        description:
          "Antártida 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/antartida/5.jpg",
      },
      {
        id: 56,
        name: "Antártida 6",
        description:
          "Antártida 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/antartida/6.jpg",
      },
      {
        id: 57,
        name: "Antártida 7",
        description:
          "Antártida 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/antartida/7.jpg",
      },
      {
        id: 58,
        name: "Antártida 8",
        description:
          "Antártida 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/antartida/8.jpg",
      },
      {
        id: 59,
        name: "Antártida 9",
        description:
          "Antártida 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.",
        src: "./img/antartida/9.jpg",
      },
    ],
  },
};

const { fotos } = data;

var categoryData = {
  categorias: [
    {
      id: "america",
      nombre: "America",
      numeroFotos: fotos["america"].length,
      imagenPortada: "./img/america.jpg",
    },
    {
      id: "europa",
      nombre: "Europa",
      numeroFotos: fotos["europa"].length,
      imagenPortada: "./img/europa.jpg",
    },
    {
      id: "africa",
      nombre: "África",
      numeroFotos: fotos["africa"].length,
      imagenPortada: "./img/africa.jpg",
    },
    {
      id: "asia",
      nombre: "Asia",
      numeroFotos: fotos["asia"].length,
      imagenPortada: "./img/asia.jpg",
    },
    {
      id: "oceania",
      nombre: "Oceania",
      numeroFotos: fotos["oceania"].length,
      imagenPortada: "./img/oceania.jpg",
    },
    {
      id: "antartida",
      nombre: "Antártida",
      numeroFotos: fotos["antartida"].length,
      imagenPortada: "./img/antartida.jpg",
    },
  ],
};

const { categorias } = categoryData;
const categoryContainer$1 = document.getElementById("categorias");

categorias.map((categoria) => {
  const newCategory = document.createElement("a");
  const plantilla = `<img
  class="categoria__img"
  src="${categoria.imagenPortada}"
  alt=""
/>
<div class="categoria__datos">
  <p class="categoria__nombre">${categoria.nombre}</p>
  <p class="categoria__numero-fotos">${categoria.numeroFotos} fotos</p>
</div>`;
  newCategory.innerHTML = plantilla;
  newCategory.classList.add("categoria");
  newCategory.href = "#";
  newCategory.dataset.categoria = categoria.id;
  categoryContainer$1.append(newCategory);
  console.log(newCategory);
});

const categoryContainer = document.getElementById("categorias");
const galery = document.getElementById("galeria");
categoryContainer.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.closest("a")) {
    galery.classList.add("galeria--active");
    document.body.style.overflow = "hidden";
  }
});
