(
	function(){
		'use strict';

		angular.module('appVendas').service('ajaxService', ajaxService);

		ajaxService.$inject = ['$http', '$httpParamSerializer'];

		function ajaxService($http, $httpParamSerializer) {

			this.requestServer = function (data, url) {

				var erros = {};

				if(navigator.connection.type.toUpperCase() === 'NONE') {

					erros.erro      =  true;
					erros.status    = '1';
					erros.descricao = 'Verifique sua conexão com a internet e tente novamente!';
					erros.titulo    = 'Sem de conexão!';

          return erros;
				} else {

					return $http({
						url     : url,
						method  : 'POST',
						data    : $httpParamSerializer(data),
						timeout : 60000,
						headers : { 'Content-Type': 'application/x-www-form-urlencoded'}
					});
				}

			};

			/*
			this.checkConnect = function() {
				return navigator.connection.type;
				TODO ABORT REQUEST SERVER (BROADCAST)
			};
			*/

		}
	}
)();
