require.config({
	baseUrl:'/',
	paths:{
		jquery:'lib/jquery-1.12.4.min',
		// waterfall:'lib/jquery.waterfall',
		text:'lib/text',
    css:'lib/css.min',
		rem:'lib/setrem',
		Swiper:'lib/swiper-3.3.1.jquery.min',
		baiduTemplate:'lib/baiduTemplate',
		lazyload:'lib/jquery.lazyload.min',
    Router:'lib/router.min'

	}
})

require(['jquery','src/myroute.js','rem'],function($,r){

      location.href = '#/first'
			// console.log(document.innerWidth)

})
