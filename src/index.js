/**
 * Created by connect2me on 09.08.14.
 */
var redis = require("redis")
exports = module.exports = function(connect_options){

		try{
				var client = redis.createClient(connect_options.port,connect_options.host);
		}catch(e){
				throw new Error('fly-once redis connection wrong params');
		}

		return {
				'once' : function(key,callback){

						try{
								var application = currentApplication;
						}
						catch(err){
								console.error('fly-once current Application not defined');
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