import{Ar as Ig,Ei as WV,Er as H_,Fr as Jn,Hi as ar,Ja as vt,Li as ZO,Mr as Jc,Ri as Zg,Vi as _u,Xt as ere,ea as ge,er as An,fi as Rb,gi as Tk,kr as I,mt as Tze,nr as BO,qi as de,rt as Qae,va as nk,xi as VO,yi as U_}from"./chunk-DvS_Nb_w.js";import{t as M}from"./main-HXZZSDJT.js";var C=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-media-query-doc`]],standalone:!1,decls:274,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-property-description`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-name-cell`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`{`,`'gridSystemLgMinWidth':`,`string;`,`'gridSystemLgMaxWidth':`,`string;`,`}`],[1,`language-typescript`],[`pan`,``,1,`docs-api-property-type`,`{`,`'gridSystemMdMinWidth':`,`string;`,`'gridSystemMdMaxWidth':`,`string;`,`}`],[`pan`,``,1,`docs-api-property-type`,`{`,`'gridSystemOffsetMinWidth':`,`string;`,`'gridSystemOffsetMaxWidth':`,`string;`,`}`],[`pan`,``,1,`docs-api-property-type`,`{`,`'gridSystemPullMaxWidth':`,`string;`,`}`],[`pan`,``,1,`docs-api-property-type`,`{`,`'gridSystemSmMaxWidth':`,`string;`,`}`],[`pan`,``,1,`docs-api-property-type`,`{`,`'gridSystemXlMinWidth':`,`string;`,`}`]],template:function(a,d){a&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoMediaQueryModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do serviço `),Jc(7,`code`),Tk(8,`po-media-query`),Zg(),Tk(9,`.`),Zg()(),Jc(10,`h3`,3),Tk(11,`Services`),Zg(),Jc(12,`h4`,4)(13,`code`,5),Tk(14,`PoMediaQueryService`),Zg()(),Jc(15,`div`,2)(16,`p`),Tk(17,`O PoMediaQueryService é um serviço que atualiza dinamicamente regras de media query dentro de folhas de estilo do DOM.`),Zg(),Jc(18,`p`),Tk(19,`Ele utiliza as regras de media queries que contêm tokens CSS (definidos como var(--nome-da-variavel)) e as replica, aplicando os novos valores fornecidos, facilitando a adaptação dos estilos com base nas condições das media queries.`),Zg(),Jc(20,`p`),Tk(21,`Exemplo de uso:`),Zg(),Jc(22,`p`),Tk(23,`Neste exemplo, estamos alterando os valores dos breakpoints para o grid system, que determina como o layout deve se comportar em diferentes larguras de tela. Utilizando o PoMediaQueryService, definimos os limites para tr\xEAs tamanhos de tela: pequeno (sm), m\xE9dio (md), e grande (lg), e aplicamos esses valores dinamicamente para garantir que o layout responda adequadamente \xE0s mudan\xE7as no tamanho da janela.
Isso permite que o grid system do PO UI seja personalizado para se ajustar \xE0s necessidades do seu projeto.`),Zg(),Jc(24,`pre`)(25,`code`),Tk(26,`import { PoMediaQueryService } from './po-media-query.service';

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
`),Zg()()(),Jc(27,`h3`,6),Tk(28,`Métodos`),Zg(),Jc(29,`table`,7)(30,`tr`,8)(31,`th`,9)(32,`div`,10)(33,`h4`)(34,`span`,11),Tk(35,` updateTokens `),Zg()()()()(),Jc(36,`tr`,12)(37,`td`,12)(38,`p`),Tk(39,`M\xE9todo que replica as regras baseando-se pelos tokens de media query dentro das folhas de estilo do documento, permitindo a modifica\xE7\xE3o din\xE2mica
dos valores CSS correspondentes aos tokens fornecidos.`),Zg()()()(),Jc(40,`h5`)(41,`b`),Tk(42,`Parâmetros`),Zg()(),Jc(43,`table`,13)(44,`tr`,14)(45,`th`,15),Tk(46,`Nome`),Zg(),Jc(47,`th`,15),Tk(48,`Tipo`),Zg(),Jc(49,`th`,15),Tk(50,`Descrição`),Zg()(),Jc(51,`tr`,8)(52,`td`,16),Tk(53,` tokens`),Zg(),Jc(54,`td`,17)(55,`code`,18),Tk(56,` PoMediaQueryTokens `),Zg()(),Jc(57,`td`,12)(58,`p`),Tk(59,`Objeto contendo os tokens que devem ser atualizados. Cada propriedade corresponde a uma vari\xE1vel CSS que ser\xE1
dinamicamente modificada dentro das regras de media query.`),Zg()()()(),_u(60,`br`),Jc(61,`h3`),Tk(62,`Interfaces`),Zg(),Jc(63,`h4`,19)(64,`code`,5),Tk(65,`PoMediaQueryTokens`),Zg()(),Jc(66,`div`,2)(67,`p`),Tk(68,`Interface que define os tokens CSS utilizados em regras de media queries.
Cada chave representa uma vari\xE1vel CSS que pode ser dinamicamente modificada.`),Zg(),Jc(69,`blockquote`)(70,`p`),Tk(71,`Os tipos de valores aceitos para cada token são: `),Jc(72,`code`),Tk(73,`pixels`),Zg(),Tk(74,` , `),Jc(75,`code`),Tk(76,`em`),Zg(),Tk(77,` e `),Jc(78,`code`),Tk(79,`rem`),Zg(),Tk(80,`.`),Zg()()(),Jc(81,`h4`,6),Tk(82,`Propriedades`),Zg(),Jc(83,`table`,13)(84,`tr`,14)(85,`th`,15),Tk(86,`Nome`),Zg(),Jc(87,`th`,15),Tk(88,`Tipo`),Zg(),Jc(89,`th`,15),Tk(90,`Descrição`),Zg()(),Jc(91,`tr`,8)(92,`td`,16)(93,`div`,10)(94,`span`,11),Tk(95,` lg`),_u(96,`br`),Zg()()(),Jc(97,`td`,17)(98,`code`,20),Tk(99,`{ 'gridSystemLgMinWidth': string; 'gridSystemLgMaxWidth': string;
}`),Zg()(),Jc(100,`td`,12)(101,`em`)(102,`strong`),Tk(103,`(opcional)`),Zg()(),Jc(104,`p`),Tk(105,`Define a regra para lg.`),Zg(),Jc(106,`p`)(107,`code`),Tk(108,`gridSystemLgMinWidth`),Zg(),Tk(109,` define a largura mínima para o grid no tamanho pequeno (`),Jc(110,`code`),Tk(111,`lg`),Zg(),Tk(112,`).`),Zg(),Jc(113,`p`)(114,`code`),Tk(115,`gridSystemLgMaxWidth`),Zg(),Tk(116,` define a largura máxima para o grid no tamanho pequeno (`),Jc(117,`code`),Tk(118,`lg`),Zg(),Tk(119,`).`),Zg(),Jc(120,`p`),Tk(121,`Exemplo de uso:`),Zg(),Jc(122,`pre`)(123,`code`,21),Tk(124,`const tokens: PoMediaQueryTokens =  {
 lg: {
   gridSystemLgMinWidth: '961px',
   gridSystemLgMaxnWidth: '1366px'
 }
};
`),Zg()()()(),Jc(125,`tr`,8)(126,`td`,16)(127,`div`,10)(128,`span`,11),Tk(129,` md`),_u(130,`br`),Zg()()(),Jc(131,`td`,17)(132,`code`,22),Tk(133,`{ 'gridSystemMdMinWidth': string; 'gridSystemMdMaxWidth': string;
}`),Zg()(),Jc(134,`td`,12)(135,`em`)(136,`strong`),Tk(137,`(opcional)`),Zg()(),Jc(138,`p`),Tk(139,`Define a regra para md.`),Zg(),Jc(140,`p`)(141,`code`),Tk(142,`gridSystemMdMinWidth`),Zg(),Tk(143,` define a largura mínima para o grid no tamanho pequeno (`),Jc(144,`code`),Tk(145,`md`),Zg(),Tk(146,`).`),Zg(),Jc(147,`p`)(148,`code`),Tk(149,`gridSystemMdMaxWidth`),Zg(),Tk(150,` define a largura máxima para o grid no tamanho pequeno (`),Jc(151,`code`),Tk(152,`md`),Zg(),Tk(153,`).`),Zg(),Jc(154,`p`),Tk(155,`Exemplo de uso:`),Zg(),Jc(156,`pre`)(157,`code`,21),Tk(158,`const tokens: PoMediaQueryTokens =  {
 md: {
   gridSystemMdMinWidth: '481px',
   gridSystemMdMaxWidth: '960px'
 }
};
`),Zg()()()(),Jc(159,`tr`,8)(160,`td`,16)(161,`div`,10)(162,`span`,11),Tk(163,` offset`),_u(164,`br`),Zg()()(),Jc(165,`td`,17)(166,`code`,23),Tk(167,`{ 'gridSystemOffsetMinWidth': string; 'gridSystemOffsetMaxWidth': string;
}`),Zg()(),Jc(168,`td`,12)(169,`em`)(170,`strong`),Tk(171,`(opcional)`),Zg()(),Jc(172,`p`),Tk(173,`Define a regra offset.`),Zg(),Jc(174,`p`)(175,`code`),Tk(176,`gridSystemOffsetMinWidth`),Zg(),Tk(177,` define a largura mínima para o grid no tamanho pequeno (`),Jc(178,`code`),Tk(179,`offset`),Zg(),Tk(180,`).`),Zg(),Jc(181,`p`)(182,`code`),Tk(183,`gridSystemOffsetMaxWidth`),Zg(),Tk(184,` define a largura máxima para o grid no tamanho pequeno (`),Jc(185,`code`),Tk(186,`offset`),Zg(),Tk(187,`).`),Zg(),Jc(188,`p`),Tk(189,`Exemplo de uso:`),Zg(),Jc(190,`pre`)(191,`code`,21),Tk(192,`const tokens: PoMediaQueryTokens =  {
 offset: {
   gridSystemOffsetMinWidth: '361px',
   gridSystemOffsetMaxWidth: '480px'
 }
};
`),Zg()()()(),Jc(193,`tr`,8)(194,`td`,16)(195,`div`,10)(196,`span`,11),Tk(197,` pull`),_u(198,`br`),Zg()()(),Jc(199,`td`,17)(200,`code`,24),Tk(201,`{ 'gridSystemPullMaxWidth': string;
}`),Zg()(),Jc(202,`td`,12)(203,`em`)(204,`strong`),Tk(205,`(opcional)`),Zg()(),Jc(206,`p`),Tk(207,`Define a regra pull.`),Zg(),Jc(208,`p`)(209,`code`),Tk(210,`gridSystemPullMaxWidth`),Zg(),Tk(211,` define a largura máxima para o grid no tamanho pequeno (`),Jc(212,`code`),Tk(213,`pull`),Zg(),Tk(214,`).`),Zg(),Jc(215,`p`),Tk(216,`Exemplo de uso:`),Zg(),Jc(217,`pre`)(218,`code`,21),Tk(219,`const tokens: PoMediaQueryTokens =  {
 offset: {
   gridSystemPullMaxWidth: '480px'
 }
};
`),Zg()()()(),Jc(220,`tr`,8)(221,`td`,16)(222,`div`,10)(223,`span`,11),Tk(224,` sm`),_u(225,`br`),Zg()()(),Jc(226,`td`,17)(227,`code`,25),Tk(228,`{ 'gridSystemSmMaxWidth': string;
}`),Zg()(),Jc(229,`td`,12)(230,`em`)(231,`strong`),Tk(232,`(opcional)`),Zg()(),Jc(233,`p`),Tk(234,`Define a regra para sm.`),Zg(),Jc(235,`p`)(236,`code`),Tk(237,`gridSystemSmMaxWidth`),Zg(),Tk(238,` define a largura máxima para o grid no tamanho pequeno (`),Jc(239,`code`),Tk(240,`sm`),Zg(),Tk(241,`).`),Zg(),Jc(242,`p`),Tk(243,`Exemplo de uso:`),Zg(),Jc(244,`pre`)(245,`code`,21),Tk(246,`const tokens: PoMediaQueryTokens =  {
 sm: {
   gridSystemSmMaxWidth: '480px'
 }
};
`),Zg()()()(),Jc(247,`tr`,8)(248,`td`,16)(249,`div`,10)(250,`span`,11),Tk(251,` xl`),_u(252,`br`),Zg()()(),Jc(253,`td`,17)(254,`code`,26),Tk(255,`{ 'gridSystemXlMinWidth': string;
}`),Zg()(),Jc(256,`td`,12)(257,`em`)(258,`strong`),Tk(259,`(opcional)`),Zg()(),Jc(260,`p`),Tk(261,`Define a regra xl.`),Zg(),Jc(262,`p`)(263,`code`),Tk(264,`gridSystemXlMinWidth`),Zg(),Tk(265,` define a largura mínima para o grid no tamanho pequeno (`),Jc(266,`code`),Tk(267,`pull`),Zg(),Tk(268,`).`),Zg(),Jc(269,`p`),Tk(270,`Exemplo de uso:`),Zg(),Jc(271,`pre`)(272,`code`,21),Tk(273,`const tokens: PoMediaQueryTokens =  {
 offset: {
   gridSystemXlMinWidth: '1367px'
 }
};
`),Zg()()()()()())},encapsulation:2,changeDetection:1})}return n})();function L(n,O){if(n&1){let o=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(o);let d=nk();return H_(d.changeTab(`web`))}),Zg()}if(n&2){let o=nk();Rb(`p-active`,o.activeTab===`web`)}}var w=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(o,a){this.route=o,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(o=>{let a=o.view;this.activeTab=a||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(o){this.router.navigate([],{queryParams:{view:o},queryParamsHandling:`merge`}),this.activeTab=o}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(I(ar),I(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Media Query`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,d){a&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,L,1,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return d.changeTab(`doc`)}),_u(4,`sample-po-media-query-doc`),Zg()()()),a&2&&(Rb(`p-actions`,d.actions),Ig(2),BO(d.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,d.activeTab===`doc`))},dependencies:[Tze,Qae,ere,C],encapsulation:2,changeDetection:1})}return n})()}];var T=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[WV.forChild(w),WV]})}return n})();var J=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[M,T]})}return n})();export{J as DocPoMediaQueryModule};