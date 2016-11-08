angular.module('appVendas').controller('homeCtrl', function($scope) {

  $scope.title = "<strong class='italic'>App Vendas !</strong>";

  $scope.slideImages = [
    {src: 'img/slide/img1.jpg'},
    {src: 'img/slide/img2.jpg'}
  ];

  $scope.appMenu = [
    {id: "venda",  icon: "img/icons/venda.png", label: "Vendas"}
    // {id: "contato",   icon: "img/icons/contato.png",       label: "Contato"      },
    // {id: "cac",       icon: "img/icons/cac.png",           label: "CAC"     }
    // {id: "workflow",  icon: "img/icons/workflow.png",      label: "Workflow"     },
    // {id: "gestao",    icon: "img/icons/gestao.png",        label: "Gestão"       }
  ];


});