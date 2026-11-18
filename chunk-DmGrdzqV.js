import{p as M}from"./main-FL7X32TP.js";import{Ar as I,Lr as Kg,Oi as VO,Pn as tre,Pr as Jn,Pt as are,Ti as U_,Ui as YO,Va as p,W as Mze,Zi as ar,ar as An,cr as B_,gi as Rb,io as vu,li as Qc,na as de,oo as wg,ro as vt,sa as ek,ua as ge,vi as Sk,wr as GV,xr as FO}from"./chunk-DtUf9FxZ.js";var Q=(()=>{class n{router=p(An);openDoc(o){this.router.navigate([`/documentation`,o],{queryParams:{view:`doc`}})}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-media-query-doc`]],standalone:!1,decls:274,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-media-query-service`,1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-h5`,`docs-api-method-header`],[`id`,`method-updateTokens`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-property-description`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-name-cell`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`],[`id`,`interface-po-media-query-tokens`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-media-query-tokens-lg`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`{`,`'gridSystemLgMinWidth':`,`string;`,`'gridSystemLgMaxWidth':`,`string;`,`}`],[1,`language-typescript`],[`id`,`interface-po-media-query-tokens-md`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`{`,`'gridSystemMdMinWidth':`,`string;`,`'gridSystemMdMaxWidth':`,`string;`,`}`],[`id`,`interface-po-media-query-tokens-offset`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`{`,`'gridSystemOffsetMinWidth':`,`string;`,`'gridSystemOffsetMaxWidth':`,`string;`,`}`],[`id`,`interface-po-media-query-tokens-pull`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`{`,`'gridSystemPullMaxWidth':`,`string;`,`}`],[`id`,`interface-po-media-query-tokens-sm`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`{`,`'gridSystemSmMaxWidth':`,`string;`,`}`],[`id`,`interface-po-media-query-tokens-xl`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`{`,`'gridSystemXlMinWidth':`,`string;`,`}`]],template:function(a,d){a&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoMediaQueryModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do serviço `),Qc(7,`code`),Sk(8,`po-media-query`),Kg(),Sk(9,`.`),Kg()(),Qc(10,`h3`,3),Sk(11,`Services`),Kg(),Qc(12,`h4`,4)(13,`code`,5),Sk(14,`PoMediaQueryService`),Kg()(),Qc(15,`div`,2)(16,`p`),Sk(17,`O PoMediaQueryService é um serviço que atualiza dinamicamente regras de media query dentro de folhas de estilo do DOM.`),Kg(),Qc(18,`p`),Sk(19,`Ele utiliza as regras de media queries que contêm tokens CSS (definidos como var(--nome-da-variavel)) e as replica, aplicando os novos valores fornecidos, facilitando a adaptação dos estilos com base nas condições das media queries.`),Kg(),Qc(20,`p`),Sk(21,`Exemplo de uso:`),Kg(),Qc(22,`p`),Sk(23,`Neste exemplo, estamos alterando os valores dos breakpoints para o grid system, que determina como o layout deve se comportar em diferentes larguras de tela. Utilizando o PoMediaQueryService, definimos os limites para tr\xEAs tamanhos de tela: pequeno (sm), m\xE9dio (md), e grande (lg), e aplicamos esses valores dinamicamente para garantir que o layout responda adequadamente \xE0s mudan\xE7as no tamanho da janela.
Isso permite que o grid system do PO UI seja personalizado para se ajustar \xE0s necessidades do seu projeto.`),Kg(),Qc(24,`pre`)(25,`code`),Sk(26,`import { PoMediaQueryService } from './po-media-query.service';

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
`),Kg()()(),Qc(27,`h3`,6),Sk(28,`Métodos`),Kg(),Qc(29,`table`,7)(30,`tr`,8)(31,`th`,9)(32,`div`,10)(33,`h4`)(34,`span`,11),Sk(35,` updateTokens `),Kg()()()()(),Qc(36,`tr`,12)(37,`td`,12)(38,`p`),Sk(39,`M\xE9todo que replica as regras baseando-se pelos tokens de media query dentro das folhas de estilo do documento, permitindo a modifica\xE7\xE3o din\xE2mica
dos valores CSS correspondentes aos tokens fornecidos.`),Kg()()()(),Qc(40,`h5`)(41,`b`),Sk(42,`Parâmetros`),Kg()(),Qc(43,`table`,13)(44,`tr`,14)(45,`th`,15),Sk(46,`Nome`),Kg(),Qc(47,`th`,15),Sk(48,`Tipo`),Kg(),Qc(49,`th`,15),Sk(50,`Descrição`),Kg()(),Qc(51,`tr`,8)(52,`td`,16),Sk(53,` tokens`),Kg(),Qc(54,`td`,17)(55,`code`,18),Sk(56,` PoMediaQueryTokens `),Kg()(),Qc(57,`td`,12)(58,`p`),Sk(59,`Objeto contendo os tokens que devem ser atualizados. Cada propriedade corresponde a uma vari\xE1vel CSS que ser\xE1
dinamicamente modificada dentro das regras de media query.`),Kg()()()(),vu(60,`br`),Qc(61,`h3`),Sk(62,`Interfaces`),Kg(),Qc(63,`h4`,19)(64,`code`,5),Sk(65,`PoMediaQueryTokens`),Kg()(),Qc(66,`div`,2)(67,`p`),Sk(68,`Interface que define os tokens CSS utilizados em regras de media queries.
Cada chave representa uma vari\xE1vel CSS que pode ser dinamicamente modificada.`),Kg(),Qc(69,`blockquote`)(70,`p`),Sk(71,`Os tipos de valores aceitos para cada token são: `),Qc(72,`code`),Sk(73,`pixels`),Kg(),Sk(74,` , `),Qc(75,`code`),Sk(76,`em`),Kg(),Sk(77,` e `),Qc(78,`code`),Sk(79,`rem`),Kg(),Sk(80,`.`),Kg()()(),Qc(81,`h4`,6),Sk(82,`Propriedades`),Kg(),Qc(83,`table`,13)(84,`tr`,14)(85,`th`,15),Sk(86,`Nome`),Kg(),Qc(87,`th`,15),Sk(88,`Tipo`),Kg(),Qc(89,`th`,15),Sk(90,`Descrição`),Kg()(),Qc(91,`tr`,20)(92,`td`,16)(93,`div`,10)(94,`span`,11),Sk(95,` lg`),vu(96,`br`),Kg()()(),Qc(97,`td`,17)(98,`code`,21),Sk(99,`{ 'gridSystemLgMinWidth': string; 'gridSystemLgMaxWidth': string;
}`),Kg()(),Qc(100,`td`,12)(101,`em`)(102,`strong`),Sk(103,`(opcional)`),Kg()(),Qc(104,`p`),Sk(105,`Define a regra para lg.`),Kg(),Qc(106,`p`)(107,`code`),Sk(108,`gridSystemLgMinWidth`),Kg(),Sk(109,` define a largura mínima para o grid no tamanho pequeno (`),Qc(110,`code`),Sk(111,`lg`),Kg(),Sk(112,`).`),Kg(),Qc(113,`p`)(114,`code`),Sk(115,`gridSystemLgMaxWidth`),Kg(),Sk(116,` define a largura máxima para o grid no tamanho pequeno (`),Qc(117,`code`),Sk(118,`lg`),Kg(),Sk(119,`).`),Kg(),Qc(120,`p`),Sk(121,`Exemplo de uso:`),Kg(),Qc(122,`pre`)(123,`code`,22),Sk(124,`const tokens: PoMediaQueryTokens =  {
 lg: {
   gridSystemLgMinWidth: '961px',
   gridSystemLgMaxnWidth: '1366px'
 }
};
`),Kg()()()(),Qc(125,`tr`,23)(126,`td`,16)(127,`div`,10)(128,`span`,11),Sk(129,` md`),vu(130,`br`),Kg()()(),Qc(131,`td`,17)(132,`code`,24),Sk(133,`{ 'gridSystemMdMinWidth': string; 'gridSystemMdMaxWidth': string;
}`),Kg()(),Qc(134,`td`,12)(135,`em`)(136,`strong`),Sk(137,`(opcional)`),Kg()(),Qc(138,`p`),Sk(139,`Define a regra para md.`),Kg(),Qc(140,`p`)(141,`code`),Sk(142,`gridSystemMdMinWidth`),Kg(),Sk(143,` define a largura mínima para o grid no tamanho pequeno (`),Qc(144,`code`),Sk(145,`md`),Kg(),Sk(146,`).`),Kg(),Qc(147,`p`)(148,`code`),Sk(149,`gridSystemMdMaxWidth`),Kg(),Sk(150,` define a largura máxima para o grid no tamanho pequeno (`),Qc(151,`code`),Sk(152,`md`),Kg(),Sk(153,`).`),Kg(),Qc(154,`p`),Sk(155,`Exemplo de uso:`),Kg(),Qc(156,`pre`)(157,`code`,22),Sk(158,`const tokens: PoMediaQueryTokens =  {
 md: {
   gridSystemMdMinWidth: '481px',
   gridSystemMdMaxWidth: '960px'
 }
};
`),Kg()()()(),Qc(159,`tr`,25)(160,`td`,16)(161,`div`,10)(162,`span`,11),Sk(163,` offset`),vu(164,`br`),Kg()()(),Qc(165,`td`,17)(166,`code`,26),Sk(167,`{ 'gridSystemOffsetMinWidth': string; 'gridSystemOffsetMaxWidth': string;
}`),Kg()(),Qc(168,`td`,12)(169,`em`)(170,`strong`),Sk(171,`(opcional)`),Kg()(),Qc(172,`p`),Sk(173,`Define a regra offset.`),Kg(),Qc(174,`p`)(175,`code`),Sk(176,`gridSystemOffsetMinWidth`),Kg(),Sk(177,` define a largura mínima para o grid no tamanho pequeno (`),Qc(178,`code`),Sk(179,`offset`),Kg(),Sk(180,`).`),Kg(),Qc(181,`p`)(182,`code`),Sk(183,`gridSystemOffsetMaxWidth`),Kg(),Sk(184,` define a largura máxima para o grid no tamanho pequeno (`),Qc(185,`code`),Sk(186,`offset`),Kg(),Sk(187,`).`),Kg(),Qc(188,`p`),Sk(189,`Exemplo de uso:`),Kg(),Qc(190,`pre`)(191,`code`,22),Sk(192,`const tokens: PoMediaQueryTokens =  {
 offset: {
   gridSystemOffsetMinWidth: '361px',
   gridSystemOffsetMaxWidth: '480px'
 }
};
`),Kg()()()(),Qc(193,`tr`,27)(194,`td`,16)(195,`div`,10)(196,`span`,11),Sk(197,` pull`),vu(198,`br`),Kg()()(),Qc(199,`td`,17)(200,`code`,28),Sk(201,`{ 'gridSystemPullMaxWidth': string;
}`),Kg()(),Qc(202,`td`,12)(203,`em`)(204,`strong`),Sk(205,`(opcional)`),Kg()(),Qc(206,`p`),Sk(207,`Define a regra pull.`),Kg(),Qc(208,`p`)(209,`code`),Sk(210,`gridSystemPullMaxWidth`),Kg(),Sk(211,` define a largura máxima para o grid no tamanho pequeno (`),Qc(212,`code`),Sk(213,`pull`),Kg(),Sk(214,`).`),Kg(),Qc(215,`p`),Sk(216,`Exemplo de uso:`),Kg(),Qc(217,`pre`)(218,`code`,22),Sk(219,`const tokens: PoMediaQueryTokens =  {
 offset: {
   gridSystemPullMaxWidth: '480px'
 }
};
`),Kg()()()(),Qc(220,`tr`,29)(221,`td`,16)(222,`div`,10)(223,`span`,11),Sk(224,` sm`),vu(225,`br`),Kg()()(),Qc(226,`td`,17)(227,`code`,30),Sk(228,`{ 'gridSystemSmMaxWidth': string;
}`),Kg()(),Qc(229,`td`,12)(230,`em`)(231,`strong`),Sk(232,`(opcional)`),Kg()(),Qc(233,`p`),Sk(234,`Define a regra para sm.`),Kg(),Qc(235,`p`)(236,`code`),Sk(237,`gridSystemSmMaxWidth`),Kg(),Sk(238,` define a largura máxima para o grid no tamanho pequeno (`),Qc(239,`code`),Sk(240,`sm`),Kg(),Sk(241,`).`),Kg(),Qc(242,`p`),Sk(243,`Exemplo de uso:`),Kg(),Qc(244,`pre`)(245,`code`,22),Sk(246,`const tokens: PoMediaQueryTokens =  {
 sm: {
   gridSystemSmMaxWidth: '480px'
 }
};
`),Kg()()()(),Qc(247,`tr`,31)(248,`td`,16)(249,`div`,10)(250,`span`,11),Sk(251,` xl`),vu(252,`br`),Kg()()(),Qc(253,`td`,17)(254,`code`,32),Sk(255,`{ 'gridSystemXlMinWidth': string;
}`),Kg()(),Qc(256,`td`,12)(257,`em`)(258,`strong`),Sk(259,`(opcional)`),Kg()(),Qc(260,`p`),Sk(261,`Define a regra xl.`),Kg(),Qc(262,`p`)(263,`code`),Sk(264,`gridSystemXlMinWidth`),Kg(),Sk(265,` define a largura mínima para o grid no tamanho pequeno (`),Qc(266,`code`),Sk(267,`pull`),Kg(),Sk(268,`).`),Kg(),Qc(269,`p`),Sk(270,`Exemplo de uso:`),Kg(),Qc(271,`pre`)(272,`code`,22),Sk(273,`const tokens: PoMediaQueryTokens =  {
 offset: {
   gridSystemXlMinWidth: '1367px'
 }
};
`),Kg()()()()()())},encapsulation:2,changeDetection:1})}return n})();function L(n,j){if(n&1){let o=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(o);let d=ek();return U_(d.changeTab(`web`))}),Kg()}if(n&2){let o=ek();Rb(`p-active`,o.activeTab===`web`)}}var O=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(o,a){this.route=o,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(o=>{let a=o.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`})}changeTab(o){this.router.navigate([],{queryParams:{view:o},queryParamsHandling:`merge`}),this.activeTab=o}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(I(ar),I(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Media Query`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,d){a&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,L,1,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return d.changeTab(`doc`)}),vu(4,`sample-po-media-query-doc`),Kg()()()),a&2&&(Rb(`p-actions`,d.actions),wg(2),VO(d.hidePoWebSample?-1:2),wg(),Rb(`p-active`,d.activeTab===`doc`))},dependencies:[Mze,tre,are,Q],encapsulation:2,changeDetection:1})}return n})()}];var w=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[GV.forChild(O),GV]})}return n})();var ee=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[M,w]})}return n})();export{ee as DocPoMediaQueryModule};