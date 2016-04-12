/**
 * Created by Aleph on 4/6/16.
 */
"use strict";

var app = angular.module('corecolabApp', []);

app.controller('ServicesController', function() {
    var self = this;
    self.title = "WHAT WE DO";
    self.services = [
        {
            img: '',
            name: 'VARIAS FITA',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto dolor doloremque eveniet inventore magni nemo nihil officiis.'
        },
        {
            img: '',
            name: 'VARIAS FITA',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto dolor doloremque eveniet inventore magni nemo nihil officiis.'
        },
        {
            img: '',
            name: 'VARIAS FITA',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto dolor doloremque eveniet inventore magni nemo nihil officiis.'
        }
    ]
});

app.controller('TeamController', function() {
    var self = this;
    self.title = 'OUR TEAM';
    self.members = [
        {
            img: '',
            name: 'Aleph Retamal',
            title: 'Gangsta Mad'
        },
        {
            img: '',
            name: 'Lulu',
            title: 'Gangsta Mad'
        },
        {
            img: '',
            name: 'Kaique Damato',
            title: 'Gangsta Mad'
        },
        {
            img: '',
            name: 'Rafa',
            title: 'Gangsta Mad'
        },
        {
            img: '',
            name: 'Emmanuel',
            title: 'Gangsta Mad'
        },
        {
            img: '',
            name: 'Soldi',
            title: 'Gangsta Mad'
        },
        {
            img: '',
            name: 'Bayma',
            title: 'Gangsta Mad'
        }
    ];
});

app.controller('PortfolioController', function() {
    var self = this;
    self.title = 'OUR JOBS';
    self.works = [
        {
            img: 'iconwhiteboard.png',
            name: 'WhiteBoard'
        },
        {
            img: 'iconninenine.png',
            name: 'Almost100'
        },
        {
            img: 'iconmaestro.png',
            name: 'Maestro'
        },
        {
            img: 'iconninenine.png',
            name: 'Almost100'
        },
        {
            img: 'iconmaestro.png',
            name: 'Maestro'
        },
        {
            img: 'iconwhiteboard.png',
            name: 'Almost100'
        },
        {
            img: 'iconninenine.png',
            name: 'Almost100'
        },
        {
            img: 'iconwhiteboard.png',
            name: 'Almost100'
        }
    ];
});