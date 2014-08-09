/**
 * Created by connect2me on 09.08.14.
 */
var redis = require("redis")
exports = module.exports = function(connect_options){

		var client = redis.createClient(connect_options.port,connect_options.host);
		return {
				'once' : function(key,callback){
						console.log(client);
						try{
								var application = currentApplication;
						}
						catch(err){
								console.error('fly-sync current Application not defined');
								var application = 'undefined';
						}

						key = application+'_'+key;
						client.setnx(key,new Date().getTime(),function(err,val){
								if(val === 1){
										callback(null);
								}else{
										callback(true);
								}
						});
				}
		}
}