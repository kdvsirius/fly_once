/**
 * Created by connect2me on 09.08.14.
 */
var redis = require("redis")
exports = module.exports = function(connect_options){

		var client = redis.createClient(connect_options.port,connect_options.host);
		return {
				'once' : function(key,callback){
						client.setnx(key,new Date().getTime(),function(err,val){
								console.log(arguments);
								if(val === 1){
										callback(null);
								}else{
										callback(true);
								}
						});
				}
		}
}