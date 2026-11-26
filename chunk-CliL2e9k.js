import{p as M}from"./main-RU54IPUI.js";import{Er as GV,Ia as p,Ir as Jc,Ji as ar,Ki as _u,Lr as Jn,Pr as I,Vr as Kg,W as Mze,Wr as LO,Ya as tk,_a as jO,ca as ge,ea as de,er as Ab,qr as Mk,ro as wg,tr as An}from"./chunk-CTJH0VS3.js";var W=(()=>{class n{router=p(An);openDoc(o){this.router.navigate([`/documentation`,o],{queryParams:{view:`doc`}})}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-media-query-doc`]],standalone:!1,decls:274,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-media-query-service`,1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-h5`,`docs-api-method-header`],[`id`,`method-updateTokens`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-property-description`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-name-cell`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`],[`id`,`interface-po-media-query-tokens`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-media-query-tokens-lg`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`{`,`'gridSystemLgMinWidth':`,`string;`,`'gridSystemLgMaxWidth':`,`string;`,`}`],[1,`language-typescript`],[`id`,`interface-po-media-query-tokens-md`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`{`,`'gridSystemMdMinWidth':`,`string;`,`'gridSystemMdMaxWidth':`,`string;`,`}`],[`id`,`interface-po-media-query-tokens-offset`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`{`,`'gridSystemOffsetMinWidth':`,`string;`,`'gridSystemOffsetMaxWidth':`,`string;`,`}`],[`id`,`interface-po-media-query-tokens-pull`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`{`,`'gridSystemPullMaxWidth':`,`string;`,`}`],[`id`,`interface-po-media-query-tokens-sm`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`{`,`'gridSystemSmMaxWidth':`,`string;`,`}`],[`id`,`interface-po-media-query-tokens-xl`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`{`,`'gridSystemXlMinWidth':`,`string;`,`}`]],template:function(a,d){a&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoMediaQueryModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo do serviço `),Jc(7,`code`),Mk(8,`po-media-query`),Kg(),Mk(9,`.`),Kg()(),Jc(10,`h3`,3),Mk(11,`Services`),Kg(),Jc(12,`h4`,4)(13,`code`,5),Mk(14,`PoMediaQueryService`),Kg()(),Jc(15,`div`,2)(16,`p`),Mk(17,`O PoMediaQueryService é um serviço que atualiza dinamicamente regras de media query dentro de folhas de estilo do DOM.`),Kg(),Jc(18,`p`),Mk(19,`Ele utiliza as regras de media queries que contêm tokens CSS (definidos como var(--nome-da-variavel)) e as replica, aplicando os novos valores fornecidos, facilitando a adaptação dos estilos com base nas condições das media queries.`),Kg(),Jc(20,`p`),Mk(21,`Exemplo de uso:`),Kg(),Jc(22,`p`),Mk(23,`Neste exemplo, estamos alterando os valores dos breakpoints para o grid system, que determina como o layout deve se comportar em diferentes larguras de tela. Utilizando o PoMediaQueryService, definimos os limites para tr\xEAs tamanhos de tela: pequeno (sm), m\xE9dio (md), e grande (lg), e aplicamos esses valores dinamicamente para garantir que o layout responda adequadamente \xE0s mudan\xE7as no tamanho da janela.
Isso permite que o grid system do PO UI seja personalizado para se ajustar \xE0s necessidades do seu projeto.`),Kg(),Jc(24,`pre`)(25,`code`),Mk(26,`import { PoMediaQueryService } from './po-media-query.service';

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})

export class AppComponent {

 // Definindo tokens personalizados para os breakpoints do grid system
 constructor(private poMediaQueryService: PoMediaQueryService) {}

 ngOnInit() {
   const tokens: PoMediaQueryTokens =  {
    sm: {
     gridSystemSmMaxWidth: '1024px' // Limite m\xE1ximo para telas pequenas (at\xE9 1024px)
     },
    md: {
     gridSystemMdMinWidth: '1025px', // Limite m\xEDnimo para telas m\xE9dias (a partir de 1025px)
     gridSystemMdMaxWidth: '1366px' // Limite m\xE1ximo para telas m\xE9dias (at\xE9 1366px)
    },
    lg: {
     gridSystemLgMinWidth: '1367px', // Limite m\xEDnimo para telas grandes (a partir de 1367px)
     gridSystemLgMaxWidth: '1465px' // Limite m\xE1ximo para telas grandes (at\xE9 1465px)
    },
    xl: {
     gridSystemXlMinWidth: '1466px' // Limite m\xEDnimo para telas extra grandes (a partir de 1466px)
    }
   };

   // Atualiza os tokens de media queries com os novos valores
   this.poMediaQueryService.updateTokens(tokens);
 }
}
`),Kg()()(),Jc(27,`h3`,6),Mk(28,`Métodos`),Kg(),Jc(29,`table`,7)(30,`tr`,8)(31,`th`,9)(32,`div`,10)(33,`h4`)(34,`span`,11),Mk(35,` updateTokens `),Kg()()()()(),Jc(36,`tr`,12)(37,`td`,12)(38,`p`),Mk(39,`M\xE9todo que replica as regras baseando-se pelos tokens de media query dentro das folhas de estilo do documento, permitindo a modifica\xE7\xE3o din\xE2mica
dos valores CSS correspondentes aos tokens fornecidos.`),Kg()()()(),Jc(40,`h5`)(41,`b`),Mk(42,`Parâmetros`),Kg()(),Jc(43,`table`,13)(44,`tr`,14)(45,`th`,15),Mk(46,`Nome`),Kg(),Jc(47,`th`,15),Mk(48,`Tipo`),Kg(),Jc(49,`th`,15),Mk(50,`Descrição`),Kg()(),Jc(51,`tr`,8)(52,`td`,16),Mk(53,` tokens`),Kg(),Jc(54,`td`,17)(55,`code`,18),Mk(56,` PoMediaQueryTokens `),Kg()(),Jc(57,`td`,12)(58,`p`),Mk(59,`Objeto contendo os tokens que devem ser atualizados. Cada propriedade corresponde a uma vari\xE1vel CSS que ser\xE1
dinamicamente modificada dentro das regras de media query.`),Kg()()()(),_u(60,`br`),Jc(61,`h3`),Mk(62,`Interfaces`),Kg(),Jc(63,`h4`,19)(64,`code`,5),Mk(65,`PoMediaQueryTokens`),Kg()(),Jc(66,`div`,2)(67,`p`),Mk(68,`Interface que define os tokens CSS utilizados em regras de media queries.
Cada chave representa uma vari\xE1vel CSS que pode ser dinamicamente modificada.`),Kg(),Jc(69,`blockquote`)(70,`p`),Mk(71,`Os tipos de valores aceitos para cada token são: `),Jc(72,`code`),Mk(73,`pixels`),Kg(),Mk(74,` , `),Jc(75,`code`),Mk(76,`em`),Kg(),Mk(77,` e `),Jc(78,`code`),Mk(79,`rem`),Kg(),Mk(80,`.`),Kg()()(),Jc(81,`h4`,6),Mk(82,`Propriedades`),Kg(),Jc(83,`table`,13)(84,`tr`,14)(85,`th`,15),Mk(86,`Nome`),Kg(),Jc(87,`th`,15),Mk(88,`Tipo`),Kg(),Jc(89,`th`,15),Mk(90,`Descrição`),Kg()(),Jc(91,`tr`,20)(92,`td`,16)(93,`div`,10)(94,`span`,11),Mk(95,` lg`),_u(96,`br`),Kg()()(),Jc(97,`td`,17)(98,`code`,21),Mk(99,`{ 'gridSystemLgMinWidth': string; 'gridSystemLgMaxWidth': string;
}`),Kg()(),Jc(100,`td`,12)(101,`em`)(102,`strong`),Mk(103,`(opcional)`),Kg()(),Jc(104,`p`),Mk(105,`Define a regra para lg.`),Kg(),Jc(106,`p`)(107,`code`),Mk(108,`gridSystemLgMinWidth`),Kg(),Mk(109,` define a largura mínima para o grid no tamanho pequeno (`),Jc(110,`code`),Mk(111,`lg`),Kg(),Mk(112,`).`),Kg(),Jc(113,`p`)(114,`code`),Mk(115,`gridSystemLgMaxWidth`),Kg(),Mk(116,` define a largura máxima para o grid no tamanho pequeno (`),Jc(117,`code`),Mk(118,`lg`),Kg(),Mk(119,`).`),Kg(),Jc(120,`p`),Mk(121,`Exemplo de uso:`),Kg(),Jc(122,`pre`)(123,`code`,22),Mk(124,`const tokens: PoMediaQueryTokens =  {
 lg: {
   gridSystemLgMinWidth: '961px',
   gridSystemLgMaxnWidth: '1366px'
 }
};
`),Kg()()()(),Jc(125,`tr`,23)(126,`td`,16)(127,`div`,10)(128,`span`,11),Mk(129,` md`),_u(130,`br`),Kg()()(),Jc(131,`td`,17)(132,`code`,24),Mk(133,`{ 'gridSystemMdMinWidth': string; 'gridSystemMdMaxWidth': string;
}`),Kg()(),Jc(134,`td`,12)(135,`em`)(136,`strong`),Mk(137,`(opcional)`),Kg()(),Jc(138,`p`),Mk(139,`Define a regra para md.`),Kg(),Jc(140,`p`)(141,`code`),Mk(142,`gridSystemMdMinWidth`),Kg(),Mk(143,` define a largura mínima para o grid no tamanho pequeno (`),Jc(144,`code`),Mk(145,`md`),Kg(),Mk(146,`).`),Kg(),Jc(147,`p`)(148,`code`),Mk(149,`gridSystemMdMaxWidth`),Kg(),Mk(150,` define a largura máxima para o grid no tamanho pequeno (`),Jc(151,`code`),Mk(152,`md`),Kg(),Mk(153,`).`),Kg(),Jc(154,`p`),Mk(155,`Exemplo de uso:`),Kg(),Jc(156,`pre`)(157,`code`,22),Mk(158,`const tokens: PoMediaQueryTokens =  {
 md: {
   gridSystemMdMinWidth: '481px',
   gridSystemMdMaxWidth: '960px'
 }
};
`),Kg()()()(),Jc(159,`tr`,25)(160,`td`,16)(161,`div`,10)(162,`span`,11),Mk(163,` offset`),_u(164,`br`),Kg()()(),Jc(165,`td`,17)(166,`code`,26),Mk(167,`{ 'gridSystemOffsetMinWidth': string; 'gridSystemOffsetMaxWidth': string;
}`),Kg()(),Jc(168,`td`,12)(169,`em`)(170,`strong`),Mk(171,`(opcional)`),Kg()(),Jc(172,`p`),Mk(173,`Define a regra offset.`),Kg(),Jc(174,`p`)(175,`code`),Mk(176,`gridSystemOffsetMinWidth`),Kg(),Mk(177,` define a largura mínima para o grid no tamanho pequeno (`),Jc(178,`code`),Mk(179,`offset`),Kg(),Mk(180,`).`),Kg(),Jc(181,`p`)(182,`code`),Mk(183,`gridSystemOffsetMaxWidth`),Kg(),Mk(184,` define a largura máxima para o grid no tamanho pequeno (`),Jc(185,`code`),Mk(186,`offset`),Kg(),Mk(187,`).`),Kg(),Jc(188,`p`),Mk(189,`Exemplo de uso:`),Kg(),Jc(190,`pre`)(191,`code`,22),Mk(192,`const tokens: PoMediaQueryTokens =  {
 offset: {
   gridSystemOffsetMinWidth: '361px',
   gridSystemOffsetMaxWidth: '480px'
 }
};
`),Kg()()()(),Jc(193,`tr`,27)(194,`td`,16)(195,`div`,10)(196,`span`,11),Mk(197,` pull`),_u(198,`br`),Kg()()(),Jc(199,`td`,17)(200,`code`,28),Mk(201,`{ 'gridSystemPullMaxWidth': string;
}`),Kg()(),Jc(202,`td`,12)(203,`em`)(204,`strong`),Mk(205,`(opcional)`),Kg()(),Jc(206,`p`),Mk(207,`Define a regra pull.`),Kg(),Jc(208,`p`)(209,`code`),Mk(210,`gridSystemPullMaxWidth`),Kg(),Mk(211,` define a largura máxima para o grid no tamanho pequeno (`),Jc(212,`code`),Mk(213,`pull`),Kg(),Mk(214,`).`),Kg(),Jc(215,`p`),Mk(216,`Exemplo de uso:`),Kg(),Jc(217,`pre`)(218,`code`,22),Mk(219,`const tokens: PoMediaQueryTokens =  {
 offset: {
   gridSystemPullMaxWidth: '480px'
 }
};
`),Kg()()()(),Jc(220,`tr`,29)(221,`td`,16)(222,`div`,10)(223,`span`,11),Mk(224,` sm`),_u(225,`br`),Kg()()(),Jc(226,`td`,17)(227,`code`,30),Mk(228,`{ 'gridSystemSmMaxWidth': string;
}`),Kg()(),Jc(229,`td`,12)(230,`em`)(231,`strong`),Mk(232,`(opcional)`),Kg()(),Jc(233,`p`),Mk(234,`Define a regra para sm.`),Kg(),Jc(235,`p`)(236,`code`),Mk(237,`gridSystemSmMaxWidth`),Kg(),Mk(238,` define a largura máxima para o grid no tamanho pequeno (`),Jc(239,`code`),Mk(240,`sm`),Kg(),Mk(241,`).`),Kg(),Jc(242,`p`),Mk(243,`Exemplo de uso:`),Kg(),Jc(244,`pre`)(245,`code`,22),Mk(246,`const tokens: PoMediaQueryTokens =  {
 sm: {
   gridSystemSmMaxWidth: '480px'
 }
};
`),Kg()()()(),Jc(247,`tr`,31)(248,`td`,16)(249,`div`,10)(250,`span`,11),Mk(251,` xl`),_u(252,`br`),Kg()()(),Jc(253,`td`,17)(254,`code`,32),Mk(255,`{ 'gridSystemXlMinWidth': string;
}`),Kg()(),Jc(256,`td`,12)(257,`em`)(258,`strong`),Mk(259,`(opcional)`),Kg()(),Jc(260,`p`),Mk(261,`Define a regra xl.`),Kg(),Jc(262,`p`)(263,`code`),Mk(264,`gridSystemXlMinWidth`),Kg(),Mk(265,` define a largura mínima para o grid no tamanho pequeno (`),Jc(266,`code`),Mk(267,`pull`),Kg(),Mk(268,`).`),Kg(),Jc(269,`p`),Mk(270,`Exemplo de uso:`),Kg(),Jc(271,`pre`)(272,`code`,22),Mk(273,`const tokens: PoMediaQueryTokens =  {
 offset: {
   gridSystemXlMinWidth: '1367px'
 }
};
`),Kg()()()()()())},encapsulation:2,changeDetection:1})}return n})();function D(n,C){if(n&1&&_u(0,`div`,1),n&2){let o=tk();Ab(`hidden`,o.activeTab!==`web`)}}var Q=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;title=`Media Query`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(o,a){this.route=o,this.router=a}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(o=>{let a=o.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`,this.title=`Media Query · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(o){this.router.navigate([],{queryParams:{view:o},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(I(ar),I(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[`data-tour-mode`,`web`,3,`hidden`],[`data-tour-mode`,`doc`,3,`hidden`]],template:function(a,d){a&1&&(Jc(0,`po-page-default`,0),LO(1,D,1,1,`div`,1),Jc(2,`div`,2),_u(3,`sample-po-media-query-doc`),Kg()()),a&2&&(Ab(`p-title`,d.title)(`p-actions`,d.actions),wg(),jO(d.hidePoWebSample?-1:1),wg(),Ab(`hidden`,d.activeTab!==`doc`))},dependencies:[Mze,W],encapsulation:2,changeDetection:1})}return n})()}];var k=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[GV.forChild(Q),GV]})}return n})();var H=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[M,k]})}return n})();export{H as DocPoMediaQueryModule};