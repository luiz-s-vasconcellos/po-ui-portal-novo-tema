import{n as l,r as m,t as a}from"./chunk-GN-Zu1sG.js";import{p as M}from"./main-OAHE3DMQ.js";import{Ci as U_,Cr as Fy,Er as GV,Gi as _t,Ia as p,Ir as Jc,Ki as _u,Lr as Jn,Na as ok,Pr as I,Vr as Kg,W as Mze,a as A5,ar as B_,ca as ge,ea as de$1,er as Ab,gi as R,gt as Tt,jr as H_,no as we,qr as Mk,ri as PI,ro as wg,tr as An,va as j_,zr as KO}from"./chunk-CTJH0VS3.js";var S=(()=>{class a{router=p(An);getMenus(r){return r.map(o=>({label:o.label,subItems:o.items.map(d=>this.item(d))}))}item(r){if(r.shortcut)return m({label:r.label+` (`+r.origin+`)`,action:()=>this.router.navigateByUrl(`/`+r.link)});let o=`/`+r.link;return r.children?.length?{label:r.label,subItems:[{label:`Visão geral`,link:o},...r.children.map(d=>this.item(d))]}:{label:r.label,link:o}}static ɵfac=function(o){return new(o||a)};static ɵprov=R({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var _=(()=>{class a$1{menuGuidesService;http;menus=[];menuFilter=new a(()=>this.menus);menuFilterClear=new l;constructor(r,o){this.menuGuidesService=r,this.http=o}ngOnInit(){this.http.get(`./assets/json/guides-menu.json`).subscribe(r=>this.menus=this.menuGuidesService.getMenus(r),r=>console.error(r))}ngOnDestroy(){this.menuFilterClear.disconnect()}static ɵfac=function(o){return new(o||a$1)(I(S),I(PI))};static ɵcmp=Jn({type:a$1,selectors:[[`ng-component`]],standalone:!1,features:[we([S])],decls:4,vars:2,consts:[[`userMenu`,``],[1,`po-wrapper`],[`data-tour`,`guides-menu`,`p-filter`,``,3,`keyup`,`click`,`p-menus`,`p-service`]],template:function(o,d){if(o&1){let C=KO();Jc(0,`div`,1)(1,`po-menu`,2,0),_t(`keyup`,function(g){U_(C);let v=ok(2);return H_(d.menuFilterClear.onMenuEvent(g,v))})(`click`,function(g){U_(C);let v=ok(2);return H_(d.menuFilterClear.onMenuEvent(g,v))}),Kg(),_u(3,`router-outlet`),Kg()}o&2&&(wg(),Ab(`p-menus`,d.menus)(`p-service`,d.menuFilter))},dependencies:[A5,Fy],encapsulation:2,changeDetection:1})}return a$1})();var L=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:225,vars:0,consts:[[`p-title`,`Guia de implementação de APIs`,1,`guides`,`app-portal`],[`id`,`conteudo`],[`href`,`guides/api#introduction`],[`href`,`guides/api#responseMessage`],[`href`,`guides/api#errorMessages`],[`href`,`guides/api#successMessages`],[`href`,`guides/api#successMessagesForCollections`],[`href`,`guides/api#collections`],[`href`,`guides/api#order`],[`href`,`guides/api#filters`],[`href`,`guides/api#pagination`],[`id`,`introduction`],[`id`,`introducao`],[`id`,`responseMessage`],[`id`,`formato-das-mensagens-de-resposta`],[`id`,`errorMessages`],[`id`,`mensagens-de-erro`],[`id`,`successMessages`],[`id`,`mensagens-de-sucesso`],[`id`,`successMessagesForCollections`],[`id`,`mensagens-de-sucesso-para-colecoes`],[`id`,`collections`],[`id`,`formato-das-requisicoes-para-as-colecoes`],[`id`,`order`],[`id`,`ordenacao`],[`id`,`filters`],[`id`,`filtros`],[`id`,`pagination`],[`id`,`paginacao`],[`href`,`#successMessagesForCollections`]],template:function(o,d){o&1&&(Jc(0,`po-page-default`,0)(1,`h2`,1),Mk(2,`Conteúdo`),Kg(),Jc(3,`ul`)(4,`li`)(5,`a`,2),Mk(6,`Introdução`),Kg()(),Jc(7,`li`)(8,`a`,3),Mk(9,`Formato das mensagens de resposta`),Kg(),Jc(10,`ul`)(11,`li`)(12,`a`,4),Mk(13,`Mensagens de erro`),Kg()(),Jc(14,`li`)(15,`a`,5),Mk(16,`Mensagens de sucesso`),Kg()(),Jc(17,`li`)(18,`a`,6),Mk(19,`Mensagens de sucesso para coleções`),Kg()()()(),Jc(20,`li`)(21,`a`,7),Mk(22,`Formato das requisições para coleções`),Kg(),Jc(23,`ul`)(24,`li`)(25,`a`,8),Mk(26,`Ordenação`),Kg()(),Jc(27,`li`)(28,`a`,9),Mk(29,`Filtros`),Kg()(),Jc(30,`li`)(31,`a`,10),Mk(32,`Paginação`),Kg()()()()(),Jc(33,`p`),_u(34,`a`,11),Kg(),Jc(35,`h2`,12),Mk(36,`Introdução`),Kg(),Jc(37,`p`),Mk(38,`Este guia tem a finalidade de exibir os modelos de requisições e respostas HTTP que o PO UI utiliza em seus componentes e `),Jc(39,`em`),Mk(40,`interceptors`),Kg(),Mk(41,`.`),Kg(),Jc(42,`p`),_u(43,`a`,13),Kg(),Jc(44,`h2`,14),Mk(45,`Formato das mensagens de resposta`),Kg(),Jc(46,`p`),Mk(47,`Alguns componentes utilizam `),Jc(48,`code`),Mk(49,`endpoints`),Kg(),Mk(50,` para poder buscar os itens. Para isso, é necessário que o formato no qual estes itens serão devolvidos seja padronizado, para uma comunicação mais efetiva. A seguir serão apresentados o formato de mensagem de resposta esperado pelos `),Jc(51,`code`),Mk(52,`endpoints`),Kg(),Mk(53,`.`),Kg(),Jc(54,`p`),_u(55,`a`,15),Kg(),Jc(56,`h3`,16),Mk(57,`Mensagens de erro`),Kg(),Jc(58,`p`),Mk(59,`Para todas as mensagens que representam um erro (códigos HTTP 4xx e 5xx) deve-se retornar obrigatoriamente os campos a seguir, caso deseje apresentá-las:`),Kg(),Jc(60,`pre`)(61,`code`),Mk(62,`{
    code: "C\xF3digo identificador do erro",
    message: "Literal no idioma da requisi\xE7\xE3o descrevendo o erro para o cliente",
    detailedMessage: "Mensagem t\xE9cnica e mais detalhada do erro"
}
`),Kg()(),Jc(63,`p`),Mk(64,`Opcionalmente pode-se retornar os campos:`),Kg(),Jc(65,`ul`)(66,`li`)(67,`code`),Mk(68,`helpUrl`),Kg(),Mk(69,`: link para a documentação do erro;`),Kg(),Jc(70,`li`)(71,`code`),Mk(72,`type`),Kg(),Mk(73,`: pode ser informado os seguintes valores: `),Jc(74,`code`),Mk(75,`error`),Kg(),Mk(76,`, `),Jc(77,`code`),Mk(78,`warning`),Kg(),Mk(79,` e `),Jc(80,`code`),Mk(81,`information`),Kg(),Mk(82,`;`),Kg(),Jc(83,`li`)(84,`code`),Mk(85,`details`),Kg(),Mk(86,`: lista de objetos de erro (recursiva) com mais detalhes sobre o erro principal.`),Kg()(),Jc(87,`pre`)(88,`code`),Mk(89,`{
    code: "C\xF3digo identificador do erro",
    type: "error"
    message: "Literal no idioma da requisi\xE7\xE3o descrevendo o erro para o cliente",
    detailedMessage: "Mensagem t\xE9cnica e mais detalhada do erro",
    helpUrl: "link para a documenta\xE7\xE3o do error",
    details [
        {
            code: "C\xF3digo identificador do erro",
            message: "Literal no idioma da requisi\xE7\xE3o descrevendo o erro para o cliente",
            detailedMessage: "Mensagem t\xE9cnica e mais detalhada do erro"
        },
        {
            code: "C\xF3digo identificador do erro",
            message: "Literal no idioma da requisi\xE7\xE3o descrevendo o erro para o cliente",
            detailedMessage: "Mensagem t\xE9cnica e mais detalhada do erro"
        },
        {
            code: "C\xF3digo identificador do erro",
            message: "Literal no idioma da requisi\xE7\xE3o descrevendo o erro para o cliente",
            detailedMessage: "Mensagem t\xE9cnica e mais detalhada do erro"
        }
    ]
}
`),Kg()(),Jc(90,`p`),_u(91,`a`,17),Kg(),Jc(92,`h3`,18),Mk(93,`Mensagens de sucesso`),Kg(),Jc(94,`p`),Mk(95,`Mensagens de sucesso (código HTTP 2xx) devem retornar diretamente a entidade que representa o objeto resultante da operação do `),Jc(96,`em`),Mk(97,`endpoint`),Kg(),Mk(98,`. Exemplo:`),Kg(),Jc(99,`pre`)(100,`code`),Mk(101,`GET https://example.com.br/api/users/10

{
    id: 10,
    name: "John",
    surname: "Doe",
    age: 25,
    country: "US"
}
`),Kg()(),Jc(102,`p`),Mk(103,`Opcionalmente, o atributo `),Jc(104,`code`),Mk(105,`_messages`),Kg(),Mk(106,` pode ser incluído no objeto retornado para fornecer alguma informação complementar ao processamento realizado (mensagens de aviso, de negócio, etc). `),Kg(),Jc(107,`p`),Mk(108,`O formato do objeto de mensagem segue o padrão anteriormente descrito, para mensagens de erro.`),Kg(),Jc(109,`pre`)(110,`code`),Mk(111,`GET https://example.com.br/api/users/10
 
{
    id: 10,
    name: "John",
    surname: "Doe",
    age: 25,
    country: "US",
    _messages: [{
      code: "INFO",
      type: "information",
      message: "Esta \xE9 uma mensagem informativa",
      detailedMessage: "Mais detalhes sobre esta mensagem podem ser vistos aqui."
    }]
}
`),Kg()(),Jc(112,`p`),_u(113,`a`,19),Kg(),Jc(114,`h4`,20),Mk(115,`Mensagens de sucesso para coleções`),Kg(),Jc(116,`p`),Mk(117,`Nos casos em que o resultado da operação do `),Jc(118,`em`),Mk(119,`endpoint`),Kg(),Mk(120,` representa uma coleção (lista de itens), os itens devem estar agrupados em um objeto com as propriedades `),Jc(121,`code`),Mk(122,`hasNext`),Kg(),Mk(123,`, indicando se existe uma próxima página com mais registros para aquela coleção e `),Jc(124,`code`),Mk(125,`items`),Kg(),Mk(126,` que representam a lista de itens retornados.`),Kg(),Jc(127,`pre`)(128,`code`),Mk(129,`{
  hasNext: true,
  items: [
    {},
    {},
    ...
  ]
}
`),Kg()(),Jc(130,`p`),Mk(131,`Para o retorno de coleções, também é possível incluir o atributo `),Jc(132,`code`),Mk(133,`_messages`),Kg(),Mk(134,`, conforme segue:`),Kg(),Jc(135,`pre`)(136,`code`),Mk(137,`{
  hasNext: true,
  items: [
    {},
    {},
    ...
  ],
  _messages: [{
    code: "INFO",
    type: "information",
    message: "Uma mensagem informativa.",
    detailedMessage: "Detalhes relativos a mensagem."
  }]
}
`),Kg()(),Jc(138,`p`),_u(139,`a`,21),Kg(),Jc(140,`h2`,22),Mk(141,`Formato das requisições para as coleções`),Kg(),Jc(142,`p`),Mk(143,`Os `),Jc(144,`em`),Mk(145,`endpoints`),Kg(),Mk(146,` também podem receber parâmetros na requisição que servem para especificar o tipo de resposta desejada, por exemplo: ordenação. A seguir, serão apresentados os parâmetros que poderão ser enviados nessas requisições.`),Kg(),Jc(147,`p`),_u(148,`a`,23),Kg(),Jc(149,`h3`,24),Mk(150,`Ordenação`),Kg(),Jc(151,`p`),Mk(152,`Quando algum componente, como `),Jc(153,`code`),Mk(154,`po-lookup`),Kg(),Mk(155,`, realizar alguma ordenação será enviado o parâmetro `),Jc(156,`code`),Mk(157,`order`),Kg(),Mk(158,`, com as seguintes características:`),Kg(),Jc(159,`ul`)(160,`li`),Mk(161,`campos precedidos por um sinal de subtração (-) devem ser ordenados de forma decrescente;`),Kg(),Jc(162,`li`),Mk(163,`campos que omitirem o sinal (subtração) devem ser ordenados de forma crescente.`),Kg()(),Jc(164,`p`),Mk(165,`Por exemplo, a seguinte requisição deve retornar a lista de usuários ordenados pelo nome de forma crescente e então pela idade de forma decrescente e pelo sobrenome de forma crescente:`),Kg(),Jc(166,`pre`)(167,`code`),Mk(168,`GET https://example.com.br/api/users?order=name,-age,surname
`),Kg()(),Jc(169,`p`),_u(170,`a`,25),Kg(),Jc(171,`h3`,26),Mk(172,`Filtros`),Kg(),Jc(173,`p`),Mk(174,`Aos realizar um filtro será enviado um parâmetro no formato `),Jc(175,`code`),Mk(176,`property=value`),Kg(),Mk(177,`:`),Kg(),Jc(178,`p`)(179,`code`),Mk(180,`GET https://example.com.br/api/users?name=john&surname=doe`),Kg()(),Jc(181,`p`),_u(182,`a`,27),Kg(),Jc(183,`h3`,28),Mk(184,`Paginação`),Kg(),Jc(185,`p`),Mk(186,`A paginação é definida pelos parâmetros `),Jc(187,`code`),Mk(188,`page`),Kg(),Mk(189,` e `),Jc(190,`code`),Mk(191,`pageSize`),Kg(),Mk(192,`, respeitando as seguintes regras: `),Kg(),Jc(193,`ul`)(194,`li`),Mk(195,`o valor do parâmetro `),Jc(196,`code`),Mk(197,`page`),Kg(),Mk(198,` deve ser um valor numérico (maior que zero) representando a página solicitada;`),Kg(),Jc(199,`li`),Mk(200,`o valor do parâmetro `),Jc(201,`code`),Mk(202,`pageSize`),Kg(),Mk(203,` deve ser um valor numérico (maior que zero) representando o total de registros retornados na consulta;`),Kg(),Jc(204,`li`),Mk(205,`os parâmetros de paginação devem obedecer a semântica de multiplicador, ou seja, se o cliente solicitou `),Jc(206,`code`),Mk(207,`page=2`),Kg(),Mk(208,` com um `),Jc(209,`code`),Mk(210,`pageSize=20`),Kg(),Mk(211,` deve-se retornar os registros de 21 até 40;`),Kg(),Jc(212,`li`),Mk(213,`a resposta de uma requisição com paginação deve retornar um atributo indicando se existe uma próxima página disponível conforme descrito na `),Jc(214,`a`,29),Mk(215,`mensagem de sucesso de coleções`),Kg(),Mk(216,` e esse atributo deve ter o nome `),Jc(217,`code`),Mk(218,`hasNext`),Kg(),Mk(219,`.`),Kg()(),Jc(220,`p`),Mk(221,`Por exemplo, a seguinte requisição deve retornar a quarta página de registros (dos registros 31 a 40 inclusive) de usuários:`),Kg(),Jc(222,`p`)(223,`code`),Mk(224,`GET https://example.com.br/api/users/?page=4&pageSize=10`),Kg()()())},dependencies:[Mze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var B=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:72,vars:0,consts:[[`p-title`,`Compatibilidade com os navegadores`,1,`guides`,`app-portal`],[1,`po-row`],[1,`po-xl-6`,`po-lg-8`,`po-md-10`,`po-sm-12`],[1,`po-table`,`po-text-color-neutral-dark-40`],[1,`po-table-header`],[1,`po-table-header-ellipsis`],[1,`po-table-row`],[1,`po-table-column`],[`href`,`https://angular.dev/reference/versions#browser-support`],[`id`,`executando-a-aplicacao-localmente`],[`href`,`https://angular.io/guide/deployment#local-development-in-older-browsers`]],template:function(o,d){o&1&&(Jc(0,`po-page-default`,0)(1,`p`),Mk(2,`Atualmente o PO está homologado para os seguintes navegadores:`),Kg(),Jc(3,`div`,1)(4,`div`,2)(5,`table`,3)(6,`thead`)(7,`tr`,4)(8,`th`,5),Mk(9,`Navegadores`),Kg(),Jc(10,`th`,5),Mk(11,`Versões`),Kg()()(),Jc(12,`tbody`)(13,`tr`,6)(14,`th`,7),Mk(15,`Chrome`),Kg(),Jc(16,`td`,7),Mk(17,`2 versões mais recentes`),Kg()(),Jc(18,`tr`,6)(19,`th`,7),Mk(20,`Firefox`),Kg(),Jc(21,`td`,7),Mk(22,`versão mais recente e versão de suporte estendido (ESR)`),Kg()(),Jc(23,`tr`,6)(24,`th`,7),Mk(25,`Edge`),Kg(),Jc(26,`td`,7),Mk(27,`2 últimas versões principais`),Kg()(),Jc(28,`tr`,6)(29,`th`,7),Mk(30,`Android`),Kg(),Jc(31,`td`,7),Mk(32,`2 últimas versões principais`),Kg()()()()()(),Jc(33,`blockquote`)(34,`p`),Mk(35,`Nossa homologa\xE7\xE3o tem como base os navegadores que o Angular suporta nativamente. Para saber mais, acesse o guia
`),Jc(36,`a`,8)(37,`em`),Mk(38,`Browser support`),Kg()(),Mk(39,` do Angular.`),Kg()(),Jc(40,`blockquote`)(41,`p`),Mk(42,`Caso precise de algum `),Jc(43,`em`),Mk(44,`polyfill`),Kg(),Mk(45,` em sua aplicação ou precisa de mais informação sobre como funciona um `),Jc(46,`em`),Mk(47,`polyfill`),Kg(),Mk(48,` acesse a documentação `),Jc(49,`a`,8)(50,`em`),Mk(51,`Browser support`),Kg()(),Mk(52,` do Angular.`),Kg()(),Jc(53,`h2`,9),Mk(54,`Executando a aplicação localmente`),Kg(),Jc(55,`p`),Mk(56,`A partir do Angular CLI v8, os comandos `),Jc(57,`em`),Mk(58,`ng serve`),Kg(),Mk(59,`, `),Jc(60,`em`),Mk(61,`ng test`),Kg(),Mk(62,` e `),Jc(63,`em`),Mk(64,`ng e2e`),Kg(),Mk(65,` são executados com ES2015, não sendo suportado para navegadores como Internet Explorer.`),Kg(),Jc(66,`p`),Mk(67,`Para conseguir executar a aplicação localmente no Internet Explorer, veja a documentação`),_u(68,`br`),Jc(69,`a`,10),Mk(70,`Desenvolvendo localmente em navegadores antigos`),Kg(),Mk(71,`.`),Kg()())},dependencies:[Mze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var H=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:989,vars:0,consts:[[`p-title`,`Depreciações`,1,`guides`,`app-portal`],[`id`,`descontinuidade`],[`href`,`https://github.com/po-ui/po-angular/blob/master/CHANGELOG.md`],[`id`,`indice`],[1,`po-row`],[1,`po-xl-6`,`po-lg-8`,`po-md-10`,`po-sm-12`],[1,`po-table`,`po-text-color-neutral-dark-40`],[1,`po-table-header`],[1,`po-table-header-ellipsis`],[1,`po-table-row`],[1,`po-table-column`],[`href`,`documentation/po-theme`],[1,`po-table-column`,2,`text-align`,`center`],[`href`,`documentation/po-navbar`],[`href`,`documentation/po-gauge`],[`href`,`documentation/po-tabs`],[`href`,`documentation/po-tag`],[`href`,`documentation/po-button`],[`href`,`documentation/po-button-group`],[`href`,`documentation/po-container`],[`href`,`documentation/po-table`],[`id`,`depreciacoes`],[`id`,`po-theme`],[`id`,`po-gauge`],[`href`,`documentation/po-chart`],[`id`,`po-button`],[`id`,`deprecia-p-type-default`],[`id`,`deprecia-p-type-primary`],[`id`,`deprecia-p-type-link`],[`id`,`deprecia-p-type-danger`],[`id`,`http-client-module`],[`id`,`remocao-da-biblioteca-poicon`],[`href`,`/icons`],[`id`,`breaking-changes`],[`href`,`documentation/po-header`],[`href`,`documentation/po-input`],[`href`,`documentation/po-dynamic-form`],[`href`,`documentation/po-select`],[`href`,`documentation/po-switch`],[`href`,`documentation`],[`href`,`https://animaliads.notion.site/Bot-o-fb3a921e8ba54bd38b39758c24613368`],[`href`,`documentation/po-page-list`],[`href`,`documentation/po-page-login`],[`href`,`documentation/po-sync`],[`href`,`documentation/po-upload`],[`href`,`documentation/po-lookup`],[`href`,`documentation/po-http-interceptor`],[`href`,`documentation/po-page-detail`],[`href`,`documentation/po-page-edit`]],template:function(o,d){o&1&&(Jc(0,`po-page-default`,0)(1,`p`),Mk(2,`Às vezes as mudanças são necessárias para inovar e se manter atualizado, e para tornar essas transições o mais fácil possível, assumimos o compromisso de minimizar o número de mudanças significativas e fornecer ferramentas de migração, além disso, seguimos uma política de suspensão de uso para que você tenha tempo hábil para atualizar suas aplicações com as funcionalidades mais recentes.`),Kg(),Jc(3,`h2`,1),Mk(4,`Descontinuidade`),Kg(),Jc(5,`p`),Mk(6,`Anunciamos os recursos obsoletos no nosso `),Jc(7,`a`,2),Mk(8,`CHANGELOG`),Kg(),Mk(9,`. Esses recursos obsoletos aparecem na documentação com uma marcação de `),Jc(10,`em`)(11,`code`),Mk(12,`Deprecated`),Kg()(),Mk(13,` e não são mais exemplificados nos `),Jc(14,`em`),Mk(15,`samples`),Kg(),Mk(16,` do portal. Quando anunciamos uma suspensão de uso, sempre anunciamos também um caminho de atualização recomendado. Neste documento teremos um resumo desses recursos depreciados.`),Kg(),Jc(17,`p`),Mk(18,`Quando um recurso é descontinuado ele ainda se mantém presente geralmente pelas próximas `),Jc(19,`code`),Mk(20,`duas`),Kg(),Mk(21,` versões principais. Depois disso esses recursos serão removidos. Uma descontinuação pode ser anunciada em qualquer versão, mas a sua remoção acontecerá apenas na versão principal. Até um recurso depreciado ser removido, manteremos o suporte a problemas críticos e de segurança e também temos ferramentas de migração que geralmente automatizam a maior parte das atualizações.`),Kg(),Jc(22,`h2`,3),Mk(23,`Índice`),Kg(),Jc(24,`p`),Mk(25,`A tabela a seguir lista todos os recursos depreciados, organizados pelo release em que serão removidos. Cada item contém um link para a seção que descreve o motivo da suspensão de uso e as opções de substituição.`),Kg(),Jc(26,`div`,4)(27,`div`,5)(28,`table`,6)(29,`thead`)(30,`tr`,7)(31,`th`,8),Mk(32,`Área`),Kg(),Jc(33,`th`,8),Mk(34,`API ou Funcionalidade`),Kg(),Jc(35,`th`,8),Mk(36,`Removida em`),Kg()()(),Jc(37,`tbody`)(38,`tr`,9)(39,`th`,10)(40,`a`,11),Mk(41,`PoTheme`),Kg()(),Jc(42,`td`,10),Mk(43,`Tema padrão anterior (`),Jc(44,`code`),Mk(45,`poThemeDefaultDeprecated`),Kg(),Mk(46,`)`),Kg(),Jc(47,`td`,12),Mk(48,`v24`),Kg()(),Jc(49,`tr`,9)(50,`th`,10)(51,`a`,13),Mk(52,`PoNavbar`),Kg()(),Jc(53,`td`,10),Mk(54,`Componente descontinuado`),Kg(),Jc(55,`td`,12),Mk(56,`v23`),Kg()(),Jc(57,`tr`,9)(58,`th`,10)(59,`a`,14),Mk(60,`PoGauge`),Kg()(),Jc(61,`td`,10),Mk(62,`Componente descontinuado`),Kg(),Jc(63,`td`,12),Mk(64,`v22`),Kg()(),Jc(65,`tr`,9)(66,`th`,10)(67,`a`,15),Mk(68,`PoTabs`),Kg()(),Jc(69,`td`,10),Mk(70,`p-small`),Kg(),Jc(71,`td`,12),Mk(72,`v18`),Kg()(),Jc(73,`tr`,9)(74,`th`,10)(75,`a`,16),Mk(76,`PoTag`),Kg()(),Jc(77,`td`,10),Mk(78,`p-inverse`),Kg(),Jc(79,`td`,12),Mk(80,`v18`),Kg()(),Jc(81,`tr`,9)(82,`th`,10)(83,`a`,17),Mk(84,`PoButton`),Kg()(),Jc(85,`td`,10),Mk(86,`p-small`),Kg(),Jc(87,`td`,12),Mk(88,`v17`),Kg()(),Jc(89,`tr`,9)(90,`th`,10)(91,`a`,18),Mk(92,`PoButtonGroup`),Kg()(),Jc(93,`td`,10),Mk(94,`p-small`),Kg(),Jc(95,`td`,12),Mk(96,`v17`),Kg()(),Jc(97,`tr`,9)(98,`th`,10)(99,`a`,19),Mk(100,`PoContainer`),Kg()(),Jc(101,`td`,10),Mk(102,`p-no-shadow`),Kg(),Jc(103,`td`,12),Mk(104,`v17`),Kg()(),Jc(105,`tr`,9)(106,`th`,10)(107,`a`,20),Mk(108,`PoTable`),Kg()(),Jc(109,`td`,10),Mk(110,`p-hide-text-overflow`),Kg(),Jc(111,`td`,12),Mk(112,`v17`),Kg()()()()()(),Jc(113,`blockquote`)(114,`p`),Mk(115,`Ver mais detalhes no nosso `),Jc(116,`a`,2),Mk(117,`CHANGELOG`),Kg(),Mk(118,` e na nossa documentação das ferramentas de migração que automatizam a maioria dos breaking changes.`),Kg()(),Jc(119,`h2`,21),Mk(120,`Depreciações`),Kg(),Jc(121,`p`),Mk(122,`Esta seção contém uma lista completa de todos os recursos obsoletos com detalhes para ajudá-lo a planejar sua migração.`),Kg(),Jc(123,`h3`,22),Mk(124,`PoTheme`),Kg(),Jc(125,`div`,4)(126,`div`,5)(127,`table`,6)(128,`thead`)(129,`tr`,7)(130,`th`,8),Mk(131,`Recurso`),Kg(),Jc(132,`th`,8),Mk(133,`Substituição`),Kg(),Jc(134,`th`,8),Mk(135,`Anúncio da Depreciação`),Kg(),Jc(136,`th`,8),Mk(137,`Removido em`),Kg()()(),Jc(138,`tbody`)(139,`tr`,9)(140,`th`,10)(141,`code`),Mk(142,`poThemeDefaultDeprecated`),Kg(),Mk(143,` e demais constantes `),Jc(144,`code`),Mk(145,`*Deprecated`),Kg()(),Jc(146,`td`,10)(147,`a`,11)(148,`code`),Mk(149,`poThemeDefault`),Kg(),Mk(150,` e constantes equivalentes`),Kg()(),Jc(151,`td`,12),Mk(152,`v22`),Kg(),Jc(153,`td`,12),Mk(154,`v24`),Kg()(),Jc(155,`tr`,9)(156,`th`,10)(157,`code`),Mk(158,`po-theme-default-deprecated*.css`),Kg(),Mk(159,` (`),Jc(160,`code`),Mk(161,`@po-ui/style`),Kg(),Mk(162,`)`),Kg(),Jc(163,`td`,10)(164,`code`),Mk(165,`po-theme-default*.css`),Kg()(),Jc(166,`td`,12),Mk(167,`v22`),Kg(),Jc(168,`td`,12),Mk(169,`v24`),Kg()()()()()(),Jc(170,`p`),Mk(171,`A partir da v22, o tema padrão do PO UI passa a ser o tema EVO, aplicado automaticamente ao atualizar a biblioteca. O tema padrão anterior continua disponível como depreciado, para quem precisar de mais tempo na transição, e será removido na v24.`),Kg(),Jc(172,`p`),Mk(173,`O tema anterior é composto pelas constantes `),Jc(174,`code`),Mk(175,`poThemeDefaultDeprecated`),Kg(),Mk(176,` e demais constantes com o sufixo `),Jc(177,`code`),Mk(178,`Deprecated`),Kg(),Mk(179,` (por exemplo, `),Jc(180,`code`),Mk(181,`poThemeDefaultLightDeprecated`),Kg(),Mk(182,` e `),Jc(183,`code`),Mk(184,`poThemeDefaultAADeprecated`),Kg(),Mk(185,`), exportadas pelo `),Jc(186,`code`),Mk(187,`@po-ui/ng-components`),Kg(),Mk(188,`, e pelos arquivos `),Jc(189,`code`),Mk(190,`po-theme-default-deprecated.min.css`),Kg(),Mk(191,`, `),Jc(192,`code`),Mk(193,`po-theme-default-deprecated-variables.css`),Kg(),Mk(194,` e `),Jc(195,`code`),Mk(196,`po-theme-default-deprecated-variables.min.css`),Kg(),Mk(197,` do `),Jc(198,`code`),Mk(199,`@po-ui/style`),Kg(),Mk(200,`.`),Kg(),Jc(201,`p`),Mk(202,`Durante o `),Jc(203,`code`),Mk(204,`ng update`),Kg(),Mk(205,` da v22 é feita uma pergunta opcional sobre o retorno ao tema anterior. A resposta padrão é "Não"; em ambientes sem terminal interativo (CI) a migração mantém o tema novo. Ao responder "sim", a migração troca os arquivos CSS do tema no `),Jc(206,`code`),Mk(207,`angular.json`),Kg(),Mk(208,` e nas folhas de estilo, renomeia as constantes de tema importadas para as equivalentes `),Jc(209,`code`),Mk(210,`*Deprecated`),Kg(),Mk(211,` e, quando a aplicação ainda não utiliza o `),Jc(212,`code`),Mk(213,`PoThemeService`),Kg(),Mk(214,`, adiciona no componente principal a chamada `),Jc(215,`code`),Mk(216,`setTheme(poThemeDefaultDeprecated)`),Kg(),Mk(217,`.`),Kg(),Jc(218,`p`),Mk(219,`Para migrar para o tema atual, substitua as constantes e os arquivos CSS depreciados pelos equivalentes sem o sufixo:`),Kg(),Jc(220,`p`),Mk(221,`Antes:`),Kg(),Jc(222,`pre`)(223,`code`),Mk(224,`// app.component.ts
import { poThemeDefaultDeprecated, PoThemeService } from '@po-ui/ng-components';
...
this.poThemeService.setTheme(poThemeDefaultDeprecated);

// angular.json
"styles": ["./node_modules/@po-ui/style/css/po-theme-default-deprecated.min.css"]
`),Kg()(),Jc(225,`p`),Mk(226,`Depois:`),Kg(),Jc(227,`pre`)(228,`code`),Mk(229,`// app.component.ts
import { poThemeDefault, PoThemeService } from '@po-ui/ng-components';
...
this.poThemeService.setTheme(poThemeDefault);

// angular.json
"styles": ["./node_modules/@po-ui/style/css/po-theme-default.min.css"]
`),Kg()(),Jc(230,`blockquote`)(231,`p`),Mk(232,`Caso a aplicação não precise de nenhuma configuração específica de tema, a chamada a `),Jc(233,`code`),Mk(234,`setTheme`),Kg(),Mk(235,` pode ser removida: o tema padrão é aplicado automaticamente.`),Kg()(),Jc(236,`h3`,23),Mk(237,`PoGauge`),Kg(),Jc(238,`div`,4)(239,`div`,5)(240,`table`,6)(241,`thead`)(242,`tr`,7)(243,`th`,8),Mk(244,`Recurso`),Kg(),Jc(245,`th`,8),Mk(246,`Substituição`),Kg(),Jc(247,`th`,8),Mk(248,`Anúncio da Depreciação`),Kg(),Jc(249,`th`,8),Mk(250,`Removido em`),Kg()()(),Jc(251,`tbody`)(252,`tr`,9)(253,`th`,10),Mk(254,`Componente po-gauge`),Kg(),Jc(255,`td`,10)(256,`a`,24),Mk(257,`po-chart (type=gauge)`),Kg()(),Jc(258,`td`,12),Mk(259,`v19`),Kg(),Jc(260,`td`,12),Mk(261,`v22`),Kg()()()()()(),Jc(262,`p`),Mk(263,`O componente `),Jc(264,`code`),Mk(265,`po-gauge`),Kg(),Mk(266,` foi removido. Utilize o `),Jc(267,`code`),Mk(268,`po-chart`),Kg(),Mk(269,` com `),Jc(270,`code`),Mk(271,`p-type="gauge"`),Kg(),Mk(272,` como alternativa.`),Kg(),Jc(273,`p`),Mk(274,`Antes:`),Kg(),Jc(275,`pre`)(276,`code`),Mk(277,`<po-gauge [p-value]="72" [p-ranges]="ranges"></po-gauge>
`),Kg()(),Jc(278,`p`),Mk(279,`Depois:`),Kg(),Jc(280,`pre`)(281,`code`),Mk(282,`<po-chart p-type="gauge" [p-options]="gaugeOptions" [p-series]="gaugeSeries"></po-chart>
`),Kg()(),Jc(283,`h3`,25),Mk(284,`PoButton`),Kg(),Jc(285,`div`,4)(286,`div`,5)(287,`table`,6)(288,`thead`)(289,`tr`,7)(290,`th`,8),Mk(291,`Recurso`),Kg(),Jc(292,`th`,8),Mk(293,`Substituição`),Kg(),Jc(294,`th`,8),Mk(295,`Anúncio da Depreciação`),Kg(),Jc(296,`th`,8),Mk(297,`Removido em`),Kg()()(),Jc(298,`tbody`)(299,`tr`,9)(300,`th`,10),Mk(301,`p-type`),Kg(),Jc(302,`td`,10)(303,`a`,17),Mk(304,`p-kind`),Kg()(),Jc(305,`td`,12),Mk(306,`v6`),Kg(),Jc(307,`td`,12),Mk(308,`v15`),Kg()()()()()(),Jc(309,`h4`,26),Mk(310,`Deprecia p-type default`),Kg(),Jc(311,`p`),Mk(312,`Indicamos o uso da propriedade `),Jc(313,`code`),Mk(314,`p-kind`),Kg(),Mk(315,` secondary`),Kg(),Jc(316,`p`),Mk(317,`Antes:`),Kg(),Jc(318,`pre`)(319,`code`),Mk(320,`// html
<po-button [p-type]="default" ...></po-button>

`),Kg()(),Jc(321,`p`),Mk(322,`Depois:`),Kg(),Jc(323,`pre`)(324,`code`),Mk(325,`// html
<po-button p-kind="secondary" ...></po-button>
`),Kg()(),Jc(326,`h4`,27),Mk(327,`Deprecia p-type primary`),Kg(),Jc(328,`p`),Mk(329,`Indicamos o uso da propriedade `),Jc(330,`code`),Mk(331,`p-kind`),Kg(),Mk(332,` primary`),Kg(),Jc(333,`p`),Mk(334,`Antes:`),Kg(),Jc(335,`pre`)(336,`code`),Mk(337,`// html
<po-button [p-type]="primary" ...></po-button>

`),Kg()(),Jc(338,`p`),Mk(339,`Depois:`),Kg(),Jc(340,`pre`)(341,`code`),Mk(342,`// html
<po-button p-kind="primary" ...></po-button>
`),Kg()(),Jc(343,`h4`,28),Mk(344,`Deprecia p-type link`),Kg(),Jc(345,`p`),Mk(346,`Indicamos o uso da propriedade `),Jc(347,`code`),Mk(348,`p-kind`),Kg(),Mk(349,` tertiary`),Kg(),Jc(350,`p`),Mk(351,`Antes:`),Kg(),Jc(352,`pre`)(353,`code`),Mk(354,`// html
<po-button [p-type]="link" ...></po-button>

`),Kg()(),Jc(355,`p`),Mk(356,`Depois:`),Kg(),Jc(357,`pre`)(358,`code`),Mk(359,`// html
<po-button p-kind="tertiary" ...></po-button>
`),Kg()(),Jc(360,`h4`,29),Mk(361,`Deprecia p-type danger`),Kg(),Jc(362,`p`),Mk(363,`Indicamos o uso da propriedade `),Jc(364,`code`),Mk(365,`p-danger`),Kg(),Mk(366,` true`),Kg(),Jc(367,`p`),Mk(368,`Antes:`),Kg(),Jc(369,`pre`)(370,`code`),Mk(371,`// html
<po-button [p-type]="danger" ...></po-button>

`),Kg()(),Jc(372,`p`),Mk(373,`Depois:`),Kg(),Jc(374,`pre`)(375,`code`),Mk(376,`// html
<po-button [p-danger]="true" ...></po-button>
`),Kg()(),Jc(377,`h3`,30),Mk(378,`HttpClientModule`),Kg(),Jc(379,`blockquote`)(380,`p`),Mk(381,`O módulo HttpClientModule foi removido do projeto não sendo mais importado diretamente nos componentes que o utilizavam e por motivos de boas práticas é necessário importar o HttpClientModule apenas no módulo principal da aplicação.`),Kg()(),Jc(382,`p`),Mk(383,`Exemplo:`),Kg(),Jc(384,`pre`)(385,`code`),Mk(386,`// app.module.ts
...
import { HttpClientModule } from '@angular/common/http';
...

@NgModule({
  declarations: [
    ...
    AppComponent
    ...
  ],
  imports: [
    ...
    HttpClientModule,
    ...
  ],
  providers: [],
  bootstrap: [
    ...
    AppComponent
    ...
    ]
})
export class AppModule { }

`),Kg()(),Jc(387,`h3`,31),Mk(388,`Remoção da biblioteca POIcon`),Kg(),Jc(389,`p`),Mk(390,`A partir da v21, a biblioteca de ícones POIcon foi removida. O conjunto padrão de ícones passa a ser a lib Animalia Icons.`),Kg(),Jc(391,`p`),Mk(392,`Antes - PO Icon (legado)`),Kg(),Jc(393,`pre`)(394,`code`),Mk(395,`//html
<i class="po-icon po-icon-user"></i>
`),Kg()(),Jc(396,`p`),Mk(397,`Depois - Animalia Icons (atual)`),Kg(),Jc(398,`pre`)(399,`code`),Mk(400,`//html
<i class="an an-user"></i>
`),Kg()(),Jc(401,`blockquote`)(402,`p`),Mk(403,`Para saber como utilizar, veja em `),Jc(404,`a`,32),Mk(405,`Biblioteca de ícones`),Kg(),Mk(406,` do PO UI.`),Kg()(),Jc(407,`h2`,33),Mk(408,`Breaking Changes`),Kg(),Jc(409,`div`,4)(410,`div`,5)(411,`table`,6)(412,`thead`)(413,`tr`,7)(414,`th`,8),Mk(415,`Área`),Kg(),Jc(416,`th`,8),Mk(417,`Funcionalidade`),Kg(),Jc(418,`th`,8),Mk(419,`Substituição`),Kg(),Jc(420,`th`,8),Mk(421,`Removida em`),Kg()()(),Jc(422,`tbody`)(423,`tr`,9)(424,`th`,10)(425,`a`,14),Mk(426,`PoGauge`),Kg()(),Jc(427,`td`,10),Mk(428,`Componente descontinuado`),Kg(),Jc(429,`td`,10)(430,`a`,24),Mk(431,`PoChart (type=gauge)`),Kg()(),Jc(432,`td`,12),Mk(433,`v22`),Kg()(),Jc(434,`tr`,9)(435,`th`,10)(436,`a`,13),Mk(437,`PoNavbar`),Kg()(),Jc(438,`td`,10),Mk(439,`Componente descontinuado`),Kg(),Jc(440,`td`,10)(441,`a`,34),Mk(442,`PoHeader`),Kg()(),Jc(443,`td`,12),Mk(444,`v23`),Kg()(),Jc(445,`tr`,9)(446,`th`,10)(447,`a`,35),Mk(448,`Campos de formulários`),Kg()(),Jc(449,`td`,10),Mk(450,`p-additional-help-tooltip`),Kg(),Jc(451,`td`,10),Mk(452,`p-helper`),Kg(),Jc(453,`td`,12),Mk(454,`v23`),Kg()(),Jc(455,`tr`,9)(456,`th`,10)(457,`a`,36),Mk(458,`PoDynamicForm`),Kg()(),Jc(459,`td`,10),Mk(460,`p-additional-help-tooltip`),Kg(),Jc(461,`td`,10),Mk(462,`p-helper`),Kg(),Jc(463,`td`,12),Mk(464,`v23`),Kg()(),Jc(465,`tr`,9)(466,`th`,10)(467,`a`,32),Mk(468,`POIcon`),Kg()(),Jc(469,`td`,10),Mk(470,`Biblioteca de ícones`),Kg(),Jc(471,`td`,10),Mk(472,`Animalia Icons`),Kg(),Jc(473,`td`,12),Mk(474,`v21`),Kg()(),Jc(475,`tr`,9)(476,`th`,10)(477,`a`,15),Mk(478,`PoTabs`),Kg()(),Jc(479,`td`,10),Mk(480,`p-small`),Kg(),Jc(481,`td`,10),Mk(482,`-`),Kg(),Jc(483,`td`,12),Mk(484,`v18`),Kg()(),Jc(485,`tr`,9)(486,`th`,10)(487,`a`,16),Mk(488,`PoTag`),Kg()(),Jc(489,`td`,10),Mk(490,`p-inverse`),Kg(),Jc(491,`td`,10),Mk(492,`-`),Kg(),Jc(493,`td`,12),Mk(494,`v18`),Kg()(),Jc(495,`tr`,9)(496,`th`,10)(497,`a`,17),Mk(498,`PoButton`),Kg()(),Jc(499,`td`,10),Mk(500,`p-small`),Kg(),Jc(501,`td`,10),Mk(502,`-`),Kg(),Jc(503,`td`,12),Mk(504,`v17`),Kg()(),Jc(505,`tr`,9)(506,`th`,10)(507,`a`,18),Mk(508,`PoButtonGroup`),Kg()(),Jc(509,`td`,10),Mk(510,`p-small`),Kg(),Jc(511,`td`,10),Mk(512,`-`),Kg(),Jc(513,`td`,12),Mk(514,`v17`),Kg()(),Jc(515,`tr`,9)(516,`th`,10)(517,`a`,19),Mk(518,`PoContainer`),Kg()(),Jc(519,`td`,10),Mk(520,`p-no-shadow`),Kg(),Jc(521,`td`,10),Mk(522,`-`),Kg(),Jc(523,`td`,12),Mk(524,`v17`),Kg()(),Jc(525,`tr`,9)(526,`th`,10)(527,`a`,20),Mk(528,`PoTable`),Kg()(),Jc(529,`td`,10),Mk(530,`p-hide-text-overflow`),Kg(),Jc(531,`td`,10),Mk(532,`-`),Kg(),Jc(533,`td`,12),Mk(534,`v17`),Kg()(),Jc(535,`tr`,9)(536,`th`,10)(537,`a`,17),Mk(538,`PoButton`),Kg()(),Jc(539,`td`,10),Mk(540,`p-type`),Kg(),Jc(541,`td`,10),Mk(542,`-`),Kg(),Jc(543,`td`,12),Mk(544,`v15`),Kg()(),Jc(545,`tr`,9)(546,`th`,10),Mk(547,`Build`),Kg(),Jc(548,`td`,10),Mk(549,`HttpClientModule`),Kg(),Jc(550,`td`,10),Mk(551,`-`),Kg(),Jc(552,`td`,12),Mk(553,`v15`),Kg()(),Jc(554,`tr`,9)(555,`th`,10)(556,`a`,35),Mk(557,`PoDynamicFormFields`),Kg()(),Jc(558,`td`,10),Mk(559,`p-auto-focus`),Kg(),Jc(560,`td`,10),Mk(561,`-`),Kg(),Jc(562,`td`,12),Mk(563,`v14`),Kg()(),Jc(564,`tr`,9)(565,`th`,10)(566,`a`,37),Mk(567,`PoSelect`),Kg()(),Jc(568,`td`,10),Mk(569,`p-auto-focus`),Kg(),Jc(570,`td`,10),Mk(571,`-`),Kg(),Jc(572,`td`,12),Mk(573,`v14`),Kg()(),Jc(574,`tr`,9)(575,`th`,10)(576,`a`,38),Mk(577,`PoSwitch`),Kg()(),Jc(578,`td`,10),Mk(579,`p-auto-focus`),Kg(),Jc(580,`td`,10),Mk(581,`-`),Kg(),Jc(582,`td`,12),Mk(583,`v14`),Kg()(),Jc(584,`tr`,9)(585,`th`,10)(586,`a`,17),Mk(587,`PoButton`),Kg()(),Jc(588,`td`,10),Mk(589,`p-auto-focus`),Kg(),Jc(590,`td`,10),Mk(591,`-`),Kg(),Jc(592,`td`,12),Mk(593,`v14`),Kg()(),Jc(594,`tr`,9)(595,`th`,10)(596,`a`,35),Mk(597,`PoSelectOptionTemplate`),Kg()(),Jc(598,`td`,10),Mk(599,`-`),Kg(),Jc(600,`td`,10),Mk(601,`PoComboOptionTemplate`),Kg(),Jc(602,`td`,12),Mk(603,`v14`),Kg()(),Jc(604,`tr`,9)(605,`th`,10)(606,`a`,39),Mk(607,`Components`),Kg()(),Jc(608,`td`,10),Mk(609,`diminuição da altura em pequenas resoluções. `),Jc(610,`a`,40),Mk(611,`Ver mais`),Kg()(),Jc(612,`td`,10),Mk(613,`-`),Kg(),Jc(614,`td`,12),Mk(615,`v14`),Kg()(),Jc(616,`tr`,9)(617,`th`,10)(618,`a`,24),Mk(619,`PoChart`),Kg()(),Jc(620,`td`,10),Mk(621,`PoChartGaugeSerie`),Kg(),Jc(622,`td`,10)(623,`a`,14),Mk(624,`PoGauge`),Kg()(),Jc(625,`td`,12),Mk(626,`v6`),Kg()(),Jc(627,`tr`,9)(628,`th`,10)(629,`a`,24),Mk(630,`PoChart`),Kg()(),Jc(631,`td`,10),Mk(632,`PoChartSerie.category`),Kg(),Jc(633,`td`,10),Mk(634,`PoChartSerie.label`),Kg(),Jc(635,`td`,12),Mk(636,`v6`),Kg()(),Jc(637,`tr`,9)(638,`th`,10)(639,`a`,24),Mk(640,`PoChart`),Kg()(),Jc(641,`td`,10),Mk(642,`PoChartSerie.value`),Kg(),Jc(643,`td`,10),Mk(644,`PoChartSerie.data`),Kg(),Jc(645,`td`,12),Mk(646,`v6`),Kg()(),Jc(647,`tr`,9)(648,`th`,10)(649,`a`,24),Mk(650,`PoChart`),Kg()(),Jc(651,`td`,10),Mk(652,`PoChartType.Gauge`),Kg(),Jc(653,`td`,10)(654,`a`,14),Mk(655,`PoGauge`),Kg()(),Jc(656,`td`,12),Mk(657,`v6`),Kg()(),Jc(658,`tr`,9)(659,`th`,10)(660,`a`,13),Mk(661,`PoNavBar`),Kg()(),Jc(662,`td`,10),Mk(663,`p-menu`),Kg(),Jc(664,`td`,10),Mk(665,`-`),Kg(),Jc(666,`td`,12),Mk(667,`v6`),Kg()(),Jc(668,`tr`,9)(669,`th`,10)(670,`a`,24),Mk(671,`PoChart`),Kg()(),Jc(672,`td`,10),Mk(673,`PoPieChartSeries`),Kg(),Jc(674,`td`,10),Mk(675,`PoChartSerie`),Kg(),Jc(676,`td`,12),Mk(677,`v5`),Kg()(),Jc(678,`tr`,9)(679,`th`,10)(680,`a`,24),Mk(681,`PoChart`),Kg()(),Jc(682,`td`,10),Mk(683,`PoDonutChartSeries`),Kg(),Jc(684,`td`,10),Mk(685,`PoChartSerie`),Kg(),Jc(686,`td`,12),Mk(687,`v5`),Kg()(),Jc(688,`tr`,9)(689,`th`,10)(690,`a`,24),Mk(691,`PoChart`),Kg()(),Jc(692,`td`,10),Mk(693,`PoBarChartSeries`),Kg(),Jc(694,`td`,10),Mk(695,`PoChartSerie`),Kg(),Jc(696,`td`,12),Mk(697,`v5`),Kg()(),Jc(698,`tr`,9)(699,`th`,10)(700,`a`,24),Mk(701,`PoChart`),Kg()(),Jc(702,`td`,10),Mk(703,`PoColumnChartSeries`),Kg(),Jc(704,`td`,10),Mk(705,`PoChartSerie`),Kg(),Jc(706,`td`,12),Mk(707,`v5`),Kg()(),Jc(708,`tr`,9)(709,`th`,10)(710,`a`,24),Mk(711,`PoChart`),Kg()(),Jc(712,`td`,10),Mk(713,`PoLineChartSeries`),Kg(),Jc(714,`td`,10),Mk(715,`PoChartSerie`),Kg(),Jc(716,`td`,12),Mk(717,`v5`),Kg()(),Jc(718,`tr`,9)(719,`th`,10)(720,`a`,20),Mk(721,`PoTable`),Kg()(),Jc(722,`td`,10),Mk(723,`p-single-select`),Kg(),Jc(724,`td`,10),Mk(725,`[p-single-select]="false"`),Kg(),Jc(726,`td`,12),Mk(727,`v5`),Kg()(),Jc(728,`tr`,9)(729,`th`,10)(730,`a`,20),Mk(731,`PoTable`),Kg()(),Jc(732,`td`,10),Mk(733,`p-hide-select-all`),Kg(),Jc(734,`td`,10),Mk(735,`[p-hide-select-all]="false"`),Kg(),Jc(736,`td`,12),Mk(737,`v5`),Kg()(),Jc(738,`tr`,9)(739,`th`,10)(740,`a`,20),Mk(741,`PoTable`),Kg()(),Jc(742,`td`,10),Mk(743,`p-striped`),Kg(),Jc(744,`td`,10),Mk(745,`[p-striped]="false"`),Kg(),Jc(746,`td`,12),Mk(747,`v5`),Kg()(),Jc(748,`tr`,9)(749,`th`,10)(750,`a`,20),Mk(751,`PoTable`),Kg()(),Jc(752,`td`,10),Mk(753,`p-show-more-disabled`),Kg(),Jc(754,`td`,10),Mk(755,`[p-show-more-disabled]="false"`),Kg(),Jc(756,`td`,12),Mk(757,`v5`),Kg()(),Jc(758,`tr`,9)(759,`th`,10)(760,`a`,20),Mk(761,`PoTable`),Kg()(),Jc(762,`td`,10),Mk(763,`p-sort`),Kg(),Jc(764,`td`,10),Mk(765,`[p-sort]="false"`),Kg(),Jc(766,`td`,12),Mk(767,`v5`),Kg()(),Jc(768,`tr`,9)(769,`th`,10)(770,`a`,41),Mk(771,`PoPageList`),Kg()(),Jc(772,`td`,10),Mk(773,`PoPageFilter.ngModel`),Kg(),Jc(774,`td`,10),Mk(775,`-`),Kg(),Jc(776,`td`,12),Mk(777,`v4`),Kg()(),Jc(778,`tr`,9)(779,`th`,10)(780,`a`,41),Mk(781,`PoPageList`),Kg()(),Jc(782,`td`,10),Mk(783,`PoPageFilter.action: string`),Kg(),Jc(784,`td`,10),Mk(785,`PoPageFilter.action: Function`),Kg(),Jc(786,`td`,12),Mk(787,`v4`),Kg()(),Jc(788,`tr`,9)(789,`th`,10)(790,`a`,41),Mk(791,`PoPageList`),Kg()(),Jc(792,`td`,10),Mk(793,`PoPageFilter.advancedAction: string`),Kg(),Jc(794,`td`,10),Mk(795,`PoPageFilter.advancedAction: Function`),Kg(),Jc(796,`td`,12),Mk(797,`v4`),Kg()(),Jc(798,`tr`,9)(799,`th`,10)(800,`a`,42),Mk(801,`PoPageLogin`),Kg()(),Jc(802,`td`,10),Mk(803,`PoPageLoginLiterals.title`),Kg(),Jc(804,`td`,10),Mk(805,`p-product-name`),Kg(),Jc(806,`td`,12),Mk(807,`v4`),Kg()(),Jc(808,`tr`,9)(809,`th`,10)(810,`a`,24),Mk(811,`PoChart`),Kg()(),Jc(812,`td`,10),Mk(813,`PoChartOptions.axis.axisXGridLines`),Kg(),Jc(814,`td`,10),Mk(815,`PoChartOptions.axis.gridLines`),Kg(),Jc(816,`td`,12),Mk(817,`v4`),Kg()(),Jc(818,`tr`,9)(819,`th`,10)(820,`a`,43),Mk(821,`PoSync`),Kg()(),Jc(822,`td`,10),Mk(823,`portinari_sync_date`),Kg(),Jc(824,`td`,10),Mk(825,`po_sync_date`),Kg(),Jc(826,`td`,12),Mk(827,`v3`),Kg()(),Jc(828,`tr`,9)(829,`th`,10)(830,`a`,44),Mk(831,`PoUpload`),Kg()(),Jc(832,`td`,10),Mk(833,`PoUploadLiterals.cancel`),Kg(),Jc(834,`td`,10),Mk(835,`-`),Kg(),Jc(836,`td`,12),Mk(837,`v3`),Kg()(),Jc(838,`tr`,9)(839,`th`,10)(840,`a`,44),Mk(841,`PoUpload`),Kg()(),Jc(842,`td`,10),Mk(843,`PoUploadLiterals.deleteFile`),Kg(),Jc(844,`td`,10),Mk(845,`-`),Kg(),Jc(846,`td`,12),Mk(847,`v3`),Kg()(),Jc(848,`tr`,9)(849,`th`,10)(850,`a`,44),Mk(851,`PoUpload`),Kg()(),Jc(852,`td`,10),Mk(853,`PoUploadLiterals.tryAgain`),Kg(),Jc(854,`td`,10),Mk(855,`-`),Kg(),Jc(856,`td`,12),Mk(857,`v3`),Kg()(),Jc(858,`tr`,9)(859,`th`,10)(860,`a`,45),Mk(861,`PoLookup`),Kg()(),Jc(862,`td`,10),Mk(863,`getFilteredData`),Kg(),Jc(864,`td`,10),Mk(865,`getFilteredItems`),Kg(),Jc(866,`td`,12),Mk(867,`v3`),Kg()(),Jc(868,`tr`,9)(869,`th`,10)(870,`a`,20),Mk(871,`PoTable`),Kg()(),Jc(872,`td`,10),Mk(873,`p-checkbox`),Kg(),Jc(874,`td`,10),Mk(875,`p-selectable`),Kg(),Jc(876,`td`,12),Mk(877,`v3`),Kg()(),Jc(878,`tr`,9)(879,`th`,10)(880,`a`,35),Mk(881,`PoField`),Kg()(),Jc(882,`td`,10),Mk(883,`p-focus`),Kg(),Jc(884,`td`,10),Mk(885,`p-auto-focus`),Kg(),Jc(886,`td`,12),Mk(887,`v2`),Kg()(),Jc(888,`tr`,9)(889,`th`,10),Mk(890,`Packages`),Kg(),Jc(891,`td`,10),Mk(892,`@portinari/portinari-ui`),Kg(),Jc(893,`td`,10),Mk(894,`@po-ui/ng-components`),Kg(),Jc(895,`td`,12),Mk(896,`v2`),Kg()(),Jc(897,`tr`,9)(898,`th`,10),Mk(899,`Packages`),Kg(),Jc(900,`td`,10),Mk(901,`@portinari/portinari-templates`),Kg(),Jc(902,`td`,10),Mk(903,`@po-ui/ng-templates`),Kg(),Jc(904,`td`,12),Mk(905,`v2`),Kg()(),Jc(906,`tr`,9)(907,`th`,10),Mk(908,`Packages`),Kg(),Jc(909,`td`,10),Mk(910,`@portinari/portinari-code-editor`),Kg(),Jc(911,`td`,10),Mk(912,`@po-ui/ng-code-editor`),Kg(),Jc(913,`td`,12),Mk(914,`v2`),Kg()(),Jc(915,`tr`,9)(916,`th`,10),Mk(917,`Packages`),Kg(),Jc(918,`td`,10),Mk(919,`@portinari/portinari-storage`),Kg(),Jc(920,`td`,10),Mk(921,`@po-ui/ng-storage`),Kg(),Jc(922,`td`,12),Mk(923,`v2`),Kg()(),Jc(924,`tr`,9)(925,`th`,10),Mk(926,`Packages`),Kg(),Jc(927,`td`,10),Mk(928,`@portinari/portinari-sync`),Kg(),Jc(929,`td`,10),Mk(930,`@po-ui/ng-sync`),Kg(),Jc(931,`td`,12),Mk(932,`v2`),Kg()(),Jc(933,`tr`,9)(934,`th`,10)(935,`a`,46),Mk(936,`PoHttpInterceptor`),Kg()(),Jc(937,`td`,10),Mk(938,`X-Portinari-No-Message`),Kg(),Jc(939,`td`,10),Mk(940,`X-PO-No-Message`),Kg(),Jc(941,`td`,12),Mk(942,`v2`),Kg()(),Jc(943,`tr`,9)(944,`th`,10)(945,`a`,46),Mk(946,`PoHttpInterceptor`),Kg()(),Jc(947,`td`,10),Mk(948,`X-Portinari-SCREEN-LOCK`),Kg(),Jc(949,`td`,10),Mk(950,`X-PO-SCREEN-LOCK`),Kg(),Jc(951,`td`,12),Mk(952,`v2`),Kg()(),Jc(953,`tr`,9)(954,`th`,10)(955,`a`,46),Mk(956,`PoHttpInterceptor`),Kg()(),Jc(957,`td`,10),Mk(958,`X-Portinari-No-Count-Pending-Requests`),Kg(),Jc(959,`td`,10),Mk(960,`X-PO-No-Count-Pending-Requests`),Kg(),Jc(961,`td`,12),Mk(962,`v2`),Kg()(),Jc(963,`tr`,9)(964,`th`,10)(965,`a`,47),Mk(966,`PoPageDetail`),Kg()(),Jc(967,`td`,10),Mk(968,`reconhecimento das ações via funções no typescript`),Kg(),Jc(969,`td`,10),Mk(970,`utilização das propriedades p-back, p-edit e p-remove`),Kg(),Jc(971,`td`,12),Mk(972,`v2`),Kg()(),Jc(973,`tr`,9)(974,`th`,10)(975,`a`,48),Mk(976,`PoPageEdit`),Kg()(),Jc(977,`td`,10),Mk(978,`reconhecimento das ações via funções no typescript`),Kg(),Jc(979,`td`,10),Mk(980,`utilização das propriedades p-save, p-save-new e p-cancel`),Kg(),Jc(981,`td`,12),Mk(982,`v2`),Kg()()()()()(),Jc(983,`blockquote`)(984,`p`),Mk(985,`Ver mais detalhes no nosso `),Jc(986,`a`,2),Mk(987,`CHANGELOG`),Kg(),Mk(988,` e na nossa documentação das ferramentas de migração que automatizam a maioria dos breaking changes.`),Kg()()())},dependencies:[Mze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var V=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:423,vars:0,consts:[[`p-title`,`Contribuindo para o PO UI`,1,`guides`,`app-portal`],[`id`,`obrigado-pelo-interesse-em-contribuir-para-a-biblioteca-po-ui`],[`id`,`conteudo`],[`href`,`guides/development-flow#code-of-conduct`],[`href`,`guides/development-flow#flow`],[`href`,`guides/development-flow#create-issue`],[`href`,`guides/development-flow#code-reproduction`],[`href`,`guides/development-flow#contribute`],[`href`,`guides/development-flow#setup`],[`href`,`guides/development-flow#modifying-components`],[`href`,`guides/development-flow#preview-changes`],[`href`,`guides/development-flow#tests`],[`href`,`guides/development-flow#lint`],[`href`,`guides/development-flow#po-style`],[`href`,`guides/development-flow#build`],[`href`,`guides/development-flow#pr`],[`id`,`code-of-conduct`],[`id`,`codigo-de-conduta`],[`href`,`https://github.com/po-ui/po-angular/blob/master/CODE_OF_CONDUCT.md`],[`id`,`flow`],[`id`,`fluxo`],[1,`card-list-item`],[`id`,`create-issue`],[1,`po-row`],[1,`po-pl-md-5`,`po-pr-lg-5`],[`src`,`./assets/graphics/contribute/bug.png`,1,`card-list-icon`],[1,`po-font-subtitle`,`po-pb-1`],[`href`,`https://github.com/po-ui/po-angular/issues/439`],[`href`,`https://github.com/po-ui/po-angular/pulls`],[`id`,`code-reproduction`],[`src`,`./assets/graphics/contribute/ambiente_teste.png`,1,`card-list-icon`],[`href`,`https://stackblitz.com/edit/poui-module`],[`id`,`contribute`],[`src`,`./assets/graphics/contribute/colabore.png`,1,`card-list-icon`],[1,`po-font-text`],[`id`,`setup`],[`src`,`./assets/graphics/contribute/setup.png`,1,`card-list-icon`],[1,`po-text-color-neutral-dark-40`],[`href`,`https://git-scm.com/book/en/v2`],[`href`,`https://github.com/po-ui/po-angular`],[`id`,`modifying-components`],[`src`,`./assets/graphics/contribute/modificando.png`,1,`card-list-icon`],[`href`,`https://github.com/po-ui/po-angular/blob/master/STYLEGUIDE.md`],[`href`,`https://github.com/po-ui/po-angular/blob/master/HOW_TO_DOCUMENT.md`],[`id`,`preview-changes`],[`src`,`./assets/graphics/contribute/rodando_local.png`,1,`card-list-icon`],[`id`,`tests`],[`src`,`./assets/graphics/contribute/teste_unitario.png`,1,`card-list-icon`],[`id`,`lint`],[`src`,`./assets/graphics/contribute/lint.png`,1,`card-list-icon`],[`id`,`po-style`],[`src`,`./assets/graphics/contribute/css.png`,1,`card-list-icon`],[`href`,`https://github.com/po-ui/po-style`],[`href`,`https://github.com/po-ui/po-style/blob/master/README.md`],[`id`,`build`],[`src`,`./assets/graphics/contribute/build.png`,1,`card-list-icon`],[`href`,`https://github.com/po-ui/po-angular/blob/master/CONTRIBUTING.md#commits`],[`id`,`pr`],[1,`po-pl-sm-5`,`po-pl-md-5`,`po-pr-lg-5`],[`src`,`./assets/graphics/contribute/pr.png`,1,`card-list-icon`],[`href`,`https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork`],[`href`,`https://github.com/po-ui/po-angular/blob/master/CONTRIBUTING.md#pull-requests`]],template:function(o,d){o&1&&(Jc(0,`po-page-default`,0)(1,`h4`,1),Mk(2,`Obrigado pelo interesse em contribuir para a biblioteca PO UI!`),Kg(),Jc(3,`h2`,2),Mk(4,`Conteúdo`),Kg(),Jc(5,`ul`)(6,`li`)(7,`a`,3),Mk(8,`Código de conduta`),Kg()(),Jc(9,`li`)(10,`a`,4),Mk(11,`Fluxo`),Kg(),Jc(12,`ul`)(13,`li`)(14,`a`,5),Mk(15,`Criando `),Jc(16,`em`),Mk(17,`issue`),Kg(),Mk(18,` no GitHub`),Kg()(),Jc(19,`li`)(20,`a`,6),Mk(21,`Criando reprodução de código para nova `),Jc(22,`em`),Mk(23,`issue`),Kg()()(),Jc(24,`li`)(25,`a`,7),Mk(26,`Colaborando com o PO UI`),Kg()(),Jc(27,`li`)(28,`a`,8),Mk(29,`Setup Inicial`),Kg()(),Jc(30,`li`)(31,`a`,9),Mk(32,`Modificando Componentes`),Kg()(),Jc(33,`li`)(34,`a`,10),Mk(35,`Subindo as modificações localmente`),Kg()(),Jc(36,`li`)(37,`a`,11),Mk(38,`Testes Unitários`),Kg()(),Jc(39,`li`)(40,`a`,12),Mk(41,`ES Lint`),Kg()(),Jc(42,`li`)(43,`a`,13),Mk(44,`Po Style`),Kg()(),Jc(45,`li`)(46,`a`,14),Mk(47,`Build das modificações`),Kg()(),Jc(48,`li`)(49,`a`,15),Mk(50,`Criando Pull Request`),Kg()()()()(),Jc(51,`p`),_u(52,`a`,16),Kg(),Jc(53,`h3`,17),Mk(54,`Código de conduta`),Kg(),Jc(55,`p`),Mk(56,`Primeiramente, pedimos para que leiam com atenção nosso `),Jc(57,`a`,18),Mk(58,`Código de Conduta`),Kg(),Mk(59,` para se inteirarem sobre nossas regras.`),Kg(),Jc(60,`p`),_u(61,`a`,19),Kg(),Jc(62,`h2`,20),Mk(63,`Fluxo`),Kg(),Jc(64,`p`),Mk(65,`Este guia tem por objetivo definir as regras para criação de `),Jc(66,`em`),Mk(67,`Issues`),Kg(),Mk(68,` relacionadas à melhorias ou defeitos na biblioteca, assim como orientar no interesse em colaborar com o PO UI, definindo premissas para criação de novas `),Jc(69,`em`),Mk(70,`Branchs`),Kg(),Mk(71,`, `),Jc(72,`em`),Mk(73,`Pull Requests`),Kg(),Mk(74,` e `),Jc(75,`em`),Mk(76,`Commits`),Kg(),Mk(77,` no projeto PO UI. `),Kg(),Jc(78,`div`)(79,`div`,21),_u(80,`a`,22),Jc(81,`div`,23)(82,`div`,24),_u(83,`img`,25),Jc(84,`h3`,26),Mk(85,`Criando uma `),Jc(86,`em`),Mk(87,`issue`),Kg(),Mk(88,` no GitHub`),Kg(),Jc(89,`ul`)(90,`li`),Mk(91,`Antes de tudo, se você possui alguma questão relacionada ao uso da biblioteca, bem como dúvidas relacionadas a componentes, bibliotecas PO UI, por favor pergunte nos nossos `),Jc(92,`a`,27),Mk(93,`canais de comunicação`),Kg(),Mk(94,`.`),Kg(),Jc(95,`li`),Mk(96,`A lista de `),Jc(97,`em`),Mk(98,`issues`),Kg(),Mk(99,` do repositório PO UI é de uso exclusivo para informe de `),Jc(100,`em`),Mk(101,`bugs`),Kg(),Mk(102,` e requisições de melhorias. `),Jc(103,`em`),Mk(104,`Issues`),Kg(),Mk(105,` que não se enquadrarem nisso serão fechadas imediatamente.`),Kg(),Jc(106,`li`),Mk(107,`Se você tem uma nova `),Jc(108,`em`),Mk(109,`feature`),Kg(),Mk(110,` para nos sugerir ou então deseja reportar um bug, por favor avalie se nas `),Jc(111,`a`,28)(112,`em`),Mk(113,`Pull Requests`),Kg(),Mk(114,` do PO UI`),Kg(),Mk(115,` não tem nenhuma submissão anterior que resolva o problema, eliminando assim a eventual hipótese de duplicidade.`),Kg(),Jc(116,`li`),Mk(117,`É requerido que você descreva de maneira clara os passos necessários para reproduzir a `),Jc(118,`em`),Mk(119,`issue`),Kg(),Mk(120,` reportada. Entenda que, apesar de sermos sempre solícitos e darmos o pronto-apoio em nossos canais, reproduzir erros sem evidências diretas tomam um grande tempo da equipe.`),Kg(),Jc(121,`li`),Mk(122,`As `),Jc(123,`em`),Mk(124,`issues`),Kg(),Mk(125,` que não tiverem uma descrição detalhada e um passo-a-passo para reprodução terão menor prioridade. Se em caso de solicitação do `),Jc(126,`em`),Mk(127,`core team`),Kg(),Mk(128,` por maiores evidências, o autor da `),Jc(129,`em`),Mk(130,`issue`),Kg(),Mk(131,` terá 30 dias para resposta. Se neste período não houver qualquer resposta, então a `),Jc(132,`em`),Mk(133,`issue`),Kg(),Mk(134,` será fechada.`),Kg()()()()(),Jc(135,`div`,21),_u(136,`a`,29),Jc(137,`div`,23)(138,`div`,24),_u(139,`img`,30),Jc(140,`h3`,26),Mk(141,`Criando reprodução de código para nova `),Jc(142,`em`),Mk(143,`issue`),Kg()(),Jc(144,`ul`)(145,`li`),Mk(146,`Crie uma nova aplicação em Angular incluindo o componente e o comportamento reportado para nossa análise.`),Kg(),Jc(147,`li`),Mk(148,`Adicione o mínimo de código necessário para reprodução do bug, facilitando assim a verificação da situação.`),Kg(),Jc(149,`li`),Mk(150,`Publique a aplicação no GitHub e inclua o link ao criar a issue.`),Kg(),Jc(151,`li`),Mk(152,`Pode-se também usar o `),Jc(153,`a`,31),Mk(154,`Stackblitz`),Kg(),Mk(155,` para reproduzir o `),Jc(156,`em`),Mk(157,`bug`),Kg(),Mk(158,` relatado na `),Jc(159,`em`),Mk(160,`issue`),Kg(),Mk(161,`.`),Kg(),Jc(162,`li`),Mk(163,`Certifique-se de incluir os passos para reprodução da issue. Estes passos devem ser claros e simples de seguir.`),Kg()()()()(),Jc(164,`div`,21),_u(165,`a`,32),Jc(166,`div`,23)(167,`div`,24),_u(168,`img`,33),Jc(169,`h3`,26),Mk(170,`Colaborando com o PO UI`),Kg(),Jc(171,`p`,34),Mk(172,`Mais uma vez agradecemos por dedicar seu tempo para contribuir com o PO UI! Antes de submeter uma `),Jc(173,`em`),Mk(174,`pull request`),Kg(),Mk(175,`, pedimos pra que você crie uma `),Jc(176,`em`),Mk(177,`issue`),Kg(),Mk(178,` reportando uma eventual sugestão de melhoria, nova funcionalidade ou correção de bug e nos deixe ciente de que deseja criar uma `),Jc(179,`em`),Mk(180,`pull request`),Kg(),Mk(181,` para isso. Caso se trate de uma `),Jc(182,`em`),Mk(183,`issue`),Kg(),Mk(184,` já existente, por favor comente na `),Jc(185,`em`),Mk(186,`issue`),Kg(),Mk(187,`. Isso nos ajuda a acompanhar as `),Jc(188,`em`),Mk(189,`pull requests`),Kg(),Mk(190,` e também evitar duplicidades.`),Kg()()()(),Jc(191,`div`,21),_u(192,`a`,35),Jc(193,`div`,23)(194,`div`,24),_u(195,`img`,36),Jc(196,`h3`,26),Mk(197,`Setup Inicial`),Kg(),Jc(198,`blockquote`,37),Mk(199,`Para seguir o guia é fundamental o conhecimento da `),Jc(200,`a`,38),Mk(201,`ferramenta Git.`),Kg()(),Jc(202,`ul`)(203,`li`),Mk(204,`Para utilizar o PO UI, é pré-requisito ter o `),Jc(205,`code`),Mk(206,`Node.js`),Kg(),Mk(207,` instalado (versão 18.13.0 ou acima) e o seu gerenciador de pacote favorito na versão mais atual.`),Kg(),Jc(208,`li`)(209,`p`),Mk(210,`É importante que tenha a versão equivalente do Angular instalada. Instale-o via `),Jc(211,`code`),Mk(212,`npm`),Kg(),Mk(213,` ou `),Jc(214,`code`),Mk(215,`yarn`),Kg(),Mk(216,`:`),Kg(),Jc(217,`p`),Mk(218,`Instalando com npm:`),Kg(),Jc(219,`pre`)(220,`code`),Mk(221,`npm i -g @angular/cli`),Kg()(),Jc(222,`p`),Mk(223,`Caso opte pelo yarn:`),Kg(),Jc(224,`pre`)(225,`code`),Mk(226,`yarn global add @angular/cli`),Kg()()(),Jc(227,`li`),Mk(228,`Faça um `),Jc(229,`a`,39)(230,`em`),Mk(231,`fork`),Kg(),Mk(232,` do repositório PO UI`),Kg(),Mk(233,`. `),Jc(234,`blockquote`),Mk(235,`Membros do `),Jc(236,`em`),Mk(237,`Core Team`),Kg(),Mk(238,` devem gerar uma nova `),Jc(239,`em`),Mk(240,`branch`),Kg(),Mk(241,` ao invés do `),Jc(242,`em`),Mk(243,`fork`),Kg(),Mk(244,`.`),Kg()(),Jc(245,`li`),Mk(246,`Faça `),Jc(247,`em`),Mk(248,`clone`),Kg(),Mk(249,` do `),Jc(250,`em`),Mk(251,`fork`),Kg(),Mk(252,` gerado.`),Kg(),Jc(253,`li`),Mk(254,`Execute `),Jc(255,`code`),Mk(256,`npm install`),Kg(),Mk(257,` para instalar as dependências.`),Kg()()()()(),Jc(258,`div`,21),_u(259,`a`,40),Jc(260,`div`,23)(261,`div`,24),_u(262,`img`,41),Jc(263,`h3`,26),Mk(264,`Modificando componentes`),Kg(),Jc(265,`ul`)(266,`li`),Mk(267,`Localize o componente em `),Jc(268,`code`),Mk(269,`projects/<projeto>/src/lib`),Kg()(),Jc(270,`li`),Mk(271,`É muito importante que analise nossa documentação sobre `),Jc(272,`a`,42),Mk(273,`boas práticas`),Kg(),Mk(274,` para entender a implementação dos componentes PO UI.`),Kg(),Jc(275,`li`),Mk(276,`Modifique a documentação com base em nosso `),Jc(277,`a`,43),Mk(278,`guia detalhado de documentação`),Kg(),Mk(279,`.`),Kg(),Jc(280,`li`),Mk(281,`Se as implementações também contemplarem estilo, note que deverá modificá-las no repositório `),Jc(282,`a`,13),Mk(283,`PO UI Style`),Kg(),Mk(284,`.`),Kg(),Jc(285,`li`),Mk(286,`Faça as implementações desejadas, seja um novo componente, correção ou melhoria, e `),Jc(287,`a`,10),Mk(288,`verifique no portal`),Kg(),Mk(289,` as modificações realizadas tanto nos `),Jc(290,`em`),Mk(291,`samples`),Kg(),Mk(292,` quanto na documentação.`),Kg()()()()(),Jc(293,`div`,21),_u(294,`a`,44),Jc(295,`div`,23)(296,`div`,24),_u(297,`img`,45),Jc(298,`h3`,26),Mk(299,`Subindo as modificações localmente`),Kg(),Jc(300,`ul`)(301,`li`)(302,`p`),Mk(303,`As modificações de código e documentação realizadas podem ser conferidas executando os comandos:`),Kg(),Jc(304,`pre`)(305,`code`),Mk(306,`npm run build:portal && ng serve portal`),Kg()()(),Jc(307,`li`),Mk(308,`O navegador exibirá o portal na url `),Jc(309,`code`),Mk(310,`http://localhost:4200/`),Kg(),Mk(311,`.`),Kg(),Jc(312,`li`),Mk(313,`A partir disso, navegue até o componente para verificação das modificações.`),Kg(),Jc(314,`li`),Mk(315,`Pedimos para que atente para a inclusão da melhoria em nossos `),Jc(316,`em`),Mk(317,`samples`),Kg(),Mk(318,`, em especial no sample `),Jc(319,`code`),Mk(320,`labs`),Kg(),Mk(321,`. Na inviabilidade de usar os `),Jc(322,`em`),Mk(323,`samples`),Kg(),Mk(324,` já existentes, considere a necessidade de criar um novo `),Jc(325,`em`),Mk(326,`sample`),Kg(),Mk(327,` de uso.`),Kg()()()()(),Jc(328,`div`,21),_u(329,`a`,46),Jc(330,`div`,23)(331,`div`,24),_u(332,`img`,47),Jc(333,`h3`,26),Mk(334,`Testes Unitários`),Kg(),Jc(335,`p`),Mk(336,`A cobertura de testes do PO UI é total. Isso significa que, obrigatoriamente, as modificações devem ser totalmente testadas. Para tal, execute os testes nos arquivos `),Jc(337,`em`),Mk(338,`.spec`),Kg(),Mk(339,` contidos no mesmo diretório do componente.`),Kg(),Jc(340,`p`),Mk(341,`Para rodar os testes, rode o comando:`),Kg(),Jc(342,`pre`)(343,`code`),Mk(344,`npm run test`),Kg()(),Jc(345,`p`),Mk(346,`A cobertura de testes pode ser avaliada no arquivo `),Jc(347,`code`),Mk(348,`index.html`),Kg(),Mk(349,` existente no diretório `),Jc(350,`code`),Mk(351,`./coverage`),Kg(),Mk(352,`. `),Kg()()()(),Jc(353,`div`,21),_u(354,`a`,48),Jc(355,`div`,23)(356,`div`,24),_u(357,`img`,49),Jc(358,`h3`,26),Mk(359,`ESLint`),Kg(),Jc(360,`p`),Mk(361,`O PO UI utiliza o ESLint como linter padrão. Execute `),Jc(362,`code`),Mk(363,`ng lint`),Kg(),Mk(364,` para fazer a checagem de código-fonte e verificar eventuais erros programáticos, estilísticos, construções suspeitas, entre outros.`),Kg()()()(),Jc(365,`div`,21),_u(366,`a`,50),Jc(367,`div`,23)(368,`div`,24),_u(369,`img`,51),Jc(370,`h3`,26),Mk(371,`PO Style`),Kg(),Jc(372,`p`),Mk(373,`As implementações de estilo do PO UI são armazenadas no `),Jc(374,`a`,52),Mk(375,`repositório PO Style`),Kg(),Mk(376,`.`),Kg(),Jc(377,`p`),Mk(378,`O desenvolvimento dos estilos é aberto para todos os desenvolvedores e agradecemos aos desenvolvedores que contribuem com melhorias e correções de erros.`),Kg(),Jc(379,`p`),Mk(380,`Para saber como você pode pode participar na melhoria dos estilos, acesse o `),Jc(381,`a`,53),Mk(382,`guia de implementação de estilo`),Kg(),Mk(383,`.`),Kg()()()(),Jc(384,`div`,21),_u(385,`a`,54),Jc(386,`div`,23)(387,`div`,24),_u(388,`img`,55),Jc(389,`h3`,26),Mk(390,`Build das modificações`),Kg(),Jc(391,`p`),Mk(392,`Uma vez em que as modificações desejadas forem concluidas e a documentação esteja atualizada, execute os comandos abaixo para testagem no Portal PO UI.`),Kg(),Jc(393,`pre`)(394,`code`),Mk(395,`npm run build
npm run build:portal
ng serve portal`),Kg()(),Jc(396,`p`),Mk(397,`Revisadas as novas funcionalidades/correções, é chegada a hora da geração de commit. Confira as `),Jc(398,`a`,56),Mk(399,`regras para criação de commit`),Kg(),Mk(400,`.`),Kg()()()(),Jc(401,`div`,21),_u(402,`a`,57),Jc(403,`div`,23)(404,`div`,58),_u(405,`img`,59),Jc(406,`h3`,26),Mk(407,`Criando Pull Request`),Kg(),Jc(408,`p`),Mk(409,`Crie uma nova pull request com a master branch como base. Confira `),Jc(410,`a`,60),Mk(411,`como criar pull request a partir de um fork`),Kg(),Mk(412,`.`),Kg(),Jc(413,`p`),Mk(414,`É importante que siga guia contendo as `),Jc(415,`a`,61),Mk(416,`regras para geração de Pull Requests`),Kg(),Mk(417,`.`),Kg(),Jc(418,`p`),Mk(419,`Ao abrir a `),Jc(420,`em`),Mk(421,`pull request`),Kg(),Mk(422,`, uma análise automática comenta na PR os componentes alterados, os componentes que os consomem, o risco estimado e onde testar. Use esse relatório como ponto de partida para o teste integrado.`),Kg()()()()()())},dependencies:[Mze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var W=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:213,vars:0,consts:[[`p-title`,`Primeiros passos`,1,`guides`,`app-portal`],[`id`,`pre-requisitos`],[`id`,`passo-1-crie-o-seu-primeiro-projeto`],[`href`,`https://cli.angular.io/`],[`id`,`passo-1-1-instalando-as-dependencias`],[1,`language-json`],[`id`,`observacao-para-angular-19`],[`href`,`https://angular.dev/tools/cli/build-system-migration`],[`id`,`passo-2-adicionando-o-pacote-po-ui-ng-components`],[`id`,`passo-3-rode-o-seu-projeto`],[`href`,`http://localhost:4200`],[1,`po-text-center`],[`src`,`./assets/graphics/app-running.png`,`width`,`660px`],[`id`,`e-agora`],[`href`,`/documentation/po-page-login`],[`href`,`/documentation/po-modal-password-recovery`],[`href`,`/documentation/po-page-blocked-user`],[`href`,`/documentation/po-page-dynamic-table`],[`href`,`/documentation`]],template:function(o,d){o&1&&(Jc(0,`po-page-default`,0)(1,`h3`,1),Mk(2,`Pré-requisitos`),Kg(),Jc(3,`p`),Mk(4,`Para começar a utilizar o `),Jc(5,`strong`),Mk(6,`PO UI`),Kg(),Mk(7,` é pré-requisito ter o `),Jc(8,`code`),Mk(9,`Node.js`),Kg(),Mk(10,` instalado (versão 24.22.1 e acima) e o seu gerenciador de pacote favorito na versão mais atual. Caso você ainda não tenha instalado o pacote `),Jc(11,`code`),Mk(12,`@angular/cli`),Kg(),Mk(13,`, instale-o via `),Jc(14,`code`),Mk(15,`npm`),Kg(),Mk(16,` ou `),Jc(17,`code`),Mk(18,`yarn`),Kg(),Mk(19,`.`),Kg(),Jc(20,`p`),Mk(21,`Instalando com npm:`),Kg(),Jc(22,`pre`)(23,`code`),Mk(24,`npm i -g @angular/cli@22
`),Kg()(),Jc(25,`p`),Mk(26,`Caso prefira instalar com o yarn:`),Kg(),Jc(27,`pre`)(28,`code`),Mk(29,`yarn global add @angular/cli@22
`),Kg()(),Jc(30,`h3`,2),Mk(31,`Passo 1 - Crie o seu primeiro projeto`),Kg(),Jc(32,`blockquote`)(33,`p`),Mk(34,`Caso você já tenha um projeto criado e deseje apenas incluir o `),Jc(35,`strong`),Mk(36,`Po`),Kg(),Mk(37,`, pule esta etapa e vá para o `),Jc(38,`strong`),Mk(39,`Passo 1.1`),Kg(),Mk(40,`.`),Kg()(),Jc(41,`p`),Mk(42,`O `),Jc(43,`a`,3),Mk(44,`Angular CLI`),Kg(),Mk(45,` se encarrega de construir toda estrutura inicial do projeto. Para isso, execute o seguinte comando:`),Kg(),Jc(46,`pre`)(47,`code`),Mk(48,`ng new my-po-project --skip-install
`),Kg()(),Jc(49,`blockquote`)(50,`p`),Mk(51,`O parâmetro `),Jc(52,`code`),Mk(53,`--skip-install`),Kg(),Mk(54,` permite criar o projeto, contudo, não instalará as dependências automaticamente.`),Kg()(),Jc(55,`h4`,4),Mk(56,`Passo 1.1 - Instalando as dependências`),Kg(),Jc(57,`p`),Mk(58,`Antes de executar a instalação ou inserir o `),Jc(59,`strong`),Mk(60,`Po`),Kg(),Mk(61,` no seu projeto existente, é necessário verificar as dependências do seu projeto, algumas delas precisam estar de acordo com a versão do `),Jc(62,`strong`),Mk(63,`Po`),Kg(),Mk(64,` e Angular (elas podem ser encontradas no arquivo `),Jc(65,`code`),Mk(66,`package.json`),Kg(),Mk(67,` localizado na raiz da aplicação).`),Kg(),Jc(68,`p`),Mk(69,`Veja abaixo a lista de dependências e as versões compatíveis, elas devem ser conferidas e se necessário, ajustadas no seu projeto.`),Kg(),Jc(70,`pre`)(71,`code`,5),Mk(72,`  "dependencies": {
    "@angular/common": "~22.2.1",
    "@angular/compiler": "~22.2.1",
    "@angular/core": "~22.2.1",
    "@angular/forms": "~22.2.1",
    "@angular/platform-browser": "~22.2.1",
    "@angular/router": "~22.2.1",
    "rxjs": "~7.8.1",
    "tslib": "^2.6.2",
    "zone.js": "~0.15.0"
    ...
  },
  "devDependencies": {
    "@angular-devkit/schematics": "~22.2.1",
    "@angular/build": "~22.2.1",
    "@angular/cli": "~22.2.1",
    "@angular/compiler-cli": "~22.2.1",
    ...
    "typescript": "~6.0.3"
  }
`),Kg()(),Jc(73,`p`),Mk(74,`Após verificar se estas dependências do seu projeto estão com as versões compatíveis declaradas acima, acesse a pasta raiz do seu projeto e execute o comando abaixo:`),Kg(),Jc(75,`p`),Mk(76,`Instalando com npm:`),Kg(),Jc(77,`pre`)(78,`code`),Mk(79,`npm install
`),Kg()(),Jc(80,`p`),Mk(81,`Caso prefira instalar com o yarn:`),Kg(),Jc(82,`pre`)(83,`code`),Mk(84,`yarn install
`),Kg()(),Jc(85,`h3`,6),Mk(86,`Observação para Angular 19+`),Kg(),Jc(87,`p`),Mk(88,`Em versões mais recentes do Angular, o projeto utiliza, por padrão, novo build system baseado em `),Jc(89,`strong`),Mk(90,`@angular/build`),Kg(),Mk(91,`. `),Kg(),Jc(92,`p`),Mk(93,`Verifique se o pacote está declarado em `),Jc(94,`strong`),Mk(95,`devDependencies`),Kg(),Mk(96,`. Além disso, valide no arquivo angular.json se o builder está configurado para `),Jc(97,`strong`),Mk(98,`@angular/build:`),Kg(),Mk(99,`*:`),Kg(),Jc(100,`pre`)(101,`code`),Mk(102,`"projects": {
  "app-name": {
    "architect": {
      "build": {
        "builder": "@angular/build:application"
      } ,
      "serve": {
        "builder": "@angular/build:dev-server"
      }
    }
  }
}
`),Kg()(),Jc(103,`p`),Mk(104,`Para maiores informações veja na documentação oficial do `),Jc(105,`a`,7),Mk(106,`Angular`),Kg(),Mk(107,`.`),Kg(),Jc(108,`h3`,8),Mk(109,`Passo 2 - Adicionando o pacote @po-ui/ng-components`),Kg(),Jc(110,`p`),Mk(111,`Utilizando o comando `),Jc(112,`code`),Mk(113,`ng add`),Kg(),Mk(114,` do `),Jc(115,`a`,3),Mk(116,`Angular CLI`),Kg(),Mk(117,`, vamos adicionar o `),Jc(118,`strong`),Mk(119,`Po`),Kg(),Mk(120,` em seu projeto e o mesmo se encarregará de configurar o tema, instalar o pacote e importar o módulo do `),Jc(121,`strong`),Mk(122,`Po`),Kg(),Mk(123,`. Além de importar também o modulo `),Jc(124,`strong`),Mk(125,`HttpClientModule`),Kg(),Mk(126,`.`),Kg(),Jc(127,`p`),Mk(128,`Execute o comando abaixo na pasta raiz do seu projeto:`),Kg(),Jc(129,`pre`)(130,`code`),Mk(131,`ng add @po-ui/ng-components@next
`),Kg()(),Jc(132,`blockquote`)(133,`p`),Mk(134,`Ao executar o comando acima, será perguntado se deseja incluir uma estrutura inicial em seu projeto com menu lateral, página e toolbar, utilizando componentes do `),Jc(135,`strong`),Mk(136,`Po`),Kg(),Mk(137,`, `),Jc(138,`strong`),Mk(139,`caso desejar, apenas informe: `),Jc(140,`code`),Mk(141,`Y`),Kg()(),Mk(142,`.`),Kg()(),Jc(143,`h3`,9),Mk(144,`Passo 3 - Rode o seu projeto`),Kg(),Jc(145,`p`),Mk(146,`Agora basta executar mais um comando para subir a aplicação e ver o seu projeto rodando no `),Jc(147,`em`),Mk(148,`browser`),Kg(),Mk(149,` ;).`),Kg(),Jc(150,`pre`)(151,`code`),Mk(152,`ng serve
`),Kg()(),Jc(153,`p`),Mk(154,`Abra o `),Jc(155,`em`),Mk(156,`browser`),Kg(),Mk(157,` e acesse a url `),Jc(158,`a`,10),Mk(159,`http://localhost:4200`),Kg(),Mk(160,`. Pronto! Se você escolheu incluir uma estrutura inicial em seu projeto, ele deve estar parecido com essa imagem:`),Kg(),Jc(161,`p`,11),_u(162,`img`,12),Kg(),_u(163,`hr`),Jc(164,`h3`,13),Mk(165,`E agora?`),Kg(),Jc(166,`p`),Mk(167,`Agora é só abrir seu `),Jc(168,`strong`),Mk(169,`editor / IDE`),Kg(),Mk(170,` favorito e começar a trabalhar no seu projeto.`),Kg(),Jc(171,`p`),Mk(172,`Caso você queira utilizar nossos componentes de templates, como o `),Jc(173,`strong`)(174,`a`,14),Mk(175,`po-page-login`),Kg()(),Mk(176,`, `),Jc(177,`strong`)(178,`a`,15),Mk(179,`po-modal-password-recovery`),Kg()(),Mk(180,`, `),Jc(181,`strong`)(182,`a`,16),Mk(183,`po-page-blocked-user`),Kg()(),Mk(184,`, `),Jc(185,`strong`)(186,`a`,17),Mk(187,`po-page-dynamic-table`),Kg()(),Mk(188,` entre outros, basta adicionar o pacote `),Jc(189,`code`),Mk(190,`@po-ui/ng-templates`),Kg(),Mk(191,` executando o comando abaixo:`),Kg(),Jc(192,`pre`)(193,`code`),Mk(194,`ng add @po-ui/ng-templates@next
`),Kg()(),Jc(195,`blockquote`)(196,`p`),Mk(197,`Ao executar este comando, será instalado o pacote `),Jc(198,`code`),Mk(199,`@po-ui/ng-templates`),Kg(),Mk(200,` e configurado o `),Jc(201,`code`),Mk(202,`PoTemplatesModules`),Kg(),Mk(203,` no `),Jc(204,`code`),Mk(205,`app.module`),Kg(),Mk(206,` somente se sua aplicação for configurada com módulos.`),Kg()(),Jc(207,`p`),Mk(208,`A partir dai o seu projeto está preparado para receber outros componentes do `),Jc(209,`strong`)(210,`a`,18),Mk(211,`Po`),Kg()(),Mk(212,`! \\o/`),Kg()())},dependencies:[Mze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var Q=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:257,vars:0,consts:[[`p-title`,`Guia de uso para Gráficos`,1,`guides`,`app-portal`],[`id`,`conteudo`],[`href`,`guides/guide-charts#area`],[`href`,`guides/guide-charts#bar`],[`href`,`guides/guide-charts#column`],[`href`,`guides/guide-charts#column-line`],[`href`,`guides/guide-charts#gauge-semicircle`],[`href`,`guides/guide-charts#line`],[`href`,`guides/guide-charts#pie`],[`href`,`guides/guide-charts#donut`],[`href`,`guides/guide-charts#radar`],[`href`,`guides/guide-charts#guide-colors`],[`id`,`area`],[`id`,`grafico-de-area-area-chart`],[`id`,`quando-usar`],[`id`,`bar`],[`id`,`grafico-de-barra-bar-chart`],[`id`,`quando-usar-2`],[`id`,`boas-praticas`],[`id`,`column`],[`id`,`grafico-de-coluna-column-chart`],[`id`,`quando-usar-3`],[`id`,`boas-praticas-2`],[`id`,`column-line`],[`id`,`grafico-de-pareto-coluna-com-linha-column-and-line-chart`],[`id`,`quando-usar-4`],[`id`,`gauge-semicircle`],[`id`,`grafico-de-gauge-semicircular-semi-circle-gauge-chart`],[`id`,`quando-usar-5`],[`id`,`line`],[`id`,`grafico-de-linha-line-chart`],[`id`,`quando-usar-6`],[`id`,`boas-praticas-3`],[`id`,`pie`],[`id`,`grafico-de-pizza-pie-chart`],[`id`,`quando-usar-7`],[`id`,`boas-praticas-4`],[`id`,`donut`],[`id`,`grafico-de-rosca-donut-chart`],[`id`,`quando-usar-8`],[`id`,`boas-praticas-5`],[`id`,`radar`],[`id`,`grafico-de-radar-radar-chart`],[`id`,`quando-usar-9`],[`id`,`guide-colors`],[`id`,`guia-de-cores`],[`id`,`boas-praticas-6`],[`id`,`evite`],[`id`,`opcoes-de-combinacao-de-cores`]],template:function(o,d){o&1&&(Jc(0,`po-page-default`,0)(1,`p`),Mk(2,`Este guia tem o objetivo de informar práticas de uso para cada tipo de gráfico do PO UI, o que devemos evitar ao utilizar determinado gráfico e também as boas práticas relacionadas às cores nos gráficos.`),Kg(),Jc(3,`p`),Mk(4,`Gráficos em geral têm a função de garantir que as pessoas de qualquer cultura ou país tenham entendimento claro para tomar as melhores decisões com base nas suas visualizações.`),Kg(),Jc(5,`h2`,1),Mk(6,`Conteúdo`),Kg(),Jc(7,`ul`)(8,`li`)(9,`a`,2),Mk(10,`Gráfico de área`),Kg()(),Jc(11,`li`)(12,`a`,3),Mk(13,`Gráfico de barra`),Kg()(),Jc(14,`li`)(15,`a`,4),Mk(16,`Gráfico de coluna`),Kg()(),Jc(17,`li`)(18,`a`,5),Mk(19,`Gráfico de coluna com linha`),Kg()(),Jc(20,`li`)(21,`a`,6),Mk(22,`Gráfico de gauge semicircular`),Kg()(),Jc(23,`li`)(24,`a`,7),Mk(25,`Gráfico de linha`),Kg()(),Jc(26,`li`)(27,`a`,8),Mk(28,`Gráfico de pizza`),Kg()(),Jc(29,`li`)(30,`a`,9),Mk(31,`Gráfico de rosca`),Kg()(),Jc(32,`li`)(33,`a`,10),Mk(34,`Gráfico de radar`),Kg()(),Jc(35,`li`)(36,`a`,11),Mk(37,`Guia de cores`),Kg()()(),_u(38,`br`),Jc(39,`p`),_u(40,`a`,12),Kg(),Jc(41,`h2`,13),Mk(42,`Gráfico de área (Area Chart)`),Kg(),Jc(43,`p`),Mk(44,`O gráfico de área combina o gráfico de linhas e o gráfico de barras para mostrar como os valores numéricos de um ou mais grupos mudam ao longo da progressão de uma segunda variável, normalmente a do tempo. Um gráfico de área se distingue de um gráfico de linha pela adição de sombreamento entre as linhas e uma linha de base, como em um gráfico de barras.`),Kg(),Jc(45,`p`),Mk(46,`A versão disponível no PO UI é o gráfico de área de sobreposição ou em inglês, `),Jc(47,`em`),Mk(48,`overlapping area chart`),Kg(),Mk(49,`.`),Kg(),Jc(50,`h4`,14),Mk(51,`Quando usar?`),Kg(),Jc(52,`ul`)(53,`li`),Mk(54,`Para representar os totais acumulados usando números ou porcentagens (gráficos de área empilhados, neste caso) ao longo do tempo;`),Kg(),Jc(55,`li`),Mk(56,`Mostrar tendências ao longo do tempo entre os atributos relacionados.`),Kg()(),_u(57,`br`),Jc(58,`p`),_u(59,`a`,15),Kg(),Jc(60,`h2`,16),Mk(61,`Gráfico de barra (Bar Chart)`),Kg(),Jc(62,`p`),Mk(63,`O gráfico de barra é organizado de forma temporal ou por tópicos ao longo do eixo vertical (y) e seus valores têm variação ao longo do eixo vertical (x). É uma variação direta da estrutura do gráfico de coluna.`),Kg(),Jc(64,`h4`,17),Mk(65,`Quando usar?`),Kg(),Jc(66,`ul`)(67,`li`),Mk(68,`Demonstrar as variações de dados em um período de tempo;`),Kg(),Jc(69,`li`),Mk(70,`Ilustrar comparações entre tópicos diretamente relacionados.`),Kg()(),Jc(71,`h4`,18),Mk(72,`Boas práticas`),Kg(),Jc(73,`p`),Mk(74,`Prefira utilizar o gráfico de barra quando for necessário muitos itens temporais ou de tópicos.`),Kg(),_u(75,`br`),Jc(76,`p`),_u(77,`a`,19),Kg(),Jc(78,`h2`,20),Mk(79,`Gráfico de coluna (Column Chart)`),Kg(),Jc(80,`p`),Mk(81,`O gráfico de coluna é organizado de forma temporal ou por tópicos ao longo do eixo horizontal (x) e seus valores têm variação ao longo do eixo vertical (y).`),Kg(),Jc(82,`h4`,21),Mk(83,`Quando usar?`),Kg(),Jc(84,`ul`)(85,`li`),Mk(86,`Demonstrar as variações de dados em um período de tempo;`),Kg(),Jc(87,`li`),Mk(88,`Ilustrar comparações entre tópicos diretamente relacionados.`),Kg()(),Jc(89,`h4`,22),Mk(90,`Boas práticas`),Kg(),Jc(91,`p`),Mk(92,`Prefira utilizar o gr\xE1fico de barras caso seja necess\xE1rio muitos itens,
pois o gr\xE1fico de coluna cont\xE9m menos espa\xE7o para que sejam exibidos os r\xF3tulos no eixo horizontal.`),Kg(),_u(93,`br`),Jc(94,`p`),_u(95,`a`,23),Kg(),Jc(96,`h2`,24),Mk(97,`Gráfico de pareto / coluna com linha (Column and Line Chart)`),Kg(),Jc(98,`p`),Mk(99,`O gráfico de pareto contém colunas e um gráfico de linhas, onde os valores individuais são representados em ordem decrescente por colunas e o total acumulado é representado pela linha.`),Kg(),Jc(100,`h4`,25),Mk(101,`Quando usar?`),Kg(),Jc(102,`ul`)(103,`li`),Mk(104,`Destacar o mais importante entre um conjunto de fatores, por exemplo:`),Jc(105,`ul`)(106,`li`),Mk(107,`Sempre que uma equipe não estiver certa sobre onde direcionar seus esforços de melhoria deve usar uma análise de pareto.`),Kg()()()(),_u(108,`br`),Jc(109,`p`),_u(110,`a`,26),Kg(),Jc(111,`h2`,27),Mk(112,`Gráfico de gauge semicircular (Semi Circle Gauge Chart)`),Kg(),Jc(113,`p`),Mk(114,`O gráfico de gauge semicircular é uma variação direta do gauge tradicional.`),Kg(),Jc(115,`h4`,28),Mk(116,`Quando usar?`),Kg(),Jc(117,`ul`)(118,`li`),Mk(119,`Demonstrar cálculos de desempenho por um certo período (em andamento ou como histórico), por exemplo: `),Jc(120,`ul`)(121,`li`),Mk(122,`Desempenho de vendas de uma equipe em relação a meta.`),Kg()()()(),_u(123,`br`),Jc(124,`p`),_u(125,`a`,29),Kg(),Jc(126,`h2`,30),Mk(127,`Gráfico de linha (Line Chart)`),Kg(),Jc(128,`p`),Mk(129,`O gráfico de linha pode exibir dados contínuos ao longo de um período de tempo, definidos em relação a uma escala comum. Os dados de categorias são comumente distribuídos uniformemente ao longo do eixo horizontal e todos os dados de valores que tem variação são subdivididos igualmente ao longo do eixo vertical. `),Kg(),Jc(130,`h4`,31),Mk(131,`Quando usar?`),Kg(),Jc(132,`ul`)(133,`li`),Mk(134,`Quando deseja exibir tendências nos dados ao longo do tempo, por exemplo:`),Jc(135,`ul`)(136,`li`),Mk(137,`Demonstrar a alteração no preço das ações em um período de tempo;`),Kg(),Jc(138,`li`),Mk(139,`Quantidade de visitas em um site durante um mês.`),Kg()()()(),Jc(140,`h4`,32),Mk(141,`Boas práticas`),Kg(),Jc(142,`ul`)(143,`li`),Mk(144,`Ideal para demonstrar a frequência em que ocorrem os dados;`),Kg(),Jc(145,`li`),Mk(146,`Não é recomendado para caso de distribuição de dados, neste caso pode-se utilizar o gráfico de coluna.`),Kg()(),_u(147,`br`),Jc(148,`p`),_u(149,`a`,33),Kg(),Jc(150,`h2`,34),Mk(151,`Gráfico de pizza (Pie Chart)`),Kg(),Jc(152,`p`),Mk(153,`O gráfico de pizza ou torta é adequado para mostrar partes divididas de um todo, pois representa fatias que somadas compõem 100% da forma.`),Kg(),Jc(154,`h4`,35),Mk(155,`Quando usar?`),Kg(),Jc(156,`ul`)(157,`li`),Mk(158,`Para demonstrar proporções, por exemplo:`),Jc(159,`ul`)(160,`li`),Mk(161,`Porcentagem de orçamento gasto em diferentes departamentos;`),Kg(),Jc(162,`li`),Mk(163,`Respostas de pesquisa;`),Kg(),Jc(164,`li`),Mk(165,`Divisão de tempo em uma atividade.`),Kg()()()(),Jc(166,`h4`,36),Mk(167,`Boas práticas`),Kg(),Jc(168,`ul`)(169,`li`),Mk(170,`Não é recomendado para comparar dados;`),Kg(),Jc(171,`li`),Mk(172,`Evite gráficos de pizza com mais de cinco partes, pois isso interfere diretamente no entendimento do gráfico ou visualização dos valores.`),Kg()(),_u(173,`br`),Jc(174,`p`),_u(175,`a`,37),Kg(),Jc(176,`h2`,38),Mk(177,`Gráfico de rosca (Donut Chart)`),Kg(),Jc(178,`p`),Mk(179,`O gráfico de rosca é adequado para mostrar partes de um todo, pois representa fatias que somadas compõem 100% de algo. É uma variação visual do gráfico de pizza.`),Kg(),Jc(180,`h4`,39),Mk(181,`Quando usar?`),Kg(),Jc(182,`ul`)(183,`li`),Mk(184,`Para demonstrar proporções comparativas em porcentagem ou quantidade.`),Kg()(),Jc(185,`h4`,40),Mk(186,`Boas práticas:`),Kg(),Jc(187,`p`),Mk(188,`O valor mínimo de visualização deve ser de 10% do total para demonstrar as informações no gráfico, caso tenha mais de um item abaixo do valor de 10%, junte-os em uma sessão agrupada "Outros" e especifique o conteúdo que o compõe na legenda.`),Kg(),_u(189,`br`),Jc(190,`p`),_u(191,`a`,41),Kg(),Jc(192,`h2`,42),Mk(193,`Gráfico de radar (Radar Chart)`),Kg(),Jc(194,`p`),Mk(195,`O gráfico de radar é utilizado para visualizar e comparar o desempenho de diferentes itens em múltiplas categorias.`),Kg(),Jc(196,`h4`,43),Mk(197,`Quando usar?`),Kg(),Jc(198,`ul`)(199,`li`),Mk(200,`Para demonstrar cenários onde é preciso avaliar e apresentar um "perfil" de desempenho de algo/alguém.`),Kg()(),_u(201,`br`),Jc(202,`p`),_u(203,`a`,44),Kg(),Jc(204,`h2`,45),Mk(205,`Guia de cores`),Kg(),Jc(206,`h4`,46),Mk(207,`Boas práticas`),Kg(),Jc(208,`ul`)(209,`li`),Mk(210,`Use uma única cor para representar o mesmo tipo de dados. Por exemplo: para representar vendas mês a mês em um gráfico de barras, use uma única cor. Outro exemplo: para comparar as vendas do ano passado com as do ano vigente em um gráfico agrupado, prefira utilizar uma cor diferente para cada ano;`),Kg(),Jc(211,`li`),Mk(212,`Certifique-se de que existe contraste suficiente entre as cores. Por exemplo: utilize cores com contraste para facilitar a assimilação do usuário referente às informações traduzidas no gráfico;`),Kg(),Jc(213,`li`),Mk(214,`Escolha cores adequadamente. Algumas cores se destacam mais do que outras, dando peso desnecessário ou direcionamento errado aos dados.`),Kg(),Jc(215,`li`),Mk(216,`Prefira utilizar uma única cor com sombra variável ou um espectro entre duas cores análogas para mostrar intensidade;`),Kg(),Jc(217,`li`),Mk(218,`Destaque a informação mais relevante com cores fortes e utilize a mesma com tons com menos contraste para complementar o gráfico.`),Kg()(),Jc(219,`h4`,47),Mk(220,`Evite`),Kg(),Jc(221,`ul`)(222,`li`),Mk(223,`Não use vermelho para números positivos ou verde para números negativos. Essas associações de cores são decisivas na interpretação do usuário;`),Kg(),Jc(224,`li`),Mk(225,`Não utilize combinações de cores de alto contraste, como vermelho e verde ou azul e amarelo (somente com direcionamento da marca);`),Kg(),Jc(226,`li`),Mk(227,`Não utilize cores com baixo contraste, como azul claro e cinza (somente com direcionamento da marca).`),Kg()(),Jc(228,`h4`,48),Mk(229,`Opções de combinação de cores`),Kg(),Jc(230,`p`),Mk(231,`Modelos de cores que podem combinar e facilitar a visualização dos gráficos: `),Kg(),Jc(232,`ul`)(233,`li`)(234,`p`),Mk(235,`Cinza e azul:`),Kg(),Jc(236,`ul`)(237,`li`),Mk(238,`Para informações de atual e passado, mas atenção com o nível do contraste para que sejam legíveis as diferenças entre os dados;`),Kg()()(),Jc(239,`li`)(240,`p`),Mk(241,`Azul e laranja:`),Kg(),Jc(242,`ul`)(243,`li`),Mk(244,`Azul para indicação de dados positivos e laranja para negativos;`),Kg()()(),Jc(245,`li`)(246,`p`),Mk(247,`Verde e vermelho:`),Kg(),Jc(248,`ul`)(249,`li`),Mk(250,`Verde sinaliza dados positivo e vermelho os negativos;`),Kg()()(),Jc(251,`li`)(252,`p`),Mk(253,`Azul, cinza e verde:`),Kg(),Jc(254,`ul`)(255,`li`),Mk(256,`Para uma composição de três cores.`),Kg()()()()())},dependencies:[Mze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var X=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:432,vars:0,consts:[[`p-title`,`Migração do PO UI para V2`,1,`guides`,`app-portal`],[`id`,`atualizando-o-projeto-com-angular`],[`href`,`https://update.angular.io/`],[`href`,`https://angular.io/cli/update`],[`id`,`atualizando-o-po-ui`],[`href`,`guides/migration-poui-v2#components`],[`href`,`guides/migration-poui-v2#sync`],[`id`,`components`],[`id`,`ng-update-po-ui-ng-components`],[`id`,`breaking-changes`],[1,`po-text-color-neutral-dark-40`],[`id`,`depreciacao`],[`href`,`http://po-ui.io/documentation/po-page-change-password`],[`href`,`http://po-ui.io/documentation/po-button-group`],[`href`,`http://po-ui.io/documentation/po-menu`],[`href`,`http://po-ui.io/documentation/po-menu-panel`],[`href`,`http://po-ui.io/documentation/po-navbar`],[`href`,`http://po-ui.io/documentation/po-page-list`],[`href`,`http://po-ui.io/documentation/po-page-default`],[`href`,`http://po-ui.io/documentation/po-popup`],[`href`,`http://po-ui.io/documentation/po-step`],[`href`,`http://po-ui.io/documentation/po-table`],[`href`,`http://po-ui.io/documentation/po-toolbar`],[`id`,`sync`],[`id`,`ng-update-po-ui-ng-sync`],[`id`,`breaking-changes-2`],[`id`,`depreciacao-2`]],template:function(o,d){o&1&&(Jc(0,`po-page-default`,0)(1,`p`),Mk(2,`Este guia contém informações sobre a migração do seu projeto para a versão 2 do PO UI.`),Kg(),Jc(3,`h2`,1),Mk(4,`Atualizando o projeto com Angular`),Kg(),Jc(5,`p`),Mk(6,`Antes de atualizar a vers\xE3o do PO UI, \xE9 importante que voc\xEA tenha atualizado o seu projeto para
o Angular 9, executando o comando abaixo:`),Kg(),Jc(7,`p`)(8,`code`),Mk(9,`ng update @angular/cli@9 @angular/core@9`),Kg()(),Jc(10,`blockquote`)(11,`p`),Mk(12,`Para realizar a migração completa e avaliar se não precisa fazer alguma alteração veja o `),Jc(13,`a`,2)(14,`strong`),Mk(15,`Guia de Upgrade do Angular`),Kg()(),Mk(16,`.`),Kg()(),Jc(17,`p`),Mk(18,`O nosso pacote anterior possu\xEDa depend\xEAncias que eram compat\xEDveis com a vers\xE3o 8 do Angular, portanto
pode ser preciso utilizar a `),Jc(19,`em`),Mk(20,`flag`),Kg(),Jc(21,`code`),Mk(22,`--force`),Kg(),Mk(23,` para que o Angular realize a migra\xE7\xE3o do seu projeto, ignorando a vers\xE3o das depend\xEAncias.
Para avaliar as `),Jc(24,`em`),Mk(25,`flags`),Kg(),Mk(26,` disponíveis veja a `),Jc(27,`a`,3)(28,`strong`),Mk(29,`documentação do ng update`),Kg()(),Mk(30,`.`),Kg(),Jc(31,`h2`,4),Mk(32,`Atualizando o PO UI`),Kg(),Jc(33,`p`),Mk(34,`Para facilitar a migração do seu projeto para o PO UI v2, implementamos o `),Jc(35,`code`),Mk(36,`ng update`),Kg(),Mk(37,` nos pacotes abaixo:`),Kg(),Jc(38,`ul`)(39,`li`)(40,`a`,5)(41,`strong`),Mk(42,`@po-ui/ng-components`),Kg()()(),Jc(43,`li`)(44,`a`,6)(45,`strong`),Mk(46,`@po-ui/ng-sync`),Kg()()()(),Jc(47,`p`),Mk(48,`O `),Jc(49,`code`),Mk(50,`ng update`),Kg(),Mk(51,` ajudará nas alterações necessárias para seu projeto seguir atualizado, que são elas:`),Kg(),Jc(52,`ul`)(53,`li`),Mk(54,`Alterar maioria dos conteúdos relacionados ao `),Jc(55,`strong`),Mk(56,`BREAKING CHANGES`),Kg(),Mk(57,` e `),Jc(58,`strong`),Mk(59,`Depreciações`),Kg(),Mk(60,` no seu projeto;`),Kg(),Jc(61,`li`),Mk(62,`Atualizar as versões dos pacotes `),Jc(63,`code`),Mk(64,`@po-ui`),Kg(),Mk(65,`.`),Kg()(),Jc(66,`p`),Mk(67,`Mas é importante conhecer os `),Jc(68,`strong`),Mk(69,`BREAKING CHANGES`),Kg(),Mk(70,` e `),Jc(71,`strong`),Mk(72,`Depreciações`),Kg(),Mk(73,` para realizar as alterações manualmente caso necessário.`),Kg(),Jc(74,`p`),_u(75,`a`,7),Kg(),Jc(76,`h3`,8),Mk(77,`ng update @po-ui/ng-components`),Kg(),Jc(78,`p`),Mk(79,`Para poder utilizar o comando e realizar a migração, execute os comandos abaixo:`),Kg(),Jc(80,`p`)(81,`code`),Mk(82,`npm i --save @po-ui/ng-components@2`),Kg()(),Jc(83,`p`)(84,`code`),Mk(85,`ng update @po-ui/ng-components --from 1 --migrate-only`),Kg()(),Jc(86,`h4`,9),Mk(87,`Breaking Changes`),Kg(),Jc(88,`p`),Mk(89,`Nesta nova versão o nome dos pacotes foram alterados, de acordo com a tabela abaixo:`),Kg(),Jc(90,`table`)(91,`thead`)(92,`tr`)(93,`th`,10),Mk(94,`Pacotes`),Kg(),Jc(95,`th`,10),Mk(96,`Substituído por`),Kg()()(),Jc(97,`tbody`)(98,`tr`)(99,`td`)(100,`code`),Mk(101,`@portinari/portinari-ui`),Kg()(),Jc(102,`td`)(103,`code`),Mk(104,`@po-ui/ng-components`),Kg()()(),Jc(105,`tr`)(106,`td`)(107,`code`),Mk(108,`@portinari/portinari-templates`),Kg()(),Jc(109,`td`)(110,`code`),Mk(111,`@po-ui/ng-templates`),Kg()()(),Jc(112,`tr`)(113,`td`)(114,`code`),Mk(115,`@portinari/portinari-code-editor`),Kg()(),Jc(116,`td`)(117,`code`),Mk(118,`@po-ui/ng-code-editor`),Kg()()(),Jc(119,`tr`)(120,`td`)(121,`code`),Mk(122,`@portinari/tslint`),Kg()(),Jc(123,`td`)(124,`code`),Mk(125,`@po-ui/ng-tslint`),Kg()()(),Jc(126,`tr`)(127,`td`)(128,`code`),Mk(129,`@portinari/style`),Kg()(),Jc(130,`td`)(131,`code`),Mk(132,`@po-ui/style`),Kg()()()()(),Jc(133,`p`),Mk(134,`Também foi realizado remoções das propriedades, onde passam a valer as novas definições, veja a tabela abaixo:`),Kg(),Jc(135,`table`)(136,`thead`)(137,`tr`)(138,`th`,10),Mk(139,`Componentes`),Kg(),Jc(140,`th`,10),Mk(141,`Anteriormente`),Kg(),Jc(142,`th`,10),Mk(143,`Substituído por`),Kg()()(),Jc(144,`tbody`)(145,`tr`)(146,`td`)(147,`code`),Mk(148,`PoFieldModule`),Kg()(),Jc(149,`td`)(150,`code`),Mk(151,`[p-focus]`),Kg()(),Jc(152,`td`)(153,`code`),Mk(154,`[p-auto-focus]`),Kg()()(),Jc(155,`tr`)(156,`td`)(157,`code`),Mk(158,`PoHttpResquestInterceptor`),Kg()(),Jc(159,`td`)(160,`code`),Mk(161,`X-Portinari-Screen-Lock`),Kg()(),Jc(162,`td`)(163,`code`),Mk(164,`X-PO-Screen-Lock`),Kg()()(),Jc(165,`tr`)(166,`td`)(167,`code`),Mk(168,`PoHttpResquestInterceptor`),Kg()(),Jc(169,`td`)(170,`code`),Mk(171,`X-Portinari-No-Count-Pending-Requests`),Kg()(),Jc(172,`td`)(173,`code`),Mk(174,`X-PO-No-Count-Pending-Requests`),Kg()()(),Jc(175,`tr`)(176,`td`)(177,`code`),Mk(178,`PoHttpInterceptor`),Kg()(),Jc(179,`td`)(180,`code`),Mk(181,`X-Portinari-No-Message`),Kg()(),Jc(182,`td`)(183,`code`),Mk(184,`X-PO-No-Message`),Kg()()(),Jc(185,`tr`)(186,`td`)(187,`code`),Mk(188,`PoPageEdit`),Kg()(),Jc(189,`td`,10),Mk(190,`Possuir a ação `),Jc(191,`code`),Mk(192,`cancel() {}`),Kg(),Mk(193,` no TS`),Kg(),Jc(194,`td`)(195,`code`),Mk(196,`(p-cancel)`),Kg()()(),Jc(197,`tr`)(198,`td`)(199,`code`),Mk(200,`PoPageEdit`),Kg()(),Jc(201,`td`,10),Mk(202,`Possuir a ação `),Jc(203,`code`),Mk(204,`save() {}`),Kg(),Mk(205,` no TS`),Kg(),Jc(206,`td`)(207,`code`),Mk(208,`(p-save)`),Kg()()(),Jc(209,`tr`)(210,`td`)(211,`code`),Mk(212,`PoPageEdit`),Kg()(),Jc(213,`td`,10),Mk(214,`Possuir a ação `),Jc(215,`code`),Mk(216,`saveNew() {}`),Kg(),Mk(217,` no TS`),Kg(),Jc(218,`td`)(219,`code`),Mk(220,`(p-save-new)`),Kg()()(),Jc(221,`tr`)(222,`td`)(223,`code`),Mk(224,`PoPageDetail`),Kg()(),Jc(225,`td`,10),Mk(226,`Possuir a ação `),Jc(227,`code`),Mk(228,`back() {}`),Kg(),Mk(229,` no TS`),Kg(),Jc(230,`td`)(231,`code`),Mk(232,`(p-back)`),Kg()()(),Jc(233,`tr`)(234,`td`)(235,`code`),Mk(236,`PoPageDetail`),Kg()(),Jc(237,`td`,10),Mk(238,`Possuir a ação `),Jc(239,`code`),Mk(240,`edit() {}`),Kg(),Mk(241,` no TS`),Kg(),Jc(242,`td`)(243,`code`),Mk(244,`(p-edit)`),Kg()()(),Jc(245,`tr`)(246,`td`)(247,`code`),Mk(248,`PoPageDetail`),Kg()(),Jc(249,`td`,10),Mk(250,`Possuir a ação `),Jc(251,`code`),Mk(252,`remove() {}`),Kg(),Mk(253,` no TS`),Kg(),Jc(254,`td`)(255,`code`),Mk(256,`(p-remove)`),Kg()()()()(),Jc(257,`h4`,11),Mk(258,`Depreciação`),Kg(),Jc(259,`p`),Mk(260,`Nas versões `),Jc(261,`code`),Mk(262,`1.x.x`),Kg(),Mk(263,` era possível passar funções para nossas propriedades sem informar o `),Jc(264,`code`),Mk(265,`.bind(this)`),Kg(),Mk(266,`,
pois captur\xE1vamos o componente pai e consegu\xEDamos acessar o contexto corrente. Por\xE9m depreciamos este comportamento,
agora necessita passar a refer\xEAncia da fun\xE7\xE3o utilizando o `),Jc(267,`code`),Mk(268,`.bind(this)`),Kg(),Mk(269,` para que o mesmo execute a função no contexto invocado, tanto em funções dentro de `),Jc(270,`em`),Mk(271,`arrays`),Kg(),Mk(272,` quanto em funções via `),Jc(273,`em`),Mk(274,`property bind`),Kg(),Mk(275,`.`),Kg(),Jc(276,`p`),Mk(277,`Os componentes que sofrerão esta depreciação, são:`),Kg(),Jc(278,`ul`)(279,`li`)(280,`a`,12)(281,`strong`),Mk(282,`PageChangePassword`),Kg()()(),Jc(283,`li`)(284,`a`,13)(285,`strong`),Mk(286,`ButtonGroup`),Kg()()(),Jc(287,`li`)(288,`a`,14)(289,`strong`),Mk(290,`Menu`),Kg()()(),Jc(291,`li`)(292,`a`,15)(293,`strong`),Mk(294,`MenuPanel`),Kg()()(),Jc(295,`li`)(296,`a`,16)(297,`strong`),Mk(298,`Navbar`),Kg()()(),Jc(299,`li`)(300,`a`,17)(301,`strong`),Mk(302,`PageList`),Kg()()(),Jc(303,`li`)(304,`a`,18)(305,`strong`),Mk(306,`PageDefault`),Kg()()(),Jc(307,`li`)(308,`a`,19)(309,`strong`),Mk(310,`Popup`),Kg()()(),Jc(311,`li`)(312,`a`,20)(313,`strong`),Mk(314,`Stepper`),Kg()()(),Jc(315,`li`)(316,`a`,21)(317,`strong`),Mk(318,`Table`),Kg()()(),Jc(319,`li`)(320,`a`,22)(321,`strong`),Mk(322,`Toolbar`),Kg()()()(),Jc(323,`p`),Mk(324,`Abaixo listamos dois exemplos comparativos com essas depreciações em alguns componentes.`),Kg(),Jc(325,`p`),Mk(326,`Exemplo via funções dentro de arrays:`),Kg(),Jc(327,`ul`)(328,`li`),Mk(329,`Antes:`),Kg()(),Jc(330,`pre`)(331,`code`),Mk(332,`<po-page-default p-title="P\xE1gina" [p-actions]="actions">
   ...
</po-page-default>
`),Kg()(),Jc(333,`pre`)(334,`code`),Mk(335,`export class ExampleFunction () {

  actions: Array<PoPageAction> = [
    { label: 'Adicionar', action: this.add }
  ]

  add() {
    ...
  }
}
`),Kg()(),Jc(336,`ul`)(337,`li`),Mk(338,`Agora:`),Kg()(),Jc(339,`pre`)(340,`code`),Mk(341,`<po-page-default p-title="P\xE1gina" [p-actions]="actions">
   ...
</po-page-default>
`),Kg()(),Jc(342,`pre`)(343,`code`),Mk(344,`export class ExampleFunction () {

  actions: Array<PoPageAction> = [
    { label: 'Adicionar', action: this.add.bind(this) }
  ]

  add() {
    ...
  }
}
`),Kg()(),Jc(345,`p`),Mk(346,`Exemplo funções via `),Jc(347,`em`),Mk(348,`property bind`),Kg()(),Jc(349,`ul`)(350,`li`),Mk(351,`Antes:`),Kg()(),Jc(352,`pre`)(353,`code`),Mk(354,`<po-stepper>
  <po-step p-label="Personal" [p-can-active-next-step]="canActiveNextStep">
  </po-step>
</po-stepper>
`),Kg()(),Jc(355,`ul`)(356,`li`),Mk(357,`Agora:`),Kg()(),Jc(358,`pre`)(359,`code`),Mk(360,`<po-stepper>
  <po-step p-label="Personal" [p-can-active-next-step]="canActiveNextStep.bind(this)">
  </po-step>
</po-stepper>
`),Kg()(),Jc(361,`p`),_u(362,`a`,23),Kg(),Jc(363,`h3`,24),Mk(364,`ng update @po-ui/ng-sync`),Kg(),Jc(365,`p`),Mk(366,`Para poder utilizar o comando e realizar a migração, execute os comandos abaixo:`),Kg(),Jc(367,`p`)(368,`code`),Mk(369,`npm i --save @po-ui/ng-sync@2`),Kg()(),Jc(370,`p`)(371,`code`),Mk(372,`ng update @po-ui/ng-sync --from 1 --migrate-only`),Kg()(),Jc(373,`h4`,25),Mk(374,`Breaking Changes`),Kg(),Jc(375,`p`),Mk(376,`Nesta nova versão o nome dos pacotes foram alterados, de acordo com a tabela abaixo:`),Kg(),Jc(377,`table`)(378,`thead`)(379,`tr`)(380,`th`,10),Mk(381,`Pacotes`),Kg(),Jc(382,`th`,10),Mk(383,`Substituído por`),Kg()()(),Jc(384,`tbody`)(385,`tr`)(386,`td`)(387,`code`),Mk(388,`@portinari/portinari-sync`),Kg()(),Jc(389,`td`)(390,`code`),Mk(391,`@po-ui/ng-sync`),Kg()()(),Jc(392,`tr`)(393,`td`)(394,`code`),Mk(395,`@portinari/portinari-storage`),Kg()(),Jc(396,`td`)(397,`code`),Mk(398,`@po-ui/ng-storage`),Kg()()(),Jc(399,`tr`)(400,`td`)(401,`code`),Mk(402,`@portinari/tslint`),Kg()(),Jc(403,`td`)(404,`code`),Mk(405,`@po-ui/ng-tslint`),Kg()()()()(),Jc(406,`h4`,26),Mk(407,`Depreciação`),Kg(),Jc(408,`p`),Mk(409,`Também foi realizada uma depreciação, onde ainda será aceito o modelo anterior, porém na versão 3 será removido.`),Kg(),Jc(410,`p`),Mk(411,`A depreciação ocorreu no retorno do `),Jc(412,`code`),Mk(413,`Endpoint de sincronização`),Kg(),Mk(414,`, onde anteriomente deveria retornar a data da \xFAltima sincroniza\xE7\xE3o
na propriedade `),Jc(415,`code`),Mk(416,`portinari_sync_date`),Kg(),Mk(417,`, que agora passa a ser `),Jc(418,`code`),Mk(419,`po_sync_date`),Kg(),Mk(420,`, veja o antes e depois:`),Kg(),Jc(421,`pre`)(422,`code`),Mk(423,`{
  "hasNext": false,
  "items": [],
  "portinari_sync_date": "2018-10-08T13:57:55.008Z"
}
`),Kg()(),Jc(424,`p`),Mk(425,`A propriedade `),Jc(426,`code`),Mk(427,`portinari_sync_date`),Kg(),Mk(428,` foi depreciada e o nova propriedade é:`),Kg(),Jc(429,`pre`)(430,`code`),Mk(431,`{
  "hasNext": false,
  "items": [],
  "po_sync_date": "2018-10-08T13:57:55.008Z"
}
`),Kg()()())},dependencies:[Mze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var J=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:233,vars:0,consts:[[`p-title`,`Migração do PO UI`,1,`guides`,`app-portal`],[`href`,`guides/migration-poui-v2`],[`id`,`atualizando-o-projeto-com-angular`],[`href`,`https://github.com/po-ui/po-angular/wiki#vers%C3%B5es-angular-x-po-ui`],[`href`,`https://update.angular.io/`],[`href`,`https://angular.io/cli/update`],[`id`,`atualizando-o-po-ui`],[`href`,`guides/migration-poui#components`],[`href`,`guides/migration-poui#sync`],[`id`,`components`],[`id`,`ng-update-po-ui-ng-components`],[`href`,`https://github.com/po-ui/po-angular/blob/master/CHANGELOG.md`],[`id`,`sync`],[`id`,`ng-update-po-ui-ng-sync`],[1,`language-json`],[`id`,`depreciacoes-e-breaking-changes`],[`href`,`guides/deprecations`]],template:function(o,d){o&1&&(Jc(0,`po-page-default`,0)(1,`p`),Mk(2,`Este guia contém informações sobre a migração do seu projeto para a versão mais atualizada do PO UI.`),Kg(),Jc(3,`blockquote`)(4,`p`),Mk(5,`Caso você não estiver utilizando a versão anterior da mais atualizada, é importante realizar a migração para a mesma.`),Kg()(),Jc(6,`blockquote`)(7,`p`),Mk(8,`Se seu projeto estiver na v1, veja este Guia de Migração do PO UI para `),Jc(9,`a`,1)(10,`strong`),Mk(11,`V2`),Kg()(),Mk(12,`.`),Kg()(),Jc(13,`h2`,2),Mk(14,`Atualizando o projeto com Angular`),Kg(),Jc(15,`p`),Mk(16,`Antes de atualizar a vers\xE3o do PO UI, \xE9 importante que voc\xEA tenha atualizado o seu projeto para
o Angular que o PO UI est\xE1 homologado, veja nossa
`),Jc(17,`a`,3),Mk(18,`tabela de compatibilidade`),Kg(),Mk(19,` em nosso Github Wiki.`),Kg(),Jc(20,`blockquote`)(21,`p`),Mk(22,`Caso o seu projeto não possua a dependência `),Jc(23,`code`),Mk(24,`@angular-devkit/schematics`),Kg(),Mk(25,`, realize a instalação do pacote para o nosso script de atualização funcionar corretamente:`),Kg()(),Jc(26,`pre`)(27,`code`),Mk(28,`npm install @angular-devkit/schematics --save-dev
`),Kg()(),Jc(29,`p`),Mk(30,`Para atualizar o Angular, execute o comando abaixo:`),Kg(),Jc(31,`pre`)(32,`code`),Mk(33,`ng update @angular/cli@<version> @angular/core@<version> --force
`),Kg()(),Jc(34,`p`),Mk(35,`Por exemplo:`),Kg(),Jc(36,`pre`)(37,`code`),Mk(38,`ng update @angular/cli@22 @angular/core@22 --force
`),Kg()(),Jc(39,`blockquote`)(40,`p`),Mk(41,`Para realizar a migração completa e avaliar se não precisa fazer alguma alteração veja o `),Jc(42,`a`,4)(43,`strong`),Mk(44,`Guia de Upgrade do Angular`),Kg()(),Mk(45,`.`),Kg()(),Jc(46,`p`),Mk(47,`O nosso pacote possu\xEDa depend\xEAncias que eram compat\xEDveis com a vers\xE3o anterior do Angular, portanto
devemos utilizar a `),Jc(48,`em`),Mk(49,`flag`),Kg(),Jc(50,`code`),Mk(51,`--force`),Kg(),Mk(52,` para que o Angular realize a migra\xE7\xE3o do seu projeto, ignorando a vers\xE3o das depend\xEAncias.
Para avaliar as `),Jc(53,`em`),Mk(54,`flags`),Kg(),Mk(55,` disponíveis veja a `),Jc(56,`a`,5)(57,`strong`),Mk(58,`documentação do ng update`),Kg()(),Mk(59,`.`),Kg(),Jc(60,`h2`,6),Mk(61,`Atualizando o PO UI`),Kg(),Jc(62,`p`),Mk(63,`Para facilitar a migração do seu projeto para o PO UI mais recente, implementamos o `),Jc(64,`code`),Mk(65,`ng update`),Kg(),Mk(66,` nos pacotes abaixo:`),Kg(),Jc(67,`ul`)(68,`li`)(69,`a`,7)(70,`strong`),Mk(71,`@po-ui/ng-components`),Kg()()(),Jc(72,`li`)(73,`a`,8)(74,`strong`),Mk(75,`@po-ui/ng-sync`),Kg()()()(),Jc(76,`p`),_u(77,`a`,9),Kg(),Jc(78,`h3`,10),Mk(79,`ng update @po-ui/ng-components`),Kg(),Jc(80,`p`),Mk(81,`Para realizar a migração, devemos executar o comando `),Jc(82,`code`),Mk(83,`ng update`),Kg(),Mk(84,`, conforme exemplo abaixo. Mas antes verifique se comitou os arquivos alterados pela migra\xE7\xE3o do Angular, se preferir voc\xEA pode utilizar a
`),Jc(85,`em`),Mk(86,`flag`),Kg(),Jc(87,`code`),Mk(88,`--allow-dirty`),Kg(),Mk(89,` em conjunto.`),Kg(),Jc(90,`pre`)(91,`code`),Mk(92,`ng update @po-ui/ng-components@<version> --allow-dirty --force
`),Kg()(),Jc(93,`p`),Mk(94,`Por exemplo:`),Kg(),Jc(95,`pre`)(96,`code`),Mk(97,`ng update @po-ui/ng-components@next --allow-dirty --force
`),Kg()(),Jc(98,`blockquote`)(99,`p`),Mk(100,`Caso ocorra um erro ao concluir o comando acima pode ser necessário fazer uma instalação limpa no projeto apagando a pasta `),Jc(101,`code`),Mk(102,`node_modules`),Kg(),Mk(103,` e o arquivo `),Jc(104,`code`),Mk(105,`package-lock.json`),Kg(),Mk(106,` e executando o comando `),Jc(107,`code`),Mk(108,`npm i --legacy-peer-deps`),Kg(),Mk(109,` antes de realizar o `),Jc(110,`code`),Mk(111,`ng update`),Kg(),Mk(112,`.`),Kg()(),Jc(113,`p`),Mk(114,`O `),Jc(115,`code`),Mk(116,`ng update`),Kg(),Mk(117,` ajudará nas alterações necessárias para seu projeto seguir atualizado, que são elas:`),Kg(),Jc(118,`ul`)(119,`li`),Mk(120,`Caso houver `),Jc(121,`em`),Mk(122,`breaking changes`),Kg(),Mk(123,`, serão realizados as alterações possíveis, mas fique atento ao `),Jc(124,`a`,11),Mk(125,`CHANGELOG`),Kg(),Mk(126,`;`),Kg(),Jc(127,`li`),Mk(128,`Atualizar as versões dos pacotes:`),Jc(129,`ul`)(130,`li`)(131,`code`),Mk(132,`@po-ui/ng-components`),Kg(),Mk(133,`;`),Kg(),Jc(134,`li`)(135,`code`),Mk(136,`@po-ui/ng-templates`),Kg(),Mk(137,`;`),Kg(),Jc(138,`li`)(139,`code`),Mk(140,`@po-ui/ng-code-editor`),Kg(),Mk(141,`;`),Kg(),Jc(142,`li`)(143,`code`),Mk(144,`@po-ui/ng-storage`),Kg(),Mk(145,`;`),Kg(),Jc(146,`li`)(147,`code`),Mk(148,`@po-ui/ng-sync`),Kg(),Mk(149,`;`),Kg(),Jc(150,`li`)(151,`code`),Mk(152,`@po-ui/style`),Kg(),Mk(153,`;`),Kg()()()(),Jc(154,`p`),Mk(155,`Além disso, será realizada uma pergunta para que o usuário decida se quer utilizar a nova biblioteca de ícones. Caso a escolha seja positiva, o processo de update irá substituir classes de ícones do po-ui pelas novas referências.`),Kg(),Jc(156,`p`),_u(157,`a`,12),Kg(),Jc(158,`h3`,13),Mk(159,`ng update @po-ui/ng-sync`),Kg(),Jc(160,`blockquote`)(161,`p`),Mk(162,`Caso você também utilize `),Jc(163,`code`),Mk(164,`@po-ui/ng-components`),Kg(),Mk(165,` não há necessidade de executar o `),Jc(166,`em`),Mk(167,`ng update`),Kg(),Mk(168,` do `),Jc(169,`code`),Mk(170,`@po-ui/ng-sync`),Kg(),Mk(171,`.`),Kg()(),Jc(172,`p`),Mk(173,`Para realizar a migração, devemos executar o comando `),Jc(174,`code`),Mk(175,`ng update`),Kg(),Mk(176,`, conforme exemplo abaixo. Mas antes verifique se comitou os arquivos alterados pela migra\xE7\xE3o do Angular, se preferir voc\xEA pode utilizar a
`),Jc(177,`em`),Mk(178,`flag`),Kg(),Jc(179,`code`),Mk(180,`--allow-dirty`),Kg(),Mk(181,` em conjunto.`),Kg(),Jc(182,`pre`)(183,`code`),Mk(184,`ng update @po-ui/ng-sync@<version> --allow-dirty --force
`),Kg()(),Jc(185,`p`),Mk(186,`Por exemplo:`),Kg(),Jc(187,`pre`)(188,`code`),Mk(189,`ng update @po-ui/ng-sync@next --allow-dirty --force
`),Kg()(),Jc(190,`p`),Mk(191,`O `),Jc(192,`code`),Mk(193,`ng update`),Kg(),Mk(194,` ajudará nas alterações necessárias para seu projeto, que será atualizar as versões dos pacotes:`),Kg(),Jc(195,`ul`)(196,`li`)(197,`code`),Mk(198,`@po-ui/ng-sync`),Kg(),Mk(199,`;`),Kg(),Jc(200,`li`)(201,`code`),Mk(202,`@po-ui/ng-storage`),Kg(),Mk(203,`;`),Kg()(),Jc(204,`blockquote`)(205,`p`),Mk(206,`Pode ocorrer o seguinte erro `),Jc(207,`code`),Mk(208,`TypeError: Failed to fetch dynamically imported module...`),Kg(),Mk(209,`, sendo necessário adicionar ao arquivo `),Jc(210,`code`),Mk(211,`angular.json`),Kg(),Mk(212,` as seguintes configurações:`),Kg(),Jc(213,`pre`)(214,`code`,14),Mk(215,`{
  "projects": {
    "app": {
      ...
      "architect": {
        ...
        "build": {
          ...
          "options": {
            ...
            "polyfills": ["zone.js"],
          },
        },
        "serve": {
          ...
          "builder": "@angular/build:dev-server",
          "options": {
            ...
            "prebundle": {
              "exclude": ["@ionic/angular", "@ionic/core", "ionicons"]
            }
          }
        },
      }
    }
  },
}
`),Kg()()(),Jc(216,`h2`,15),Mk(217,`Depreciações e Breaking Changes`),Kg(),Jc(218,`p`),Mk(219,`Possuimos uma documentação que lista as depreciações correntes e os `),Jc(220,`em`),Mk(221,`breaking changes`),Kg(),Mk(222,` j\xE1 realizados na biblioteca,
para consult\xE1-lo acesse o guia `),Jc(223,`a`,16),Mk(224,`Depreciações`),Kg()(),Jc(225,`p`),Mk(226,`Verifique também nosso `),Jc(227,`a`,11),Mk(228,`CHANGELOG`),Kg(),Mk(229,` para obter
mais detalhes dos `),Jc(230,`em`),Mk(231,`breaking changes`),Kg(),Mk(232,` realizados.`),Kg()())},dependencies:[Mze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var K=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:63,vars:0,consts:[[`p-title`,`Migração do THF para o PO UI v1.x`,1,`guides`,`app-portal`],[`id`,`antes-de-iniciar-a-migracao`],[`id`,`instalacao-do-pacote-de-migracao`],[`id`,`migrando-o-seu-projeto`]],template:function(o,d){o&1&&(Jc(0,`po-page-default`,0)(1,`p`),Mk(2,`Para facilitar a migração do seu projeto com o THF para o PO UI, disponibilizamos um pacote para fazer esta conversão. `),Kg(),Jc(3,`p`),Mk(4,`Este pacote, irá passar pelos arquivos do seu projeto alterando as palavras-chaves do THF para a nova nomenclatura do PO UI.`),Kg(),Jc(5,`h3`,1),Mk(6,`Antes de iniciar a migração`),Kg(),Jc(7,`p`),Mk(8,`Antes de iniciar a migração certifique-se que:`),Kg(),Jc(9,`ul`)(10,`li`),Mk(11,`Este pacote de migração é apenas para a migração do `),Jc(12,`strong`),Mk(13,`THF versão 4 ou superior para o PO UI versão 1.x`),Kg(),Mk(14,` que é compatível com a versão 8 do Angular. `),Kg(),Jc(15,`li`),Mk(16,`As dependências do THF encontram-se na versão 4 ou superior.`),Kg(),Jc(17,`li`),Mk(18,`Todos os arquivos estão salvos.`),Kg(),Jc(19,`li`),Mk(20,`Se as pastas e os arquivos possuem permissão para terceiros alterá-los.`),Kg()(),Jc(21,`h3`,2),Mk(22,`Instalação do pacote de migração`),Kg(),Jc(23,`p`),Mk(24,`Instale globalmente o pacote `),Jc(25,`code`),Mk(26,`po-migration`),Kg(),Mk(27,` utilizando o npm, conforme o comando abaixo:`),Kg(),Jc(28,`pre`)(29,`code`),Mk(30,`npm install -g po-migration
`),Kg()(),Jc(31,`h3`,3),Mk(32,`Migrando o seu projeto`),Kg(),Jc(33,`p`),Mk(34,`Após a instalação, navegue até a pasta do projeto que você deseja migrar para o PO UI.`),Kg(),Jc(35,`p`),Mk(36,`Para iniciar a migração, execute o comando:`),Kg(),Jc(37,`pre`)(38,`code`),Mk(39,`po-migration start
`),Kg()(),Jc(40,`p`),Mk(41,`Este comando irá utilizar um dicionário de palavras-chaves do próprio THF para realizar a migração, ou seja, se tiver outra palavra que você criou e que não faz parte do THF, ele não irá alterar.`),Kg(),Jc(42,`p`),Mk(43,`No entanto, caso você queira alterar até mesmo palavras criadas por você, utilize o seguinte comando:`),Kg(),Jc(44,`pre`)(45,`code`),Mk(46,`po-migration start --all
`),Kg()(),Jc(47,`p`),Mk(48,`Este comando atualiza todas as palavras do projeto que contém "thf, t-, ou totvs".`),Kg(),Jc(49,`blockquote`)(50,`p`),Mk(51,`Ao utilizar a opção `),Jc(52,`code`),Mk(53,`--all`),Kg(),Mk(54,` certifique-se que n\xE3o foi alterado nenhuma palavra que fa\xE7a parte
do caminho de algum arquivo, que voc\xEA possa ter colocado com o nome contendo algumas das palavras "thf, t-, ou totvs".`),Kg()(),Jc(55,`p`),Mk(56,`Veja a documentação completa do pacote `),Jc(57,`code`),Mk(58,`po-migration`),Kg(),Mk(59,` executando o comando:`),Kg(),Jc(60,`pre`)(61,`code`),Mk(62,`po-migration --help
`),Kg()()())},dependencies:[Mze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var Z=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:81,vars:0,consts:[[`p-title`,`Press Kit`,1,`guides`,`app-portal`],[`id`,`logomarca`],[`href`,`https://creativecommons.org/licenses/by/4.0/`],[1,`docs-presskit-row`,`po-mb-5`],[`src`,`./assets/po-logos/po_color_bg.svg`,`width`,`128`,`height`,`128`,`alt`,`Logo com segundo plano degradê`],[1,`po-ml-md-2`],[`href`,`./assets/po-logos/po_color_bg.png`,`download`,``],[`href`,`./assets/po-logos/po_color_bg.svg`,`download`,``],[`src`,`./assets/po-logos/po_color.svg`,`width`,`128`,`height`,`128`,`alt`,`Logo degradê`],[`href`,`./assets/po-logos/po_color.png`,`download`,``],[`href`,`./assets/po-logos/po_color.svg`,`download`,``],[`src`,`./assets/po-logos/po_black.svg`,`width`,`128`,`height`,`128`,`alt`,`Logo preto`],[`href`,`./assets/po-logos/po_black.png`,`download`,``],[`href`,`./assets/po-logos/po_black.svg`,`download`,``],[`src`,`./assets/po-logos/po_inverse.svg`,`width`,`128`,`height`,`128`,`alt`,`Logo branco com segundo plano preto`],[`href`,`./assets/po-logos/po_inverse.png`,`download`,``],[`href`,`./assets/po-logos/po_inverse.svg`,`download`,``],[`src`,`./assets/po-logos/po_white_mock_bg.png`,`width`,`128`,`height`,`128`,`alt`,`Logo branco com segundo plano transparente`],[`href`,`./assets/po-logos/po_white.png`,`download`,``],[`href`,`./assets/po-logos/po_white.svg`,`download`,``]],template:function(o,d){o&1&&(Jc(0,`po-page-default`,0)(1,`h2`,1),Mk(2,`Logomarca`),Kg(),Jc(3,`p`),Mk(4,`A licença para uso das variações de logomarca do `),Jc(5,`strong`),Mk(6,`PO UI`),Kg(),Mk(7,` é seguida de acordo com a `),Jc(8,`a`,2),Mk(9,`CC BY 4.0`),Kg(),Mk(10,`. Ou seja, pode-se utilizá-las como convier e para qualquer uso, como por exemplo na impressão em camisetas, divulgação em websites, etc.`),Kg(),Jc(11,`div`,3)(12,`div`),_u(13,`img`,4),Kg(),Jc(14,`div`,5)(15,`h3`),Mk(16,`Versão com segundo plano degradê`),Kg(),Jc(17,`p`),Mk(18,`Logo com segundo plano degradê (png) - `),Jc(19,`a`,6),Mk(20,`Download`),Kg()(),Jc(21,`p`),Mk(22,`Logo com segundo plano degradê (svg) - `),Jc(23,`a`,7),Mk(24,`Download`),Kg()()()(),Jc(25,`div`,3)(26,`div`),_u(27,`img`,8),Kg(),Jc(28,`div`,5)(29,`h3`),Mk(30,`Versão do logo degradê`),Kg(),Jc(31,`p`),Mk(32,`Logo degradê (png) - `),Jc(33,`a`,9),Mk(34,`Download`),Kg()(),Jc(35,`p`),Mk(36,`Logo degradê (svg) - `),Jc(37,`a`,10),Mk(38,`Download`),Kg()()()(),Jc(39,`div`,3)(40,`div`),_u(41,`img`,11),Kg(),Jc(42,`div`,5)(43,`h3`),Mk(44,`Versão do logo em preto`),Kg(),Jc(45,`p`),Mk(46,`Logo preto (png) - `),Jc(47,`a`,12),Mk(48,`Download`),Kg()(),Jc(49,`p`),Mk(50,`Logo preto (svg) - `),Jc(51,`a`,13),Mk(52,`Download`),Kg()()()(),Jc(53,`div`,3)(54,`div`),_u(55,`img`,14),Kg(),Jc(56,`div`,5)(57,`h3`),Mk(58,`Versão branco com segundo plano preto`),Kg(),Jc(59,`p`),Mk(60,`Logo branco (png) - `),Jc(61,`a`,15),Mk(62,`Download`),Kg()(),Jc(63,`p`),Mk(64,`Logo branco (svg) - `),Jc(65,`a`,16),Mk(66,`Download`),Kg()()()(),Jc(67,`div`,3)(68,`div`),_u(69,`img`,17),Kg(),Jc(70,`div`,5)(71,`h3`),Mk(72,`Versão branco com segundo plano transparente`),Kg(),Jc(73,`p`),Mk(74,`Logo branco (png) - `),Jc(75,`a`,18),Mk(76,`Download`),Kg()(),Jc(77,`p`),Mk(78,`Logo branco (svg) - `),Jc(79,`a`,19),Mk(80,`Download`),Kg()()()()())},dependencies:[Mze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var Y=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:187,vars:0,consts:[[`p-title`,`Lançamentos e suporte`,1,`guides`,`app-portal`],[`id`,`cronograma-de-lancamentos`],[1,`po-row`],[1,`po-xl-12`,`po-lg-12`,`po-md-12`,`po-sm-12`],[`src`,`./assets/graphics/release-schedule.jpg`,`alt`,`Cronograma de Lançamentos`,2,`max-width`,`100%`,`max-height`,`33vh`],[`id`,`janela-de-suporte-po-ui`],[1,`po-xl-10`,`po-lg-12`,`po-md-12`,`po-sm-12`],[1,`po-table`,`po-text-color-neutral-dark-40`],[1,`po-table-header`],[1,`po-table-header-ellipsis`],[1,`po-table-row`],[1,`po-table-column`],[`id`,`versoes-po-ui`],[`href`,`https://semver.org/`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`seguranca-vulnerabilidades-em-versoes-lts`],[`href`,`https://angular.dev/reference/releases`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`guides/releases`],[`href`,`guides/migration-poui`],[`href`,`guides/getting-started`]],template:function(o,d){o&1&&(Jc(0,`po-page-default`,0)(1,`p`),Mk(2,`Suporte estendido para versões principais ímpares por até 18 meses, a partir da versão 17.`),Kg(),Jc(3,`h3`,1),Mk(4,`Cronograma de Lançamentos`),Kg(),Jc(5,`div`,2)(6,`div`,3),_u(7,`img`,4),Kg()(),Jc(8,`h3`,5),Mk(9,`Janela de Suporte PO UI`),Kg(),Jc(10,`p`),Mk(11,`Todas as versões Major Ímpares possuem período ativo de 12 meses + suporte (LTS) de 18 meses:`),Kg(),Jc(12,`div`,2)(13,`div`,6)(14,`table`,7)(15,`thead`)(16,`tr`,8)(17,`th`,9),Mk(18,`Estágio de suporte`),Kg(),Jc(19,`th`,9),Mk(20,`Tempo de suporte`),Kg(),Jc(21,`th`,9),Mk(22,`Detalhes`),Kg()()(),Jc(23,`tbody`)(24,`tr`,10)(25,`td`,11),Mk(26,`Active (versões major ímpares)`),Kg(),Jc(27,`td`,11),Mk(28,`12 meses`),Kg(),Jc(29,`td`,11),Mk(30,`Atualizações e correções programadas regularmente`),Kg()(),Jc(31,`tr`,10)(32,`td`,11),Mk(33,`Longo prazo (LTS) (versões major ímpares)`),Kg(),Jc(34,`td`,11),Mk(35,`18 meses`),Kg(),Jc(36,`td`,11),Mk(37,`Apenas correções nas versões ímpares`),Kg()(),Jc(38,`tr`,10)(39,`td`,11),Mk(40,`Active (versões major pares)`),Kg(),Jc(41,`td`,11),Mk(42,`6 meses`),Kg(),Jc(43,`td`,11),Mk(44,`Atualizações e correções programadas regularmente até o lançamento da próxima versão major ímpar`),Kg()()()()()(),Jc(45,`h3`,12),Mk(46,`Versões PO UI`),Kg(),Jc(47,`p`),Mk(48,`As bibliotecas seguem as regras de versionamento definidas pelo Semantic Versioning (SemVer), conforme descrito em: `),Jc(49,`a`,13),Mk(50,`https://semver.org/`),Kg()(),Jc(51,`div`,2)(52,`div`,6)(53,`table`,7)(54,`thead`)(55,`tr`,8)(56,`th`,9),Mk(57,`Versão`),Kg(),Jc(58,`th`,9),Mk(59,`Status`),Kg(),Jc(60,`th`,9),Mk(61,`Lançado`),Kg(),Jc(62,`th`,9),Mk(63,`Fim do período ativo`),Kg(),Jc(64,`th`,9),Mk(65,`Fim do LTS`),Kg()()(),Jc(66,`tbody`)(67,`tr`,10)(68,`td`,11),Mk(69,`^23.0.0*`),Kg(),Jc(70,`td`,11),Mk(71,`Previsto`),Kg(),Jc(72,`td`,11),Mk(73,`Janeiro/2027`),Kg(),Jc(74,`td`,11),Mk(75,`Dezembro/2027`),Kg(),Jc(76,`td`,11),Mk(77,`Junho/2029`),Kg()(),Jc(78,`tr`,10)(79,`td`,11),Mk(80,`^22.0.0*`),Kg(),Jc(81,`td`,11),Mk(82,`Previsto`),Kg(),Jc(83,`td`,11),Mk(84,`Julho/2026`),Kg(),Jc(85,`td`,11),Mk(86,`Dezembro/2026`),Kg(),Jc(87,`td`,11),Mk(88,`N/A`),Kg()(),Jc(89,`tr`,10)(90,`td`,11),Mk(91,`^21.0.0`),Kg(),Jc(92,`td`,11),Mk(93,`Active`),Kg(),Jc(94,`td`,11),Mk(95,`Janeiro/2026`),Kg(),Jc(96,`td`,11),Mk(97,`Dezembro/2026`),Kg(),Jc(98,`td`,11),Mk(99,`Junho/2028`),Kg()(),Jc(100,`tr`,10)(101,`td`,11),Mk(102,`^19.0.0`),Kg(),Jc(103,`td`,11),Mk(104,`LTS`),Kg(),Jc(105,`td`,11),Mk(106,`Janeiro/2025`),Kg(),Jc(107,`td`,11),Mk(108,`Dezembro/2025`),Kg(),Jc(109,`td`,11),Mk(110,`Junho/2027`),Kg()(),Jc(111,`tr`,10)(112,`td`,11),Mk(113,`^20.0.0`),Kg(),Jc(114,`td`,11),Mk(115,`Active Encerrado`),Kg(),Jc(116,`td`,11),Mk(117,`Setembro/2025`),Kg(),Jc(118,`td`,11),Mk(119,`Janeiro/2026`),Kg(),Jc(120,`td`,11),Mk(121,`N/A`),Kg()(),Jc(122,`tr`,10)(123,`td`,11),Mk(124,`^18.0.0`),Kg(),Jc(125,`td`,11),Mk(126,`Active Encerrado`),Kg(),Jc(127,`td`,11),Mk(128,`Julho/2024`),Kg(),Jc(129,`td`,11),Mk(130,`Dezembro/2024`),Kg(),Jc(131,`td`,11),Mk(132,`N/A`),Kg()(),Jc(133,`tr`,10)(134,`td`,11),Mk(135,`^17.0.0`),Kg(),Jc(136,`td`,11),Mk(137,`LTS Encerrado`),Kg(),Jc(138,`td`,11),Mk(139,`Março/2024`),Kg(),Jc(140,`td`,11),Mk(141,`Agosto/2024`),Kg(),Jc(142,`td`,11),Mk(143,`Agosto/2025`),Kg()()()()()(),Jc(144,`p`),Mk(145,`Versões LTS recebem apenas correções de segurança e bugs críticos. Não há novas funcionalidades ou melhorias visuais.`),Kg(),Jc(146,`blockquote`)(147,`p`),Mk(148,`*Datas aproximadas, sujeitas a alterações.`),Kg()(),Jc(149,`h3`,14),Mk(150,`Segurança — Vulnerabilidades em versões LTS`),Kg(),Jc(151,`p`),Mk(152,`Versões LTS podem apresentar `),Jc(153,`strong`),Mk(154,`vulnerabilidades altas ou críticas`),Kg(),Mk(155,` no `),Jc(156,`code`),Mk(157,`npm audit`),Kg(),Jc(158,`strong`),Mk(159,`sem patch disponível`),Kg(),Mk(160,`, especialmente quando o Angular (peer dependency) já encerrou o suporte da versão utilizada (`),Jc(161,`strong`),Mk(162,`EOL`),Kg(),Mk(163,`).`),Kg(),Jc(164,`blockquote`)(165,`p`),Mk(166,`O Status EOL reflete o estado do suporte ao respectivo produto no lançamento da release. O PO UI prestará suporte em sistemas operacionais, produtos, bibliotecas terceiras ou serviços (incluindo o Angular), apenas dentro do ciclo de vida e correções de vulnerabilidades estabelecidos por seus respectivos fabricantes e mantenedores. `),Jc(167,`strong`),Mk(168,`O PO UI não prestará suporte`),Kg(),Mk(169,` em sistemas operacionais, produtos, bibliotecas terceiras ou serviços fora de seus ciclos de vida ativos.`),Kg()(),Jc(170,`p`),Mk(171,`Planeje a migração para a versão Active quando possível.`),Kg(),Jc(172,`p`),Mk(173,`Referências:`),Kg(),Jc(174,`ul`)(175,`li`)(176,`a`,15),Mk(177,`Angular Release Schedule`),Kg()(),Jc(178,`li`)(179,`a`,16),Mk(180,`Releases e versionamento`),Kg()(),Jc(181,`li`)(182,`a`,17),Mk(183,`Migração do PO UI`),Kg()(),Jc(184,`li`)(185,`a`,18),Mk(186,`Primeiros passos`),Kg()()()())},dependencies:[Mze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var $=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:253,vars:0,consts:[[`p-title`,`Releases`,1,`guides`,`app-portal`],[`id`,`controle-de-versao-po-ui`],[`href`,`https://semver.org/`],[`id`,`caminhos-de-atualizacao-suportados`],[`id`,`comparativo-de-versoes-angular-x-po-ui`],[1,`po-row`],[1,`po-xl-6`,`po-lg-8`,`po-md-10`,`po-sm-12`],[1,`po-table`,`po-text-color-neutral-dark-40`],[1,`po-table-header`],[1,`po-table-header-ellipsis`],[1,`po-table-row`],[1,`po-table-column`],[`href`,`guides/migration-poui`],[`href`,`guides/migration-poui-v2`],[`href`,`guides/migration-thf-to-po-ui`],[`href`,`https://github.com/po-ui/po-angular/issues/1184`],[`id`,`versoes-previas`],[`href`,`https://www.npmjs.com/package/@po-ui/ng-components?activeTab=versions`],[`id`,`lancamentos-e-suporte`],[`href`,`guides/release-schedule`]],template:function(o,d){o&1&&(Jc(0,`po-page-default`,0)(1,`p`),Mk(2,`Reconhecemos que você precisa da estabilidade da estrutura PO UI. A estabilidade garante que os componentes, samples e tutoriais não se tornem obsoletos inesperadamente. A estabilidade é essencial para um ecossistema com angular e PO UI prosperar.`),Kg(),Jc(3,`p`),Mk(4,`Também compartilhamos com você o desejo de que o PO UI continue evoluindo. Nós nos esforçamos para garantir que a biblioteca de componentes sobre a qual está construindo sua aplicação continue melhorando e permitindo que você se mantenha atualizado com o resto do ecossistema do Angular e com as necessidades do usuário.`),Kg(),Jc(5,`p`),Mk(6,`Este documento contém as práticas que seguimos para fornecer a você uma biblioteca de componentes de ponta, equilibrada e com estabilidade. Nós nos esforçamos para garantir que as mudanças futuras sejam sempre introduzidas de forma previsível. Queremos que todos que dependam do PO UI saibam quando e como os novos recursos serão adicionados e estejam bem preparados quando os obsoletos são removidos.`),Kg(),Jc(7,`h2`,1),Mk(8,`Controle de Versão PO UI`),Kg(),Jc(9,`p`),Mk(10,`Os números de versão do PO UI indicam o nível de mudanças introduzidas pelo lançamento. Este uso de `),Jc(11,`a`,2),Mk(12,`versionamento semântico`),Kg(),Mk(13,` ajuda a entender o impacto potencial de atualizar para uma nova versão.`),Kg(),Jc(14,`p`),Mk(15,`Números de versão PO UI tem três partes: `),Jc(16,`code`),Mk(17,`major.minor.patch`),Kg(),Mk(18,`. Por exemplo, a versão 4.16.1 indica a versão principal 4, a versão secundária 2 e o nível de patch 1.`),Kg(),Jc(19,`p`),Mk(20,`O número da versão principal é incrementado com base na versão do Angular que ele atende.`),Kg(),Jc(21,`ul`)(22,`li`)(23,`strong`),Mk(24,`As versões principais`),Kg(),Mk(25,` contêm os novos recursos disponibilizados pelo Angular, mas espera-se uma assistência mínima do desenvolvedor durante a atualização. Ao atualizar para uma nova versão principal, pode ser necessário executar scripts de atualização, refatorar códigos, executar testes adicionais e aprender novas APIs.`),Kg(),Jc(26,`li`)(27,`strong`),Mk(28,`Versões secundárias`),Kg(),Mk(29,` contém novos recursos menores. Versões menores são totalmente compatíveis com versões anteriores; nenhuma assistência do desenvolvedor é esperada durante a atualização, mas você pode opcionalmente modificar seus aplicativos e bibliotecas para começar a usar novas APIs, recursos e capacidades que foram adicionados na versão. São incrementadas regularmente ao final de nossas sprints.`),Kg(),Jc(30,`li`)(31,`strong`),Mk(32,`Lançamentos de patch`),Kg(),Mk(33,` são lançamentos de correção de bugs. Nenhuma ajuda do desenvolvedor é esperada durante a atualização.`),Kg()(),Jc(34,`h2`,3),Mk(35,`Caminhos de atualização suportados`),Kg(),Jc(36,`p`),Mk(37,`Em alinhamento com o esquema de controle de versão descrito acima, nos comprometemos a oferecer suporte aos seguintes caminhos de atualização:`),Kg(),Jc(38,`ul`)(39,`li`),Mk(40,`Se você estiver atualizando na `),Jc(41,`strong`),Mk(42,`versão principal`),Kg(),Mk(43,`, poderá pular todas as versões intermediárias e atualizar diretamente para a versão de destino. Por exemplo, você pode atualizar diretamente da versão 4.0.0 para a 4.17.0.`),Kg(),Jc(44,`li`),Mk(45,`Se você estiver atualizando de `),Jc(46,`strong`),Mk(47,`uma versão principal para outra`),Kg(),Mk(48,`, recomendamos que `),Jc(49,`strong`),Mk(50,`não ignore as versões principais`),Kg(),Mk(51,`. Siga as instruções para atualizar de forma incremental para a próxima versão principal, testando e validando em cada erapa. Por exemplo, se você deseja atualizar da versão 2.xx para a versão 4.xx, recomendamos que você atualize para a versão 3.xx mais recente primeiro. Depois de atualizar com sucesso para a versão 3.xx, você pode atualizar para a 4.xx.`),Kg()(),Jc(52,`p`),Mk(53,`Consulte abaixo nossos guias de migração de versão para obter mais informações sobre como atualizar o PO UI para a versão mais recente nos seus projetos Angular.`),Kg(),Jc(54,`h3`,4),Mk(55,`Comparativo de versões Angular x PO UI`),Kg(),Jc(56,`div`,5)(57,`div`,6)(58,`table`,7)(59,`thead`)(60,`tr`,8)(61,`th`,9),Mk(62,`Angular`),Kg(),Jc(63,`th`,9),Mk(64,`PO UI`),Kg(),Jc(65,`th`,9),Mk(66,`Migração`),Kg()()(),Jc(67,`tbody`)(68,`tr`,10)(69,`td`,11),Mk(70,`22.0.0`),Kg(),Jc(71,`td`,11),Mk(72,`22.0.0`),Kg(),Jc(73,`td`,11)(74,`a`,12),Mk(75,`Migração do PO UI`),Kg()()(),Jc(76,`tr`,10)(77,`td`,11),Mk(78,`21.0.0`),Kg(),Jc(79,`td`,11),Mk(80,`21.0.0`),Kg(),Jc(81,`td`,11)(82,`a`,12),Mk(83,`Migração do PO UI`),Kg()()(),Jc(84,`tr`,10)(85,`td`,11),Mk(86,`20.0.0`),Kg(),Jc(87,`td`,11),Mk(88,`20.0.0`),Kg(),Jc(89,`td`,11)(90,`a`,12),Mk(91,`Migração do PO UI`),Kg()()(),Jc(92,`tr`,10)(93,`td`,11),Mk(94,`19.0.0`),Kg(),Jc(95,`td`,11),Mk(96,`19.0.0`),Kg(),Jc(97,`td`,11)(98,`a`,12),Mk(99,`Migração do PO UI`),Kg()()(),Jc(100,`tr`,10)(101,`td`,11),Mk(102,`18.0.0`),Kg(),Jc(103,`td`,11),Mk(104,`18.0.0`),Kg(),Jc(105,`td`,11)(106,`a`,12),Mk(107,`Migração do PO UI`),Kg()()(),Jc(108,`tr`,10)(109,`td`,11),Mk(110,`17.0.0`),Kg(),Jc(111,`td`,11),Mk(112,`17.0.0`),Kg(),Jc(113,`td`,11)(114,`a`,12),Mk(115,`Migração do PO UI`),Kg()()(),Jc(116,`tr`,10)(117,`td`,11),Mk(118,`16.0.0`),Kg(),Jc(119,`td`,11),Mk(120,`16.0.0`),Kg(),Jc(121,`td`,11)(122,`a`,12),Mk(123,`Migração do PO UI`),Kg()()(),Jc(124,`tr`,10)(125,`td`,11),Mk(126,`15.0.0`),Kg(),Jc(127,`td`,11),Mk(128,`15.0.0`),Kg(),Jc(129,`td`,11)(130,`a`,12),Mk(131,`Migração do PO UI`),Kg()()(),Jc(132,`tr`,10)(133,`td`,11),Mk(134,`14.0.0`),Kg(),Jc(135,`td`,11),Mk(136,`14.0.0`),Kg(),Jc(137,`td`,11)(138,`a`,12),Mk(139,`Migração do PO UI`),Kg()()(),Jc(140,`tr`,10)(141,`td`,11),Mk(142,`13.0.0`),Kg(),Jc(143,`td`,11),Mk(144,`6.0.0`),Kg(),Jc(145,`td`,11)(146,`a`,12),Mk(147,`Migração do PO UI`),Kg()()(),Jc(148,`tr`,10)(149,`td`,11),Mk(150,`12.0.0`),Kg(),Jc(151,`td`,11),Mk(152,`5.0.0`),Kg(),Jc(153,`td`,11)(154,`a`,12),Mk(155,`Migração do PO UI`),Kg()()(),Jc(156,`tr`,10)(157,`td`,11),Mk(158,`11.0.0`),Kg(),Jc(159,`td`,11),Mk(160,`4.0.0`),Kg(),Jc(161,`td`,11)(162,`a`,12),Mk(163,`Migração do PO UI`),Kg()()(),Jc(164,`tr`,10)(165,`td`,11),Mk(166,`10.0.0`),Kg(),Jc(167,`td`,11),Mk(168,`3.0.0`),Kg(),Jc(169,`td`,11)(170,`a`,12),Mk(171,`Migração do PO UI`),Kg()()(),Jc(172,`tr`,10)(173,`td`,11),Mk(174,`9.0.0`),Kg(),Jc(175,`td`,11),Mk(176,`2.0.0`),Kg(),Jc(177,`td`,11)(178,`a`,13),Mk(179,`Migração do PO UI para V2`),Kg()()(),Jc(180,`tr`,10)(181,`td`,11),Mk(182,`8.0.0`),Kg(),Jc(183,`td`,11),Mk(184,`1.0.0`),Kg(),Jc(185,`td`,11)(186,`a`,14),Mk(187,`Migração THF para PO UI v1.x`),Kg()()()()()()(),Jc(188,`blockquote`)(189,`p`),Mk(190,`Conforme agenda de publicação de novas versões estáveis do Angular, nós atualizamos nossas versões como de costume e aproveitaremos para fazer uma mudança na nomenclatura das nossas versões. A versão `),Jc(191,`code`),Mk(192,`v7.x.x`),Kg(),Mk(193,` foi lançada como `),Jc(194,`strong`)(195,`code`),Mk(196,`v14.x.x`),Kg()(),Mk(197,`, assim `),Jc(198,`code`),Mk(199,`a versão 14.x.x do PO UI tem compatibilidade com a v14 do Angular`),Kg(),Mk(200,` e assim por diante. `),Jc(201,`a`,15),Mk(202,`Mais informações`),Kg(),Mk(203,`.`),Kg()(),Jc(204,`h2`,16),Mk(205,`Versões prévias`),Kg(),Jc(206,`p`),Mk(207,`Permitimos que você visualize o que está por vir, fornecendo pré-lançamentos `),Jc(208,`code`),Mk(209,`next`),Kg(),Mk(210,` ou Release Candidates (`),Jc(211,`code`),Mk(212,`rc`),Kg(),Mk(213,`) para cada versão principal:`),Kg(),Jc(214,`ul`)(215,`li`)(216,`strong`),Mk(217,`Next`),Kg(),Mk(218,`: a versão que está em desenvolvimento, com testes ativos e com breaking changes a resolver. O próximo lançamento é indicado por uma tag de lançamento anexada ao identificador `),Jc(219,`code`),Mk(220,`-next`),Kg(),Mk(221,`, como `),Jc(222,`code`),Mk(223,`17.0.0-next`),Kg(),Mk(224,`.`),Kg(),Jc(225,`li`)(226,`strong`),Mk(227,`Release Candidate`),Kg(),Mk(228,`: um lançamento com recurso concluído, teste finalizado e sem breaking changes a resolver. Um candidato a lançamento é indicado por uma tag de lançamento anexada ao identificador `),Jc(229,`code`),Mk(230,`-rc`),Kg(),Mk(231,`, como versão `),Jc(232,`code`),Mk(233,`17.0.0-rc`),Kg(),Mk(234,`.`),Kg()(),Jc(235,`p`),Mk(236,`A versão mais recente `),Jc(237,`code`),Mk(238,`next`),Kg(),Mk(239,` ou de pré-lançamento `),Jc(240,`code`),Mk(241,`rc`),Kg(),Mk(242,` fica disponível no `),Jc(243,`a`,17),Mk(244,`npm do projeto`),Kg(),Mk(245,`.`),Kg(),Jc(246,`h2`,18),Mk(247,`Lançamentos e suporte`),Kg(),Jc(248,`p`),Mk(249,`Para informações sobre o cronograma de lançamentos, janela de suporte (Active/LTS) e política de segurança em versões LTS, consulte o guia `),Jc(250,`a`,19),Mk(251,`Lançamentos e suporte`),Kg(),Mk(252,`.`),Kg()())},dependencies:[Mze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var ee=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:60,vars:0,consts:[[`p-title`,`Schematics`,1,`guides`,`app-portal`],[`href`,`https://angular.io/cli`],[`id`,`instalando`],[`id`,`po-ui-components`],[`id`,`po-ui-templates`]],template:function(o,d){o&1&&(Jc(0,`po-page-default`,0)(1,`p`),Mk(2,`O PO contém `),Jc(3,`em`),Mk(4,`schematics`),Kg(),Mk(5,` do `),Jc(6,`a`,1),Mk(7,`Angular CLI`),Kg(),Mk(8,` em seu pacote, para facilitar o desenvolvimento de aplicações PO.`),Kg(),Jc(9,`h2`,2),Mk(10,`Instalando`),Kg(),Jc(11,`p`),Mk(12,`Um vez que for instalado o pacotes, teremos disponível os `),Jc(13,`em`),Mk(14,`schematics`),Kg(),Mk(15,` através do Angular CLI.`),Kg(),Jc(16,`h3`,3),Mk(17,`PO UI Components`),Kg(),Jc(18,`p`),Mk(19,`Caso esteja iniciando uma aplica\xE7\xE3o com PO, indica-se utilizar o comando abaixo,
no qual ser\xE1 instalado o pacote `),Jc(20,`code`),Mk(21,`@po-ui/ng-components`),Kg(),Mk(22,` e realizadas algumas configurações, que serão descritas em seguida:`),Kg(),Jc(23,`pre`)(24,`code`),Mk(25,`ng add @po-ui/ng-components@next
`),Kg()(),Jc(26,`ul`)(27,`li`),Mk(28,`Substitui o `),Jc(29,`code`),Mk(30,`AppComponent`),Kg(),Mk(31,` com uma estrutura incial de um projeto, utilizando os components `),Jc(32,`code`),Mk(33,`po-page-default`),Kg(),Mk(34,`, `),Jc(35,`code`),Mk(36,`po-toolbar`),Kg(),Mk(37,`, e `),Jc(38,`code`),Mk(39,`po-menu`),Kg(),Mk(40,`;`),Kg(),Jc(41,`li`),Mk(42,`Importa o módulo do PO;`),Kg(),Jc(43,`li`),Mk(44,`Configura o tema do PO no projeto;`),Kg()(),Jc(45,`h3`,4),Mk(46,`PO UI Templates`),Kg(),Jc(47,`p`),Mk(48,`Para a utiliza\xE7\xE3o de componentes de template o processo para inclus\xE3o \xE9 semelhante.
Primeiramente, deve-se utilizar o comando abaixo, no qual ser\xE1 instalado o pacote `),Jc(49,`code`),Mk(50,`@po-ui/ng-templates`),Kg(),Mk(51,`:`),Kg(),Jc(52,`pre`)(53,`code`),Mk(54,`ng add @po-ui/ng-templates@next
`),Kg()(),Jc(55,`ul`)(56,`li`),Mk(57,`Importa o módulo do PO;`),Kg(),Jc(58,`li`),Mk(59,`Configura o tema do PO no projeto caso não possua;`),Kg()()())},dependencies:[Mze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var te=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:1071,vars:0,consts:[[`p-title`,`Fundamentos do PO Sync`,1,`guides`,`app-portal`],[`id`,`conteudo`],[`href`,`guides/sync-fundamentals#introduction`],[`href`,`guides/sync-fundamentals#knowledge`],[`href`,`guides/sync-fundamentals#schemas`],[`href`,`guides/sync-fundamentals#create-schema`],[`href`,`guides/sync-fundamentals#schematic`],[`href`,`guides/sync-fundamentals#prepare-api`],[`href`,`guides/sync-fundamentals#logical-deletion`],[`href`,`guides/sync-fundamentals#sync-url`],[`href`,`guides/sync-fundamentals#prepare`],[`href`,`guides/sync-fundamentals#periodic`],[`href`,`guides/sync-fundamentals#load-data`],[`href`,`guides/sync-fundamentals#po-entity`],[`href`,`guides/sync-fundamentals#find-data`],[`href`,`guides/sync-fundamentals#save-and-remove`],[`href`,`guides/sync-fundamentals#sync`],[`href`,`guides/sync-fundamentals#advanced-techniques`],[`href`,`guides/sync-fundamentals#on-sync`],[`href`,`guides/sync-fundamentals#po-data-transform`],[`href`,`guides/sync-fundamentals#get-responses`],[`href`,`guides/sync-fundamentals#insert-http-command`],[`href`,`guides/sync-fundamentals#custom-request-id`],[`href`,`guides/sync-fundamentals#schemas-definition`],[`href`,`guides/sync-fundamentals#po-conference`],[`id`,`introduction`],[`id`,`introducao`],[`id`,`como-o-po-sync-mantem-os-dados-atualizados-com-o-servidor`],[2,`text-align`,`center`],[`src`,`./assets/graphics/po-sync/event-sourcing.jpg`,1,`po-mt-2`,`po-mb-2`,2,`max-width`,`100%`],[`id`,`como-ocorre-a-sincronizacao`],[`src`,`./assets/graphics/po-sync/sync-send.jpg`,1,`po-mt-2`,`po-mb-2`,2,`max-width`,`100%`],[`src`,`./assets/graphics/po-sync/sync-get.jpg`,1,`po-mt-2`,`po-mb-2`,2,`max-width`,`100%`],[`href`,`/documentation/po-sync`],[`href`,`guides/sync-get-started`],[`id`,`knowledge`],[`id`,`conhecimentos-necessarios`],[`href`,`http://es6-features.org`],[`href`,`http://es6-features.org/#PromiseUsage`],[`href`,`https://ionicframework.com/`],[`href`,`http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html`],[`href`,`https://rxjs-dev.firebaseapp.com/guide/overview`],[`id`,`schemas`],[`id`,`create-schema`],[`id`,`como-criar-um-schema`],[1,`language-shell`],[1,`language-typescript`],[`id`,`schematic`],[`id`,`prepare-api`],[`id`,`preparando-a-api-para-a-sincronizacao`],[`id`,`logical-deletion`],[`id`,`exclusao-logica`],[1,`language-javascript`],[`id`,`porque-exclusao-logica`],[`id`,`sync-url`],[`id`,`endpoint-de-sincronizacao`],[`href`,`https://po-sample-conference.onrender.com/conferences/diff/2018-10-08T13:23:31.893Z`],[`href`,`https://po-ui.io/guides/api`],[`id`,`prepare`],[`id`,`preparando-a-aplicacao`],[`id`,`periodic`],[`id`,`sincronizacao-periodica`],[`id`,`load-data`],[`id`,`carga-inicial-dos-dados`],[`id`,`po-entity`],[`id`,`manipulando-os-registros-de-um-schema`],[`href`,`/documentation/po-entity`],[`id`,`find-data`],[`id`,`buscando-os-registros`],[`href`,`/documentation/po-query-builder`],[`id`,`save-and-remove`],[`id`,`criacao-atualizacao-e-exclusao-de-um-registro`],[`id`,`sync`],[`id`,`sincronizacao-manual`],[`id`,`advanced-techniques`],[`id`,`tecnicas-avancadas`],[`id`,`on-sync`],[`id`,`notificacao-pos-sincronizacao`],[`id`,`po-data-transform`],[`id`,`adaptando-a-resposta-da-api-para-o-padrao-do-po`],[`href`,`/documentation/po-data-transform`],[`id`,`get-responses`],[`id`,`capturando-respostas-da-sincronizacao`],[`id`,`em-que-situacoes-este-monitoramento-pode-ser-util`],[`href`,`/documentation/po-event-sourcing-error-response`],[`id`,`insert-http-command`],[`id`,`inserindo-requisicoes-http-na-fila-de-eventos`],[`id`,`custom-request-id`],[`id`,`criacao-de-identificador-customizado-para-eventos-da-fila`],[`id`,`schemas-definition`],[`id`,`alterando-as-definicoes-dos-schemas`],[`id`,`po-conference`],[`id`,`aplicativo-de-demonstracao-do-po-sync`],[`href`,`https://github.com/ionic-team/ionic-conference-app`],[`href`,`https://github.com/po-ui/po-sample-conference`]],template:function(o,d){o&1&&(Jc(0,`po-page-default`,0)(1,`h2`,1),Mk(2,`Conteúdo`),Kg(),Jc(3,`ul`)(4,`li`)(5,`a`,2),Mk(6,`Introdução`),Kg()(),Jc(7,`li`)(8,`a`,3),Mk(9,`Conhecimentos necessários`),Kg()(),Jc(10,`li`)(11,`a`,4)(12,`em`),Mk(13,`Schemas`),Kg()(),Jc(14,`ul`)(15,`li`)(16,`a`,5),Mk(17,`Como criar um `),Jc(18,`em`),Mk(19,`schema`),Kg()()(),Jc(20,`li`)(21,`a`,6),Mk(22,`Schematic`),Kg()()()(),Jc(23,`li`)(24,`a`,7),Mk(25,`Preparando a API para a sincronização`),Kg(),Jc(26,`ul`)(27,`li`)(28,`a`,8),Mk(29,`Exclusão lógica`),Kg()(),Jc(30,`li`)(31,`a`,9)(32,`em`),Mk(33,`Endpoint`),Kg(),Mk(34,` de sincronização`),Kg()()()(),Jc(35,`li`)(36,`a`,10),Mk(37,`Preparando a aplicação`),Kg(),Jc(38,`ul`)(39,`li`)(40,`a`,11),Mk(41,`Sincronização periódica`),Kg()(),Jc(42,`li`)(43,`a`,12),Mk(44,`Carga inicial dos dados`),Kg()()()(),Jc(45,`li`)(46,`a`,13),Mk(47,`Manipulando os registros de um `),Jc(48,`em`),Mk(49,`schema`),Kg()(),Jc(50,`ul`)(51,`li`)(52,`a`,14),Mk(53,`Buscando os registros`),Kg()(),Jc(54,`li`)(55,`a`,15),Mk(56,`Criação, atualização e exclusão de um registro`),Kg()()()(),Jc(57,`li`)(58,`a`,16),Mk(59,`Sincronização manual`),Kg()(),Jc(60,`li`)(61,`a`,17),Mk(62,`Técnicas avançadas`),Kg(),Jc(63,`ul`)(64,`li`)(65,`a`,18),Mk(66,`Notificação pós-sincronização`),Kg()(),Jc(67,`li`)(68,`a`,19),Mk(69,`Adaptando a resposta da API para o padrão do PO UI`),Kg()(),Jc(70,`li`)(71,`a`,20),Mk(72,`Capturando respostas da sincronização`),Kg()(),Jc(73,`li`)(74,`a`,21),Mk(75,`Inserindo requisições HTTP na fila de eventos`),Kg()(),Jc(76,`li`)(77,`a`,22),Mk(78,`Criação de identificador customizado para eventos da fila`),Kg()(),Jc(79,`li`)(80,`a`,23),Mk(81,`Alterando as definições dos `),Jc(82,`em`),Mk(83,`schemas`),Kg()()()()(),Jc(84,`li`)(85,`a`,24),Mk(86,`Aplicativo de demonstração do PO Sync`),Kg()()(),Jc(87,`p`),_u(88,`a`,25),Kg(),Jc(89,`h2`,26),Mk(90,`Introdução`),Kg(),Jc(91,`p`),Mk(92,`O PO Sync \xE9 uma biblioteca que possibilita armazenar dados na aplica\xE7\xE3o local mantendo a sincroniza\xE7\xE3o entre os dados locais e o servidor.
Permitindo que o usu\xE1rio utilize a aplica\xE7\xE3o tanto `),Jc(93,`em`),Mk(94,`online`),Kg(),Mk(95,` quanto `),Jc(96,`em`),Mk(97,`offline`),Kg(),Mk(98,`, com a mesma experiência de uso.`),Kg(),Jc(99,`h3`,27),Mk(100,`Como o PO Sync mantém os dados atualizados com o servidor?`),Kg(),Jc(101,`p`),Mk(102,`Todas as modifica\xE7\xF5es nos registros como criar, alterar e excluir acontecem primeiramente no armazenamento local.
Para cada modifica\xE7\xE3o feita em um registro tamb\xE9m \xE9 criado um evento. Este evento representa uma opera\xE7\xE3o, sendo
composto basicamente pelo tipo de opera\xE7\xE3o (cria\xE7\xE3o, altera\xE7\xE3o ou remo\xE7\xE3o) e o registro modificado.
Este evento \xE9 adicionado a uma fila de eventos que ser\xE1 consumida pelo processo de sincroniza\xE7\xE3o (atualiza\xE7\xE3o dos dados).
Este processo \xE9 demonstrado na figura a seguir:`),Kg(),Jc(103,`p`,28),_u(104,`img`,29),Kg(),Jc(105,`p`),Mk(106,`É no processo de sincronização que os dados são atualizados tanto da aplicação local para o servidor quanto do servidor para a aplicação local.`),Kg(),Jc(107,`blockquote`)(108,`p`),Mk(109,`A sincronização sempre acontece com a aplicação `),Jc(110,`em`),Mk(111,`online`),Kg(),Mk(112,` e em segundo plano, permitindo que o usuário continue utilizando a aplicação normalmente.`),Kg()(),Jc(113,`h4`,30),Mk(114,`Como ocorre a sincronização?`),Kg(),Jc(115,`p`),Mk(116,`A sincronização dos dados acontece em duas etapas:`),Kg(),Jc(117,`p`)(118,`strong`),Mk(119,`1)`),Kg(),Mk(120,` Busca os itens da fila de eventos e envia os dados modificados da aplicação local para o servidor sequencialmente:`),Kg(),Jc(121,`p`,28),_u(122,`img`,31),Kg(),Jc(123,`p`)(124,`strong`),Mk(125,`2)`),Kg(),Mk(126,` Busca os dados que foram modificados no servidor e atualiza na aplicação local:`),Kg(),Jc(127,`p`,28),_u(128,`img`,32),Kg(),Jc(129,`p`),Mk(130,`Esta sincronização pode ser acionada (gatilho) das seguintes formas:`),Kg(),Jc(131,`ul`)(132,`li`)(133,`p`),Mk(134,`Reativa: toda vez que houver alguma mudança no hardware do dispositivo, como na troca do tipo de rede 4G para WI-FI;`),Kg()(),Jc(135,`li`)(136,`p`)(137,`a`,11),Mk(138,`Periódica`),Kg(),Mk(139,`: será acionada periodicamente baseada nos parâmetros de configurações do `),Jc(140,`a`,33),Mk(141,`PoSyncConfig`),Kg(),Mk(142,`;`),Kg()(),Jc(143,`li`)(144,`p`)(145,`a`,16),Mk(146,`Manualmente`),Kg(),Mk(147,`: será acionada na chamada manual do método `),Jc(148,`code`),Mk(149,`PoSyncService.sync()`),Kg(),Mk(150,`.`),Kg()()(),Jc(151,`blockquote`)(152,`p`),Mk(153,`Antes de continuar os próximos passos, siga as instruções do `),Jc(154,`a`,34),Mk(155,`Começando com o PO Sync`),Kg(),Mk(156,` para
saber como criar um novo projeto com Ionic 7 utilizando o PO Sync.`),Kg()(),Jc(157,`p`),_u(158,`a`,35),Kg(),Jc(159,`h2`,36),Mk(160,`Conhecimentos necessários`),Kg(),Jc(161,`p`),Mk(162,`Para compreender o funcionamento do PO Sync e utilizá-lo é necessário ter conhecimento técnico em:`),Kg(),Jc(163,`ul`)(164,`li`)(165,`a`,37),Mk(166,`JavaScript (ES6)`),Kg(),Mk(167,`, em particular a utilização do padrão `),Jc(168,`a`,38)(169,`em`),Mk(170,`Promises`),Kg()(),Mk(171,`;`),Kg(),Jc(172,`li`)(173,`a`,39),Mk(174,`Ionic`),Kg(),Mk(175,`;`),Kg(),Jc(176,`li`)(177,`a`,40),Mk(178,`Observable`),Kg(),Mk(179,` do `),Jc(180,`a`,41),Mk(181,`RxJS`),Kg(),Mk(182,`;`),Kg(),Jc(183,`li`),Mk(184,`Protocolo de comunicação HTTP;`),Kg(),Jc(185,`li`),Mk(186,`Arquitetura REST.`),Kg()(),Jc(187,`p`),_u(188,`a`,42),Kg(),Jc(189,`h2`,42)(190,`em`),Mk(191,`Schemas`),Kg()(),Jc(192,`p`),Mk(193,`O PO Sync sincroniza os dados com base em um conjunto de `),Jc(194,`em`),Mk(195,`schemas`),Kg(),Mk(196,`. Onde cada `),Jc(197,`em`),Mk(198,`schema`),Kg(),Mk(199,` representa um modelo de dados,
ou seja, a estrutura l\xF3gica e as caracter\xEDsticas de um conjunto de registros. Sendo semelhante a uma tabela
convencional de um banco de dados, como por exemplo uma tabela de clientes, produtos ou autom\xF3veis. No entanto os `),Jc(200,`em`),Mk(201,`schemas`),Kg(),Mk(202,`
n\xE3o possuem relacionamentos entre si como as tabelas convencionais.`),Kg(),Jc(203,`p`),_u(204,`a`,43),Kg(),Jc(205,`h3`,44),Mk(206,`Como criar um `),Jc(207,`em`),Mk(208,`schema`),Kg()(),Jc(209,`p`),Mk(210,`Cada `),Jc(211,`em`),Mk(212,`schema`),Kg(),Mk(213,` deve implementar a interface `),Jc(214,`a`,33),Mk(215,`PoSyncSchema`),Kg(),Mk(216,`. Para criar um `),Jc(217,`em`),Mk(218,`schema`),Kg(),Mk(219,` que represente uma "Confer\xEAncia"
podemos fazer:`),Kg(),Jc(220,`pre`)(221,`code`,45),Mk(222,`ng generate @po-ui/ng-sync:schema --name=conference
`),Kg()(),Jc(223,`p`),Mk(224,`O comando ng generate do Angular CLI criará um arquivo com uma estrutura semelhante a essa:`),Kg(),Jc(225,`pre`)(226,`code`,46),Mk(227,`import { PoSyncSchema } from '@po-ui/ng-sync';

const conferenceSchema: PoSyncSchema = {
  // Endpoint para o m\xE9todo GET
  getUrlApi: 'https://po-sample-conference.onrender.com/conferences',
  diffUrlApi: 'https://po-sample-conference.onrender.com/conferences/diff',
  deletedField: 'isDeleted',
  fields: [ 'id', 'title', 'date', 'location', 'description' ],
  idField: 'id',
  name: 'conference',
  pageSize: 1
};
`),Kg()(),Jc(228,`p`),Mk(229,`Nesta definição de `),Jc(230,`em`),Mk(231,`schema`),Kg(),Mk(232,` podem ser configurados os `),Jc(233,`em`),Mk(234,`endpoints`),Kg(),Mk(235,` para os m\xE9todos HTTP: GET, POST, DELETE e PATCH,
sendo somente o `),Jc(236,`em`),Mk(237,`endpoint`),Kg(),Mk(238,` do m\xE9todo GET obrigat\xF3rio. Caso os demais n\xE3o sejam informados, ser\xE1 utilizado o mesmo endere\xE7o
do `),Jc(239,`em`),Mk(240,`endpoint`),Kg(),Mk(241,` do método GET para os outros métodos.`),Kg(),Jc(242,`p`),Mk(243,`A propriedade `),Jc(244,`code`),Mk(245,`fields`),Kg(),Mk(246,` da interface `),Jc(247,`a`,33),Mk(248,`PoSyncSchema`),Kg(),Mk(249,` representa os campos que estar\xE3o no registro.
Por exemplo, para um `),Jc(250,`em`),Mk(251,`schema`),Kg(),Mk(252,` do tipo Pessoa, poderíamos ter os campos: nome, idade e endereço.`),Kg(),Jc(253,`p`),Mk(254,`N\xE3o necessariamente precisam ser representados todos os campos retornados pela API, somente os necess\xE1rios para as
manipula\xE7\xF5es atrav\xE9s do PO Sync.`),Kg(),Jc(255,`p`),_u(256,`a`,47),Kg(),Jc(257,`h3`,47),Mk(258,`Schematic`),Kg(),Jc(259,`p`),Mk(260,`Você pode utilizar um schematic para criar o arquivo com a estrutura básica do schema.`),Kg(),Jc(261,`p`),Mk(262,`Para isso utilize o comando`),Kg(),Jc(263,`pre`)(264,`code`,45),Mk(265,`ng generate @po-ui/ng-sync:schema
`),Kg()(),Jc(266,`p`),Mk(267,`Você também pode informar um caminho completo.`),Kg(),Jc(268,`pre`)(269,`code`,45),Mk(270,`ng generate @po-ui/ng-sync:schema --name=conference/schema/conference
`),Kg()(),Jc(271,`p`),Mk(272,`Ou apenas o nome do schema que ele criará o arquivo na pasta que o comando for executado.`),Kg(),Jc(273,`pre`)(274,`code`,45),Mk(275,`ng generate @po-ui/ng-sync:schema --name=conference
`),Kg()(),Jc(276,`p`),_u(277,`a`,48),Kg(),Jc(278,`h2`,49),Mk(279,`Preparando a API para a sincronização`),Kg(),Jc(280,`p`),Mk(281,`Para que a sincronização aconteça corretamente é necessário que a API tenha implementado a `),Jc(282,`a`,8),Mk(283,`exclusão lógica`),Kg(),Mk(284,` e um `),Jc(285,`a`,9)(286,`em`),Mk(287,`endpoint`),Kg(),Mk(288,` de sincronização`),Kg(),Mk(289,`.`),Kg(),Jc(290,`p`),_u(291,`a`,50),Kg(),Jc(292,`h3`,51),Mk(293,`Exclusão lógica`),Kg(),Jc(294,`p`),Mk(295,`A exclus\xE3o dos registros na API dever\xE1 ser feita de forma l\xF3gica, ou seja, \xE9 necess\xE1rio que cada registro contenha um
campo que representa se aquele registro foi exclu\xEDdo, por exemplo:`),Kg(),Jc(296,`pre`)(297,`code`,52),Mk(298,`{
  "id": 1,
  "title": "PO conference 2018",
  "date": "2018-08-11T00:00:00Z",
  "location": "Av. Santos Dumont, 831 - Santo Ant\xF4nio, Joinville - SC",
  "description": "Conference organized by PO",
  // Campo informando se o registro foi exclu\xEDdo
  "isDeleted": false
}
`),Kg()(),Jc(299,`p`),Mk(300,`No registro acima o campo chamado `),Jc(301,`code`),Mk(302,`isDeleted`),Kg(),Mk(303,` descreve se ele foi excluído ou não.`),Kg(),Jc(304,`p`),Mk(305,`Esta informação do campo deverá ser fornecida ao PO Sync dentro da declaração de cada `),Jc(306,`em`),Mk(307,`schema`),Kg(),Mk(308,`, para isso temos a
propriedade `),Jc(309,`code`),Mk(310,`deletedField`),Kg(),Mk(311,` na interface `),Jc(312,`a`,33),Mk(313,`PoSyncSchema`),Kg(),Mk(314,`, por exemplo:`),Kg(),Jc(315,`pre`)(316,`code`,46),Mk(317,`import { PoSyncSchema } from '@po-ui/ng-sync';

const conferenceSchema: PoSyncSchema = {
  getUrlApi: 'https://po-sample-conference.onrender.com/conferences',
  diffUrlApi: 'https://po-sample-conference.onrender.com/conferences/diff',
  // Defini\xE7\xE3o do nome do campo
  deletedField: 'isDeleted',
  fields: [ 'id', 'title', 'date', 'location', 'description' ],
  idField: 'id',
  name: 'conference',
  pageSize: 1
};
`),Kg()(),Jc(318,`h4`,53),Mk(319,`Porque exclusão lógica?`),Kg(),Jc(320,`p`),Mk(321,`A exclusão lógica é utilizada para que outras aplicações possam saber se um registro foi removido.`),Kg(),Jc(322,`p`),Mk(323,`Imagine que dois aplicativos estejam manipulando o mesmo registro através de um `),Jc(324,`em`),Mk(325,`endpoint`),Kg(),Mk(326,`. Um dos aplicativos remove
este registro, como o outro aplicativo saber\xE1 que este registro foi removido? Atrav\xE9s da exclus\xE3o l\xF3gica, o PO Sync
tem o controle dessa informa\xE7\xE3o.`),Kg(),Jc(327,`p`),_u(328,`a`,54),Kg(),Jc(329,`h3`,55)(330,`em`),Mk(331,`Endpoint`),Kg(),Mk(332,` de sincronização`),Kg(),Jc(333,`p`),Mk(334,`Sempre que houver uma sincronização, uma requisição é feita neste `),Jc(335,`em`),Mk(336,`endpoint`),Kg(),Mk(337,` utilizando a data da \xFAltima sincroniza\xE7\xE3o
como refer\xEAncia (como par\xE2metro da URL). Ao receber esta data, o `),Jc(338,`em`),Mk(339,`endpoint`),Kg(),Mk(340,` deve retornar todos os registros que
tiveram a \xFAltima atualiza\xE7\xE3o maior ou igual a data que foi recebida como par\xE2metro, logo, somente os dados n\xE3o
sincronizados ser\xE3o retornados. Para cada um dos `),Jc(341,`em`),Mk(342,`schemas`),Kg(),Mk(343,` é necessário ter um `),Jc(344,`em`),Mk(345,`endpoint`),Kg(),Mk(346,` de sincronização.`),Kg(),Jc(347,`p`),Mk(348,`Abra o seu navegador e acesse a URL
`),Jc(349,`a`,56),Mk(350,`https://po-sample-conference.onrender.com/conferences/diff/2018-10-08T13:23:31.893Z`),Kg(),Mk(351,`.`),Kg(),Jc(352,`p`),Mk(353,`O `),Jc(354,`em`),Mk(355,`endpoint`),Kg(),Mk(356,` de sincronização deve retornar uma resposta com a estrutura como a da URL acima, por exemplo:`),Kg(),Jc(357,`pre`)(358,`code`,52),Mk(359,`{
  "hasNext": false,
  "items": [],
  "po_sync_date": "2018-10-08T13:57:55.008Z"
}
`),Kg()(),Jc(360,`p`),Mk(361,`Onde:`),Kg(),Jc(362,`ul`)(363,`li`)(364,`code`),Mk(365,`hasNext`),Kg(),Mk(366,`: Indica se existe uma próxima página com mais registros para aquela coleção de itens.`),Kg(),Jc(367,`li`)(368,`code`),Mk(369,`items`),Kg(),Mk(370,`: Lista de itens retornados.`),Kg(),Jc(371,`li`)(372,`code`),Mk(373,`po_sync_date`),Kg(),Mk(374,`: Data da \xFAltima sincroniza\xE7\xE3o. Ao realizar esta requisi\xE7\xE3o estamos solicitando uma
sincroniza\xE7\xE3o, ent\xE3o esta data deve ser a data em que o servidor est\xE1 devolvendo a resposta. Se na requisi\xE7\xE3o o `),Jc(375,`em`),Mk(376,`endpoint`),Kg(),Mk(377,`
n\xE3o enviar esta data, n\xE3o ser\xE1 poss\xEDvel fazer a pr\xF3xima sincroniza\xE7\xE3o, pois esta data ser\xE1 utilizada
para a pr\xF3xima URL de sincroniza\xE7\xE3o.`),Kg()(),Jc(378,`blockquote`)(379,`p`),Mk(380,`Esta estrutura de resposta é padronizada pelo `),Jc(381,`a`,57),Mk(382,`Guia de implementação de APIs`),Kg(),Mk(383,`.`),Kg()(),Jc(384,`blockquote`)(385,`p`)(386,`strong`),Mk(387,`Primeira sincronização:`),Kg(),Mk(388,` como na primeira sincronização o PO Sync ainda não recebeu nenhuma data dos `),Jc(389,`em`),Mk(390,`endpoints`),Kg(),Mk(391,`, a URL \xE9 montada com uma data muito
antiga, o que faz com que todos os dados sejam retornados na primeira sincroniza\xE7\xE3o.`),Kg()(),Jc(392,`p`),Mk(393,`A definição deste `),Jc(394,`em`),Mk(395,`endpoint`),Kg(),Mk(396,` deve ser feita na propriedade `),Jc(397,`code`),Mk(398,`diffUrlApi`),Kg(),Mk(399,` da sua definição do `),Jc(400,`em`),Mk(401,`schema`),Kg(),Mk(402,`, como no exemplo
abaixo:`),Kg(),Jc(403,`pre`)(404,`code`,46),Mk(405,`import { PoSyncSchema } from '@po-ui/ng-sync';

const conferenceSchema: PoSyncSchema = {
  getUrlApi: 'https://po-sample-conference.onrender.com/conferences',
  // Defini\xE7\xE3o da URL de sincroniza\xE7\xE3o
  diffUrlApi: 'https://po-sample-conference.onrender.com/conferences/diff',
  deletedField: 'isDeleted',
  fields: [ 'id', 'title', 'date', 'location', 'description' ],
  idField: 'id',
  name: 'conference',
  pageSize: 1
};
`),Kg()(),Jc(406,`p`),_u(407,`a`,58),Kg(),Jc(408,`h2`,59),Mk(409,`Preparando a aplicação`),Kg(),Jc(410,`p`),Mk(411,`Após ter criado os `),Jc(412,`em`),Mk(413,`schemas`),Kg(),Mk(414,` e preparado a API, \xE9 necess\xE1rio preparar a aplica\xE7\xE3o para utilizar o PO Sync passando para
ele os `),Jc(415,`em`),Mk(416,`schemas`),Kg(),Mk(417,` e as configurações iniciais. Se você seguiu o guia `),Jc(418,`a`,34),Mk(419,`Começando com o PO Sync`),Kg(),Mk(420,`,
dentro do arquivo `),Jc(421,`code`),Mk(422,`src/app/app.component.ts`),Kg(),Mk(423,`, no método `),Jc(424,`code`),Mk(425,`initSync()`),Kg(),Mk(426,` foi feita a seguinte implementação:`),Kg(),Jc(427,`pre`)(428,`code`,46),Mk(429,`const config: PoSyncConfig = {
  type: PoNetworkType.ethernet
};
const schemas = [conferenceSchema];

this.poSync.prepare(schemas, config).then(() => {
  this.poSync.sync();
  ...
});
`),Kg()(),Jc(430,`p`),Mk(431,`A variável `),Jc(432,`code`),Mk(433,`config`),Kg(),Mk(434,` implementa a interface `),Jc(435,`a`,33),Mk(436,`PoSyncConfig`),Kg(),Mk(437,` e representa as configura\xE7\xF5es iniciais de sincroniza\xE7\xE3o. Neste
exemplo, a propriedade `),Jc(438,`code`),Mk(439,`type`),Kg(),Mk(440,` descreve o tipo de conex\xE3o que ir\xE1 permitir que aconte\xE7a o sincronismo. Ao terminar de
preparar a aplica\xE7\xE3o os dados estar\xE3o dispon\xEDveis para serem sincronizados do servidor para a aplica\xE7\xE3o local. Por esta raz\xE3o,
ap\xF3s a conclus\xE3o da promessa deste m\xE9todo, o `),Jc(441,`code`),Mk(442,`poSync.sync()`),Kg(),Mk(443,` pode ser chamado para sincronizar os dados.`),Kg(),Jc(444,`p`),_u(445,`a`,60),Kg(),Jc(446,`h3`,61),Mk(447,`Sincronização periódica`),Kg(),Jc(448,`p`),Mk(449,`Para que os dados sejam atualizados dentro de um período de tempo, modifique a constante `),Jc(450,`code`),Mk(451,`config`),Kg(),Mk(452,` do exemplo
anterior para ficar da seguinte forma:`),Kg(),Jc(453,`pre`)(454,`code`,46),Mk(455,`const config: PoSyncConfig = {
  type: PoNetworkType.ethernet,
  // Linha adicionada
  period: 30
};

const schemas = [conferenceSchema];

this.poSync.prepare(schemas, config).then(() => {
  this.poSync.sync();
  ...
});
`),Kg()(),Jc(456,`p`),Mk(457,`Onde o valor da propriedade `),Jc(458,`code`),Mk(459,`period`),Kg(),Mk(460,` define que o sincronismo deverá ser ativado a cada 30 segundos.`),Kg(),Jc(461,`p`),_u(462,`a`,62),Kg(),Jc(463,`h3`,63),Mk(464,`Carga inicial dos dados`),Kg(),Jc(465,`p`),Mk(466,`Caso queira fazer a carga inicial dos dados que estão no servidor antes de fazer o primeiro sincronismo, o serviço `),Jc(467,`a`,33),Mk(468,`PoSyncService`),Kg(),Mk(469,`
disponibiliza um m\xE9todo chamado `),Jc(470,`code`),Mk(471,`PoSyncService.loadData()`),Kg(),Mk(472,`.`),Kg(),Jc(473,`blockquote`)(474,`p`)(475,`strong`),Mk(476,`Atenção:`),Kg(),Mk(477,` este método deve ser chamado apenas uma vez para carregar os dados iniciais e antes do primeiro sincronismo.`),Kg()(),Jc(478,`p`),Mk(479,`Para implementar a carga inicial no código anterior, basta substituir a linha onde estava `),Jc(480,`code`),Mk(481,`this.poSync.sync();`),Kg(),Mk(482,` pela
seguinte implementa\xE7\xE3o:`),Kg(),Jc(483,`pre`)(484,`code`,46),Mk(485,`const config: PoSyncConfig = {
  type: PoNetworkType.ethernet,
  period: 30
};

const schemas = [conferenceSchema];

this.poSync.prepare(schemas, config).then(() => {
  
  // Implementa\xE7\xE3o adicionada
  if(<condicao>) {
    this.poSync.loadData();
  }

});
`),Kg()(),Jc(486,`p`),Mk(487,`Onde `),Jc(488,`code`),Mk(489,`<condicao>`),Kg(),Mk(490,` deve ser substitu\xEDda por uma valida\xE7\xE3o que verifique se \xE9 a primeira vez em que os dados est\xE3o sendo
carregados na aplica\xE7\xE3o, como por exemplo na instala\xE7\xE3o do aplicativo.`),Kg(),Jc(491,`p`),_u(492,`a`,64),Kg(),Jc(493,`h2`,65),Mk(494,`Manipulando os registros de um `),Jc(495,`em`),Mk(496,`schema`),Kg()(),Jc(497,`p`),Mk(498,`Toda a manipulação dos registros de um `),Jc(499,`em`),Mk(500,`schema`),Kg(),Mk(501,` como salvar, remover e buscar \xE9 feita atrav\xE9s da inst\xE2ncia da classe
`),Jc(502,`a`,66),Mk(503,`PoEntity`),Kg(),Mk(504,` que pode ser obtida a partir do método `),Jc(505,`code`),Mk(506,`PoSyncService.getModel()`),Kg(),Mk(507,`, por exemplo:`),Kg(),Jc(508,`pre`)(509,`code`,46),Mk(510,`this.conferenceModel = await this.poSync.getModel('conference');
`),Kg()(),Jc(511,`p`),Mk(512,`Onde o parâmetro "conference" representa o nome do `),Jc(513,`em`),Mk(514,`schema`),Kg(),Mk(515,` que se deseja manipular.
Este \xE9 o mesmo valor colocado na propriedade `),Jc(516,`code`),Mk(517,`name`),Kg(),Mk(518,` da interface `),Jc(519,`a`,33),Mk(520,`PoSyncSchema`),Kg(),Mk(521,`.`),Kg(),Jc(522,`p`),Mk(523,`Agora com esta instância podemos utilizar todos os métodos do `),Jc(524,`a`,66),Mk(525,`PoEntity`),Kg(),Mk(526,` para manipular os registros.`),Kg(),Jc(527,`p`),_u(528,`a`,67),Kg(),Jc(529,`h3`,68),Mk(530,`Buscando os registros`),Kg(),Jc(531,`blockquote`)(532,`p`),Mk(533,`A busca dos registros sempre é feita na aplicação local, pois a mesma é atualizada com o servidor através do processo de sincronização.`),Kg()(),Jc(534,`p`),Mk(535,`Com a instância de `),Jc(536,`a`,66),Mk(537,`PoEntity`),Kg(),Mk(538,` armazenada na propriedade `),Jc(539,`code`),Mk(540,`this.conferenceModel`),Kg(),Mk(541,` podemos buscar
os registros com o `),Jc(542,`code`),Mk(543,`PoEntity.find()`),Kg(),Mk(544,` da seguinte forma:`),Kg(),Jc(545,`pre`)(546,`code`,46),Mk(547,`this.conferences = await this.conferenceModel.find().exec();
`),Kg()(),Jc(548,`p`),Mk(549,`Podemos notar que após usar o método, foi necessário concatená-lo com o método `),Jc(550,`code`),Mk(551,`PoQueryBuilder.exec()`),Kg(),Mk(552,`
para que a busca pudesse ser conclu\xEDda e os registros serem retornados.`),Kg(),Jc(553,`p`),Mk(554,`Isso acontece porque o método `),Jc(555,`code`),Mk(556,`PoEntity.find()`),Kg(),Mk(557,` retorna uma instância da classe `),Jc(558,`a`,69),Mk(559,`PoQueryBuilder`),Kg(),Mk(560,` e todos os m\xE9todos
desta classe podem ser encadeados e no final chamar o m\xE9todo `),Jc(561,`code`),Mk(562,`PoQueryBuilder.exec()`),Kg(),Mk(563,` para concluir a busca.`),Kg(),Jc(564,`p`),Mk(565,`Por exemplo, para buscar os dados e ordená-los pelo campo do `),Jc(566,`em`),Mk(567,`schema`),Kg(),Mk(568,` chamado `),Jc(569,`code`),Mk(570,`title`),Kg(),Mk(571,`, podemos fazer:`),Kg(),Jc(572,`pre`)(573,`code`,46),Mk(574,`this.conferences = await this.conferenceModel.find().sort('title').exec();
`),Kg()(),Jc(575,`p`),Mk(576,`E se quisermos retornar somente os campos `),Jc(577,`code`),Mk(578,`title`),Kg(),Mk(579,` e `),Jc(580,`code`),Mk(581,`location`),Kg(),Mk(582,`, podemos fazer:`),Kg(),Jc(583,`pre`)(584,`code`,46),Mk(585,`this.conferences = await this.conferenceModel.find().sort('title').select('title location').exec();
`),Kg()(),Jc(586,`blockquote`)(587,`p`),Mk(588,`Para saber mais sobre os métodos para construção de consultas, acesse `),Jc(589,`a`,69),Mk(590,`PoQueryBuilder`),Kg(),Mk(591,`.`),Kg()(),Jc(592,`p`),_u(593,`a`,70),Kg(),Jc(594,`h3`,71),Mk(595,`Criação, atualização e exclusão de um registro`),Kg(),Jc(596,`p`),Mk(597,`Ainda com a instância de `),Jc(598,`a`,66),Mk(599,`PoEntity`),Kg(),Mk(600,` podemos utilizar o método `),Jc(601,`code`),Mk(602,`PoEntity.save()`),Kg(),Mk(603,` para criar um
novo registro. Portanto para criar uma nova confer\xEAncia no nosso exemplo, podemos fazer:`),Kg(),Jc(604,`pre`)(605,`code`,46),Mk(606,`const conference = { title: 'BrasilJS', location: 'Barra Shopping Sul - Porto Alegre, RS - Brasil' };

this.conferenceModel.save(conference).then(() => {
  // Confer\xEAncia criada!
});
`),Kg()(),Jc(607,`p`),Mk(608,`E para atualizar a conferência, é necessário ter o registro buscado através do `),Jc(609,`a`,66),Mk(610,`PoEntity`),Kg(),Mk(611,`,
pois este registro dever\xE1 conter o `),Jc(612,`em`),Mk(613,`id`),Kg(),Mk(614,` depois que for salvo.`),Kg(),Jc(615,`p`),Mk(616,`Por exemplo, para buscarmos e atualizarmos a conferência que criamos acima, podemos fazer:`),Kg(),Jc(617,`p`)(618,`strong`),Mk(619,`1)`),Kg(),Mk(620,` Buscar a conferência pelo título "BrasilJS":`),Kg(),Jc(621,`pre`)(622,`code`,46),Mk(623,`const conferenceUpdated = await this.conferenceModel.find().filter({ title: 'BrasilJS' }).exec();
`),Kg()(),Jc(624,`p`)(625,`strong`),Mk(626,`2)`),Kg(),Mk(627,` Podemos atualizar a localização, por exemplo:`),Kg(),Jc(628,`pre`)(629,`code`,46),Mk(630,`conferenceUpdated.location = 'UFRGS - Porto Alegre, RS - Brasil';
`),Kg()(),Jc(631,`p`)(632,`strong`),Mk(633,`3)`),Kg(),Mk(634,` Utilizamos o método `),Jc(635,`code`),Mk(636,`PoEntity.save()`),Kg(),Mk(637,` para efetuar a atualização:`),Kg(),Jc(638,`pre`)(639,`code`,46),Mk(640,`this.conferenceModel.save(conferenceUpdated).then(() => {
  // Confer\xEAncia atualizada!
});
`),Kg()(),Jc(641,`p`),Mk(642,`Para excluir um registro também é necessário buscá-lo através do `),Jc(643,`a`,66),Mk(644,`PoEntity`),Kg(),Mk(645,`
como na atualiza\xE7\xE3o e ap\xF3s esta busca utilizar o m\xE9todo `),Jc(646,`code`),Mk(647,`PoEntity.remove()`),Kg(),Mk(648,` para remover o registro, por exemplo:`),Kg(),Jc(649,`pre`)(650,`code`,46),Mk(651,`const conferenceRemove = await this.conferenceModel.find().filter({ title: 'BrasilJS' }).exec();

this.conferenceModel.remove(conferenceRemove).then(() => {
  // Confer\xEAncia removida!
});
`),Kg()(),Jc(652,`p`),_u(653,`a`,72),Kg(),Jc(654,`h2`,73),Mk(655,`Sincronização manual`),Kg(),Jc(656,`p`),Mk(657,`Existem casos onde o usu\xE1rio do aplicativo deseja ativar manualmente a sincroniza\xE7\xE3o, como por exemplo apertando um
bot\xE3o para atualizar os dados.`),Kg(),Jc(658,`p`),Mk(659,`Esta operação pode ser feita através do método `),Jc(660,`code`),Mk(661,`PoSyncService.sync()`),Kg(),Mk(662,`. Por exemplo:`),Kg(),Jc(663,`pre`)(664,`code`,46),Mk(665,`this.poSync.sync().then(() => {
  // Sincroniza\xE7\xE3o conclu\xEDda
}).catch(() => {
  // Erro durante a sincroniza\xE7\xE3o
});
`),Kg()(),Jc(666,`p`),_u(667,`a`,74),Kg(),Jc(668,`h2`,75),Mk(669,`Técnicas avançadas`),Kg(),Jc(670,`p`),_u(671,`a`,76),Kg(),Jc(672,`h3`,77),Mk(673,`Notificação pós-sincronização`),Kg(),Jc(674,`p`),Mk(675,`Em algumas situa\xE7\xF5es, \xE9 necess\xE1rio ser notificado sempre que uma sincroniza\xE7\xE3o acontecer para, por exemplo, atualizar a tela do usu\xE1rio com os dados sincronizados. Para isso, se inscreva atrav\xE9s do m\xE9todo
`),Jc(676,`code`),Mk(677,`PoSyncService.onSync()`),Kg(),Mk(678,` que irá notificá-lo sempre que uma sincronização acontecer com sucesso.`),Kg(),Jc(679,`p`),Mk(680,`Por exemplo, no guia `),Jc(681,`a`,34),Mk(682,`Começando com o PO Sync`),Kg(),Mk(683,` temos a utiliza\xE7\xE3o do m\xE9todo
`),Jc(684,`code`),Mk(685,`PoSyncService.onSync()`),Kg(),Mk(686,` dentro do `),Jc(687,`code`),Mk(688,`constructor()`),Kg(),Mk(689,`, localizado no arquivo `),Jc(690,`code`),Mk(691,`src/pages/home/home.ts`),Kg(),Mk(692,`:`),Kg(),Jc(693,`pre`)(694,`code`,46),Mk(695,`constructor(public navCtrl: NavController, private poSync: PoSyncService) {
  // Deve chamar o m\xE9todo loadHomePage() sempre que acontecer uma sincroniza\xE7\xE3o
  this.poSync.onSync().subscribe(() => this.loadHomePage());
}

async loadHomePage() {
  this.conference = await this.poSync.getModel('conference').findOne().exec();
}
`),Kg()(),Jc(696,`blockquote`)(697,`p`),Mk(698,`Para saber mais sobre este método acesse `),Jc(699,`a`,33),Mk(700,`PoSyncService.onSync()`),Kg(),Mk(701,`.`),Kg()(),Jc(702,`p`),_u(703,`a`,78),Kg(),Jc(704,`h3`,79),Mk(705,`Adaptando a resposta da API para o padrão do PO`),Kg(),Jc(706,`p`),Mk(707,`O PO Sync necessita que as APIs utilizem o padrão de respostas que está no `),Jc(708,`a`,57),Mk(709,`Guia de implementação de APIs`),Kg(),Mk(710,` que segue a seguinte estrutura:`),Kg(),Jc(711,`pre`)(712,`code`,52),Mk(713,`{
  "hasNext": boolean,
  "items": [],
  "po_sync_date": date
}
`),Kg()(),Jc(714,`p`),Mk(715,`No entanto, existem APIs que ainda não seguem este padrão. Imagine que você possua uma API que sempre retorne a seguinte estrutura:`),Kg(),Jc(716,`pre`)(717,`code`,46),Mk(718,`{
  "next": string,
  "data": [],
  "sync_date": date
}
`),Kg()(),Jc(719,`p`),Mk(720,`Onde:`),Kg(),Jc(721,`ul`)(722,`li`)(723,`code`),Mk(724,`next`),Kg(),Mk(725,`: é a URL da próxima página. Por exemplo: `),Jc(726,`code`),Mk(727,`https://<url>?page=3`),Kg(),Mk(728,`;`),Kg(),Jc(729,`li`)(730,`code`),Mk(731,`data`),Kg(),Mk(732,`: lista de itens retornados;`),Kg(),Jc(733,`li`)(734,`code`),Mk(735,`sync_date`),Kg(),Mk(736,`: data da última sincronização.`),Kg()(),Jc(737,`p`),Mk(738,`E a API espera para paginação os seguintes parâmetros na URL:`),Kg(),Jc(739,`ul`)(740,`li`)(741,`code`),Mk(742,`pageNumber`),Kg(),Mk(743,`: indica o número da página;`),Kg(),Jc(744,`li`)(745,`code`),Mk(746,`size`),Kg(),Mk(747,`: quantidade de itens por página.`),Kg()(),Jc(748,`p`),Mk(749,`Por exemplo:`),Kg(),Jc(750,`pre`)(751,`code`),Mk(752,`http://<url>/?pageNumber=2&size=10
`),Kg()(),Jc(753,`p`),Mk(754,`É possível fazer a adaptação desta resposta utilizando a classe `),Jc(755,`a`,80),Mk(756,`PoDataTransform`),Kg(),Mk(757,`.
Esta classe possui uma propriedade chamada `),Jc(758,`code`),Mk(759,`data`),Kg(),Mk(760,` que representa a resposta que o `),Jc(761,`em`),Mk(762,`endpoint`),Kg(),Mk(763,` retornou.`),Kg(),Jc(764,`p`),Mk(765,`Para fazer a adaptação desta estrutura de resposta:`),Kg(),Jc(766,`p`)(767,`strong`),Mk(768,`1)`),Kg(),Mk(769,` Crie uma nova classe e a faça herdar a classe `),Jc(770,`a`,80),Mk(771,`PoDataTransform`),Kg(),Mk(772,`:`),Kg(),Jc(773,`pre`)(774,`code`,46),Mk(775,`import { PoDataTransform } from '@po-ui/ng-sync';

class MyDataTransform extends PoDataTransform {
  ...
}
`),Kg()(),Jc(776,`p`)(777,`strong`),Mk(778,`2)`),Kg(),Mk(779,` Implemente os métodos da classe `),Jc(780,`a`,80),Mk(781,`PoDataTransform`),Kg(),Mk(782,`:`),Kg(),Jc(783,`pre`)(784,`code`,46),Mk(785,`import { PoDataTransform } from '@po-ui/ng-sync';

class MyDataTransform extends PoDataTransform {

  getDateFieldName(): string {
    return 'sync_date';
  }

  getItemsFieldName(): string {
    return 'data';
  }

  getPageParamName(): string {
    return 'pageNumber';
  }

  getPageSizeParamName(): string {
    return 'size';
  }

  hasNext(): boolean {
    return !!this.data.next;
  }

}
`),Kg()(),Jc(786,`p`),Mk(787,`Os primeiros quatro m\xE9todos representam os nomes que ir\xE3o corresponder a cada par\xE2metro. No nosso exemplo, a cole\xE7\xE3o de
registros n\xE3o est\xE1 em uma propriedade `),Jc(788,`code`),Mk(789,`items`),Kg(),Mk(790,` conforme o padrão PO UI, mas sim em `),Jc(791,`code`),Mk(792,`data`),Kg(),Mk(793,`, ent\xE3o no m\xE9todo
`),Jc(794,`code`),Mk(795,`MyDataTransform.getItemsFieldName()`),Kg(),Mk(796,` será retornado o valor `),Jc(797,`code`),Mk(798,`data`),Kg(),Mk(799,`.`),Kg(),Jc(800,`p`),Mk(801,`O método `),Jc(802,`code`),Mk(803,`MyDataTransform.hasNext()`),Kg(),Mk(804,` deve retornar um valor `),Jc(805,`em`),Mk(806,`booleano`),Kg(),Mk(807,` que determina se existe mais p\xE1ginas para serem
buscadas ou n\xE3o. No nosso exemplo podemos acessar a pr\xF3xima p\xE1gina com a propriedade `),Jc(808,`code`),Mk(809,`next`),Kg(),Mk(810,`.
Como temos acesso a resposta da API atrav\xE9s da propriedade `),Jc(811,`code`),Mk(812,`data`),Kg(),Mk(813,`, podemos saber se existe uma próxima página do seguinte modo:`),Kg(),Jc(814,`pre`)(815,`code`,46),Mk(816,`hasNext(): boolean {
  return !!this.data.next;
}
`),Kg()(),Jc(817,`p`)(818,`strong`),Mk(819,`3)`),Kg(),Mk(820,` Por fim, deve ser criado uma instância desta classe `),Jc(821,`code`),Mk(822,`MyDataTransform`),Kg(),Mk(823,` e incluí-la na propriedade do objeto `),Jc(824,`code`),Mk(825,`PoSyncConfig`),Kg(),Mk(826,`
que \xE9 inserido no m\xE9todo `),Jc(827,`code`),Mk(828,`PoSyncService.prepare()`),Kg(),Mk(829,`, da seguinte forma:`),Kg(),Jc(830,`pre`)(831,`code`,46),Mk(832,`const config: PoSyncConfig = {
  type: PoNetworkType.ethernet,
  period: 30,
  // Inst\xE2ncia da classe MyDataTransform
  dataTransform: new MyDataTransform()
};

const schemas = [conferenceSchema];

this.poSync.prepare(schemas, config).then(() => {
  ...
});
`),Kg()(),Jc(833,`p`),Mk(834,`Com isto, todas as respostas dos `),Jc(835,`em`),Mk(836,`endpoints`),Kg(),Mk(837,` dos schemas ser\xE3o adaptados para seguir o padr\xE3o de API do PO UI esperado pelo
PO Sync.`),Kg(),Jc(838,`p`),_u(839,`a`,81),Kg(),Jc(840,`h3`,82),Mk(841,`Capturando respostas da sincronização`),Kg(),Jc(842,`p`),Mk(843,`Conforme os itens que est\xE3o na fila de eventos s\xE3o enviados para o servidor \xE9 poss\xEDvel fazer este monitoramento
atrav\xE9s da inscri\xE7\xE3o no m\xE9todo `),Jc(844,`code`),Mk(845,`PoSyncService.getResponses()`),Kg(),Mk(846,`.
A inscri\xE7\xE3o realizada atrav\xE9s do m\xE9todo `),Jc(847,`code`),Mk(848,`.subscribe()`),Kg(),Mk(849,`, retorna um objeto do tipo `),Jc(850,`code`),Mk(851,`PoSyncResponse`),Kg(),Mk(852,` que cont\xE9m as
informa\xE7\xF5es do item que foi consumido da fila de eventos. Exemplo de utiliza\xE7\xE3o:`),Kg(),Jc(853,`pre`)(854,`code`,46),Mk(855,`this.poSync.getResponses().subscribe(poSyncResponse => {
  // Foi consumido um item da fila de eventos.
});
`),Kg()(),Jc(856,`h4`,83),Mk(857,`Em que situações este monitoramento pode ser útil?`),Kg(),Jc(858,`p`),Mk(859,`Este monitoramento \xE9 \xFAtil para saber se os itens conseguiram ser enviados para o servidor com sucesso. Caso um item
enviado n\xE3o tiver sucesso, o consumo da fila de eventos ser\xE1 suspenso e os demais itens n\xE3o ser\xE3o enviados para o
servidor enquanto este item que n\xE3o est\xE1 sendo enviado for resolvido.`),Kg(),Jc(860,`p`),Mk(861,`O consumo da fila de eventos pode ser suspenso em duas situações:`),Kg(),Jc(862,`ul`)(863,`li`),Mk(864,`Se o servidor rejeitar a requisição com `),Jc(865,`em`),Mk(866,`status`),Kg(),Mk(867,` diferente da classe de `),Jc(868,`em`),Mk(869,`status 2xx`),Kg(),Mk(870,` (sucesso);`),Kg(),Jc(871,`li`),Mk(872,`Se um item da fila representa uma requisição de alteração ou exclusão e o registro envolvido não possuir `),Jc(873,`em`),Mk(874,`id`),Kg(),Mk(875,`.`),Kg()(),Jc(876,`p`),Mk(877,`Para resolver este tipo de problema, uma solução é remover este item da fila de eventos, isto pode ser feito da seguinte forma:`),Kg(),Jc(878,`pre`)(879,`code`,46),Mk(880,`// Monitora o consumo da fila de eventos
this.poSync.getResponses().subscribe(poSyncResponse => {

  // Verifica se o retorno do consumo da fila \xE9 um erro HTTP
  if (poSyncResponse.response instanceof HttpErrorResponse || poSyncResponse.response instanceof PoEventSourcingErrorResponse) {

    // Remove o item da fila de eventos
    this.poSync.removeItemOfSync(poSyncResponse.id).then(() => {
      // Sincroniza os itens novamente
      return this.poSync.resumeSync();
    });

  }

});
`),Kg()(),Jc(881,`blockquote`)(882,`p`),Mk(883,`Saiba mais sobre `),Jc(884,`a`,33),Mk(885,`PoSyncService.getResponses()`),Kg(),Mk(886,`, `),Jc(887,`a`,33),Mk(888,`PoSyncService.removeItemOfSync()`),Kg(),Mk(889,`
e `),Jc(890,`a`,84),Mk(891,`PoEventSourcingErrorResponse`),Kg(),Mk(892,`.`),Kg()(),Jc(893,`p`),_u(894,`a`,85),Kg(),Jc(895,`h3`,86),Mk(896,`Inserindo requisições HTTP na fila de eventos`),Kg(),Jc(897,`p`),Mk(898,`A manipula\xE7\xE3o da fila de eventos \xE9 feita pelo PO Sync, mas existe a possibilidade de criar um evento na fila contendo uma
requisi\xE7\xE3o HTTP customizada. Isso pode ser feito atrav\xE9s da utiliza\xE7\xE3o do m\xE9todo `),Jc(899,`code`),Mk(900,`PoSyncService.insertHttpCommand()`),Kg(),Mk(901,`.
Este m\xE9todo recebe como primeiro par\xE2metro um objeto no formato `),Jc(902,`a`,33),Mk(903,`PoHttpRequestData`),Kg(),Mk(904,` que cont\xE9m as informa\xE7\xF5es da requisi\xE7\xE3o.
Exemplo de utiliza\xE7\xE3o:`),Kg(),Jc(905,`pre`)(906,`code`,46),Mk(907,`const poHttpRequestData: PoHttpRequestData = {
  // URL que ser\xE1 enviada na requisi\xE7\xE3o
  url: 'http://<url>',

  // M\xE9todo HTTP que ser\xE1 utilizado
  method: PoHttpRequestType.POST,

  // Corpo da requisi\xE7\xE3o
  body: { record: 'example' }
};

this.poSync.insertHttpCommand(poHttpRequestData).then(commandId => {
  // Item adicionado na fila de eventos e retornado o ID do evento em "commandId"
});
`),Kg()(),Jc(908,`p`),Mk(909,`O método `),Jc(910,`code`),Mk(911,`PoSyncService.insertHttpCommand()`),Kg(),Mk(912,` retorna uma promessa e no parâmetro do `),Jc(913,`em`),Mk(914,`callback`),Kg(),Mk(915,` da promessa \xE9 fornecido
o identificador daquele evento. Este identificador por ser armazenado e utilizado posteriormente em alguma valida\xE7\xE3o no m\xE9todo
`),Jc(916,`a`,33),Mk(917,`PoSyncService.getResponses()`),Kg(),Mk(918,`, por exemplo:`),Kg(),Jc(919,`pre`)(920,`code`,46),Mk(921,`this.poSync.getResponses().subscribe(poSyncResponse => {

  if(poSyncResponse.id === this.commandResponseId) {
    // \xC9 o evento de requisi\xE7\xE3o HTTP customizado
  }

});

const poHttpRequestData: PoHttpRequestData = {
  // URL que ser\xE1 enviada na requisi\xE7\xE3o
  url: 'http://<url>',

  // M\xE9todo HTTP que ser\xE1 utilizado
  method: PoHttpRequestType.POST,

  // Corpo da requisi\xE7\xE3o
  body: { record: 'example' }
};


this.poSync.insertHttpCommand(poHttpRequestData).then(commandId => {
  // Atribui\xE7\xE3o do identificador do evento a uma propriedade
  this.commandResponseId = commandId
});
`),Kg()(),Jc(922,`p`),Mk(923,`Também é possível fazer o envio de arquivo (File) para o servidor utilizando o `),Jc(924,`code`),Mk(925,`Content-Type: multipart/form-data`),Kg(),Mk(926,`. Para isso, deve ser informado no `),Jc(927,`code`),Mk(928,`body`),Kg(),Mk(929,` o `),Jc(930,`code`),Mk(931,`rawFile`),Kg(),Mk(932,`, conforme exemplo abaixo:`),Kg(),Jc(933,`pre`)(934,`code`,46),Mk(935,`public insertFileHttpCommand(file: File) {
  const requestData: PoHttpRequestData = {
    url: 'http://my-server/api/v1/upload';,
    method: PoHttpRequestType.POST,
    headers: Array<PoHttpHeaderOption> = [{ name: 'Authorization', value: 'Basic ' + btoa('13' + ':' + '13') }],
    body: file.rawFile,
    formField: 'files',
  };

  this.poSync.insertHttpCommand(requestData).then(commandId => {
    // Evento HTTP adicionado na fila de eventos e retornado o ID do evento em "commandId"
  });
}
`),Kg()(),Jc(936,`blockquote`)(937,`p`),Mk(938,`Caso não seja passado nenhum valor para a propriedade `),Jc(939,`code`),Mk(940,`formField`),Kg(),Mk(941,` será aplicado o valor padrão `),Jc(942,`code`),Mk(943,`file`),Kg(),Mk(944,`.`),Kg()(),Jc(945,`blockquote`)(946,`p`),Mk(947,`Para o envio de arquivos recomendamos o uso prioritário do `),Jc(948,`code`),Mk(949,`lokijs`),Kg(),Mk(950,` nas configurações do `),Jc(951,`code`),Mk(952,`PoStorageModule`),Kg(),Mk(953,` por sua maior capacidade de armazenamento.
A configura\xE7\xE3o deve ser feita no `),Jc(954,`code`),Mk(955,`app.module.ts`),Kg(),Mk(956,` da sua aplicação, por exemplo:`),Kg()(),Jc(957,`pre`)(958,`code`,46),Mk(959,`...
@NgModule({
  ...
  imports: [
    ...
    PoStorageModule.forRoot({ // import do m\xF3dulo Po Storage,
      name: 'mystorage',
      storeName: '_mystore',
      driverOrder: ['lokijs', 'indexeddb', 'localstorage', 'websql']
    }),
    PoSyncModule, // import do m\xF3dulo Po Sync
  ],
  ...
})
export class AppModule {}
`),Kg()(),Jc(960,`p`),_u(961,`a`,87),Kg(),Jc(962,`h3`,88),Mk(963,`Criação de identificador customizado para eventos da fila`),Kg(),Jc(964,`p`),Mk(965,`Para monitorar se um evento em espec\xEDfico foi enviado ou n\xE3o para o servidor \xE9 poss\xEDvel criar um identificador customizado
para ele e inseri-lo como par\xE2metro nos m\xE9todos `),Jc(966,`code`),Mk(967,`PoEntity.save()`),Kg(),Mk(968,`, `),Jc(969,`code`),Mk(970,`PoEntity.remove()`),Kg(),Mk(971,` ou `),Jc(972,`code`),Mk(973,`PoSync.insertHttpCommand`),Kg(),Mk(974,`. Este identificador é retornado junto com o objeto `),Jc(975,`code`),Mk(976,`PoSyncResponse`),Kg(),Mk(977,` do método `),Jc(978,`code`),Mk(979,`PoSync.getResponses()`),Kg(),Mk(980,`, o que possibilita identificar se o evento foi enviado ou não, da seguinte forma:`),Kg(),Jc(981,`p`),Mk(982,`Na criação ou alteração de um registro:`),Kg(),Jc(983,`pre`)(984,`code`,46),Mk(985,`// Capturando os eventos enviados ao servidor
this.poSync.getResponses().subscribe(poSyncResponse => {

  if (poSyncResponse.customRequestId === customId) {
    // A cria\xE7\xE3o/altera\xE7\xE3o com o id-1234 foi processado no servidor
  }

});

const conferenceModel = this.poSync.getModel('conference');

const customId = 'id-1234';

// Inserido o identificador 'customId' no segundo par\xE2metro
conferenceModel.save(conference, customId).then(() => {});
`),Kg()(),Jc(986,`p`),Mk(987,`Na remoção de um registro:`),Kg(),Jc(988,`pre`)(989,`code`,46),Mk(990,`// Capturando os eventos enviados ao servidor
this.poSync.getResponses().subscribe(poSyncResponse => {

  if (poSyncResponse.customRequestId === customId) {
    // A remo\xE7\xE3o com o id-ABC foi processado no servidor
  }

});

const conferenceModel = this.poSync.getModel('conference');

const customId = 'id-ABC';

// Inserido o identificador 'customId' no segundo par\xE2metro
conferenceModel.remove(conference, customId).then(() => {});
`),Kg()(),Jc(991,`p`),Mk(992,`Ou na criação de uma requisição HTTP customizada:`),Kg(),Jc(993,`pre`)(994,`code`,46),Mk(995,`// Capturando os eventos enviados ao servidor
this.poSync.getResponses().subscribe(poSyncResponse => {
  
  if (poSyncResponse.customRequestId === customId) {
    // A requisi\xE7\xE3o HTTP com o id-XYZ foi processado no servidor
  }

});

const customId = 'id-XYZ';

// Inserido o identificador 'customId' no segundo par\xE2metro
this.poSync.insertHttpCommand(poHttpRequestData, customId).then(() => {});
`),Kg()(),Jc(996,`p`),_u(997,`a`,89),Kg(),Jc(998,`h3`,90),Mk(999,`Alterando as definições dos `),Jc(1e3,`em`),Mk(1001,`schemas`),Kg()(),Jc(1002,`p`),Mk(1003,`Em algumas situações, pode existir a necessidade de alterar a definição do `),Jc(1004,`em`),Mk(1005,`schema`),Kg(),Mk(1006,` que foi inserido como parâmetro dentro do método `),Jc(1007,`code`),Mk(1008,`PoSyncService.prepare()`),Kg(),Mk(1009,`. Uma alternativa para fazer esta alteração é:`),Kg(),Jc(1010,`p`)(1011,`strong`),Mk(1012,`1)`),Kg(),Mk(1013,` Chamar o método `),Jc(1014,`a`,33)(1015,`code`),Mk(1016,`PoSynceService.destroy()`),Kg()(),Mk(1017,`:`),Kg(),Jc(1018,`pre`)(1019,`code`,46),Mk(1020,`this.poSync.destroy().then(() => {
  // As defini\xE7\xF5es dos schemas, os itens da fila de eventos e todos os registros foram destru\xEDdos
});
`),Kg()(),Jc(1021,`blockquote`)(1022,`p`)(1023,`strong`),Mk(1024,`Atenção:`),Kg(),Mk(1025,` ao utilizar o método `),Jc(1026,`code`),Mk(1027,`PoSynceService.destroy()`),Kg(),Mk(1028,`, todos os registros armazenados localmente
ser\xE3o removidos inclusive os itens que estiverem na fila de eventos esperando para sincronizar.`),Kg()(),Jc(1029,`p`)(1030,`strong`),Mk(1031,`2)`),Kg(),Mk(1032,` E após a conclusão da promessa do método `),Jc(1033,`code`),Mk(1034,`PoSynceService.destroy()`),Kg(),Mk(1035,` chamar o m\xE9todo
`),Jc(1036,`code`),Mk(1037,`PoSyncService.prepare()`),Kg(),Mk(1038,` com a nova definição:`),Kg(),Jc(1039,`pre`)(1040,`code`,46),Mk(1041,`// Schemas atualizados
const schemasUpdated = [...];

this.poSync.destroy()
  .then(() => this.poSync.prepare(schemasUpdated, config))
  .then(() => {
    // Defini\xE7\xF5es dos schemas atualizadas
  });
`),Kg()(),Jc(1042,`blockquote`)(1043,`p`)(1044,`strong`),Mk(1045,`Atenção:`),Kg(),Mk(1046,` para que não venham ocorrer erros em ações que dependem das definições dos `),Jc(1047,`em`),Mk(1048,`schemas`),Kg(),Mk(1049,`, recomenda-se utilizar
o m\xE9todo `),Jc(1050,`code`),Mk(1051,`PoSyncService.prepare()`),Kg(),Mk(1052,` logo após o método `),Jc(1053,`code`),Mk(1054,`PoSynceService.destroy()`),Kg(),Mk(1055,`.`),Kg()(),Jc(1056,`p`),_u(1057,`a`,91),Kg(),Jc(1058,`h2`,92),Mk(1059,`Aplicativo de demonstração do PO Sync`),Kg(),Jc(1060,`p`),Mk(1061,`PO Conference Application é um aplicativo de demonstração do PO Sync baseado no `),Jc(1062,`a`,93),Mk(1063,`Ionic Conference Application`),Kg(),Mk(1064,`. Tendo como objetivo, demonstrar as funcionalidades do PO Sync de forma didática.`),Kg(),Jc(1065,`blockquote`)(1066,`p`),Mk(1067,`Acesse o repositório do aplicativo `),Jc(1068,`a`,94),Mk(1069,`neste link`),Kg(),Mk(1070,`.`),Kg()()())},dependencies:[Mze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var ie=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:414,vars:0,consts:[[`p-title`,`Começando com o PO Sync`,1,`guides`,`app-portal`],[`href`,`https://ionicframework.com/docs`],[`href`,`/guides/sync-fundamentals`],[`href`,`/documentation/po-sync`],[`id`,`pre-requisitos`],[`href`,`https://nodejs.org/en/`],[`href`,`https://cli.angular.io/`],[1,`language-shell`],[`href`,`https://ionicframework.com/docs/cli/`],[`id`,`passo-1-criando-o-aplicativo`],[`id`,`passo-2-instalando-as-dependencias`],[1,`language-json`],[`id`,`passo-3-instalando-o-po-sync`],[`id`,`passo-4-utilizando-o-po-sync`],[`id`,`passo-4-1-ng-module-importando-o-po-sync-e-o-po-storage`],[1,`language-typescript`],[`id`,`passo-4-1-standalone-importando-o-po-sync-e-o-po-storage`],[`id`,`passo-4-2-mapeando-seu-primeiro-schema`],[`id`,`passo-5-configurando-o-metodo-prepare`],[`id`,`passo-5-1-ng-module-alterando-o-src-app-app-component-ts`],[`id`,`passo-5-1-standalone-alterando-o-src-app-app-component-ts`],[`id`,`passo-6-ng-module-acessando-os-dados`],[`id`,`passo-6-standalone-acessando-os-dados`],[`id`,`passo-7-exibindo-os-dados-em-tela`],[1,`language-html`],[`id`,`passo-8-executando-o-aplicativo`],[`href`,`https://github.com/ionic-team/ionicons/issues/1011`],[`id`,`passo-8-1-entendendo-o-funcionamento-do-po-sync`],[`src`,`./assets/graphics/po-sync/app-get-started.gif`,`alt`,`Getting Started App`],[`id`,`proximos-passos`],[`href`,`./guides/sync-fundamentals`],[`href`,`./documentation/po-sync`]],template:function(o,d){o&1&&(Jc(0,`po-page-default`,0)(1,`p`),Mk(2,`Esse guia servirá para criar e configurar uma aplicação em `),Jc(3,`a`,1),Mk(4,`Ionic`),Kg(),Mk(5,` com o uso do PO Sync.`),Kg(),Jc(6,`p`),Mk(7,`Para maiores detalhes sobre os servi\xE7os e m\xE9todos utilizados neste tutorial, consulte a documenta\xE7\xE3o de
`),Jc(8,`a`,2),Mk(9,`Fundamentos do PO Sync`),Kg(),Mk(10,` e a documentação de referência de `),Jc(11,`a`,3),Mk(12,`API do PO Sync`),Kg(),Mk(13,`.`),Kg(),Jc(14,`h3`,4),Mk(15,`Pré-requisitos`),Kg(),Jc(16,`ul`)(17,`li`)(18,`a`,5),Mk(19,`Node.js e NPM`),Kg()(),Jc(20,`li`)(21,`a`,6),Mk(22,`Angular CLI`),Kg(),Mk(23,` (~22.2.1):`),Jc(24,`ul`)(25,`li`)(26,`pre`)(27,`code`,7),Mk(28,`npm install -g @angular/cli@22
`),Kg()()()()(),Jc(29,`li`)(30,`a`,8),Mk(31,`Ionic`),Kg(),Mk(32,`:`),Jc(33,`ul`)(34,`li`)(35,`pre`)(36,`code`,7),Mk(37,`npm install -g @ionic/cli
`),Kg()()()()()(),Jc(38,`blockquote`)(39,`p`),Mk(40,`É importante ter conhecimento prévio em Angular e Ionic para seguir esta documentação e obter melhor entendimento do PO Sync.`),Kg()(),Jc(41,`h3`,9),Mk(42,`Passo 1 - Criando o aplicativo`),Kg(),Jc(43,`p`),Mk(44,`Para a aplicação de exemplo usaremos o template `),Jc(45,`em`),Mk(46,`blank`),Kg(),Mk(47,` do Ionic. Para isso, execute o seguinte comando:`),Kg(),Jc(48,`pre`)(49,`code`,7),Mk(50,`ionic start po-sync-getting-started blank
`),Kg()(),Jc(51,`p`),Mk(52,`Caso surja a questão relacionada ao framework desejado, opte por `),Jc(53,`code`),Mk(54,`Angular`),Kg(),Mk(55,`.`),Kg(),Jc(56,`h3`,10),Mk(57,`Passo 2 - Instalando as dependências`),Kg(),Jc(58,`p`),Mk(59,`É necessário realizar alguns ajustes de compatibilidade do PO UI para o projeto criado.`),Kg(),Jc(60,`p`),Mk(61,`Navegue até a pasta do aplicativo:`),Kg(),Jc(62,`pre`)(63,`code`,7),Mk(64,`cd po-sync-getting-started
`),Kg()(),Jc(65,`p`),Mk(66,`Veja abaixo a lista de dependências e as versões compatíveis, elas devem ser conferidas e se necessário, ajustadas no seu projeto.`),Kg(),Jc(67,`pre`)(68,`code`,11),Mk(69,`  ...
  "dependencies": {
    "@angular/common": "~22.2.1",
    "@angular/compiler": "~22.2.1",
    "@angular/core": "~22.2.1",
    "@angular/forms": "~22.2.1",
    "@angular/platform-browser": "~22.2.1",
    "@angular/router": "~22.2.1",
    "@capacitor/app": "8.0.0",
    "@capacitor/core": "8.0.1",
    "@capacitor/haptics": "8.0.0",
    "@capacitor/keyboard": "8.0.0",
    "@capacitor/splash-screen": "8.0.0",
    "@capacitor/status-bar": "8.0.0",
    "@ionic/angular": "~8.7.16",
    "ionicons": "^7.0.0",
    "rxjs": "~7.8.1",
    "tslib": "^2.6.2",
    "zone.js": "~0.15.0"
  },
  "devDependencies": {
    "@angular-devkit/schematics": "~22.2.1",
    "@angular/build": "~22.2.1",
    "@angular/cli": "~22.2.1",
    "@angular/compiler-cli": "~22.2.1",
    "@angular/language-service": "~22.2.1",
    "@capacitor/cli": "8.0.1",
    "@ionic/angular-toolkit": "^12.0.0",
    ...
    "typescript": "~6.0.3"
  },
  ...
`),Kg()(),Jc(70,`blockquote`)(71,`p`)(72,`strong`),Mk(73,`Nota para projetos com módulos (NgModule)`),Kg(),Mk(74,`: A CLI do Ionic pode gerar projetos com o arquivo `),Jc(75,`code`),Mk(76,`src/main.ts`),Kg(),Mk(77,` utilizando o `),Jc(78,`code`),Mk(79,`platformBrowserDynamic`),Kg(),Mk(80,`. Caso isso aconteça, será necessário adicionar o pacote `),Jc(81,`code`),Mk(82,`@angular/platform-browser-dynamic`),Kg(),Mk(83,` no arquivo `),Jc(84,`code`),Mk(85,`package.json`),Kg(),Mk(86,` (dentro de `),Jc(87,`code`),Mk(88,`dependencies`),Kg(),Mk(89,`), juntamente com as outras dependências listadas acima:`),Kg(),Jc(90,`pre`)(91,`code`,11),Mk(92,`"dependencies": {
  ...
  "@angular/platform-browser-dynamic": "~22.2.1",
  ...
}
`),Kg()()(),Jc(93,`blockquote`)(94,`p`),Mk(95,`Após configurar seu arquivo, certifique-se de salvar as alterações realizadas.`),Kg()(),Jc(96,`p`),Mk(97,`Realize a limpeza do arquivo `),Jc(98,`code`),Mk(99,`package-lock.json`),Kg(),Mk(100,` e da pasta `),Jc(101,`code`),Mk(102,`node_modules/`),Kg(),Mk(103,`, para então executar o seguinte comando para instalar as dependências:`),Kg(),Jc(104,`pre`)(105,`code`,7),Mk(106,`npm install
`),Kg()(),Jc(107,`h3`,12),Mk(108,`Passo 3 - Instalando o po-sync`),Kg(),Jc(109,`p`),Mk(110,`Para instalar o `),Jc(111,`code`),Mk(112,`po-sync`),Kg(),Mk(113,` no aplicativo execute o seguinte comando:`),Kg(),Jc(114,`pre`)(115,`code`,7),Mk(116,`ng add @po-ui/ng-sync@next
`),Kg()(),Jc(117,`h3`,13),Mk(118,`Passo 4 - Utilizando o po-sync`),Kg(),Jc(119,`h4`,14),Mk(120,`Passo 4.1 (NgModule) - Importando o `),Jc(121,`code`),Mk(122,`po-sync`),Kg(),Mk(123,` e o `),Jc(124,`code`),Mk(125,`po-storage`),Kg()(),Jc(126,`p`),Mk(127,`No arquivo `),Jc(128,`code`),Mk(129,`src/app/app.module.ts`),Kg(),Mk(130,`, adicione a importação dos módulos do `),Jc(131,`code`),Mk(132,`po-storage`),Kg(),Mk(133,` e do `),Jc(134,`code`),Mk(135,`po-sync`),Kg(),Mk(136,`:`),Kg(),Jc(137,`pre`)(138,`code`,15),Mk(139,`import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { PoStorageModule } from '@po-ui/ng-storage';
import { PoSyncModule } from '@po-ui/ng-sync';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    PoStorageModule.forRoot(),
    PoSyncModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideHttpClient(withInterceptorsFromDi()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
`),Kg()(),Jc(140,`h4`,16),Mk(141,`Passo 4.1 (Standalone) - Importando o `),Jc(142,`code`),Mk(143,`po-sync`),Kg(),Mk(144,` e o `),Jc(145,`code`),Mk(146,`po-storage`),Kg()(),Jc(147,`p`),Mk(148,`No arquivo `),Jc(149,`code`),Mk(150,`src/main.ts`),Kg(),Mk(151,`, avalie se foi feita a importação dos módulos do `),Jc(152,`code`),Mk(153,`po-storage`),Kg(),Mk(154,` e do `),Jc(155,`code`),Mk(156,`po-sync`),Kg(),Mk(157,`: `),Kg(),Jc(158,`pre`)(159,`code`,15),Mk(160,`import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { PoSyncModule } from '@po-ui/ng-sync';
import { PoStorageModule } from '@po-ui/ng-storage';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(PoSyncModule),
    importProvidersFrom(PoStorageModule.forRoot()),
  ],
});
`),Kg()(),Jc(161,`h4`,17),Mk(162,`Passo 4.2 - Mapeando seu primeiro `),Jc(163,`em`),Mk(164,`schema`),Kg()(),Jc(165,`p`),Mk(166,`O `),Jc(167,`code`),Mk(168,`po-sync`),Kg(),Mk(169,` utiliza a definição de `),Jc(170,`code`),Mk(171,`schemas`),Kg(),Mk(172,`, onde cada `),Jc(173,`code`),Mk(174,`schema`),Kg(),Mk(175,` representa um modelo de dados armazenado no dispositivo.`),Kg(),Jc(176,`p`),Mk(177,`Crie o arquivo `),Jc(178,`code`),Mk(179,`src/app/home/conference-schema.constants.ts`),Kg(),Mk(180,` e adicione o conteúdo abaixo:`),Kg(),Jc(181,`pre`)(182,`code`,15),Mk(183,`import { PoSyncSchema } from '@po-ui/ng-sync';

export const conferenceSchema: PoSyncSchema = {
  getUrlApi: 'https://po-sample-conference.onrender.com/conferences',
  diffUrlApi: 'https://po-sample-conference.onrender.com/conferences/diff',
  deletedField: 'deleted',
  fields: [ 'id', 'title', 'location', 'description' ],
  idField: 'id',
  name: 'conference',
  pageSize: 1
};
`),Kg()(),Jc(184,`h3`,18),Mk(185,`Passo 5 - Configurando o método prepare`),Kg(),Jc(186,`p`),Mk(187,`Após ter o seu primeiro `),Jc(188,`em`),Mk(189,`schema`),Kg(),Mk(190,` criado, configure o seu aplicativo utilizando o `),Jc(191,`code`),Mk(192,`po-sync`),Kg(),Mk(193,` através do método `),Jc(194,`code`),Mk(195,`PoSyncService.prepare()`),Kg(),Mk(196,`.`),Kg(),Jc(197,`h4`,19),Mk(198,`Passo 5.1 (NgModule) - Alterando o `),Jc(199,`code`),Mk(200,`src/app/app.component.ts`),Kg()(),Jc(201,`p`),Mk(202,`Substitua o conteúdo do arquivo pelo conteúdo abaixo:`),Kg(),Jc(203,`pre`)(204,`code`,15),Mk(205,`import { Component, OnInit, inject } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar } from '@capacitor/status-bar';
import { PoNetworkType, PoSyncConfig, PoSyncService } from '@po-ui/ng-sync';
import { conferenceSchema } from './home/conference-schema.constants';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false
})
export class AppComponent implements OnInit {
  private readonly platform = inject(Platform);
  private readonly poSync = inject(PoSyncService);

  ngOnInit() {
    this.initializeApp();
  }

  async initializeApp() {
    await this.platform.ready();
    if (Capacitor.isNativePlatform()) {
      StatusBar.setOverlaysWebView({ overlay: true });
    }
    await SplashScreen.hide();

    this.initSync();
  }

  initSync() {
    const config: PoSyncConfig = {
      type: PoNetworkType.wifi,
    };
    const schemas = [conferenceSchema];
    this.poSync.prepare(schemas, config).then(() => {
      this.poSync.sync();
    });
  }
}
`),Kg()(),Jc(206,`p`),Mk(207,`Após utilizar o método `),Jc(208,`code`),Mk(209,`PoSyncService.prepare()`),Kg(),Mk(210,`, a aplicação estará pronta para sincronizar os dados através do método `),Jc(211,`code`),Mk(212,`PoSyncService.sync()`),Kg(),Mk(213,`.`),Kg(),Jc(214,`h4`,20),Mk(215,`Passo 5.1 (Standalone) - Alterando o `),Jc(216,`code`),Mk(217,`src/app/app.component.ts`),Kg()(),Jc(218,`p`),Mk(219,`Substitua o conteúdo do arquivo pelo conteúdo abaixo:`),Kg(),Jc(220,`pre`)(221,`code`,15),Mk(222,`import { Component, OnInit, inject } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Capacitor } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar } from '@capacitor/status-bar';
import { PoNetworkType, PoSyncConfig, PoSyncService } from '@po-ui/ng-sync';

import { conferenceSchema } from './home/conference-schema.constants';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  private readonly platform = inject(Platform);
  private readonly poSync = inject(PoSyncService);

  ngOnInit() {
    this.initializeApp();
  }

  async initializeApp() {
    await this.platform.ready();
    if (Capacitor.isNativePlatform()) {
      StatusBar.setOverlaysWebView({ overlay: true });
    }
    await SplashScreen.hide();

    this.initSync();
  }

  initSync() {
    const config: PoSyncConfig = {
      type: PoNetworkType.wifi,
    };

    const schemas = [conferenceSchema];
    
    this.poSync.prepare(schemas, config).then(() => {
      this.poSync.sync();
    });
  }
}
`),Kg()(),Jc(223,`h3`,21),Mk(224,`Passo 6 (NgModule) - Acessando os dados`),Kg(),Jc(225,`p`),Mk(226,`Caso o projeto tenha sido gerado em uma versão anterior a 9.x do `),Jc(227,`code`),Mk(228,`@ionic/angular`),Kg(),Mk(229,`, no arquivo `),Jc(230,`code`),Mk(231,`po-sync-getting-started/src/app/home/home.module.ts`),Kg(),Mk(232,`, atualize a importação do `),Jc(233,`code`),Mk(234,`IonicModule`),Kg(),Mk(235,` para utilizar o caminho `),Jc(236,`code`),Mk(237,`import { IonicModule } from '@ionic/angular';`),Kg(),Mk(238,`:`),Kg(),Jc(239,`pre`)(240,`code`,15),Mk(241,`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
`),Kg()(),Jc(242,`blockquote`)(243,`p`)(244,`strong`),Mk(245,`Nota sobre importação do `),Jc(246,`code`),Mk(247,`IonicModule`),Kg()(),Mk(248,`: As versões anteriores à 9.x do `),Jc(249,`code`),Mk(250,`@ionic/angular`),Kg(),Mk(251,` não possuem o export `),Jc(252,`code`),Mk(253,`lazy`),Kg(),Mk(254,`, devendo ser feito o import de `),Jc(255,`code`),Mk(256,`@ionic/angular`),Kg(),Mk(257,`. A partir da versão 9.x, o import de `),Jc(258,`code`),Mk(259,`@ionic/angular/lazy`),Kg(),Mk(260,` funciona normalmente (sendo o padrão da CLI do ionic para projetos standalone).`),Kg()(),Jc(261,`p`),Mk(262,`Localize o arquivo `),Jc(263,`code`),Mk(264,`src/app/home/home.page.ts`),Kg(),Mk(265,` e faça as seguintes alterações:`),Kg(),Jc(266,`pre`)(267,`code`,15),Mk(268,`import { Component, inject, signal } from '@angular/core';

import { PoSyncService } from '@po-ui/ng-sync';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false
})
export class HomePage {
  private readonly poSync = inject(PoSyncService);

  readonly conference = signal<any>(null);

  constructor() {
    this.poSync.onSync().subscribe(() => this.loadHomePage());
  }

  async loadHomePage() {
    this.conference.set(await this.poSync.getModel('conference').findOne().exec());
  }

  clear() {
    this.conference.set(null);
  }
}
`),Kg()(),Jc(269,`p`),Mk(270,`No construtor, foi realizado uma inscrição no método `),Jc(271,`code`),Mk(272,`PoSyncService.onSync()`),Kg(),Mk(273,`, para quando ocorrer uma sincronização, o método `),Jc(274,`code`),Mk(275,`loadHomePage()`),Kg(),Mk(276,` busque um registro do `),Jc(277,`em`),Mk(278,`schema`),Kg(),Mk(279,` "Conference".`),Kg(),Jc(280,`h3`,22),Mk(281,`Passo 6 (Standalone) - Acessando os dados`),Kg(),Jc(282,`p`),Mk(283,`Localize o arquivo `),Jc(284,`code`),Mk(285,`src/app/home/home.page.ts`),Kg(),Mk(286,` e faça as seguintes alterações:`),Kg(),Jc(287,`pre`)(288,`code`,15),Mk(289,`import { Component, inject, signal } from '@angular/core';

import {
  IonContent,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardTitle
} from '@ionic/angular/standalone';
import { PoSyncService } from '@po-ui/ng-sync';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, IonButton, IonCard, IonCardContent, IonCardTitle],
})
export class HomePage {
  private readonly poSync = inject(PoSyncService);

  readonly conference = signal<any>(null);

  constructor() {
    this.poSync.onSync().subscribe(() => this.loadHomePage());
  }

  async loadHomePage() {
    this.conference.set(await this.poSync.getModel('conference').findOne().exec());
  }

  clear() {
    this.conference.set(null);
  }
}

`),Kg()(),Jc(290,`h3`,23),Mk(291,`Passo 7 - Exibindo os dados em tela`),Kg(),Jc(292,`p`),Mk(293,`No arquivo `),Jc(294,`code`),Mk(295,`src/app/home/home.page.html`),Kg(),Mk(296,` crie a seguinte estrutura:`),Kg(),Jc(297,`pre`)(298,`code`,24),Mk(299,`<ion-content class="ion-padding">
  <ion-button expand="full" (click)="loadHomePage()" (keyup.enter)="loadHomePage()">Buscar informa\xE7\xF5es</ion-button>  
  <ion-button expand="full" color="danger" (click)="clear()" (keyup.enter)="clear()">Apagar informa\xE7\xF5es</ion-button>

  @if (conference(); as conference) {
    <ion-card>
      <ion-card-content>
        <ion-card-title>
          `),Jc(300,`span`),B_(),Mk(301,`{{`),j_(),Kg(),Mk(302,` conference.title `),Jc(303,`span`),B_(),Mk(304,`}}`),j_(),Kg(),Mk(305,`
        </ion-card-title>
        <p>`),Jc(306,`span`),B_(),Mk(307,`{{`),j_(),Kg(),Mk(308,` conference.description `),Jc(309,`span`),B_(),Mk(310,`}}`),j_(),Kg(),Mk(311,`</p>
        <p>`),Jc(312,`span`),B_(),Mk(313,`{{`),j_(),Kg(),Mk(314,` conference.location `),Jc(315,`span`),B_(),Mk(316,`}}`),j_(),Kg(),Mk(317,`</p>
      </ion-card-content>
    </ion-card>
  }
</ion-content>
`),Kg()(),Jc(318,`h3`,25),Mk(319,`Passo 8 - Executando o aplicativo`),Kg(),Jc(320,`p`),Mk(321,`Execute o comando `),Jc(322,`code`),Mk(323,`ionic serve`),Kg(),Mk(324,` e verifique o funcionamento do aplicativo Ionic com `),Jc(325,`code`),Mk(326,`po-sync`),Kg(),Mk(327,`.`),Kg(),Jc(328,`blockquote`)(329,`p`),Mk(330,`Pode ocorrer o seguinte erro `),Jc(331,`code`),Mk(332,`TypeError: Failed to fetch dynamically imported module...`),Kg(),Mk(333,`, sendo necessário adicionar ao arquivo `),Jc(334,`code`),Mk(335,`angular.json`),Kg(),Mk(336,` as seguintes configurações:`),Kg(),Jc(337,`pre`)(338,`code`,11),Mk(339,`{
  "projects": {
    "app": {
      ...
      "architect": {
        ...
        "build": {
          ...
          "options": {
            ...
            "polyfills": ["zone.js"],
          },
        },
        "serve": {
          ...
          "builder": "@angular/build:dev-server",
          "options": {
            ...
            "prebundle": {
              "exclude": ["@ionic/angular", "@ionic/core", "ionicons"]
            }
          }
        },
      }
    }
  },
}
`),Kg()()(),Jc(340,`blockquote`)(341,`p`),Mk(342,`Pode ocorrer o seguinte erro `),Jc(343,`code`),Mk(344,`TS2320: Interface 'HTMLIonIconElement' cannot simultaneously extend types 'IonIcon' and 'HTMLStencilElement'`),Kg(),Mk(345,` por conta da versão do TypeScript conforme esta `),Jc(346,`a`,26),Mk(347,`issue`),Kg(),Mk(348,`, neste caso adicione no arquivo `),Jc(349,`strong`),Mk(350,`tsconfig.json`),Kg(),Jc(351,`code`),Mk(352,`"skipLibCheck": true`),Kg(),Mk(353,`.`),Kg()(),Jc(354,`blockquote`)(355,`p`),Mk(356,`Ao executar um projeto standalone, pode ocorrer o seguinte erro: `),Jc(357,`code`),Mk(358,`[ERROR] Invalid project type: angular-standalone (project config: ./ionic.config.json).`),Kg(),Mk(359,`. Para corrigir, edite o arquivo `),Jc(360,`code`),Mk(361,`ionic.config.json`),Kg(),Mk(362,` e ajuste a propriedade `),Jc(363,`code`),Mk(364,`type`),Kg(),Mk(365,` para o valor `),Jc(366,`code`),Mk(367,`angular`),Kg(),Mk(368,`.`),Kg()(),Jc(369,`h4`,27),Mk(370,`Passo 8.1 - Entendendo o funcionamento do `),Jc(371,`code`),Mk(372,`po-sync`),Kg()(),Jc(373,`ul`)(374,`li`)(375,`p`),Mk(376,`O aplicativo sincroniza os dados que estão no servidor através do método `),Jc(377,`code`),Mk(378,`PoSyncService.sync()`),Kg(),Mk(379,`;`),Kg()(),Jc(380,`li`)(381,`p`),Mk(382,`Durante esta sincronização é efetuada a busca dos registros utilizando a URL de GET, informada no `),Jc(383,`code`),Mk(384,`conference-schema.constants.ts`),Kg(),Mk(385,`, e o retorno é salvo no dispositivo do cliente;`),Kg()(),Jc(386,`li`)(387,`p`),Mk(388,`Com os dados salvos no dispositivo, é possível desabilitar o acesso à internet do aplicativo e ainda continuar acessando os dados através do `),Jc(389,`code`),Mk(390,`po-sync`),Kg(),Mk(391,`.`),Kg()()(),Jc(392,`p`),Mk(393,`Demonstração do aplicativo acessando os dados `),Jc(394,`em`),Mk(395,`offline`),Kg(),Mk(396,`:`),Kg(),Jc(397,`p`),_u(398,`img`,28),Kg(),Jc(399,`h3`,29),Mk(400,`Próximos passos`),Kg(),Jc(401,`ul`)(402,`li`)(403,`p`),Mk(404,`Leia sobre os principais `),Jc(405,`a`,30),Mk(406,`fundamentos do PO Sync`),Kg(),Mk(407,`.`),Kg()(),Jc(408,`li`)(409,`p`),Mk(410,`Saiba mais sobre a `),Jc(411,`a`,31),Mk(412,`API do PO Sync`),Kg(),Mk(413,`.`),Kg()()()())},dependencies:[Mze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var ne=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:375,vars:0,consts:[[`p-title`,`Customização de Temas usando o serviço PO-UI`,1,`guides`,`app-portal`],[1,`po-row`,2,`margin`,`20px 0`],[1,`po-lg-2`,`po-md-5`,`po-sm-12`,2,`padding`,`10px`],[2,`text-align`,`center`],[`p-icon`,`an an-palette`,2,`font-size`,`24px`],[`p-icon`,`an an-sun`,2,`font-size`,`24px`],[`p-icon`,`an an-moon`,2,`font-size`,`24px`],[`p-icon`,`an an-wheelchair-motion`,2,`font-size`,`24px`],[`p-icon`,`an an-wrench`,2,`font-size`,`24px`],[`p-icon`,`an an-lightning`,2,`font-size`,`24px`],[`id`,`conteudo`],[`href`,`guides/theme-service#introduction`],[`href`,`guides/theme-service#whyUse`],[`href`,`guides/theme-service#config`],[`href`,`guides/theme-service#configModule`],[`href`,`guides/theme-service#configStyle`],[`href`,`guides/theme-service#configService`],[`href`,`guides/theme-service#howToUse`],[`href`,`guides/theme-service#howToUseBasic`],[`href`,`guides/theme-service#howToUseComplete`],[`href`,`guides/theme-service#applyTheme`],[`href`,`guides/theme-service#applyThemeInitial`],[`href`,`guides/theme-service#applyThemeDynamic`],[`href`,`guides/theme-service#advanced`],[`href`,`guides/theme-service#advancedOverride`],[`href`,`guides/theme-service#advancedReset`],[`href`,`guides/theme-service#advancedPersist`],[`href`,`guides/theme-service#advancedSize`],[`href`,`guides/theme-service#more`],[`href`,`guides/theme-service#sampleStackblitz`],[`id`,`introduction`],[`id`,`introducao-a-customizacao-de-temas-no-po-ui`],[1,`language-typescript`],[`id`,`whyUse`],[`id`,`por-que-usar-o-po-theme-service`],[`id`,`config`],[`id`,`configuracao-inicial`],[`id`,`configModule`],[`id`,`importacao-do-modulo`],[`id`,`configStyle`],[`id`,`estilo-po-ui`],[1,`language-json`],[`id`,`configService`],[`id`,`injecao-do-servico`],[`id`,`howToUse`],[`id`,`como-utilizar-o-servico-de-tema`],[`id`,`howToUseBasic`],[`id`,`estrutura-basica`],[`id`,`howToUseComplete`],[`id`,`exemplo-completo`],[`id`,`applyTheme`],[`id`,`aplicando-o-tema`],[`id`,`applyThemeInitial`],[`id`,`aplicacao-inicial`],[`id`,`applyThemeDynamic`],[`id`,`aplicacao-dinamica`],[`id`,`advanced`],[`id`,`tecnicas-avancadas`],[`id`,`advancedOverride`],[`id`,`sobrescrita-de-variaveis`],[1,`language-html`],[1,`language-css`],[`id`,`advancedReset`],[`id`,`reset-para-tema-padrao`],[`id`,`advancedPersist`],[`id`,`persistencia-de-tema`],[`id`,`advancedSize`],[`id`,`gerenciamento-de-tamanhos`],[`id`,`more`],[`id`,`referencias-tecnicas`],[`href`,`documentation/po-theme`],[`href`,`https://doc.animaliads.io/`],[`id`,`sampleStackblitz`],[`id`,`exemplo-completo-no-stackblitz`],[`href`,`https://stackblitz.com/edit/poui-theme-service`,`target`,`_blank`,`rel`,`noreferrer`],[`src`,`https://developer.stackblitz.com/img/open_in_stackblitz.svg`,`alt`,`Open in StackBlitz`]],template:function(o,d){o&1&&(Jc(0,`po-page-default`,0)(1,`p`),Mk(2,`A partir da versão 19.X.X, o PO-UI oferece um serviço completo para criação e gestão de temas personalizados, permitindo controle total sobre cores, tipografia, acessibilidade e comportamentos específicos de componente.`),Kg(),Jc(3,`p`),Mk(4,`Principais Recursos:`),Kg(),Jc(5,`div`,1)(6,`div`,2)(7,`div`,3),_u(8,`po-icon`,4),Jc(9,`p`),Mk(10,`Paletas de cores`),Kg()()(),Jc(11,`div`,2)(12,`div`,3)(13,`div`),_u(14,`po-icon`,5)(15,`po-icon`,6),Kg(),Jc(16,`p`),Mk(17,`Temas light/dark`),Kg()()(),Jc(18,`div`,2)(19,`div`,3),_u(20,`po-icon`,7),Jc(21,`p`),Mk(22,`Acessibilidade (AA/AAA)`),Kg()()(),Jc(23,`div`,2)(24,`div`,3),_u(25,`po-icon`,8),Jc(26,`p`),Mk(27,`Sobrescrita de estilos`),Kg()()(),Jc(28,`div`,2)(29,`div`,3),_u(30,`po-icon`,9),Jc(31,`p`),Mk(32,`Aplicação dinâmica`),Kg()()()(),Jc(33,`h3`,10),Mk(34,`Conteúdo`),Kg(),Jc(35,`ul`)(36,`li`)(37,`a`,11),Mk(38,`Introdução à Customização de Temas no PO UI`),Kg()(),Jc(39,`li`)(40,`a`,12),Mk(41,`Por Que Usar o PoThemeService?`),Kg()(),Jc(42,`li`)(43,`a`,13),Mk(44,`Configuração Inicial`),Kg(),Jc(45,`ul`)(46,`li`)(47,`a`,14),Mk(48,`Importação do Módulo`),Kg()(),Jc(49,`li`)(50,`a`,15),Mk(51,`Estilo PO-UI`),Kg()(),Jc(52,`li`)(53,`a`,16),Mk(54,`Injeção do Serviço`),Kg()()()(),Jc(55,`li`)(56,`a`,17),Mk(57,`Como Utilizar o Serviço de Tema`),Kg(),Jc(58,`ul`)(59,`li`)(60,`a`,18),Mk(61,`Estrutura Básica`),Kg()(),Jc(62,`li`)(63,`a`,19),Mk(64,`Exemplo Completo`),Kg()()()(),Jc(65,`li`)(66,`a`,20),Mk(67,`Aplicando o Tema`),Kg(),Jc(68,`ul`)(69,`li`)(70,`a`,21),Mk(71,`Aplicação Inicial`),Kg()(),Jc(72,`li`)(73,`a`,22),Mk(74,`Aplicação Dinâmica`),Kg()()()(),Jc(75,`li`)(76,`a`,23),Mk(77,`Técnicas Avançadas`),Kg(),Jc(78,`ul`)(79,`li`)(80,`a`,24),Mk(81,`Sobrescrita de Variáveis`),Kg()(),Jc(82,`li`)(83,`a`,25),Mk(84,`Reset para Tema Padrão`),Kg()(),Jc(85,`li`)(86,`a`,26),Mk(87,`Persistência de Tema`),Kg()(),Jc(88,`li`)(89,`a`,27),Mk(90,`Gerenciamento de Tamanhos`),Kg()()()(),Jc(91,`li`)(92,`a`,28),Mk(93,`Mais informações`),Kg()(),Jc(94,`li`)(95,`a`,29),Mk(96,`Exemplo Completo no Stackblitz`),Kg()()(),Jc(97,`p`),_u(98,`a`,30),Kg(),Jc(99,`h3`,31),Mk(100,`Introdução à Customização de Temas no PO UI`),Kg(),Jc(101,`p`),Mk(102,`O PO UI oferece um sistema robusto e flexível para personalização visual de componentes, permitindo que desenvolvedores e designers criem experiências únicas e alinhadas às necessidades específicas de cada projeto. A customização vai além da simples alteração de cores - é um sistema completo que abrange desde variáveis CSS globais até a criação de temas dinâmicos com suporte a light/dark mode, acessibilidade avançada e controle granular sobre cada componente.`),Kg(),Jc(103,`blockquote`)(104,`p`)(105,`strong`),Mk(106,`Importante:`),Kg(),Mk(107,` o novo tema padrão do PO UI (EVO, `),Jc(108,`code`),Mk(109,`poThemeDefault`),Kg(),Mk(110,`) tem duas partes:`),Kg(),Jc(111,`ul`)(112,`li`)(113,`strong`),Mk(114,`Cores:`),Kg(),Mk(115,` vêm do CSS `),Jc(116,`code`),Mk(117,`po-theme-default.min.css`),Kg(),Mk(118,` do `),Jc(119,`code`),Mk(120,`@po-ui/style`),Kg(),Mk(121,`.`),Kg(),Jc(122,`li`)(123,`strong`),Mk(124,`Ajustes de cada componente:`),Kg(),Mk(125,` raios de borda, botão `),Jc(126,`code`),Mk(127,`glow`),Kg(),Mk(128,`, campos e outros. Eles são aplicados pelo `),Jc(129,`code`),Mk(130,`PoThemeService`),Kg(),Mk(131,`.`),Kg()(),Jc(132,`p`),Mk(133,`Para ter o tema EVO completo, basta importar o `),Jc(134,`code`),Mk(135,`PoModule`),Kg(),Mk(136,` na aplicação e carregar o CSS `),Jc(137,`code`),Mk(138,`po-theme-default.min.css`),Kg(),Mk(139,`.
O `),Jc(140,`code`),Mk(141,`PoModule`),Kg(),Mk(142,` já inicia o `),Jc(143,`code`),Mk(144,`PoThemeService`),Kg(),Mk(145,`, que aplica os ajustes sozinho. Não é preciso chamar nenhum método.`),Kg(),Jc(146,`p`),Mk(147,`Chame o `),Jc(148,`code`),Mk(149,`setTheme`),Kg(),Mk(150,` quando quiser escolher o modo claro ou escuro, o n\xEDvel de acessibilidade (AA ou AAA) ou o tema
depreciado:`),Kg(),Jc(151,`pre`)(152,`code`,32),Mk(153,`this.poThemeService.setTheme(poThemeDefault, PoThemeTypeEnum.dark, PoThemeA11yEnum.AAA);
`),Kg()(),Jc(154,`p`),Mk(155,`Se a aplicação importar só módulos de componentes (como o `),Jc(156,`code`),Mk(157,`PoButtonModule`),Kg(),Mk(158,`), sem o `),Jc(159,`code`),Mk(160,`PoModule`),Kg(),Mk(161,` e sem injetar o
`),Jc(162,`code`),Mk(163,`PoThemeService`),Kg(),Mk(164,`, ela recebe apenas as cores do EVO, sem os ajustes dos componentes.`),Kg()(),Jc(165,`p`),_u(166,`a`,33),Kg(),Jc(167,`h3`,34),Mk(168,`Por Que Usar o PoThemeService?`),Kg(),Jc(169,`p`),Mk(170,`O serviço de temas do PO UI (PoThemeService) é o coração do sistema de customização, oferecendo:`),Kg(),Jc(171,`details`)(172,`summary`)(173,`strong`),Mk(174,`Aplicação Dinâmica de Temas`),Kg()(),Jc(175,`ul`)(176,`li`),Mk(177,`Alterações em tempo real sem recarregar a aplicação`),Kg(),Jc(178,`li`),Mk(179,`Transições suaves entre temas light/dark`),Kg()()(),Jc(180,`details`)(181,`summary`)(182,`strong`),Mk(183,`Gestão Centralizada`),Kg()(),Jc(184,`ul`)(185,`li`),Mk(186,`Criação e armazenamento de múltiplos temas`),Kg(),Jc(187,`li`),Mk(188,`Combinação de temas globais e customizações locais`),Kg()()(),Jc(189,`details`)(190,`summary`)(191,`strong`),Mk(192,`Integração com Estado da Aplicação`),Kg()(),Jc(193,`ul`)(194,`li`),Mk(195,`Persistência de preferências (localStorage)`),Kg(),Jc(196,`li`),Mk(197,`Sincronização com configurações do usuário`),Kg()()(),Jc(198,`details`)(199,`summary`)(200,`strong`),Mk(201,`Controle de Acessibilidade`),Kg()(),Jc(202,`ul`)(203,`li`),Mk(204,`Ativação de níveis AA/AAA conforme requisitos`),Kg(),Jc(205,`li`),Mk(206,`Ajustes automáticos de contrastes`),Kg()()(),Jc(207,`details`)(208,`summary`)(209,`strong`),Mk(210,`Sobrescrita Flexível`),Kg()(),Jc(211,`ul`)(212,`li`),Mk(213,`Hierarquia clara: Tema > Variáveis Globais > Estilos Locais`),Kg()()(),Jc(214,`p`),_u(215,`a`,35),Kg(),Jc(216,`h3`,36),Mk(217,`Configuração Inicial`),Kg(),Jc(218,`p`),_u(219,`a`,37),Kg(),Jc(220,`h4`,38),Mk(221,`Importação do Módulo`),Kg(),Jc(222,`pre`)(223,`code`,32),Mk(224,`import { PoModule } from '@po-ui/ng-components';

@NgModule({
  imports: [
    PoThemeModule
  ]
})
export class AppModule { }
`),Kg()(),Jc(225,`p`),_u(226,`a`,39),Kg(),Jc(227,`h4`,40),Mk(228,`Estilo PO-UI`),Kg(),Jc(229,`p`),Mk(230,`Configurar o arquivo angular.json da seguinte maneira:`),Kg(),Jc(231,`pre`)(232,`code`,41),Mk(233,`"styles": [
  "node_modules/@po-ui/style/css/po-theme-default.min.css", 
  "src/styles.css"
]
`),Kg()(),Jc(234,`blockquote`)(235,`p`),Mk(236,`O arquivo `),Jc(237,`code`),Mk(238,`po-theme-default.min.css`),Kg(),Mk(239,` traz s\xF3 as cores do tema EVO. Os ajustes de cada componente v\xEAm do
`),Jc(240,`code`),Mk(241,`PoThemeService`),Kg(),Mk(242,`, que o `),Jc(243,`code`),Mk(244,`PoModule`),Kg(),Mk(245,` já inicia (veja o aviso em `),Jc(246,`a`,11),Mk(247,`Introdução`),Kg(),Mk(248,`).`),Kg()(),Jc(249,`p`),_u(250,`a`,42),Kg(),Jc(251,`h4`,43),Mk(252,`Injeção do Serviço`),Kg(),Jc(253,`p`),Mk(254,`Injeção do Serviço no construtor do componente:`),Kg(),Jc(255,`pre`)(256,`code`,32),Mk(257,`import { PoThemeService } from '@po-ui/ng-components';

export class AppComponent {
  constructor(private poThemeService: PoThemeService) { }
}
`),Kg()(),Jc(258,`p`),_u(259,`a`,44),Kg(),Jc(260,`h3`,45),Mk(261,`Como Utilizar o Serviço de Tema`),Kg(),Jc(262,`p`),Mk(263,`Criando um Tema Personalizado`),Kg(),Jc(264,`p`),_u(265,`a`,46),Kg(),Jc(266,`h4`,47),Mk(267,`Estrutura Básica`),Kg(),Jc(268,`pre`)(269,`code`,32),Mk(270,`const meuTema: PoTheme = {
  name: 'meu-tema',
  type: [
    {
      light: { /* Configura\xE7\xF5es tema claro para A11y AAA*/ },
      dark: { /* Configura\xE7\xF5es tema escuro para A11y AAA*/ },
      a11y: PoThemeA11yEnum.AAA
    },
    {
      light: { /* Configura\xE7\xF5es tema claro para A11y AA*/ },
      dark: { /* Configura\xE7\xF5es tema escuro para A11y AA*/ },
      a11y: PoThemeA11yEnum.AA
    }
  ],
  active: { type: PoThemeTypeEnum.light, a11y: PoThemeA11yEnum.AAA }
};
`),Kg()(),Jc(271,`p`),_u(272,`a`,48),Kg(),Jc(273,`h4`,49),Mk(274,`Exemplo Completo`),Kg(),Jc(275,`pre`)(276,`code`,32),Mk(277,`import { PoTheme, PoThemeTypeEnum } from '@po-ui/ng-components';

export const corporateTheme: PoTheme = {
  name: 'corporate',
  type: [
    {
      light: {
        color: {
          brand: {
            '01': { 
              base: '#2A5C8D',
              light: '#4D7BA5',
              dark: '#1D4364'
            },
            '02': { base: '#FF6B35' },
            '03': { base: '#00CC66' }
          },
          neutral: { /* Tons de cinza */ },
          feedback: { /* Cores de feedback */ }
        },
        onRoot: {
          '--font-family': "'Inter', sans-serif",
          '--border-radius': '6px',
          '--po-density-header-padding': '2rem'; /* Padding em headers (inclui pages, page slide e modal) */
          '--po-density-content-padding': '1rem'; /* Padding em contents (inclui pages, container, list view, page slide, modal, stepper, disclaimer-group) */
          '--po-density-footer-padding': '1rem'; /* Padding em footers (inclui modal e page slide) */
          '--po-density-gap-header-content': '1rem'; /* Espa\xE7o interno entre o header e o content (inclui pages, tabs e stepper) */
          '--po-density-gap-spacing': '1rem'; /* Espa\xE7o interno entre blocos de conte\xFAdo presentes no header e content (inclui dividers e gaps) */
          '--po-density-floating-padding': '0.5rem'; /* Padding interno de componentes flutuantes como tooltip e popover */ 
        },
        perComponent: {
          'po-button': {
            '--padding': '0.75rem 1.5rem',
            '--font-weight': '600'
          }
        }
      },
      dark: { /* Configura\xE7\xF5es dark mode */ },
      a11y: PoThemeA11yEnum.AAA
    },
    {
      light: { /* Configura\xE7\xF5es tema claro para A11y AA*/ },
      dark: { /* Configura\xE7\xF5es tema escuro para A11y AA*/ },
      a11y: PoThemeA11yEnum.AA
    }
  ],
  active: { type: PoThemeTypeEnum.light, a11y: PoThemeA11yEnum.AAA }
};
`),Kg()(),Jc(278,`p`),_u(279,`a`,50),Kg(),Jc(280,`h3`,51),Mk(281,`Aplicando o Tema`),Kg(),Jc(282,`p`),_u(283,`a`,52),Kg(),Jc(284,`h4`,53),Mk(285,`Aplicação Inicial`),Kg(),Jc(286,`pre`)(287,`code`,32),Mk(288,`ngOnInit() {
  this.poTheme.setTheme(meuTema, PoThemeTypeEnum.light, PoThemeA11yEnum.AAA);
}
`),Kg()(),Jc(289,`p`),_u(290,`a`,54),Kg(),Jc(291,`h4`,55),Mk(292,`Aplicação Dinâmica`),Kg(),Jc(293,`pre`)(294,`code`,32),Mk(295,`// Alternar entre light/dark mode
toggleTheme() {
  const newType = this.currentTheme === PoThemeTypeEnum.light 
    ? PoThemeTypeEnum.dark 
    : PoThemeTypeEnum.light;
  
  this.poTheme.changeCurrentThemeType(newType);
}

// Alterar n\xEDvel de acessibilidade
setAcessibilidade(nivel: PoThemeA11yEnum) {
  this.poTheme.setCurrentThemeA11y(nivel);
}
`),Kg()(),Jc(296,`p`),_u(297,`a`,56),Kg(),Jc(298,`h3`,57),Mk(299,`Técnicas Avançadas`),Kg(),Jc(300,`p`),_u(301,`a`,58),Kg(),Jc(302,`h4`,59),Mk(303,`Sobrescrita de Variáveis`),Kg(),Jc(304,`blockquote`)(305,`p`)(306,`strong`),Mk(307,`Recomendação:`),Kg(),Mk(308,` Utilize sempre o serviço `),Jc(309,`code`),Mk(310,`PoThemeService`),Kg(),Mk(311,` para manipulação de temas. Reserve esta técnica para casos extremos.`),Kg()(),Jc(312,`p`)(313,`strong`),Mk(314,`Quando usar?`),Kg()(),Jc(315,`ul`)(316,`li`),Mk(317,`Necessidade de ajustes pontuais não cobertos pelos tokens padrão `),Kg(),Jc(318,`li`),Mk(319,`Prototipagem rápida`),Kg()(),Jc(320,`p`)(321,`strong`),Mk(322,`Implementação:`),Kg()(),Jc(323,`pre`)(324,`code`,60),Mk(325,`<html class='override-theme'>
`),Kg()(),Jc(326,`pre`)(327,`code`,61),Mk(328,`/* styles.scss */
:root .override-theme {
  --color-brand-01-base: #FF0000;
  --po-density-header-padding: 2rem; /* Padding interno em headers (inclui pages, dynamics, page slide e modal) */
  --po-density-content-padding: 1rem; /* Padding interno em contents (inclui pages, dynamics, container, list view, page slide, modal, stepper e disclaimer-group) */
  --po-density-footer-padding: 1rem; /* Padding interno em footers (inclui modal e page slide) */
  --po-density-gap-header-content: 1rem; /* Espa\xE7o interno entre o header e o content (inclui pages, tabs e stepper) */
  --po-density-gap-spacing: 1rem; /* Espa\xE7o interno entre blocos de conte\xFAdo presentes no header e content (inclui dividers e gaps) */
  --po-density-floating-padding: 0.5rem; /* Padding interno de componentes flutuantes como tooltip e popover */ 
}
`),Kg()(),Jc(329,`p`),_u(330,`a`,62),Kg(),Jc(331,`h4`,63),Mk(332,`Reset para Tema Padrão`),Kg(),Jc(333,`p`),Mk(334,`Restaura todos os valores para o tema base configurado:`),Kg(),Jc(335,`pre`)(336,`code`,32),Mk(337,`// Em qualquer componente/service:
resetarTema() {
  this.poThemeService.resetBaseTheme();
}
`),Kg()(),Jc(338,`p`),_u(339,`a`,64),Kg(),Jc(340,`h4`,65),Mk(341,`Persistência de Tema`),Kg(),Jc(342,`p`),Mk(343,`Fluxo recomendado:`),Kg(),Jc(344,`pre`)(345,`code`,32),Mk(346,`ngOnInit() {
  this.initTheme();
}

private initTheme() {
  const savedTheme = this.poThemeService.getThemeActive();
  
  savedTheme 
    ? this.poThemeService.persistThemeActive()
    : this.themeService.setTheme(
        poThemeDefault,
        PoThemeTypeEnum.light,
        PoThemeA11yEnum.
      );
}
`),Kg()(),Jc(347,`p`),_u(348,`a`,66),Kg(),Jc(349,`h4`,67),Mk(350,`Gerenciamento de Tamanhos`),Kg(),Jc(351,`p`),Mk(352,`Padrão acessível (AAA):`),Kg(),Jc(353,`pre`)(354,`code`,32),Mk(355,`  // Habilitar tamanhos para small
  this.themeService.setA11yDefaultSizeSmall(true);

  // Verificar configura\xE7\xE3o atual
  const currentSize = this.poThemeService.getDefaultSize();
`),Kg()(),Jc(356,`p`),_u(357,`a`,68),Kg(),Jc(358,`h4`,69),Mk(359,`Referências Técnicas`),Kg(),Jc(360,`ul`)(361,`li`)(362,`a`,70),Mk(363,`PoThemeService API`),Kg(),Mk(364,` - Métodos completos do serviço`),Kg(),Jc(365,`li`)(366,`a`,71),Mk(367,`Animalia DS`),Kg(),Mk(368,` - Base dos nossos tokens de design`),Kg()(),Jc(369,`p`),_u(370,`a`,72),Kg(),Jc(371,`h3`,73),Mk(372,`Exemplo Completo no Stackblitz`),Kg(),Jc(373,`a`,74),_u(374,`img`,75),Kg()())},dependencies:[Tt,Mze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var ae=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:149,vars:0,consts:[[`p-title`,`Criando um tema para o PO UI`,1,`guides`,`app-portal`],[`id`,`instalacao`],[`id`,`iniciando-um-projeto-para-o-novo-tema-customizado`],[`id`,`gerando-build-do-tema-customizado`],[`id`,`publicando-o-novo-tema-customizado`],[`id`,`utilizando-o-tema-customizado`],[`id`,`1-usar-o-arquivo-compilado-com-todo-o-css`],[1,`language-json`],[`id`,`2-usar-o-arquivo-de-variaveis-do-tema-customizado-arquivo-css-do-tema-padrao`],[`id`,`3-usar-o-arquivo-de-variaveis-do-tema-padrao-variaveis-do-tema-customizado-arquivo-css-do-tema-padrao`],[`href`,`https://caniuse.com/#search=CSS%20Variables`]],template:function(o,d){o&1&&(Jc(0,`po-page-default`,0)(1,`p`),Mk(2,`Para criação de novos temas vamos utilizar a ferramenta `),Jc(3,`strong`),Mk(4,`Po Theme Cli`),Kg()(),Jc(5,`h2`,1),Mk(6,`Instalação`),Kg(),Jc(7,`p`),Mk(8,`Faça a instalação global da ferramenta:`),Kg(),Jc(9,`pre`)(10,`code`),Mk(11,`npm install -g @po-ui/theme-cli
`),Kg()(),Jc(12,`p`),Mk(13,`Você pode ver as opções disponíveis através do comando:`),Kg(),Jc(14,`pre`)(15,`code`),Mk(16,`po-theme -help
`),Kg()(),Jc(17,`h2`,2),Mk(18,`Iniciando um projeto para o novo tema customizado`),Kg(),Jc(19,`p`),Mk(20,`Navegue até o diretório que você deseja e execute o comando:`),Kg(),Jc(21,`pre`)(22,`code`),Mk(23,`po-theme new my-custom-po-theme
`),Kg()(),Jc(24,`p`),Mk(25,`Isso irá gerar um novo diretório com o nome `),Jc(26,`code`),Mk(27,`my-custom-po-theme`),Kg(),Mk(28,` e com os arquivos iniciais
para seu tema.`),Kg(),Jc(29,`p`),Mk(30,`Acesse o arquivo `),Jc(31,`code`),Mk(32,`src/po-theme-custom.css`),Kg(),Mk(33,` e faça as customizações necessárias.`),Kg(),Jc(34,`blockquote`)(35,`p`),Mk(36,`Para customização das fontes você deve colocar seus arquivos na pasta `),Jc(37,`code`),Mk(38,`src/assets/fonts`),Kg(),Mk(39,`.`),Kg()(),Jc(40,`h2`,3),Mk(41,`Gerando build do tema customizado`),Kg(),Jc(42,`p`),Mk(43,`Para fazer o build e preparar o tema para publica\xE7\xE3o, voc\xEA deve executar o seguinte comando dentro da
pasta do projeto:`),Kg(),Jc(44,`pre`)(45,`code`),Mk(46,`po-theme build
`),Kg()(),Jc(47,`blockquote`)(48,`p`),Mk(49,`Caso queira atribuir um nome ao arquivo a ser gerado, deve-se utilizar o parâmetro `),Jc(50,`code`),Mk(51,`--name`),Kg(),Mk(52,` informando o nome desejado.`),Kg()(),Jc(53,`blockquote`)(54,`p`),Mk(55,`Se você estiver customizando as fontes do tema, você deve usar o parâmetro `),Jc(56,`code`),Mk(57,`--fonts`),Kg(),Mk(58,`.`),Kg()(),Jc(59,`p`),Mk(60,`Após a execução do comando de `),Jc(61,`em`),Mk(62,`build`),Kg(),Mk(63,`, irá ser gerado uma pasta chamada `),Jc(64,`code`),Mk(65,`dist`),Kg(),Mk(66,` dentro do diret\xF3rio
do seu projeto.`),Kg(),Jc(67,`blockquote`)(68,`p`),Mk(69,`Você pode modificar seu `),Jc(70,`code`),Mk(71,`package.json`),Kg(),Mk(72,` adicionando informa\xE7\xF5es sobre o seu pacote, como name, version,
entre outras informa\xE7\xF5es importantes.`),Kg()(),Jc(73,`h3`,4),Mk(74,`Publicando o novo tema customizado`),Kg(),Jc(75,`p`),Mk(76,`Acesse a pasta `),Jc(77,`code`),Mk(78,`dist`),Kg(),Mk(79,` e execute o seguinte comando:`),Kg(),Jc(80,`pre`)(81,`code`),Mk(82,`npm publish
`),Kg()(),Jc(83,`h2`,5),Mk(84,`Utilizando o tema customizado`),Kg(),Jc(85,`p`),Mk(86,`Existem 3 formas de você usar o tema customizado após a publicação.`),Kg(),Jc(87,`p`),Mk(88,`Configure o arquivo `),Jc(89,`code`),Mk(90,`angular.json`),Kg(),Mk(91,` da aplicação conforme for mais conveniente as suas necessidade.`),Kg(),Jc(92,`h3`,6),Mk(93,`1 - Usar o arquivo "compilado" com todo o CSS.`),Kg(),Jc(94,`pre`)(95,`code`,7),Mk(96,`"styles": [
  "node_modules/my-custom-po-theme/css/po-theme-custom.min.css",
  "src/styles.css"
],
`),Kg()(),Jc(97,`p`)(98,`strong`),Mk(99,`Prós:`),Kg(),Mk(100,` Modo mais simples de usar e atende aos browser suportados.`),Kg(),Jc(101,`p`)(102,`strong`),Mk(103,`Contras:`),Kg(),Mk(104,` O tema customizado deve ser sempre atualizado conforme o tema padr\xE3o for publicado, pois
pode ficar sem os novos estilos publicados.`),Kg(),Jc(105,`h3`,8),Mk(106,`2 - Usar o arquivo de variáveis do tema customizado + arquivo CSS do tema padrão`),Kg(),Jc(107,`pre`)(108,`code`,7),Mk(109,`"styles": [
  "node_modules/my-custom-po-theme/css/po-theme-custom-variables.min.css",
  "node_modules/@po-ui/style/css/po-theme-core.min.css",
  "src/styles.css"
],
`),Kg()(),Jc(110,`blockquote`)(111,`p`),Mk(112,`Atenção a ordem dos arquivos`),Kg()(),Jc(113,`p`)(114,`strong`),Mk(115,`Prós:`),Kg(),Mk(116,` Permite que o usu\xE1rio do tema customizado aplique customiza\xE7\xF5es em cima do tema customizado
na aplica\xE7\xE3o final.`),Kg(),Jc(117,`p`)(118,`strong`),Mk(119,`Contras:`),Kg(),Mk(120,` O tema customizado deve ser sempre atualizado conforme o tema padr\xE3o for publicado e pode
ter incompatibilidade com `),Jc(121,`em`),Mk(122,`browsers`),Kg(),Mk(123,` antigos que não dão suporte a variáveis no CSS.`),Kg(),Jc(124,`h3`,9),Mk(125,`3 - Usar o arquivo de variáveis do tema padrão + variáveis do tema customizado + arquivo CSS do tema padrão`),Kg(),Jc(126,`pre`)(127,`code`,7),Mk(128,`"styles": [
  "node_modules/@po-ui/style/css/po-theme-default-variables.min.css",
  "node_modules/my-custom-po-theme/css/po-theme-custom-variables.min.css",
  "node_modules/@po-ui/style/css/po-theme-core.min.css",
  "src/styles.css"
],
`),Kg()(),Jc(129,`blockquote`)(130,`p`),Mk(131,`Atenção a ordem dos arquivos`),Kg()(),Jc(132,`p`)(133,`strong`),Mk(134,`Prós:`),Kg(),Mk(135,` N\xE3o corre risco de perder novos estilos, permite que o usu\xE1rio do tema customizado aplique
customiza\xE7\xF5es em cima do tema customizado na aplica\xE7\xE3o final.`),Kg(),Jc(136,`p`)(137,`strong`),Mk(138,`Contras:`),Kg(),Mk(139,` Pode ter incompatibilidade com `),Jc(140,`em`),Mk(141,`browsers`),Kg(),Mk(142,` antigos que não dão suporte a variáveis no CSS.`),Kg(),Jc(143,`blockquote`)(144,`p`),Mk(145,`Atenção: Para saber quais browsers dão suporte a variáveis você pode consultar a ferramenta `),Jc(146,`a`,10),Mk(147,`Can I use`),Kg(),Mk(148,`.`),Kg()()())},dependencies:[Mze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var oe=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:402,vars:0,consts:[[`p-title`,`Grid System`,1,`guides`,`app-portal`],[`href`,`https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout`],[1,`po-row`,`guides-grid-system-box`],[1,`po-xl-1`,`po-lg-1`,`po-md-1`,`po-sm-1`],[1,`language-html`],[`href`,`/guides/how-install`],[`id`,`nomenclatura-das-classes-e-tamanhos-das-telas`],[1,`po-xl-6`,`po-lg-6`,`po-md-6`,`po-sm-6`],[1,`po-xl-8`,`po-lg-8`,`po-md-8`,`po-sm-8`],[1,`po-xl-4`,`po-lg-4`,`po-md-4`,`po-sm-4`],[1,`po-md-6`],[1,`po-lg-4`],[`id`,`responsividade`],[1,`po-xl-6`,`po-lg-6`,`po-md-12`,`po-sm-12`],[`id`,`classes-visible-e-hidden`],[`id`,`po-visible-tamanho`],[1,`guides-grid-system-containers`],[1,`po-visible-sm`,`po-sm-12`],[1,`po-visible-md`,`po-md-12`],[1,`po-visible-lg-12`],[1,`po-visible-xl-12`],[`id`,`po-hidden-tamanho`],[1,`po-hidden-sm`,`po-md-12`,`po-lg-12`,`po-xl-12`],[1,`po-hidden-md`,`po-sm-12`,`po-lg-12`,`po-xl-12`],[1,`po-hidden-lg`,`po-sm-12`,`po-md-12`,`po-xl-12`],[1,`po-hidden-xl`,`po-sm-12`,`po-md-12`,`po-lg-12`],[`id`,`deslocamento-de-colunas-po-offset`],[1,`po-xl-4`,`po-lg-4`,`po-md-6`,`po-sm-12`],[1,`po-offset-lg-4`,`po-offset-xl-4`,`po-xl-4`,`po-lg-4`,`po-md-6`,`po-sm-12`],[1,`po-offset-lg-3`,`po-offset-xl-3`,`po-xl-4`,`po-lg-4`,`po-md-6`,`po-sm-12`],[1,`po-xl-3`,`po-lg-3`,`po-md-6`,`po-sm-12`],[`id`,`customizacao-dos-breakpoints`],[`id`,`tokens-de-breakpoint-customizaveis`],[1,`language-css`],[1,`language-typescript`],[1,`po-row`],[1,`po-xl-6`,`po-lg-8`,`po-md-10`,`po-sm-12`],[1,`po-table`,`po-text-color-neutral-dark-40`],[1,`po-table-header`],[1,`po-table-header-ellipsis`],[1,`po-table-row`],[1,`po-table-column`]],template:function(o,d){o&1&&(Jc(0,`po-page-default`,0)(1,`p`),Mk(2,`O `),Jc(3,`a`,1),Mk(4,`Grid System`),Kg(),Mk(5,` \xE9 uma estrutura
que permite combinar os elementos em linhas ou em colunas. Esta estrutura costuma seguir um padr\xE3o de configura\xE7\xE3o, determinando:`),Kg(),Jc(6,`ul`)(7,`li`),Mk(8,`Um número máximo de colunas que uma tela pode ser dividida.`),Kg(),Jc(9,`li`),Mk(10,`Padrão na nomenclatura das classes que referem-se as colunas.`),Kg(),Jc(11,`li`),Mk(12,`As colunas podem ser envolvidas por uma classe que delimita e representa a linha.`),Kg(),Jc(13,`li`),Mk(14,`O somat\xF3rio dos n\xFAmeros das colunas de uma linha deve ser igual ao n\xFAmero m\xE1ximo de colunas. Por exemplo, supondo que o
n\xFAmero m\xE1ximo seja igual a 12 colunas, ent\xE3o: po-md-5 + po-md-7 = 12 colunas.`),Kg()(),Jc(15,`p`),Mk(16,`O Grid System do PO, trabalha com a divis\xE3o m\xE1xima da tela em 12 colunas, ou seja, o somat\xF3rio de todas as colunas dentro
de uma linha deve ser igual a 12. No exemplo abaixo, temos 12 colunas de tamanho igual a 1. Cada uma dessas colunas tem o
tamanho igual a 1/12 do seu elemento pai. `),Kg(),Jc(17,`div`,2),_u(18,`div`,3)(19,`div`,3)(20,`div`,3)(21,`div`,3)(22,`div`,3)(23,`div`,3)(24,`div`,3)(25,`div`,3)(26,`div`,3)(27,`div`,3)(28,`div`,3)(29,`div`,3),Kg(),Jc(30,`pre`)(31,`code`,4),Mk(32,`<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
`),Kg()(),Jc(33,`blockquote`)(34,`p`),Mk(35,`Estas classes podem ser usadas instalando o `),Jc(36,`code`),Mk(37,`@po-ui/style`),Kg(),Mk(38,` do `),Jc(39,`strong`),Mk(40,`PO`),Kg(),Mk(41,`. Veja mais em `),Jc(42,`a`,5),Mk(43,`Como instalar o PO`),Kg(),Mk(44,`.`),Kg()(),Jc(45,`h2`,6),Mk(46,`Nomenclatura das classes e tamanhos das telas`),Kg(),Jc(47,`p`),Mk(48,`A nomenclatura das classes das colunas seguem o padrão: `),Jc(49,`code`),Mk(50,`po-<tamanho-tela>-<tamanho-coluna>`),Kg(),Mk(51,`, como por exemplo a classe
`),Jc(52,`code`),Mk(53,`po-md-6`),Kg(),Mk(54,` que representa uma coluna com tamanho m\xE9dio e que utiliza 6/12 da largura do elemento pai. Para os intervalos
de tamanhos, tem-se o padr\xE3o:`),Kg(),Jc(55,`ul`)(56,`li`)(57,`code`),Mk(58,`po-sm-*`),Kg(),Mk(59,` para telas com tamanho máximo de 480px.`),Kg(),Jc(60,`li`)(61,`code`),Mk(62,`po-md-*`),Kg(),Mk(63,` para telas com tamanho entre 481px e 960px.`),Kg(),Jc(64,`li`)(65,`code`),Mk(66,`po-lg-*`),Kg(),Mk(67,` para telas com tamanho entre 961px e 1366px.`),Kg(),Jc(68,`li`)(69,`code`),Mk(70,`po-xl-*`),Kg(),Mk(71,` para telas com tamanho mínimo de 1367px.`),Kg()(),Jc(72,`p`),Mk(73,`Para dividir a tela em duas colunas do mesmo tamanho, basta criar dois elementos com classes de tamanho 6, conforme o pr\xF3ximo
exemplo:`),Kg(),Jc(74,`div`,2),_u(75,`div`,7)(76,`div`,7),Kg(),Jc(77,`pre`)(78,`code`,4),Mk(79,`<div class="po-row">
  <div class="po-xl-6 po-lg-6 po-md-6 po-sm-6"></div>
  <div class="po-xl-6 po-lg-6 po-md-6 po-sm-6"></div>
</div>
`),Kg()(),Jc(80,`p`),Mk(81,`Outro exemplo para criar duas colunas, sendo uma com tamanho 8 e outra com tamanho 4:`),Kg(),Jc(82,`div`,2),_u(83,`div`,8)(84,`div`,9),Kg(),Jc(85,`pre`)(86,`code`,4),Mk(87,`<div class="po-xl-8 po-lg-8 po-md-8 po-sm-8"></div>
<div class="po-xl-4 po-lg-4 po-md-4 po-sm-4"></div>
`),Kg()(),Jc(88,`p`),Mk(89,`Ao definir apenas a classe `),Jc(90,`code`),Mk(91,`po-md-*`),Kg(),Mk(92,`, os tamanhos de tela menores que po-md assumem o tamanho de coluna igual a 12 e os
maiores o tamanho definido no `),Jc(93,`code`),Mk(94,`*`),Kg(),Mk(95,`. Da mesma forma ocorre com a classe `),Jc(96,`code`),Mk(97,`po-lg-*`),Kg(),Mk(98,`, os tamanhos menores ficam igual a 12 e
os maiores igual ao tamanho do `),Jc(99,`code`),Mk(100,`*`),Kg(),Mk(101,`.`),Kg(),Jc(102,`blockquote`)(103,`p`),Mk(104,`Este comportamento limita-se apenas as classes `),Jc(105,`code`),Mk(106,`po-md-*`),Kg(),Mk(107,` e `),Jc(108,`code`),Mk(109,`po-lg-*`),Kg(),Mk(110,`.`),Kg()(),Jc(111,`p`),Mk(112,`O exemplo abaixo mostra este comportamento, para isso redimensione a tela do navegador.`),Kg(),Jc(113,`div`,2)(114,`div`,10),Mk(115,`po-md-6`),Kg(),Jc(116,`div`,10),Mk(117,`po-md-6`),Kg()(),Jc(118,`div`,2)(119,`div`,11),Mk(120,`po-lg-4`),Kg(),Jc(121,`div`,11),Mk(122,`po-lg-4`),Kg(),Jc(123,`div`,11),Mk(124,`po-lg-4`),Kg()(),Jc(125,`pre`)(126,`code`,4),Mk(127,`<div class="po-row">
  <div class="po-md-6">po-md-6</div>
  <div class="po-md-6">po-md-6</div>
</div>

<div class="po-row">
  <div class="po-lg-4">po-lg-4</div>
  <div class="po-lg-4">po-lg-4</div>
  <div class="po-lg-4">po-lg-4</div>
</div>
`),Kg()(),Jc(128,`blockquote`)(129,`p`),Mk(130,`A classe para envolver as colunas é chamada de `),Jc(131,`code`),Mk(132,`po-row`),Kg(),Mk(133,`, sendo o seu uso opcional. Normalmente sendo utilizada para poder
organizar telas que cont\xE9m diversas linhas. `),Kg()(),Jc(134,`h2`,12),Mk(135,`Responsividade`),Kg(),Jc(136,`p`),Mk(137,`Para alterar a largura das colunas conforme o tamanho da tela, \xE9 necess\xE1rio determinar que tamanho estar\xE1 a coluna em cada
tamanho de tela. Supondo que se tenha uma tela com duas colunas do mesmo tamanho, conforme o exemplo abaixo:`),Kg(),Jc(138,`div`,2),_u(139,`div`,7)(140,`div`,7),Kg(),Jc(141,`pre`)(142,`code`,4),Mk(143,`<div class="po-row">
  <div class="po-xl-6 po-lg-6 po-md-6 po-sm-6"></div>
  <div class="po-xl-6 po-lg-6 po-md-6 po-sm-6"></div>
</div>
`),Kg()(),Jc(144,`p`),Mk(145,`No entanto, quando a tela diminui os elementos no interior da coluna podem n\xE3o ficar bem estruturados, ent\xE3o podemos determinar
que quando a tela estiver pequena estas duas colunas ter\xE3o a largura total do seu elemento pai, da seguinte forma:`),Kg(),Jc(146,`div`,2),_u(147,`div`,13)(148,`div`,13),Kg(),Jc(149,`pre`)(150,`code`,4),Mk(151,`<div class="po-row">
  <div class="po-xl-6 po-lg-6 po-md-12 po-sm-12"></div>
  <div class="po-xl-6 po-lg-6 po-md-12 po-sm-12"></div>
</div>
`),Kg()(),Jc(152,`p`),Mk(153,`Se a tela for redimensionada, as colunas ir\xE3o mudar de tamanho. Desta mesma forma, pode-se determinar e estruturar diversos
tamanhos de colunas para cada tamanho de tela.`),Kg(),Jc(154,`blockquote`)(155,`p`),Mk(156,`Consulte o Style Guide do PO UI, para saber o número máximo de colunas por tamanho de tela.`),Kg()(),Jc(157,`h2`,14),Mk(158,`Classes visible e hidden`),Kg(),Jc(159,`p`),Mk(160,`Para poder deixar um determinado tamanho visível ou não, existem disponíveis as classes `),Jc(161,`code`),Mk(162,`po-visible-[tamanho]`),Kg(),Mk(163,` e `),Jc(164,`code`),Mk(165,`po-hidden-[tamanho]`),Kg(),Mk(166,`.`),Kg(),Jc(167,`h3`,15),Mk(168,`po-visible-[tamanho]`),Kg(),Jc(169,`p`),Mk(170,`Esta classe determina que o elemento será visível na tela quando estiver em determinado tamanho. Ao fazer essa declaração, o elemento assume a propriedade `),Jc(171,`code`),Mk(172,`display: block`),Kg(),Mk(173,` e os demais tamanhos ficarão invisíveis `),Jc(174,`code`),Mk(175,`(display: none)`),Kg(),Mk(176,`. Existem duas formas de descrever a classe po-visible. Uma forma seria a definição de visibilidade separado da definição do tamanho, como `),Jc(177,`code`),Mk(178,`po-visible-sm po-sm-6`),Kg(),Mk(179,`. Outra forma seria a opção de utilizar a definição junto com a declaração do tamanho, como: `),Jc(180,`code`),Mk(181,`po-visible-sm-6`),Kg(),Mk(182,`.`),Kg(),Jc(183,`p`),Mk(184,`Abaixo tem-se um exemplo onde só irá aparecer a `),Jc(185,`code`),Mk(186,`<div>`),Kg(),Mk(187,` quando atingir o tamanho especificado no po-visible. `),Kg(),Jc(188,`blockquote`)(189,`p`),Mk(190,`Para isso, redimensione a tela do seu navegador.`),Kg()(),Jc(191,`div`,16)(192,`div`,17),Mk(193,`Visível no tamanho 'sm'`),Kg(),Jc(194,`div`,18),Mk(195,`Visível no tamanho 'md'`),Kg(),Jc(196,`div`,19),Mk(197,`Visível no tamanho 'lg'`),Kg(),Jc(198,`div`,20),Mk(199,`Visível no tamanho 'xl'`),Kg()(),Jc(200,`pre`)(201,`code`,4),Mk(202,`<div class="po-visible-sm po-sm-12">Vis\xEDvel no tamanho 'sm'</div>
<div class="po-visible-md po-md-12">Vis\xEDvel no tamanho 'md'</div>
<div class="po-visible-lg-12">Vis\xEDvel no tamanho 'lg'</div>
<div class="po-visible-xl-12">Vis\xEDvel no tamanho 'xl'</div>
`),Kg()(),Jc(203,`blockquote`)(204,`p`),Mk(205,`Atenção: ao utilizar esta classe, o elemento recebe a propriedade `),Jc(206,`code`),Mk(207,`display`),Kg(),Mk(208,` com o valor `),Jc(209,`code`),Mk(210,`block`),Kg(),Mk(211,`. `),Kg()(),Jc(212,`h3`,21),Mk(213,`po-hidden-[tamanho]`),Kg(),Jc(214,`p`),Mk(215,`Ao utilizar esta classe, o elemento ficará invisível `),Jc(216,`code`),Mk(217,`(display: none)`),Kg(),Mk(218,` ao atingir o tamanho especificado. Por exemplo, as `),Jc(219,`code`),Mk(220,`<div>`),Kg(),Mk(221,` abaixo irão desaparecer quando atingir o tamanho especificado no po-hidden. `),Kg(),Jc(222,`blockquote`)(223,`p`),Mk(224,`Para isso, redimensione a tela do seu navegador.`),Kg()(),Jc(225,`div`,16)(226,`div`,22),Mk(227,`Ficará invisível no tamanho 'sm'`),Kg(),Jc(228,`div`,23),Mk(229,`Ficará invisível no tamanho 'md'`),Kg(),Jc(230,`div`,24),Mk(231,`Ficará invisível no tamanho 'lg'`),Kg(),Jc(232,`div`,25),Mk(233,`Ficará invisível no tamanho 'xl'`),Kg()(),Jc(234,`pre`)(235,`code`,4),Mk(236,`<div class="po-hidden-sm po-md-12 po-lg-12 po-xl-12">Ficar\xE1 invis\xEDvel no tamanho 'sm'</div>
<div class="po-hidden-md po-sm-12 po-lg-12 po-xl-12">Ficar\xE1 invis\xEDvel no tamanho 'md'</div>
<div class="po-hidden-lg po-sm-12 po-md-12 po-xl-12">Ficar\xE1 invis\xEDvel no tamanho 'lg'</div>
<div class="po-hidden-xl po-sm-12 po-md-12 po-lg-12">Ficar\xE1 invis\xEDvel no tamanho 'xl'</div>
`),Kg()(),Jc(237,`h2`,26),Mk(238,`Deslocamento de colunas (po-offset)`),Kg(),Jc(239,`p`),Mk(240,`É possível fazer o deslocamento das colunas para a direita utilizando a classe `),Jc(241,`code`),Mk(242,`po-offset-[ sm | md | lg | xl ]-[tamanho]`),Kg(),Mk(243,`.
Quando esta classe \xE9 definida em um elemento, o mesmo receber\xE1 uma margem \xE0 esquerda quando atingir o tamanho de tela indicado,
como o `),Jc(244,`code`),Mk(245,`sm`),Kg(),Mk(246,` ou `),Jc(247,`code`),Mk(248,`md`),Kg(),Mk(249,`. A quantidade de deslocamento \xE9 definida por n\xFAmero de colunas, assim como no tamanho. Ent\xE3o, para ter
um deslocamento com tamanho 2 no tamanho de tela `),Jc(250,`code`),Mk(251,`sm`),Kg(),Mk(252,`, basta escrever: `),Jc(253,`code`),Mk(254,`po-offset-sm-2`),Kg(),Mk(255,`.`),Kg(),Jc(256,`p`),Mk(257,`No exemplo abaixo, tem-se duas linhas e ambas utilizam o deslocamento para a direita quando atingirem o tamanho `),Jc(258,`code`),Mk(259,`lg`),Kg(),Mk(260,` e `),Jc(261,`code`),Mk(262,`xl`),Kg(),Mk(263,`.
A primeira linha tem um deslocamento igual \xE0 4 na segunda coluna. E a segunda linha tem um deslocamento igual \xE0 3 na primeira
coluna.`),Kg(),Jc(264,`div`,2)(265,`div`,27),Mk(266,`Tamanho 4 e sem offset`),Kg(),Jc(267,`div`,28),Mk(268,`Tamanho 4 e offset 4`),Kg()(),Jc(269,`div`,2)(270,`div`,29),Mk(271,`Tamanho 4 e offset 3`),Kg(),Jc(272,`div`,30),Mk(273,`Tamanho 3 e sem offset`),Kg()(),Jc(274,`pre`)(275,`code`,4),Mk(276,`<div class="po-row">
  <div class="po-xl-4 po-lg-4  po-md-6 po-sm-12">Tamanho 4 e sem offset</div>
  <div class="po-offset-lg-4 po-offset-xl-4 po-xl-4 po-lg-4 po-md-6 po-sm-12">Tamanho 4 e offset 4</div>
</div>

<div class="po-row">
  <div class="po-offset-lg-3 po-offset-xl-3 po-xl-4 po-lg-4 po-md-6 po-sm-12">Tamanho 4 e offset 3</div>
  <div class="po-xl-3 po-lg-3 po-md-6 po-sm-12">Tamanho 3 e sem offset</div>
</div>
`),Kg()(),Jc(277,`blockquote`)(278,`p`),Mk(279,`O número de colunas para o deslocamento não necessita ser igual ao tamanho do elemento. Por exemplo: `),Jc(280,`code`),Mk(281,`po-offset-lg-3 po-lg-4`),Kg(),Mk(282,`.`),Kg()(),Jc(283,`blockquote`)(284,`p`),Mk(285,`É importante lembrar que o somatório de colunas com po-offset e os tamanhos dos elementos deve ser menor ou igual a 12.`),Kg()(),Jc(286,`blockquote`)(287,`p`),Mk(288,`Os tamanhos de deslocamentos do po-offset variam de 1 a 11, não incluindo o espaçamento igual a 12.`),Kg()(),Jc(289,`h2`,31),Mk(290,`Customização dos breakpoints`),Kg(),Jc(291,`p`),Mk(292,`Atualmente, os navegadores não interpretam a leitura de variáveis em regras de breakpoint como por exemplo:`),Kg(),Jc(293,`p`)(294,`code`),Mk(295,`@media (min-width: var(--variavel-customizavel))`),Kg()(),Jc(296,`p`),Mk(297,`Porém, disponibilizamos os tokens de breakpoint no formato `),Jc(298,`code`),Mk(299,`var(--nome-da-variavel)`),Kg(),Mk(300,` junto as regras de media query permitindo ao desenvolvedor realizar a customização dos breakpoints em tempo de execução através do serviço `),Jc(301,`code`),Mk(302,`PoMediaQueryService`),Kg(),Mk(303,`.`),Kg(),Jc(304,`h3`,32),Mk(305,`Tokens de breakpoint customizáveis:`),Kg(),Jc(306,`ul`)(307,`li`)(308,`code`),Mk(309,`--gridSystemSmMaxWidth`),Kg(),Mk(310,`: 480px (valor padrão)`),Kg(),Jc(311,`li`)(312,`code`),Mk(313,`--gridSystemMdMinWidth`),Kg(),Mk(314,`: 481px (valor padrão)`),Kg(),Jc(315,`li`)(316,`code`),Mk(317,`--gridSystemMdMaxWidth`),Kg(),Mk(318,`: 960px (valor padrão)`),Kg(),Jc(319,`li`)(320,`code`),Mk(321,`--gridSystemLgMinWidth`),Kg(),Mk(322,`: 961px (valor padrão)`),Kg(),Jc(323,`li`)(324,`code`),Mk(325,`--gridSystemLgMaxWidth`),Kg(),Mk(326,`: 1366px (valor padrão)`),Kg(),Jc(327,`li`)(328,`code`),Mk(329,`--gridSystemXlMinWidth`),Kg(),Mk(330,`: 1367px (valor padrão)`),Kg(),Jc(331,`li`)(332,`code`),Mk(333,`--gridSystemPullMaxWidth`),Kg(),Mk(334,`: 480px (valor padrão)`),Kg(),Jc(335,`li`)(336,`code`),Mk(337,`--gidSystemOffsetMaxWidth`),Kg(),Mk(338,`: 480px (valor padrão)`),Kg()(),Jc(339,`p`),Mk(340,`Nos arquivos de `),Jc(341,`code`),Mk(342,`grid-system`),Kg(),Mk(343,` do `),Jc(344,`code`),Mk(345,`po-style`),Kg(),Mk(346,`, a regra de breakpoint está escrita conforme modelo:`),Kg(),Jc(347,`pre`)(348,`code`,33),Mk(349,`@media (min-width: var(--gridSystemMdMinWidth)) and (max-width: var(--gridSystemMdMaxWidth)){...}
`),Kg()(),Jc(350,`p`),Mk(351,`No exemplo acima está demonstrado o formato da regra de breakpoint para `),Jc(352,`code`),Mk(353,`gridsystem-md`),Kg(),Mk(354,`.`),Kg(),Jc(355,`p`),Mk(356,`Para o desenvolvedor customizar a regra do grid-system acima, poderá utilizar o serviço PoMediaQueryService na inicialização do seu app, informando a regra e os respectivos valores, conforme o exemplo abaixo:`),Kg(),Jc(357,`pre`)(358,`code`,34),Mk(359,`const tokens: PoMediaQueryTokens =  {
 *     sm: {
 *      gridSystemSmMaxWidth: '1023px'
 *      },
 *     md: {
 *      gridSystemMdMinWidth: '1024px',
 *      gridSystemMdMaxWidth: '1366px'
 *     },
 *     lg: {
 *      gridSystemLgMinWidth: '1367px',
 *      gridSystemLgMaxWidth: '9999px'
 *     }
 *    };

this.styleService.updateTokens(tokensMediaQueries);
`),Kg()(),Jc(360,`p`),Mk(361,`A seguir segue a relação das regras de breakpoints do grid-system caso necessite customizá-las:`),Kg(),Jc(362,`div`,35)(363,`div`,36)(364,`table`,37)(365,`thead`)(366,`tr`,38)(367,`th`,39),Mk(368,`Grid-System`),Kg(),Jc(369,`th`,39),Mk(370,`Regra de breakpoint`),Kg()()(),Jc(371,`tbody`)(372,`tr`,40)(373,`td`,41),Mk(374,`po-grid-system-sm`),Kg(),Jc(375,`td`,41),Mk(376,`(max-width: var(--gridSystemSmMaxWidth))`),Kg()(),Jc(377,`tr`,40)(378,`td`,41),Mk(379,`po-grid-system-md`),Kg(),Jc(380,`td`,41),Mk(381,`(min-width: var(--gridSystemMdMinWidth)) and (max-width: var(--gridSystemMdMaxWidth))`),Kg()(),Jc(382,`tr`,40)(383,`td`,41),Mk(384,`po-grid-system-lg`),Kg(),Jc(385,`td`,41),Mk(386,`(min-width: var(--gridSystemLgMinWidth)) and (max-width: var(--gridSystemLgMaxWidth))`),Kg()(),Jc(387,`tr`,40)(388,`td`,41),Mk(389,`po-grid-system-xl`),Kg(),Jc(390,`td`,41),Mk(391,`(min-width: var(--gridSystemXlMinWidth))`),Kg()(),Jc(392,`tr`,40)(393,`td`,41),Mk(394,`po-grid-system-pull`),Kg(),Jc(395,`td`,41),Mk(396,`(max-width: var(--gridSystemPullMaxWidth))`),Kg()(),Jc(397,`tr`,40)(398,`td`,41),Mk(399,`po-grid-system-offset`),Kg(),Jc(400,`td`,41),Mk(401,`(min-width: var(--gridSystemOffsetMaxWidth)) and (max-width: var(--gridSystemOffsetMaxWidth))`),Kg()()()()()()())},dependencies:[Mze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var re=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:287,vars:0,consts:[[`p-title`,`Espaçamento`,1,`guides`,`app-portal`],[`id`,`como-funciona`],[`id`,`definicoes`],[`href`,`/guides/how-install`],[`id`,`exemplos`],[1,`guides-spacing-sample-container`,`po-mt-1`,`po-mb-1`],[1,`guides-spacing`],[1,`po-m-5`],[1,`po-ml-5`],[1,`po-ml-md-5`],[1,`po-ml-lg-5`],[1,`po-ml-5`,`po-mr-5`],[1,`po-ml-md-5`,`po-ml-xl-0`],[1,`language-html`],[`href`,`https://www.w3schools.com/cssref/pr_margin.asp`]],template:function(o,d){o&1&&(Jc(0,`po-page-default`,0)(1,`p`),Mk(2,`O PO conta com um set de classes CSS utilitárias para modificação do espaçamento entre elementos HTML.`),Kg(),Jc(3,`h2`,1),Mk(4,`Como funciona`),Kg(),Jc(5,`p`),Mk(6,`Na composição de telas é eventual o ajuste do espaçamento entre os elementos adjacentes envolvidos. Exemplos disso são vistos quando trabalha-se responsivamente um grupo de elementos, como `),Jc(7,`em`),Mk(8,`widgets`),Kg(),Mk(9,` (po-widget) ou linhas de um `),Jc(10,`em`),Mk(11,`grid system`),Kg(),Mk(12,` (po-row).`),Kg(),Jc(13,`p`),Mk(14,`Há cinco dimensões disponíveis para definição de `),Jc(15,`strong`),Mk(16,`margin`),Kg(),Mk(17,` e também para `),Jc(18,`strong`),Mk(19,`padding`),Kg(),Mk(20,`. A unidade de medida utilizada para elas no CSS é a REM. Basicamente, a REM sempre terá o valor do contexto do ROOT, ou seja, o valor de font-size definido em `),Jc(21,`em`),Mk(22,`body`),Kg(),Mk(23,`. Considerando que `),Jc(24,`code`),Mk(25,`font-family: 16px`),Kg(),Mk(26,` é o padrão no PO, então `),Jc(27,`code`),Mk(28,`margin: 1rem`),Kg(),Mk(29,` também equivale a 16px. As variantes das classes de margem e padding vão de 0.5rem (8px) a 2.5rem (40px).`),Kg(),Jc(30,`h2`,2),Mk(31,`Definições`),Kg(),Jc(32,`p`),Mk(33,`Os nomes das classes usam o formato: `),Kg(),Jc(34,`ul`)(35,`li`)(36,`code`),Mk(37,`po-<propriedade>-<tamanho-espaçamento>`),Kg(),Mk(38,` para definição em todos os lados do elemento. Por exemplo: `),Jc(39,`code`),Mk(40,`po-m-1`),Kg(),Mk(41,`; `),Kg(),Jc(42,`li`)(43,`code`),Mk(44,`po-<propriedade><lado>-<tamanho-espaçamento>`),Kg(),Mk(45,` para apenas um dos lados. Por exemplo: `),Jc(46,`code`),Mk(47,`po-ml-1`),Kg(),Mk(48,`;`),Kg(),Jc(49,`li`)(50,`code`),Mk(51,`po-<propriedade><lado>-<tamanho-tela>-<tamanho-espaçamento>`),Kg(),Mk(52,` para tamanhos específicos de telas. Por exemplo: `),Jc(53,`code`),Mk(54,`po-ml-md-1`),Kg(),Mk(55,`.`),Kg()(),Jc(56,`p`),Mk(57,`As definições de propridades são:`),Kg(),Jc(58,`ul`)(59,`li`)(60,`code`),Mk(61,`m`),Kg(),Mk(62,` - para classes de ajuste de `),Jc(63,`code`),Mk(64,`margin`),Kg(),Mk(65,`;`),Kg(),Jc(66,`li`)(67,`code`),Mk(68,`p`),Kg(),Mk(69,` - para classes de ajuste de `),Jc(70,`code`),Mk(71,`padding`),Kg(),Mk(72,`.`),Kg()(),Jc(73,`p`),Mk(74,`As definições de lados são:`),Kg(),Jc(75,`ul`)(76,`li`)(77,`code`),Mk(78,`t`),Kg(),Mk(79,` - para ajustes de `),Jc(80,`code`),Mk(81,`margin-top`),Kg(),Mk(82,` ou `),Jc(83,`code`),Mk(84,`padding-top`),Kg(),Mk(85,`;`),Kg(),Jc(86,`li`)(87,`code`),Mk(88,`r`),Kg(),Mk(89,` - para ajustes de `),Jc(90,`code`),Mk(91,`margin-right`),Kg(),Mk(92,` ou `),Jc(93,`code`),Mk(94,`padding-right`),Kg(),Mk(95,`;`),Kg(),Jc(96,`li`)(97,`code`),Mk(98,`b`),Kg(),Mk(99,` - para ajustes de `),Jc(100,`code`),Mk(101,`margin-bottom`),Kg(),Mk(102,` ou `),Jc(103,`code`),Mk(104,`padding-bottom`),Kg(),Mk(105,`;`),Kg(),Jc(106,`li`)(107,`code`),Mk(108,`l`),Kg(),Mk(109,` - para ajustes de `),Jc(110,`code`),Mk(111,`margin-left`),Kg(),Mk(112,` ou `),Jc(113,`code`),Mk(114,`padding-left`),Kg(),Mk(115,`;`),Kg(),Jc(116,`li`)(117,`em`),Mk(118,`Para todos os lados basta ignorar essa definição`),Kg(),Mk(119,`;`),Kg()(),Jc(120,`p`),Mk(121,`As definições de tamanho de tela são:`),Kg(),Jc(122,`ul`)(123,`li`)(124,`code`),Mk(125,`sm`),Kg(),Mk(126,` - para telas com tamanho máximo de `),Jc(127,`code`),Mk(128,`480px`),Kg(),Mk(129,`;`),Kg(),Jc(130,`li`)(131,`code`),Mk(132,`md`),Kg(),Mk(133,` - para telas com tamanho a partir de `),Jc(134,`code`),Mk(135,`481px`),Kg(),Mk(136,`;`),Kg(),Jc(137,`li`)(138,`code`),Mk(139,`lg`),Kg(),Mk(140,` - para telas com tamanho a partir de `),Jc(141,`code`),Mk(142,`961px`),Kg(),Mk(143,`;`),Kg(),Jc(144,`li`)(145,`code`),Mk(146,`xl`),Kg(),Mk(147,` - para telas com tamanho a partir de `),Jc(148,`code`),Mk(149,`1367px`),Kg(),Mk(150,`.`),Kg()(),Jc(151,`p`),Mk(152,`As definições de tamanhos disponíveis são:`),Kg(),Jc(153,`ul`)(154,`li`)(155,`code`),Mk(156,`0`),Kg(),Mk(157,` - `),Jc(158,`code`),Mk(159,`margin`),Kg(),Mk(160,` ou `),Jc(161,`code`),Mk(162,`padding`),Kg(),Mk(163,` com valor igual a `),Jc(164,`code`),Mk(165,`0`),Kg(),Mk(166,`; `),Kg(),Jc(167,`li`)(168,`code`),Mk(169,`1`),Kg(),Mk(170,` - `),Jc(171,`code`),Mk(172,`margin`),Kg(),Mk(173,` ou `),Jc(174,`code`),Mk(175,`padding`),Kg(),Mk(176,` com valor igual a `),Jc(177,`code`),Mk(178,`8px`),Kg(),Mk(179,`; `),Kg(),Jc(180,`li`)(181,`code`),Mk(182,`2`),Kg(),Mk(183,` - `),Jc(184,`code`),Mk(185,`margin`),Kg(),Mk(186,` ou `),Jc(187,`code`),Mk(188,`padding`),Kg(),Mk(189,` com valor igual a `),Jc(190,`code`),Mk(191,`16px`),Kg(),Mk(192,`; `),Kg(),Jc(193,`li`)(194,`code`),Mk(195,`3`),Kg(),Mk(196,` - `),Jc(197,`code`),Mk(198,`margin`),Kg(),Mk(199,` ou `),Jc(200,`code`),Mk(201,`padding`),Kg(),Mk(202,` com valor igual a `),Jc(203,`code`),Mk(204,`24px`),Kg(),Mk(205,`; `),Kg(),Jc(206,`li`)(207,`code`),Mk(208,`4`),Kg(),Mk(209,` - `),Jc(210,`code`),Mk(211,`margin`),Kg(),Mk(212,` ou `),Jc(213,`code`),Mk(214,`padding`),Kg(),Mk(215,` com valor igual a `),Jc(216,`code`),Mk(217,`32px`),Kg(),Mk(218,`; `),Kg(),Jc(219,`li`)(220,`code`),Mk(221,`5`),Kg(),Mk(222,` - `),Jc(223,`code`),Mk(224,`margin`),Kg(),Mk(225,` ou `),Jc(226,`code`),Mk(227,`padding`),Kg(),Mk(228,` com valor igual a `),Jc(229,`code`),Mk(230,`40px`),Kg(),Mk(231,`;`),Kg()(),Jc(232,`blockquote`)(233,`p`),Mk(234,`Estas classes podem ser usadas instalando o `),Jc(235,`code`),Mk(236,`@po-ui/style`),Kg(),Mk(237,` do `),Jc(238,`strong`),Mk(239,`PO`),Kg(),Mk(240,`. Veja mais em `),Jc(241,`a`,3),Mk(242,`Como instalar o PO`),Kg(),Mk(243,`.`),Kg()(),Jc(244,`h2`,4),Mk(245,`Exemplos`),Kg(),Jc(246,`p`),Mk(247,`Alguns exemplos de aplicação das classes:`),Kg(),Jc(248,`div`,5)(249,`div`,6)(250,`div`,7),Mk(251,`po-m-5`),Kg()()(),Jc(252,`div`,5)(253,`div`,6)(254,`div`,8),Mk(255,`po-ml-5`),Kg()()(),Jc(256,`div`,5)(257,`div`,6)(258,`div`,9),Mk(259,`po-ml-md-5`),Kg()()(),Jc(260,`div`,5)(261,`div`,6)(262,`div`,10),Mk(263,`po-ml-lg-5`),Kg()()(),Jc(264,`div`,5)(265,`div`,6)(266,`div`,11),Mk(267,`po-ml-5 po-mr-5`),Kg()()(),Jc(268,`div`,5)(269,`div`,6)(270,`div`,12),Mk(271,`po-ml-md-5 po-ml-xl-0`),Kg()()(),Jc(272,`pre`)(273,`code`,13),Mk(274,`<div class="po-m-5">po-m-5</div>
<div class="po-ml-5">po-ml-5</div>
<div class="po-ml-md-5">po-ml-md-5</div>
<div class="po-ml-lg-5">po-ml-lg-5</div>
<div class="po-ml-5 po-mr-5">po-ml-5 po-mr-5</div>
<div class="po-ml-md-5 po-ml-xl-0">po-ml-md-5 po-ml-xl-0</div>
`),Kg()(),Jc(275,`blockquote`)(276,`p`),Mk(277,`Quando duas margens verticais entrarem em contato entre si, ocorrerá um `),Jc(278,`a`,14),Mk(279,`colapso de margem`),Kg(),Mk(280,`. Se uma margem for maior que a outra, esta sobrescreverá o valor da menor, sobrando apenas a definição de margem com maior valor.`),Kg()(),Jc(281,`blockquote`)(282,`p`),Mk(283,`É considerada uma boa prática de CSS trabalhar, sempre que possível, apenas com definições de `),Jc(284,`code`),Mk(285,`margin-bottom`),Kg(),Mk(286,` para espaçamento entre elementos adjacentes.`),Kg()()())},dependencies:[Mze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var me=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:122,vars:0,consts:[[`p-title`,`Personalizando o Tema Padrão com Tokens CSS`,1,`guides`,`app-portal`],[`href`,`guides/theme-service`],[`id`,`como-o-tema-do-po-ui-funciona`],[1,`language-json`],[1,`language-css`],[`id`,`configurando-sua-aplicacao-para-permitir-personalizacao-abrangente`],[`id`,`customizando-estilos-no-seu-projeto`],[`src`,`./assets/graphics/theme/button-green-and-black.png`,`alt`,`Componente Button com a cor preta.`],[`src`,`./assets/graphics/theme/components-custom-colors.png`,`alt`,`Exemplo dos componentes com cores customizadas. Scroll da página com track amarelo e thumb laranja.`],[`href`,`https://doc.animaliads.io/docs/components/button/#live-demo`],[`href`,`https://caniuse.com/#search=CSS%20Variables`]],template:function(o,d){o&1&&(Jc(0,`po-page-default`,0)(1,`blockquote`)(2,`p`)(3,`strong`),Mk(4,`⚠️ Atualização Importante para Versões 18+`),Kg(),_u(5,`br`),Mk(6,`A partir da versão 18.X.X do PO-UI, recomendamos `),Jc(7,`strong`),Mk(8,`fortemente`),Kg(),Mk(9,` a utilização do `),Jc(10,`code`),Mk(11,`PoThemeService`),Kg(),Mk(12,` para todas as customizações de temas, incluindo:`),Kg(),Jc(13,`ul`)(14,`li`),Mk(15,`Tokens globais (cores, tipografia, espaçamentos) `),Kg(),Jc(16,`li`),Mk(17,`Estilos específicos por componente `),Kg(),Jc(18,`li`),Mk(19,`Gerenciamento de dark/light mode `),Kg(),Jc(20,`li`),Mk(21,`Controle de acessibilidade (AA/AAA)`),Kg()(),Jc(22,`p`)(23,`strong`),Mk(24,`Benefícios:`),Kg(),_u(25,`br`),Mk(26,`✅ Maior consistência visual`),_u(27,`br`),Mk(28,`✅ Manutenção simplificada`),_u(29,`br`),Mk(30,`✅ Transições suaves entre temas`),_u(31,`br`),Mk(32,`✅ Suporte integrado a acessibilidade `),Kg(),Jc(33,`p`),Mk(34,`📚 `),Jc(35,`a`,1),Mk(36,`Guia completo de Customização de Temas`),Kg()()(),Jc(37,`p`),Mk(38,`A partir da versão 1.9.0, o `),Jc(39,`strong`),Mk(40,`PO UI`),Kg(),Mk(41,` oferece a flexibilidade de personalização do tema padrão. Você pode ajustar várias propriedades como as cores, fonte, tamanho da fonte entre outros. Para isso, basta modificar os valores das variáveis utilizadas no CSS do tema padrão.`),Kg(),Jc(42,`h3`,2),Mk(43,`Como o tema do PO UI funciona`),Kg(),Jc(44,`p`),Mk(45,`Se voc\xEA j\xE1 tem uma aplica\xE7\xE3o que est\xE1 usando o tema padr\xE3o do PO UI, voc\xEA deve ter seu arquivo
`),Jc(46,`code`),Mk(47,`angular.json`),Kg(),Mk(48,` configurado da seguinte maneira.`),Kg(),Jc(49,`pre`)(50,`code`,3),Mk(51,`"styles": [
  // Arquivo com o tema do PO UI com as vari\xE1veis "compiladas"
  "node_modules/@po-ui/style/css/po-theme-default.min.css", 
  "src/styles.css"
],
`),Kg()(),Jc(52,`p`),Mk(53,`Essa configuração usa o arquivo CSS minificado e `),Jc(54,`em`),Mk(55,`"compilado"`),Kg(),Mk(56,`, ou seja, as vari\xE1veis do CSS foram
substitu\xEDdas pelos valores hexadecimais correspondentes das cores usadas (entre outras coisas). Na pr\xE1tica e resumidamente falando, o que aconteceu com esse arquivo foi o seguinte:`),Kg(),Jc(57,`pre`)(58,`code`,4),Mk(59,`/* Isso "compilando" ... */
po-button {
  --color: var(--color-action-default);
  --background-color: var(--color-transparent);
}

/* ... vira isso. */
.po-button{background-color: transparent;color: #753399;}
`),Kg()(),Jc(60,`h3`,5),Mk(61,`Configurando sua aplicação para permitir personalização abrangente`),Kg(),Jc(62,`p`),Mk(63,`Para possibilitar uma personalização abrangente, o `),Jc(64,`em`),Mk(65,`package`),Kg(),Jc(66,`code`),Mk(67,`@po-ui/style`),Kg(),Mk(68,` agora disponibiliza os arquivos contendo as variáveis CSS, bem como o arquivo de estilo sem a `),Jc(69,`em`),Mk(70,`"compilação"`),Kg(),Mk(71,` das variáveis. Isso permite não apenas a modificação das cores, mas também de outras propriedades via tokens. Para realizar essa configuração em seu projeto, é necessário carregar esses novos arquivos, substituindo o arquivo anterior que restringia a modificação abrangente das cores.`),Kg(),Jc(72,`pre`)(73,`code`,3),Mk(74,`"styles": [
  // Arquivo de vari\xE1veis (tema padr\xE3o)
  "node_modules/@po-ui/style/css/po-theme-default-variables.min.css",
  // Arquivo com os estilos sem as vari\xE1veis "compiladas"
  "node_modules/@po-ui/style/css/po-theme-core.min.css",
  "src/styles.css"
],
`),Kg()(),Jc(75,`blockquote`)(76,`p`),Mk(77,`Só isso não vai fazer diferença no seu projeto, as cores padrões ainda serão mantidas.`),Kg()(),Jc(78,`h3`,6),Mk(79,`Customizando Estilos no Seu Projeto`),Kg(),Jc(80,`p`),Mk(81,`Para personalizar os estilos no seu projeto Angular, voc\xEA pode criar um novo arquivo CSS ou editar um existente e
adicionar as seguintes linhas de c\xF3digo:`),Kg(),Jc(82,`pre`)(83,`code`,4),Mk(84,`po-button {
    --color: rgb(43, 215, 60);
    --border-radius: 12px;
    --font-size: 16px;
    --background-color: black;
}
`),Kg()(),Jc(85,`p`),Mk(86,`Só com isso já conseguimos dar uma nova cara para os nossos botões.`),Kg(),Jc(87,`p`),_u(88,`img`,7),Kg(),Jc(89,`p`),Mk(90,`Caso queira personalizar cores de forma global, é possível sobrescrever algumas variáveis globais:`),Kg(),Jc(91,`pre`)(92,`code`,4),Mk(93,`:root {
  --color-track: #ffecb3;
  --color-thumb: orange;
}
`),Kg()(),Jc(94,`p`),_u(95,`img`,8),Kg(),Jc(96,`p`),Mk(97,`Com essas personalizações, você terá controle não apenas sobre as cores, mas também sobre outros aspectos visuais dos componentes e templates em sua aplicação que utilizam o PO UI.`),Kg(),Jc(98,`blockquote`)(99,`p`),Mk(100,`Para descobrir quais variáveis você pode personalizar, consulte o arquivo `),Jc(101,`code`),Mk(102,`po-theme-default-variables.css`),Kg(),Mk(103,` na pasta `),Jc(104,`code`),Mk(105,`node_modules/@po-ui/style/css`),Kg(),Mk(106,`, l\xE1, voc\xEA
encontrar\xE1 uma lista completa de todas as vari\xE1veis utilizadas pelo tema padr\xE3o. Voc\xEA tamb\xE9m pode consultar a documenta\xE7\xE3o de cada componente no pr\xF3prio portal.`),Kg()(),Jc(107,`blockquote`)(108,`p`),Mk(109,`Para customização do componente `),Jc(110,`code`),Mk(111,`po-button`),Kg(),Mk(112,` verificar `),Jc(113,`a`,9),Mk(114,`variáveis customizaveis`),Kg(),Mk(115,` na aba de customização.`),Kg()(),Jc(116,`blockquote`)(117,`p`),Mk(118,`Atenção: Para saber quais browsers dão suporte a variáveis você pode consultar a ferramenta `),Jc(119,`a`,10),Mk(120,`Can I use`),Kg(),Mk(121,`.`),Kg()()())},dependencies:[Mze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var le=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:378,vars:0,consts:[[`p-title`,`Tipografia`,1,`guides`,`app-portal`],[`id`,`como-usar`],[1,`language-html`],[1,`po-font-text`],[`id`,`tipos-disponiveis`],[1,`po-row`],[1,`po-md-8`,`po-lg-6`,`po-offset-md-2`,`po-offset-lg-3`,`po-offset-xl-3`,`po-shadow-card`],[1,`po-font-display`],[1,`po-sm-6`],[1,`po-font-text-large-bold`],[1,`po-font-large`],[1,`po-md-12`,`po-text-center`],[1,`po-font-title`],[1,`po-font-subtitle`],[1,`po-font-text-large`],[1,`po-font-text-bold`],[1,`po-font-text-uppercase`],[1,`po-font-text-small`],[1,`po-font-text-small-bold`],[1,`po-font-text-smaller`]],template:function(o,d){o&1&&(Jc(0,`po-page-default`,0)(1,`p`),Mk(2,`O PO disponibiliza as fontes usadas pelos componentes, essas fontes foram disponibilizadas no Style Guide pela equipe de UX.`),Kg(),Jc(3,`h3`,1),Mk(4,`Como Usar?`),Kg(),Jc(5,`pre`)(6,`code`,2),Mk(7,`<font class="po-font-text">Texto usado pelo PO</font>
`),Kg()(),Jc(8,`p`)(9,`font`,3),Mk(10,`Texto usado pelo PO`),Kg()(),Jc(11,`h3`,4),Mk(12,`Tipos Disponíveis`),Kg(),Jc(13,`div`,5)(14,`div`,6)(15,`div`,5)(16,`font`,7),Mk(17,`Display`),Kg()(),_u(18,`hr`),Jc(19,`div`,5)(20,`div`,8)(21,`font`,9),Mk(22,`Typeface:`),Kg()(),Jc(23,`div`,8)(24,`font`,10),Mk(25,`NunitoSans-ExtraLight`),Kg()()(),Jc(26,`div`,5)(27,`div`,8)(28,`font`,9),Mk(29,`Font-size:`),Kg()(),Jc(30,`div`,8)(31,`font`,10),Mk(32,`50`),Kg()()(),Jc(33,`div`,5)(34,`div`,8)(35,`font`,9),Mk(36,`Line-height:`),Kg()(),Jc(37,`div`,8)(38,`font`,10),Mk(39,`64`),Kg()()(),Jc(40,`div`,5)(41,`div`,11)(42,`font`,9),Mk(43,`.po-font-display`),Kg()()()()(),_u(44,`br`),Jc(45,`div`,5)(46,`div`,6)(47,`div`,5)(48,`font`,12),Mk(49,`Title`),Kg()(),_u(50,`hr`),Jc(51,`div`,5)(52,`div`,8)(53,`font`,9),Mk(54,`Typeface:`),Kg()(),Jc(55,`div`,8)(56,`font`,10),Mk(57,`NunitoSans-ExtraLight`),Kg()()(),Jc(58,`div`,5)(59,`div`,8)(60,`font`,9),Mk(61,`Font-size:`),Kg()(),Jc(62,`div`,8)(63,`font`,10),Mk(64,`34`),Kg()()(),Jc(65,`div`,5)(66,`div`,8)(67,`font`,9),Mk(68,`Line-height:`),Kg()(),Jc(69,`div`,8)(70,`font`,10),Mk(71,`48`),Kg()()(),Jc(72,`div`,5)(73,`div`,11)(74,`font`,9),Mk(75,`.po-font-title`),Kg()()()()(),_u(76,`br`),Jc(77,`div`,5)(78,`div`,6)(79,`div`,5)(80,`font`,13),Mk(81,`Subtitle`),Kg()(),_u(82,`hr`),Jc(83,`div`,5)(84,`div`,8)(85,`font`,9),Mk(86,`Typeface:`),Kg()(),Jc(87,`div`,8)(88,`font`,10),Mk(89,`NunitoSans`),Kg()()(),Jc(90,`div`,5)(91,`div`,8)(92,`font`,9),Mk(93,`Font-size:`),Kg()(),Jc(94,`div`,8)(95,`font`,10),Mk(96,`24`),Kg()()(),Jc(97,`div`,5)(98,`div`,8)(99,`font`,9),Mk(100,`Line-height:`),Kg()(),Jc(101,`div`,8)(102,`font`,10),Mk(103,`32`),Kg()()(),Jc(104,`div`,5)(105,`div`,11)(106,`font`,9),Mk(107,`.po-font-subtitle`),Kg()()()()(),_u(108,`br`),Jc(109,`div`,5)(110,`div`,6)(111,`div`,5)(112,`font`,14),Mk(113,`Text Large`),Kg()(),_u(114,`hr`),Jc(115,`div`,5)(116,`div`,8)(117,`font`,9),Mk(118,`Typeface:`),Kg()(),Jc(119,`div`,8)(120,`font`,10),Mk(121,`NunitoSans`),Kg()()(),Jc(122,`div`,5)(123,`div`,8)(124,`font`,9),Mk(125,`Font-size:`),Kg()(),Jc(126,`div`,8)(127,`font`,10),Mk(128,`16`),Kg()()(),Jc(129,`div`,5)(130,`div`,8)(131,`font`,9),Mk(132,`Line-height:`),Kg()(),Jc(133,`div`,8)(134,`font`,10),Mk(135,`24`),Kg()()(),Jc(136,`div`,5)(137,`div`,11)(138,`font`,9),Mk(139,`.po-font-text-large`),Kg()()()()(),_u(140,`br`),Jc(141,`div`,5)(142,`div`,6)(143,`div`,5)(144,`font`,9),Mk(145,`Text Large Bold`),Kg()(),_u(146,`hr`),Jc(147,`div`,5)(148,`div`,8)(149,`font`,9),Mk(150,`Typeface:`),Kg()(),Jc(151,`div`,8)(152,`font`,10),Mk(153,`NunitoSans-Bold`),Kg()()(),Jc(154,`div`,5)(155,`div`,8)(156,`font`,9),Mk(157,`Font-size:`),Kg()(),Jc(158,`div`,8)(159,`font`,10),Mk(160,`16`),Kg()()(),Jc(161,`div`,5)(162,`div`,8)(163,`font`,9),Mk(164,`Line-height:`),Kg()(),Jc(165,`div`,8)(166,`font`,10),Mk(167,`24`),Kg()()(),Jc(168,`div`,5)(169,`div`,11)(170,`font`,9),Mk(171,`.po-font-text-large-bold`),Kg()()()()(),_u(172,`br`),Jc(173,`div`,5)(174,`div`,6)(175,`div`,5)(176,`font`,3),Mk(177,`Text`),Kg()(),_u(178,`hr`),Jc(179,`div`,5)(180,`div`,8)(181,`font`,9),Mk(182,`Typeface:`),Kg()(),Jc(183,`div`,8)(184,`font`,10),Mk(185,`NunitoSans`),Kg()()(),Jc(186,`div`,5)(187,`div`,8)(188,`font`,9),Mk(189,`Font-size:`),Kg()(),Jc(190,`div`,8)(191,`font`,10),Mk(192,`14`),Kg()()(),Jc(193,`div`,5)(194,`div`,8)(195,`font`,9),Mk(196,`Line-height:`),Kg()(),Jc(197,`div`,8)(198,`font`,10),Mk(199,`24`),Kg()()(),Jc(200,`div`,5)(201,`div`,11)(202,`font`,9),Mk(203,`.po-font-text`),Kg()()()()(),_u(204,`br`),Jc(205,`div`,5)(206,`div`,6)(207,`div`,5)(208,`font`,15),Mk(209,`Text Bold`),Kg()(),_u(210,`hr`),Jc(211,`div`,5)(212,`div`,8)(213,`font`,9),Mk(214,`Typeface:`),Kg()(),Jc(215,`div`,8)(216,`font`,10),Mk(217,`NunitoSans-Bold`),Kg()()(),Jc(218,`div`,5)(219,`div`,8)(220,`font`,9),Mk(221,`Font-size:`),Kg()(),Jc(222,`div`,8)(223,`font`,10),Mk(224,`14`),Kg()()(),Jc(225,`div`,5)(226,`div`,8)(227,`font`,9),Mk(228,`Line-height:`),Kg()(),Jc(229,`div`,8)(230,`font`,10),Mk(231,`24`),Kg()()(),Jc(232,`div`,5)(233,`div`,11)(234,`font`,9),Mk(235,`.po-font-text-bold`),Kg()()()()(),_u(236,`br`),Jc(237,`div`,5)(238,`div`,6)(239,`div`,5)(240,`font`,16),Mk(241,`Text Uppercase`),Kg()(),_u(242,`hr`),Jc(243,`div`,5)(244,`div`,8)(245,`font`,9),Mk(246,`Typeface:`),Kg()(),Jc(247,`div`,8)(248,`font`,10),Mk(249,`NunitoSans-Bold`),Kg()()(),Jc(250,`div`,5)(251,`div`,8)(252,`font`,9),Mk(253,`Font-size:`),Kg()(),Jc(254,`div`,8)(255,`font`,10),Mk(256,`14`),Kg()()(),Jc(257,`div`,5)(258,`div`,8)(259,`font`,9),Mk(260,`Line-height:`),Kg()(),Jc(261,`div`,8)(262,`font`,10),Mk(263,`24`),Kg()()(),Jc(264,`div`,5)(265,`div`,8)(266,`font`,9),Mk(267,`Transform:`),Kg()(),Jc(268,`div`,8)(269,`font`,10),Mk(270,`Uppercase`),Kg()()(),Jc(271,`div`,5)(272,`div`,11)(273,`font`,9),Mk(274,`.po-font-text-uppercase`),Kg()()()()(),_u(275,`br`),Jc(276,`div`,5)(277,`div`,6)(278,`div`,5)(279,`font`,17),Mk(280,`Text Small`),Kg()(),_u(281,`hr`),Jc(282,`div`,5)(283,`div`,8)(284,`font`,9),Mk(285,`Typeface:`),Kg()(),Jc(286,`div`,8)(287,`font`,10),Mk(288,`NunitoSans`),Kg()()(),Jc(289,`div`,5)(290,`div`,8)(291,`font`,9),Mk(292,`Font-size:`),Kg()(),Jc(293,`div`,8)(294,`font`,10),Mk(295,`12`),Kg()()(),Jc(296,`div`,5)(297,`div`,8)(298,`font`,9),Mk(299,`Line-height:`),Kg()(),Jc(300,`div`,8)(301,`font`,10),Mk(302,`16`),Kg()()(),Jc(303,`div`,5)(304,`div`,11)(305,`font`,9),Mk(306,`.po-font-text-small`),Kg()()()()(),_u(307,`br`),Jc(308,`div`,5)(309,`div`,6)(310,`div`,5)(311,`font`,18),Mk(312,`Text Small Bold`),Kg()(),_u(313,`hr`),Jc(314,`div`,5)(315,`div`,8)(316,`font`,9),Mk(317,`Typeface:`),Kg()(),Jc(318,`div`,8)(319,`font`,10),Mk(320,`NunitoSans-Bold`),Kg()()(),Jc(321,`div`,5)(322,`div`,8)(323,`font`,9),Mk(324,`Font-size:`),Kg()(),Jc(325,`div`,8)(326,`font`,10),Mk(327,`12`),Kg()()(),Jc(328,`div`,5)(329,`div`,8)(330,`font`,9),Mk(331,`Line-height:`),Kg()(),Jc(332,`div`,8)(333,`font`,10),Mk(334,`16`),Kg()()(),Jc(335,`div`,5)(336,`div`,11)(337,`font`,9),Mk(338,`.po-font-text-small-bold`),Kg()()()()(),_u(339,`br`),Jc(340,`div`,5)(341,`div`,6)(342,`div`,5)(343,`font`,19),Mk(344,`Text Smaller`),Kg()(),_u(345,`hr`),Jc(346,`div`,5)(347,`div`,8)(348,`font`,9),Mk(349,`Typeface:`),Kg()(),Jc(350,`div`,8)(351,`font`,10),Mk(352,`NunitoSans-Bold`),Kg()()(),Jc(353,`div`,5)(354,`div`,8)(355,`font`,9),Mk(356,`Font-size:`),Kg()(),Jc(357,`div`,8)(358,`font`,10),Mk(359,`10`),Kg()()(),Jc(360,`div`,5)(361,`div`,8)(362,`font`,9),Mk(363,`Line-height:`),Kg()(),Jc(364,`div`,8)(365,`font`,10),Mk(366,`16`),Kg()()(),Jc(367,`div`,5)(368,`div`,8)(369,`font`,9),Mk(370,`Transform:`),Kg()(),Jc(371,`div`,8)(372,`font`,10),Mk(373,`Uppercase`),Kg()()(),Jc(374,`div`,5)(375,`div`,11)(376,`font`,9),Mk(377,`.po-font-text-smaller`),Kg()()()()()())},dependencies:[Mze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var pe=[{path:``,component:_,children:[{path:`api`,component:L},{path:`browser-support`,component:B},{path:`deprecations`,component:H},{path:`development-flow`,component:V},{path:`getting-started`,component:W},{path:`guide-charts`,component:Q},{path:`migration-poui-v2`,component:X},{path:`migration-poui`,component:J},{path:`migration-thf-to-po-ui`,component:K},{path:`press-kit`,component:Z},{path:`release-schedule`,component:Y},{path:`releases`,component:$},{path:`schematics`,component:ee},{path:`sync-fundamentals`,component:te},{path:`sync-get-started`,component:ie},{path:`theme-service`,component:ne},{path:`create-theme-customization`,component:ae},{path:`grid-system`,component:oe},{path:`spacing`,component:re},{path:`theme-customization`,component:me},{path:`typography`,component:le},{path:``,pathMatch:`full`,redirectTo:`getting-started`}]}];var de=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=ge({type:a});static ɵinj=de$1({imports:[GV.forChild(pe),GV]})}return a})();var ri=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=ge({type:a});static ɵinj=de$1({imports:[M,de]})}return a})();export{ri as GuideModule};