import{p as M$1}from"./main-RBGX2DMP.js";import{Ar as I$1,Ca as j_,Ha as p,Lr as Kg,Oa as kI,Pr as Jn,W as Mze,a as A5,ao as vu,ar as An,da as ge,gi as Rb,ht as Tt,ki as V_,li as Qc,oi as Py,oo as we,pi as R$1,ra as de,so as wg,vi as Sk,wr as GV}from"./chunk-BQDTQO8h.js";var S=(()=>{class a{router=p(An);getMenus(r){return r.map(o=>({label:o.label,subItems:o.items.map(l=>this.item(l))}))}item(r){if(r.shortcut)return{label:r.label+` (`+r.origin+`)`,action:()=>this.router.navigateByUrl(`/`+r.link)};let o=`/`+r.link;return r.children?.length?{label:r.label,subItems:[{label:`Visão geral`,link:o},...r.children.map(l=>this.item(l))]}:{label:r.label,link:o}}static ɵfac=function(o){return new(o||a)};static ɵprov=R$1({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var T=(()=>{class a{menuGuidesService;http;menus=[];constructor(r,o){this.menuGuidesService=r,this.http=o}ngOnInit(){this.http.get(`./assets/json/guides-menu.json`).subscribe(r=>this.menus=this.menuGuidesService.getMenus(r),r=>console.error(r))}static ɵfac=function(o){return new(o||a)(I$1(S),I$1(kI))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,features:[we([S])],decls:4,vars:1,consts:[[`userMenu`,``],[1,`po-wrapper`],[`p-filter`,``,3,`p-menus`]],template:function(o,l){o&1&&(Qc(0,`div`,1),vu(1,`po-menu`,2,0)(3,`router-outlet`),Kg()),o&2&&(wg(),Rb(`p-menus`,l.menus))},dependencies:[A5,Py],encapsulation:2,changeDetection:1})}return a})();var O=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:225,vars:0,consts:[[`p-title`,`Guia de implementação de APIs`,1,`guides`,`app-portal`],[`id`,`conteudo`],[`href`,`guides/api#introduction`],[`href`,`guides/api#responseMessage`],[`href`,`guides/api#errorMessages`],[`href`,`guides/api#successMessages`],[`href`,`guides/api#successMessagesForCollections`],[`href`,`guides/api#collections`],[`href`,`guides/api#order`],[`href`,`guides/api#filters`],[`href`,`guides/api#pagination`],[`id`,`introduction`],[`id`,`introducao`],[`id`,`responseMessage`],[`id`,`formato-das-mensagens-de-resposta`],[`id`,`errorMessages`],[`id`,`mensagens-de-erro`],[`id`,`successMessages`],[`id`,`mensagens-de-sucesso`],[`id`,`successMessagesForCollections`],[`id`,`mensagens-de-sucesso-para-colecoes`],[`id`,`collections`],[`id`,`formato-das-requisicoes-para-as-colecoes`],[`id`,`order`],[`id`,`ordenacao`],[`id`,`filters`],[`id`,`filtros`],[`id`,`pagination`],[`id`,`paginacao`],[`href`,`#successMessagesForCollections`]],template:function(o,l){o&1&&(Qc(0,`po-page-default`,0)(1,`h2`,1),Sk(2,`Conteúdo`),Kg(),Qc(3,`ul`)(4,`li`)(5,`a`,2),Sk(6,`Introdução`),Kg()(),Qc(7,`li`)(8,`a`,3),Sk(9,`Formato das mensagens de resposta`),Kg(),Qc(10,`ul`)(11,`li`)(12,`a`,4),Sk(13,`Mensagens de erro`),Kg()(),Qc(14,`li`)(15,`a`,5),Sk(16,`Mensagens de sucesso`),Kg()(),Qc(17,`li`)(18,`a`,6),Sk(19,`Mensagens de sucesso para coleções`),Kg()()()(),Qc(20,`li`)(21,`a`,7),Sk(22,`Formato das requisições para coleções`),Kg(),Qc(23,`ul`)(24,`li`)(25,`a`,8),Sk(26,`Ordenação`),Kg()(),Qc(27,`li`)(28,`a`,9),Sk(29,`Filtros`),Kg()(),Qc(30,`li`)(31,`a`,10),Sk(32,`Paginação`),Kg()()()()(),Qc(33,`p`),vu(34,`a`,11),Kg(),Qc(35,`h2`,12),Sk(36,`Introdução`),Kg(),Qc(37,`p`),Sk(38,`Este guia tem a finalidade de exibir os modelos de requisições e respostas HTTP que o PO UI utiliza em seus componentes e `),Qc(39,`em`),Sk(40,`interceptors`),Kg(),Sk(41,`.`),Kg(),Qc(42,`p`),vu(43,`a`,13),Kg(),Qc(44,`h2`,14),Sk(45,`Formato das mensagens de resposta`),Kg(),Qc(46,`p`),Sk(47,`Alguns componentes utilizam `),Qc(48,`code`),Sk(49,`endpoints`),Kg(),Sk(50,` para poder buscar os itens. Para isso, é necessário que o formato no qual estes itens serão devolvidos seja padronizado, para uma comunicação mais efetiva. A seguir serão apresentados o formato de mensagem de resposta esperado pelos `),Qc(51,`code`),Sk(52,`endpoints`),Kg(),Sk(53,`.`),Kg(),Qc(54,`p`),vu(55,`a`,15),Kg(),Qc(56,`h3`,16),Sk(57,`Mensagens de erro`),Kg(),Qc(58,`p`),Sk(59,`Para todas as mensagens que representam um erro (códigos HTTP 4xx e 5xx) deve-se retornar obrigatoriamente os campos a seguir, caso deseje apresentá-las:`),Kg(),Qc(60,`pre`)(61,`code`),Sk(62,`{
    code: "C\xF3digo identificador do erro",
    message: "Literal no idioma da requisi\xE7\xE3o descrevendo o erro para o cliente",
    detailedMessage: "Mensagem t\xE9cnica e mais detalhada do erro"
}
`),Kg()(),Qc(63,`p`),Sk(64,`Opcionalmente pode-se retornar os campos:`),Kg(),Qc(65,`ul`)(66,`li`)(67,`code`),Sk(68,`helpUrl`),Kg(),Sk(69,`: link para a documentação do erro;`),Kg(),Qc(70,`li`)(71,`code`),Sk(72,`type`),Kg(),Sk(73,`: pode ser informado os seguintes valores: `),Qc(74,`code`),Sk(75,`error`),Kg(),Sk(76,`, `),Qc(77,`code`),Sk(78,`warning`),Kg(),Sk(79,` e `),Qc(80,`code`),Sk(81,`information`),Kg(),Sk(82,`;`),Kg(),Qc(83,`li`)(84,`code`),Sk(85,`details`),Kg(),Sk(86,`: lista de objetos de erro (recursiva) com mais detalhes sobre o erro principal.`),Kg()(),Qc(87,`pre`)(88,`code`),Sk(89,`{
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
`),Kg()(),Qc(90,`p`),vu(91,`a`,17),Kg(),Qc(92,`h3`,18),Sk(93,`Mensagens de sucesso`),Kg(),Qc(94,`p`),Sk(95,`Mensagens de sucesso (código HTTP 2xx) devem retornar diretamente a entidade que representa o objeto resultante da operação do `),Qc(96,`em`),Sk(97,`endpoint`),Kg(),Sk(98,`. Exemplo:`),Kg(),Qc(99,`pre`)(100,`code`),Sk(101,`GET https://example.com.br/api/users/10

{
    id: 10,
    name: "John",
    surname: "Doe",
    age: 25,
    country: "US"
}
`),Kg()(),Qc(102,`p`),Sk(103,`Opcionalmente, o atributo `),Qc(104,`code`),Sk(105,`_messages`),Kg(),Sk(106,` pode ser incluído no objeto retornado para fornecer alguma informação complementar ao processamento realizado (mensagens de aviso, de negócio, etc). `),Kg(),Qc(107,`p`),Sk(108,`O formato do objeto de mensagem segue o padrão anteriormente descrito, para mensagens de erro.`),Kg(),Qc(109,`pre`)(110,`code`),Sk(111,`GET https://example.com.br/api/users/10
 
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
`),Kg()(),Qc(112,`p`),vu(113,`a`,19),Kg(),Qc(114,`h4`,20),Sk(115,`Mensagens de sucesso para coleções`),Kg(),Qc(116,`p`),Sk(117,`Nos casos em que o resultado da operação do `),Qc(118,`em`),Sk(119,`endpoint`),Kg(),Sk(120,` representa uma coleção (lista de itens), os itens devem estar agrupados em um objeto com as propriedades `),Qc(121,`code`),Sk(122,`hasNext`),Kg(),Sk(123,`, indicando se existe uma próxima página com mais registros para aquela coleção e `),Qc(124,`code`),Sk(125,`items`),Kg(),Sk(126,` que representam a lista de itens retornados.`),Kg(),Qc(127,`pre`)(128,`code`),Sk(129,`{
  hasNext: true,
  items: [
    {},
    {},
    ...
  ]
}
`),Kg()(),Qc(130,`p`),Sk(131,`Para o retorno de coleções, também é possível incluir o atributo `),Qc(132,`code`),Sk(133,`_messages`),Kg(),Sk(134,`, conforme segue:`),Kg(),Qc(135,`pre`)(136,`code`),Sk(137,`{
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
`),Kg()(),Qc(138,`p`),vu(139,`a`,21),Kg(),Qc(140,`h2`,22),Sk(141,`Formato das requisições para as coleções`),Kg(),Qc(142,`p`),Sk(143,`Os `),Qc(144,`em`),Sk(145,`endpoints`),Kg(),Sk(146,` também podem receber parâmetros na requisição que servem para especificar o tipo de resposta desejada, por exemplo: ordenação. A seguir, serão apresentados os parâmetros que poderão ser enviados nessas requisições.`),Kg(),Qc(147,`p`),vu(148,`a`,23),Kg(),Qc(149,`h3`,24),Sk(150,`Ordenação`),Kg(),Qc(151,`p`),Sk(152,`Quando algum componente, como `),Qc(153,`code`),Sk(154,`po-lookup`),Kg(),Sk(155,`, realizar alguma ordenação será enviado o parâmetro `),Qc(156,`code`),Sk(157,`order`),Kg(),Sk(158,`, com as seguintes características:`),Kg(),Qc(159,`ul`)(160,`li`),Sk(161,`campos precedidos por um sinal de subtração (-) devem ser ordenados de forma decrescente;`),Kg(),Qc(162,`li`),Sk(163,`campos que omitirem o sinal (subtração) devem ser ordenados de forma crescente.`),Kg()(),Qc(164,`p`),Sk(165,`Por exemplo, a seguinte requisição deve retornar a lista de usuários ordenados pelo nome de forma crescente e então pela idade de forma decrescente e pelo sobrenome de forma crescente:`),Kg(),Qc(166,`pre`)(167,`code`),Sk(168,`GET https://example.com.br/api/users?order=name,-age,surname
`),Kg()(),Qc(169,`p`),vu(170,`a`,25),Kg(),Qc(171,`h3`,26),Sk(172,`Filtros`),Kg(),Qc(173,`p`),Sk(174,`Aos realizar um filtro será enviado um parâmetro no formato `),Qc(175,`code`),Sk(176,`property=value`),Kg(),Sk(177,`:`),Kg(),Qc(178,`p`)(179,`code`),Sk(180,`GET https://example.com.br/api/users?name=john&surname=doe`),Kg()(),Qc(181,`p`),vu(182,`a`,27),Kg(),Qc(183,`h3`,28),Sk(184,`Paginação`),Kg(),Qc(185,`p`),Sk(186,`A paginação é definida pelos parâmetros `),Qc(187,`code`),Sk(188,`page`),Kg(),Sk(189,` e `),Qc(190,`code`),Sk(191,`pageSize`),Kg(),Sk(192,`, respeitando as seguintes regras: `),Kg(),Qc(193,`ul`)(194,`li`),Sk(195,`o valor do parâmetro `),Qc(196,`code`),Sk(197,`page`),Kg(),Sk(198,` deve ser um valor numérico (maior que zero) representando a página solicitada;`),Kg(),Qc(199,`li`),Sk(200,`o valor do parâmetro `),Qc(201,`code`),Sk(202,`pageSize`),Kg(),Sk(203,` deve ser um valor numérico (maior que zero) representando o total de registros retornados na consulta;`),Kg(),Qc(204,`li`),Sk(205,`os parâmetros de paginação devem obedecer a semântica de multiplicador, ou seja, se o cliente solicitou `),Qc(206,`code`),Sk(207,`page=2`),Kg(),Sk(208,` com um `),Qc(209,`code`),Sk(210,`pageSize=20`),Kg(),Sk(211,` deve-se retornar os registros de 21 até 40;`),Kg(),Qc(212,`li`),Sk(213,`a resposta de uma requisição com paginação deve retornar um atributo indicando se existe uma próxima página disponível conforme descrito na `),Qc(214,`a`,29),Sk(215,`mensagem de sucesso de coleções`),Kg(),Sk(216,` e esse atributo deve ter o nome `),Qc(217,`code`),Sk(218,`hasNext`),Kg(),Sk(219,`.`),Kg()(),Qc(220,`p`),Sk(221,`Por exemplo, a seguinte requisição deve retornar a quarta página de registros (dos registros 31 a 40 inclusive) de usuários:`),Kg(),Qc(222,`p`)(223,`code`),Sk(224,`GET https://example.com.br/api/users/?page=4&pageSize=10`),Kg()()())},dependencies:[Mze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var M=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:72,vars:0,consts:[[`p-title`,`Compatibilidade com os navegadores`,1,`guides`,`app-portal`],[1,`po-row`],[1,`po-xl-6`,`po-lg-8`,`po-md-10`,`po-sm-12`],[1,`po-table`,`po-text-color-neutral-dark-40`],[1,`po-table-header`],[1,`po-table-header-ellipsis`],[1,`po-table-row`],[1,`po-table-column`],[`href`,`https://angular.dev/reference/versions#browser-support`],[`id`,`executando-a-aplicacao-localmente`],[`href`,`https://angular.io/guide/deployment#local-development-in-older-browsers`]],template:function(o,l){o&1&&(Qc(0,`po-page-default`,0)(1,`p`),Sk(2,`Atualmente o PO está homologado para os seguintes navegadores:`),Kg(),Qc(3,`div`,1)(4,`div`,2)(5,`table`,3)(6,`thead`)(7,`tr`,4)(8,`th`,5),Sk(9,`Navegadores`),Kg(),Qc(10,`th`,5),Sk(11,`Versões`),Kg()()(),Qc(12,`tbody`)(13,`tr`,6)(14,`th`,7),Sk(15,`Chrome`),Kg(),Qc(16,`td`,7),Sk(17,`2 versões mais recentes`),Kg()(),Qc(18,`tr`,6)(19,`th`,7),Sk(20,`Firefox`),Kg(),Qc(21,`td`,7),Sk(22,`versão mais recente e versão de suporte estendido (ESR)`),Kg()(),Qc(23,`tr`,6)(24,`th`,7),Sk(25,`Edge`),Kg(),Qc(26,`td`,7),Sk(27,`2 últimas versões principais`),Kg()(),Qc(28,`tr`,6)(29,`th`,7),Sk(30,`Android`),Kg(),Qc(31,`td`,7),Sk(32,`2 últimas versões principais`),Kg()()()()()(),Qc(33,`blockquote`)(34,`p`),Sk(35,`Nossa homologa\xE7\xE3o tem como base os navegadores que o Angular suporta nativamente. Para saber mais, acesse o guia
`),Qc(36,`a`,8)(37,`em`),Sk(38,`Browser support`),Kg()(),Sk(39,` do Angular.`),Kg()(),Qc(40,`blockquote`)(41,`p`),Sk(42,`Caso precise de algum `),Qc(43,`em`),Sk(44,`polyfill`),Kg(),Sk(45,` em sua aplicação ou precisa de mais informação sobre como funciona um `),Qc(46,`em`),Sk(47,`polyfill`),Kg(),Sk(48,` acesse a documentação `),Qc(49,`a`,8)(50,`em`),Sk(51,`Browser support`),Kg()(),Sk(52,` do Angular.`),Kg()(),Qc(53,`h2`,9),Sk(54,`Executando a aplicação localmente`),Kg(),Qc(55,`p`),Sk(56,`A partir do Angular CLI v8, os comandos `),Qc(57,`em`),Sk(58,`ng serve`),Kg(),Sk(59,`, `),Qc(60,`em`),Sk(61,`ng test`),Kg(),Sk(62,` e `),Qc(63,`em`),Sk(64,`ng e2e`),Kg(),Sk(65,` são executados com ES2015, não sendo suportado para navegadores como Internet Explorer.`),Kg(),Qc(66,`p`),Sk(67,`Para conseguir executar a aplicação localmente no Internet Explorer, veja a documentação`),vu(68,`br`),Qc(69,`a`,10),Sk(70,`Desenvolvendo localmente em navegadores antigos`),Kg(),Sk(71,`.`),Kg()())},dependencies:[Mze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var I=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:989,vars:0,consts:[[`p-title`,`Depreciações`,1,`guides`,`app-portal`],[`id`,`descontinuidade`],[`href`,`https://github.com/po-ui/po-angular/blob/master/CHANGELOG.md`],[`id`,`indice`],[1,`po-row`],[1,`po-xl-6`,`po-lg-8`,`po-md-10`,`po-sm-12`],[1,`po-table`,`po-text-color-neutral-dark-40`],[1,`po-table-header`],[1,`po-table-header-ellipsis`],[1,`po-table-row`],[1,`po-table-column`],[`href`,`documentation/po-theme`],[1,`po-table-column`,2,`text-align`,`center`],[`href`,`documentation/po-navbar`],[`href`,`documentation/po-gauge`],[`href`,`documentation/po-tabs`],[`href`,`documentation/po-tag`],[`href`,`documentation/po-button`],[`href`,`documentation/po-button-group`],[`href`,`documentation/po-container`],[`href`,`documentation/po-table`],[`id`,`depreciacoes`],[`id`,`po-theme`],[`id`,`po-gauge`],[`href`,`documentation/po-chart`],[`id`,`po-button`],[`id`,`deprecia-p-type-default`],[`id`,`deprecia-p-type-primary`],[`id`,`deprecia-p-type-link`],[`id`,`deprecia-p-type-danger`],[`id`,`http-client-module`],[`id`,`remocao-da-biblioteca-poicon`],[`href`,`/icons`],[`id`,`breaking-changes`],[`href`,`documentation/po-header`],[`href`,`documentation/po-input`],[`href`,`documentation/po-dynamic-form`],[`href`,`documentation/po-select`],[`href`,`documentation/po-switch`],[`href`,`documentation`],[`href`,`https://animaliads.notion.site/Bot-o-fb3a921e8ba54bd38b39758c24613368`],[`href`,`documentation/po-page-list`],[`href`,`documentation/po-page-login`],[`href`,`documentation/po-sync`],[`href`,`documentation/po-upload`],[`href`,`documentation/po-lookup`],[`href`,`documentation/po-http-interceptor`],[`href`,`documentation/po-page-detail`],[`href`,`documentation/po-page-edit`]],template:function(o,l){o&1&&(Qc(0,`po-page-default`,0)(1,`p`),Sk(2,`Às vezes as mudanças são necessárias para inovar e se manter atualizado, e para tornar essas transições o mais fácil possível, assumimos o compromisso de minimizar o número de mudanças significativas e fornecer ferramentas de migração, além disso, seguimos uma política de suspensão de uso para que você tenha tempo hábil para atualizar suas aplicações com as funcionalidades mais recentes.`),Kg(),Qc(3,`h2`,1),Sk(4,`Descontinuidade`),Kg(),Qc(5,`p`),Sk(6,`Anunciamos os recursos obsoletos no nosso `),Qc(7,`a`,2),Sk(8,`CHANGELOG`),Kg(),Sk(9,`. Esses recursos obsoletos aparecem na documentação com uma marcação de `),Qc(10,`em`)(11,`code`),Sk(12,`Deprecated`),Kg()(),Sk(13,` e não são mais exemplificados nos `),Qc(14,`em`),Sk(15,`samples`),Kg(),Sk(16,` do portal. Quando anunciamos uma suspensão de uso, sempre anunciamos também um caminho de atualização recomendado. Neste documento teremos um resumo desses recursos depreciados.`),Kg(),Qc(17,`p`),Sk(18,`Quando um recurso é descontinuado ele ainda se mantém presente geralmente pelas próximas `),Qc(19,`code`),Sk(20,`duas`),Kg(),Sk(21,` versões principais. Depois disso esses recursos serão removidos. Uma descontinuação pode ser anunciada em qualquer versão, mas a sua remoção acontecerá apenas na versão principal. Até um recurso depreciado ser removido, manteremos o suporte a problemas críticos e de segurança e também temos ferramentas de migração que geralmente automatizam a maior parte das atualizações.`),Kg(),Qc(22,`h2`,3),Sk(23,`Índice`),Kg(),Qc(24,`p`),Sk(25,`A tabela a seguir lista todos os recursos depreciados, organizados pelo release em que serão removidos. Cada item contém um link para a seção que descreve o motivo da suspensão de uso e as opções de substituição.`),Kg(),Qc(26,`div`,4)(27,`div`,5)(28,`table`,6)(29,`thead`)(30,`tr`,7)(31,`th`,8),Sk(32,`Área`),Kg(),Qc(33,`th`,8),Sk(34,`API ou Funcionalidade`),Kg(),Qc(35,`th`,8),Sk(36,`Removida em`),Kg()()(),Qc(37,`tbody`)(38,`tr`,9)(39,`th`,10)(40,`a`,11),Sk(41,`PoTheme`),Kg()(),Qc(42,`td`,10),Sk(43,`Tema padrão anterior (`),Qc(44,`code`),Sk(45,`poThemeDefaultDeprecated`),Kg(),Sk(46,`)`),Kg(),Qc(47,`td`,12),Sk(48,`v24`),Kg()(),Qc(49,`tr`,9)(50,`th`,10)(51,`a`,13),Sk(52,`PoNavbar`),Kg()(),Qc(53,`td`,10),Sk(54,`Componente descontinuado`),Kg(),Qc(55,`td`,12),Sk(56,`v23`),Kg()(),Qc(57,`tr`,9)(58,`th`,10)(59,`a`,14),Sk(60,`PoGauge`),Kg()(),Qc(61,`td`,10),Sk(62,`Componente descontinuado`),Kg(),Qc(63,`td`,12),Sk(64,`v22`),Kg()(),Qc(65,`tr`,9)(66,`th`,10)(67,`a`,15),Sk(68,`PoTabs`),Kg()(),Qc(69,`td`,10),Sk(70,`p-small`),Kg(),Qc(71,`td`,12),Sk(72,`v18`),Kg()(),Qc(73,`tr`,9)(74,`th`,10)(75,`a`,16),Sk(76,`PoTag`),Kg()(),Qc(77,`td`,10),Sk(78,`p-inverse`),Kg(),Qc(79,`td`,12),Sk(80,`v18`),Kg()(),Qc(81,`tr`,9)(82,`th`,10)(83,`a`,17),Sk(84,`PoButton`),Kg()(),Qc(85,`td`,10),Sk(86,`p-small`),Kg(),Qc(87,`td`,12),Sk(88,`v17`),Kg()(),Qc(89,`tr`,9)(90,`th`,10)(91,`a`,18),Sk(92,`PoButtonGroup`),Kg()(),Qc(93,`td`,10),Sk(94,`p-small`),Kg(),Qc(95,`td`,12),Sk(96,`v17`),Kg()(),Qc(97,`tr`,9)(98,`th`,10)(99,`a`,19),Sk(100,`PoContainer`),Kg()(),Qc(101,`td`,10),Sk(102,`p-no-shadow`),Kg(),Qc(103,`td`,12),Sk(104,`v17`),Kg()(),Qc(105,`tr`,9)(106,`th`,10)(107,`a`,20),Sk(108,`PoTable`),Kg()(),Qc(109,`td`,10),Sk(110,`p-hide-text-overflow`),Kg(),Qc(111,`td`,12),Sk(112,`v17`),Kg()()()()()(),Qc(113,`blockquote`)(114,`p`),Sk(115,`Ver mais detalhes no nosso `),Qc(116,`a`,2),Sk(117,`CHANGELOG`),Kg(),Sk(118,` e na nossa documentação das ferramentas de migração que automatizam a maioria dos breaking changes.`),Kg()(),Qc(119,`h2`,21),Sk(120,`Depreciações`),Kg(),Qc(121,`p`),Sk(122,`Esta seção contém uma lista completa de todos os recursos obsoletos com detalhes para ajudá-lo a planejar sua migração.`),Kg(),Qc(123,`h3`,22),Sk(124,`PoTheme`),Kg(),Qc(125,`div`,4)(126,`div`,5)(127,`table`,6)(128,`thead`)(129,`tr`,7)(130,`th`,8),Sk(131,`Recurso`),Kg(),Qc(132,`th`,8),Sk(133,`Substituição`),Kg(),Qc(134,`th`,8),Sk(135,`Anúncio da Depreciação`),Kg(),Qc(136,`th`,8),Sk(137,`Removido em`),Kg()()(),Qc(138,`tbody`)(139,`tr`,9)(140,`th`,10)(141,`code`),Sk(142,`poThemeDefaultDeprecated`),Kg(),Sk(143,` e demais constantes `),Qc(144,`code`),Sk(145,`*Deprecated`),Kg()(),Qc(146,`td`,10)(147,`a`,11)(148,`code`),Sk(149,`poThemeDefault`),Kg(),Sk(150,` e constantes equivalentes`),Kg()(),Qc(151,`td`,12),Sk(152,`v22`),Kg(),Qc(153,`td`,12),Sk(154,`v24`),Kg()(),Qc(155,`tr`,9)(156,`th`,10)(157,`code`),Sk(158,`po-theme-default-deprecated*.css`),Kg(),Sk(159,` (`),Qc(160,`code`),Sk(161,`@po-ui/style`),Kg(),Sk(162,`)`),Kg(),Qc(163,`td`,10)(164,`code`),Sk(165,`po-theme-default*.css`),Kg()(),Qc(166,`td`,12),Sk(167,`v22`),Kg(),Qc(168,`td`,12),Sk(169,`v24`),Kg()()()()()(),Qc(170,`p`),Sk(171,`A partir da v22, o tema padrão do PO UI passa a ser o tema EVO, aplicado automaticamente ao atualizar a biblioteca. O tema padrão anterior continua disponível como depreciado, para quem precisar de mais tempo na transição, e será removido na v24.`),Kg(),Qc(172,`p`),Sk(173,`O tema anterior é composto pelas constantes `),Qc(174,`code`),Sk(175,`poThemeDefaultDeprecated`),Kg(),Sk(176,` e demais constantes com o sufixo `),Qc(177,`code`),Sk(178,`Deprecated`),Kg(),Sk(179,` (por exemplo, `),Qc(180,`code`),Sk(181,`poThemeDefaultLightDeprecated`),Kg(),Sk(182,` e `),Qc(183,`code`),Sk(184,`poThemeDefaultAADeprecated`),Kg(),Sk(185,`), exportadas pelo `),Qc(186,`code`),Sk(187,`@po-ui/ng-components`),Kg(),Sk(188,`, e pelos arquivos `),Qc(189,`code`),Sk(190,`po-theme-default-deprecated.min.css`),Kg(),Sk(191,`, `),Qc(192,`code`),Sk(193,`po-theme-default-deprecated-variables.css`),Kg(),Sk(194,` e `),Qc(195,`code`),Sk(196,`po-theme-default-deprecated-variables.min.css`),Kg(),Sk(197,` do `),Qc(198,`code`),Sk(199,`@po-ui/style`),Kg(),Sk(200,`.`),Kg(),Qc(201,`p`),Sk(202,`Durante o `),Qc(203,`code`),Sk(204,`ng update`),Kg(),Sk(205,` da v22 é feita uma pergunta opcional sobre o retorno ao tema anterior. A resposta padrão é "Não"; em ambientes sem terminal interativo (CI) a migração mantém o tema novo. Ao responder "sim", a migração troca os arquivos CSS do tema no `),Qc(206,`code`),Sk(207,`angular.json`),Kg(),Sk(208,` e nas folhas de estilo, renomeia as constantes de tema importadas para as equivalentes `),Qc(209,`code`),Sk(210,`*Deprecated`),Kg(),Sk(211,` e, quando a aplicação ainda não utiliza o `),Qc(212,`code`),Sk(213,`PoThemeService`),Kg(),Sk(214,`, adiciona no componente principal a chamada `),Qc(215,`code`),Sk(216,`setTheme(poThemeDefaultDeprecated)`),Kg(),Sk(217,`.`),Kg(),Qc(218,`p`),Sk(219,`Para migrar para o tema atual, substitua as constantes e os arquivos CSS depreciados pelos equivalentes sem o sufixo:`),Kg(),Qc(220,`p`),Sk(221,`Antes:`),Kg(),Qc(222,`pre`)(223,`code`),Sk(224,`// app.component.ts
import { poThemeDefaultDeprecated, PoThemeService } from '@po-ui/ng-components';
...
this.poThemeService.setTheme(poThemeDefaultDeprecated);

// angular.json
"styles": ["./node_modules/@po-ui/style/css/po-theme-default-deprecated.min.css"]
`),Kg()(),Qc(225,`p`),Sk(226,`Depois:`),Kg(),Qc(227,`pre`)(228,`code`),Sk(229,`// app.component.ts
import { poThemeDefault, PoThemeService } from '@po-ui/ng-components';
...
this.poThemeService.setTheme(poThemeDefault);

// angular.json
"styles": ["./node_modules/@po-ui/style/css/po-theme-default.min.css"]
`),Kg()(),Qc(230,`blockquote`)(231,`p`),Sk(232,`Caso a aplicação não precise de nenhuma configuração específica de tema, a chamada a `),Qc(233,`code`),Sk(234,`setTheme`),Kg(),Sk(235,` pode ser removida: o tema padrão é aplicado automaticamente.`),Kg()(),Qc(236,`h3`,23),Sk(237,`PoGauge`),Kg(),Qc(238,`div`,4)(239,`div`,5)(240,`table`,6)(241,`thead`)(242,`tr`,7)(243,`th`,8),Sk(244,`Recurso`),Kg(),Qc(245,`th`,8),Sk(246,`Substituição`),Kg(),Qc(247,`th`,8),Sk(248,`Anúncio da Depreciação`),Kg(),Qc(249,`th`,8),Sk(250,`Removido em`),Kg()()(),Qc(251,`tbody`)(252,`tr`,9)(253,`th`,10),Sk(254,`Componente po-gauge`),Kg(),Qc(255,`td`,10)(256,`a`,24),Sk(257,`po-chart (type=gauge)`),Kg()(),Qc(258,`td`,12),Sk(259,`v19`),Kg(),Qc(260,`td`,12),Sk(261,`v22`),Kg()()()()()(),Qc(262,`p`),Sk(263,`O componente `),Qc(264,`code`),Sk(265,`po-gauge`),Kg(),Sk(266,` foi removido. Utilize o `),Qc(267,`code`),Sk(268,`po-chart`),Kg(),Sk(269,` com `),Qc(270,`code`),Sk(271,`p-type="gauge"`),Kg(),Sk(272,` como alternativa.`),Kg(),Qc(273,`p`),Sk(274,`Antes:`),Kg(),Qc(275,`pre`)(276,`code`),Sk(277,`<po-gauge [p-value]="72" [p-ranges]="ranges"></po-gauge>
`),Kg()(),Qc(278,`p`),Sk(279,`Depois:`),Kg(),Qc(280,`pre`)(281,`code`),Sk(282,`<po-chart p-type="gauge" [p-options]="gaugeOptions" [p-series]="gaugeSeries"></po-chart>
`),Kg()(),Qc(283,`h3`,25),Sk(284,`PoButton`),Kg(),Qc(285,`div`,4)(286,`div`,5)(287,`table`,6)(288,`thead`)(289,`tr`,7)(290,`th`,8),Sk(291,`Recurso`),Kg(),Qc(292,`th`,8),Sk(293,`Substituição`),Kg(),Qc(294,`th`,8),Sk(295,`Anúncio da Depreciação`),Kg(),Qc(296,`th`,8),Sk(297,`Removido em`),Kg()()(),Qc(298,`tbody`)(299,`tr`,9)(300,`th`,10),Sk(301,`p-type`),Kg(),Qc(302,`td`,10)(303,`a`,17),Sk(304,`p-kind`),Kg()(),Qc(305,`td`,12),Sk(306,`v6`),Kg(),Qc(307,`td`,12),Sk(308,`v15`),Kg()()()()()(),Qc(309,`h4`,26),Sk(310,`Deprecia p-type default`),Kg(),Qc(311,`p`),Sk(312,`Indicamos o uso da propriedade `),Qc(313,`code`),Sk(314,`p-kind`),Kg(),Sk(315,` secondary`),Kg(),Qc(316,`p`),Sk(317,`Antes:`),Kg(),Qc(318,`pre`)(319,`code`),Sk(320,`// html
<po-button [p-type]="default" ...></po-button>

`),Kg()(),Qc(321,`p`),Sk(322,`Depois:`),Kg(),Qc(323,`pre`)(324,`code`),Sk(325,`// html
<po-button p-kind="secondary" ...></po-button>
`),Kg()(),Qc(326,`h4`,27),Sk(327,`Deprecia p-type primary`),Kg(),Qc(328,`p`),Sk(329,`Indicamos o uso da propriedade `),Qc(330,`code`),Sk(331,`p-kind`),Kg(),Sk(332,` primary`),Kg(),Qc(333,`p`),Sk(334,`Antes:`),Kg(),Qc(335,`pre`)(336,`code`),Sk(337,`// html
<po-button [p-type]="primary" ...></po-button>

`),Kg()(),Qc(338,`p`),Sk(339,`Depois:`),Kg(),Qc(340,`pre`)(341,`code`),Sk(342,`// html
<po-button p-kind="primary" ...></po-button>
`),Kg()(),Qc(343,`h4`,28),Sk(344,`Deprecia p-type link`),Kg(),Qc(345,`p`),Sk(346,`Indicamos o uso da propriedade `),Qc(347,`code`),Sk(348,`p-kind`),Kg(),Sk(349,` tertiary`),Kg(),Qc(350,`p`),Sk(351,`Antes:`),Kg(),Qc(352,`pre`)(353,`code`),Sk(354,`// html
<po-button [p-type]="link" ...></po-button>

`),Kg()(),Qc(355,`p`),Sk(356,`Depois:`),Kg(),Qc(357,`pre`)(358,`code`),Sk(359,`// html
<po-button p-kind="tertiary" ...></po-button>
`),Kg()(),Qc(360,`h4`,29),Sk(361,`Deprecia p-type danger`),Kg(),Qc(362,`p`),Sk(363,`Indicamos o uso da propriedade `),Qc(364,`code`),Sk(365,`p-danger`),Kg(),Sk(366,` true`),Kg(),Qc(367,`p`),Sk(368,`Antes:`),Kg(),Qc(369,`pre`)(370,`code`),Sk(371,`// html
<po-button [p-type]="danger" ...></po-button>

`),Kg()(),Qc(372,`p`),Sk(373,`Depois:`),Kg(),Qc(374,`pre`)(375,`code`),Sk(376,`// html
<po-button [p-danger]="true" ...></po-button>
`),Kg()(),Qc(377,`h3`,30),Sk(378,`HttpClientModule`),Kg(),Qc(379,`blockquote`)(380,`p`),Sk(381,`O módulo HttpClientModule foi removido do projeto não sendo mais importado diretamente nos componentes que o utilizavam e por motivos de boas práticas é necessário importar o HttpClientModule apenas no módulo principal da aplicação.`),Kg()(),Qc(382,`p`),Sk(383,`Exemplo:`),Kg(),Qc(384,`pre`)(385,`code`),Sk(386,`// app.module.ts
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

`),Kg()(),Qc(387,`h3`,31),Sk(388,`Remoção da biblioteca POIcon`),Kg(),Qc(389,`p`),Sk(390,`A partir da v21, a biblioteca de ícones POIcon foi removida. O conjunto padrão de ícones passa a ser a lib Animalia Icons.`),Kg(),Qc(391,`p`),Sk(392,`Antes - PO Icon (legado)`),Kg(),Qc(393,`pre`)(394,`code`),Sk(395,`//html
<i class="po-icon po-icon-user"></i>
`),Kg()(),Qc(396,`p`),Sk(397,`Depois - Animalia Icons (atual)`),Kg(),Qc(398,`pre`)(399,`code`),Sk(400,`//html
<i class="an an-user"></i>
`),Kg()(),Qc(401,`blockquote`)(402,`p`),Sk(403,`Para saber como utilizar, veja em `),Qc(404,`a`,32),Sk(405,`Biblioteca de ícones`),Kg(),Sk(406,` do PO UI.`),Kg()(),Qc(407,`h2`,33),Sk(408,`Breaking Changes`),Kg(),Qc(409,`div`,4)(410,`div`,5)(411,`table`,6)(412,`thead`)(413,`tr`,7)(414,`th`,8),Sk(415,`Área`),Kg(),Qc(416,`th`,8),Sk(417,`Funcionalidade`),Kg(),Qc(418,`th`,8),Sk(419,`Substituição`),Kg(),Qc(420,`th`,8),Sk(421,`Removida em`),Kg()()(),Qc(422,`tbody`)(423,`tr`,9)(424,`th`,10)(425,`a`,14),Sk(426,`PoGauge`),Kg()(),Qc(427,`td`,10),Sk(428,`Componente descontinuado`),Kg(),Qc(429,`td`,10)(430,`a`,24),Sk(431,`PoChart (type=gauge)`),Kg()(),Qc(432,`td`,12),Sk(433,`v22`),Kg()(),Qc(434,`tr`,9)(435,`th`,10)(436,`a`,13),Sk(437,`PoNavbar`),Kg()(),Qc(438,`td`,10),Sk(439,`Componente descontinuado`),Kg(),Qc(440,`td`,10)(441,`a`,34),Sk(442,`PoHeader`),Kg()(),Qc(443,`td`,12),Sk(444,`v23`),Kg()(),Qc(445,`tr`,9)(446,`th`,10)(447,`a`,35),Sk(448,`Campos de formulários`),Kg()(),Qc(449,`td`,10),Sk(450,`p-additional-help-tooltip`),Kg(),Qc(451,`td`,10),Sk(452,`p-helper`),Kg(),Qc(453,`td`,12),Sk(454,`v23`),Kg()(),Qc(455,`tr`,9)(456,`th`,10)(457,`a`,36),Sk(458,`PoDynamicForm`),Kg()(),Qc(459,`td`,10),Sk(460,`p-additional-help-tooltip`),Kg(),Qc(461,`td`,10),Sk(462,`p-helper`),Kg(),Qc(463,`td`,12),Sk(464,`v23`),Kg()(),Qc(465,`tr`,9)(466,`th`,10)(467,`a`,32),Sk(468,`POIcon`),Kg()(),Qc(469,`td`,10),Sk(470,`Biblioteca de ícones`),Kg(),Qc(471,`td`,10),Sk(472,`Animalia Icons`),Kg(),Qc(473,`td`,12),Sk(474,`v21`),Kg()(),Qc(475,`tr`,9)(476,`th`,10)(477,`a`,15),Sk(478,`PoTabs`),Kg()(),Qc(479,`td`,10),Sk(480,`p-small`),Kg(),Qc(481,`td`,10),Sk(482,`-`),Kg(),Qc(483,`td`,12),Sk(484,`v18`),Kg()(),Qc(485,`tr`,9)(486,`th`,10)(487,`a`,16),Sk(488,`PoTag`),Kg()(),Qc(489,`td`,10),Sk(490,`p-inverse`),Kg(),Qc(491,`td`,10),Sk(492,`-`),Kg(),Qc(493,`td`,12),Sk(494,`v18`),Kg()(),Qc(495,`tr`,9)(496,`th`,10)(497,`a`,17),Sk(498,`PoButton`),Kg()(),Qc(499,`td`,10),Sk(500,`p-small`),Kg(),Qc(501,`td`,10),Sk(502,`-`),Kg(),Qc(503,`td`,12),Sk(504,`v17`),Kg()(),Qc(505,`tr`,9)(506,`th`,10)(507,`a`,18),Sk(508,`PoButtonGroup`),Kg()(),Qc(509,`td`,10),Sk(510,`p-small`),Kg(),Qc(511,`td`,10),Sk(512,`-`),Kg(),Qc(513,`td`,12),Sk(514,`v17`),Kg()(),Qc(515,`tr`,9)(516,`th`,10)(517,`a`,19),Sk(518,`PoContainer`),Kg()(),Qc(519,`td`,10),Sk(520,`p-no-shadow`),Kg(),Qc(521,`td`,10),Sk(522,`-`),Kg(),Qc(523,`td`,12),Sk(524,`v17`),Kg()(),Qc(525,`tr`,9)(526,`th`,10)(527,`a`,20),Sk(528,`PoTable`),Kg()(),Qc(529,`td`,10),Sk(530,`p-hide-text-overflow`),Kg(),Qc(531,`td`,10),Sk(532,`-`),Kg(),Qc(533,`td`,12),Sk(534,`v17`),Kg()(),Qc(535,`tr`,9)(536,`th`,10)(537,`a`,17),Sk(538,`PoButton`),Kg()(),Qc(539,`td`,10),Sk(540,`p-type`),Kg(),Qc(541,`td`,10),Sk(542,`-`),Kg(),Qc(543,`td`,12),Sk(544,`v15`),Kg()(),Qc(545,`tr`,9)(546,`th`,10),Sk(547,`Build`),Kg(),Qc(548,`td`,10),Sk(549,`HttpClientModule`),Kg(),Qc(550,`td`,10),Sk(551,`-`),Kg(),Qc(552,`td`,12),Sk(553,`v15`),Kg()(),Qc(554,`tr`,9)(555,`th`,10)(556,`a`,35),Sk(557,`PoDynamicFormFields`),Kg()(),Qc(558,`td`,10),Sk(559,`p-auto-focus`),Kg(),Qc(560,`td`,10),Sk(561,`-`),Kg(),Qc(562,`td`,12),Sk(563,`v14`),Kg()(),Qc(564,`tr`,9)(565,`th`,10)(566,`a`,37),Sk(567,`PoSelect`),Kg()(),Qc(568,`td`,10),Sk(569,`p-auto-focus`),Kg(),Qc(570,`td`,10),Sk(571,`-`),Kg(),Qc(572,`td`,12),Sk(573,`v14`),Kg()(),Qc(574,`tr`,9)(575,`th`,10)(576,`a`,38),Sk(577,`PoSwitch`),Kg()(),Qc(578,`td`,10),Sk(579,`p-auto-focus`),Kg(),Qc(580,`td`,10),Sk(581,`-`),Kg(),Qc(582,`td`,12),Sk(583,`v14`),Kg()(),Qc(584,`tr`,9)(585,`th`,10)(586,`a`,17),Sk(587,`PoButton`),Kg()(),Qc(588,`td`,10),Sk(589,`p-auto-focus`),Kg(),Qc(590,`td`,10),Sk(591,`-`),Kg(),Qc(592,`td`,12),Sk(593,`v14`),Kg()(),Qc(594,`tr`,9)(595,`th`,10)(596,`a`,35),Sk(597,`PoSelectOptionTemplate`),Kg()(),Qc(598,`td`,10),Sk(599,`-`),Kg(),Qc(600,`td`,10),Sk(601,`PoComboOptionTemplate`),Kg(),Qc(602,`td`,12),Sk(603,`v14`),Kg()(),Qc(604,`tr`,9)(605,`th`,10)(606,`a`,39),Sk(607,`Components`),Kg()(),Qc(608,`td`,10),Sk(609,`diminuição da altura em pequenas resoluções. `),Qc(610,`a`,40),Sk(611,`Ver mais`),Kg()(),Qc(612,`td`,10),Sk(613,`-`),Kg(),Qc(614,`td`,12),Sk(615,`v14`),Kg()(),Qc(616,`tr`,9)(617,`th`,10)(618,`a`,24),Sk(619,`PoChart`),Kg()(),Qc(620,`td`,10),Sk(621,`PoChartGaugeSerie`),Kg(),Qc(622,`td`,10)(623,`a`,14),Sk(624,`PoGauge`),Kg()(),Qc(625,`td`,12),Sk(626,`v6`),Kg()(),Qc(627,`tr`,9)(628,`th`,10)(629,`a`,24),Sk(630,`PoChart`),Kg()(),Qc(631,`td`,10),Sk(632,`PoChartSerie.category`),Kg(),Qc(633,`td`,10),Sk(634,`PoChartSerie.label`),Kg(),Qc(635,`td`,12),Sk(636,`v6`),Kg()(),Qc(637,`tr`,9)(638,`th`,10)(639,`a`,24),Sk(640,`PoChart`),Kg()(),Qc(641,`td`,10),Sk(642,`PoChartSerie.value`),Kg(),Qc(643,`td`,10),Sk(644,`PoChartSerie.data`),Kg(),Qc(645,`td`,12),Sk(646,`v6`),Kg()(),Qc(647,`tr`,9)(648,`th`,10)(649,`a`,24),Sk(650,`PoChart`),Kg()(),Qc(651,`td`,10),Sk(652,`PoChartType.Gauge`),Kg(),Qc(653,`td`,10)(654,`a`,14),Sk(655,`PoGauge`),Kg()(),Qc(656,`td`,12),Sk(657,`v6`),Kg()(),Qc(658,`tr`,9)(659,`th`,10)(660,`a`,13),Sk(661,`PoNavBar`),Kg()(),Qc(662,`td`,10),Sk(663,`p-menu`),Kg(),Qc(664,`td`,10),Sk(665,`-`),Kg(),Qc(666,`td`,12),Sk(667,`v6`),Kg()(),Qc(668,`tr`,9)(669,`th`,10)(670,`a`,24),Sk(671,`PoChart`),Kg()(),Qc(672,`td`,10),Sk(673,`PoPieChartSeries`),Kg(),Qc(674,`td`,10),Sk(675,`PoChartSerie`),Kg(),Qc(676,`td`,12),Sk(677,`v5`),Kg()(),Qc(678,`tr`,9)(679,`th`,10)(680,`a`,24),Sk(681,`PoChart`),Kg()(),Qc(682,`td`,10),Sk(683,`PoDonutChartSeries`),Kg(),Qc(684,`td`,10),Sk(685,`PoChartSerie`),Kg(),Qc(686,`td`,12),Sk(687,`v5`),Kg()(),Qc(688,`tr`,9)(689,`th`,10)(690,`a`,24),Sk(691,`PoChart`),Kg()(),Qc(692,`td`,10),Sk(693,`PoBarChartSeries`),Kg(),Qc(694,`td`,10),Sk(695,`PoChartSerie`),Kg(),Qc(696,`td`,12),Sk(697,`v5`),Kg()(),Qc(698,`tr`,9)(699,`th`,10)(700,`a`,24),Sk(701,`PoChart`),Kg()(),Qc(702,`td`,10),Sk(703,`PoColumnChartSeries`),Kg(),Qc(704,`td`,10),Sk(705,`PoChartSerie`),Kg(),Qc(706,`td`,12),Sk(707,`v5`),Kg()(),Qc(708,`tr`,9)(709,`th`,10)(710,`a`,24),Sk(711,`PoChart`),Kg()(),Qc(712,`td`,10),Sk(713,`PoLineChartSeries`),Kg(),Qc(714,`td`,10),Sk(715,`PoChartSerie`),Kg(),Qc(716,`td`,12),Sk(717,`v5`),Kg()(),Qc(718,`tr`,9)(719,`th`,10)(720,`a`,20),Sk(721,`PoTable`),Kg()(),Qc(722,`td`,10),Sk(723,`p-single-select`),Kg(),Qc(724,`td`,10),Sk(725,`[p-single-select]="false"`),Kg(),Qc(726,`td`,12),Sk(727,`v5`),Kg()(),Qc(728,`tr`,9)(729,`th`,10)(730,`a`,20),Sk(731,`PoTable`),Kg()(),Qc(732,`td`,10),Sk(733,`p-hide-select-all`),Kg(),Qc(734,`td`,10),Sk(735,`[p-hide-select-all]="false"`),Kg(),Qc(736,`td`,12),Sk(737,`v5`),Kg()(),Qc(738,`tr`,9)(739,`th`,10)(740,`a`,20),Sk(741,`PoTable`),Kg()(),Qc(742,`td`,10),Sk(743,`p-striped`),Kg(),Qc(744,`td`,10),Sk(745,`[p-striped]="false"`),Kg(),Qc(746,`td`,12),Sk(747,`v5`),Kg()(),Qc(748,`tr`,9)(749,`th`,10)(750,`a`,20),Sk(751,`PoTable`),Kg()(),Qc(752,`td`,10),Sk(753,`p-show-more-disabled`),Kg(),Qc(754,`td`,10),Sk(755,`[p-show-more-disabled]="false"`),Kg(),Qc(756,`td`,12),Sk(757,`v5`),Kg()(),Qc(758,`tr`,9)(759,`th`,10)(760,`a`,20),Sk(761,`PoTable`),Kg()(),Qc(762,`td`,10),Sk(763,`p-sort`),Kg(),Qc(764,`td`,10),Sk(765,`[p-sort]="false"`),Kg(),Qc(766,`td`,12),Sk(767,`v5`),Kg()(),Qc(768,`tr`,9)(769,`th`,10)(770,`a`,41),Sk(771,`PoPageList`),Kg()(),Qc(772,`td`,10),Sk(773,`PoPageFilter.ngModel`),Kg(),Qc(774,`td`,10),Sk(775,`-`),Kg(),Qc(776,`td`,12),Sk(777,`v4`),Kg()(),Qc(778,`tr`,9)(779,`th`,10)(780,`a`,41),Sk(781,`PoPageList`),Kg()(),Qc(782,`td`,10),Sk(783,`PoPageFilter.action: string`),Kg(),Qc(784,`td`,10),Sk(785,`PoPageFilter.action: Function`),Kg(),Qc(786,`td`,12),Sk(787,`v4`),Kg()(),Qc(788,`tr`,9)(789,`th`,10)(790,`a`,41),Sk(791,`PoPageList`),Kg()(),Qc(792,`td`,10),Sk(793,`PoPageFilter.advancedAction: string`),Kg(),Qc(794,`td`,10),Sk(795,`PoPageFilter.advancedAction: Function`),Kg(),Qc(796,`td`,12),Sk(797,`v4`),Kg()(),Qc(798,`tr`,9)(799,`th`,10)(800,`a`,42),Sk(801,`PoPageLogin`),Kg()(),Qc(802,`td`,10),Sk(803,`PoPageLoginLiterals.title`),Kg(),Qc(804,`td`,10),Sk(805,`p-product-name`),Kg(),Qc(806,`td`,12),Sk(807,`v4`),Kg()(),Qc(808,`tr`,9)(809,`th`,10)(810,`a`,24),Sk(811,`PoChart`),Kg()(),Qc(812,`td`,10),Sk(813,`PoChartOptions.axis.axisXGridLines`),Kg(),Qc(814,`td`,10),Sk(815,`PoChartOptions.axis.gridLines`),Kg(),Qc(816,`td`,12),Sk(817,`v4`),Kg()(),Qc(818,`tr`,9)(819,`th`,10)(820,`a`,43),Sk(821,`PoSync`),Kg()(),Qc(822,`td`,10),Sk(823,`portinari_sync_date`),Kg(),Qc(824,`td`,10),Sk(825,`po_sync_date`),Kg(),Qc(826,`td`,12),Sk(827,`v3`),Kg()(),Qc(828,`tr`,9)(829,`th`,10)(830,`a`,44),Sk(831,`PoUpload`),Kg()(),Qc(832,`td`,10),Sk(833,`PoUploadLiterals.cancel`),Kg(),Qc(834,`td`,10),Sk(835,`-`),Kg(),Qc(836,`td`,12),Sk(837,`v3`),Kg()(),Qc(838,`tr`,9)(839,`th`,10)(840,`a`,44),Sk(841,`PoUpload`),Kg()(),Qc(842,`td`,10),Sk(843,`PoUploadLiterals.deleteFile`),Kg(),Qc(844,`td`,10),Sk(845,`-`),Kg(),Qc(846,`td`,12),Sk(847,`v3`),Kg()(),Qc(848,`tr`,9)(849,`th`,10)(850,`a`,44),Sk(851,`PoUpload`),Kg()(),Qc(852,`td`,10),Sk(853,`PoUploadLiterals.tryAgain`),Kg(),Qc(854,`td`,10),Sk(855,`-`),Kg(),Qc(856,`td`,12),Sk(857,`v3`),Kg()(),Qc(858,`tr`,9)(859,`th`,10)(860,`a`,45),Sk(861,`PoLookup`),Kg()(),Qc(862,`td`,10),Sk(863,`getFilteredData`),Kg(),Qc(864,`td`,10),Sk(865,`getFilteredItems`),Kg(),Qc(866,`td`,12),Sk(867,`v3`),Kg()(),Qc(868,`tr`,9)(869,`th`,10)(870,`a`,20),Sk(871,`PoTable`),Kg()(),Qc(872,`td`,10),Sk(873,`p-checkbox`),Kg(),Qc(874,`td`,10),Sk(875,`p-selectable`),Kg(),Qc(876,`td`,12),Sk(877,`v3`),Kg()(),Qc(878,`tr`,9)(879,`th`,10)(880,`a`,35),Sk(881,`PoField`),Kg()(),Qc(882,`td`,10),Sk(883,`p-focus`),Kg(),Qc(884,`td`,10),Sk(885,`p-auto-focus`),Kg(),Qc(886,`td`,12),Sk(887,`v2`),Kg()(),Qc(888,`tr`,9)(889,`th`,10),Sk(890,`Packages`),Kg(),Qc(891,`td`,10),Sk(892,`@portinari/portinari-ui`),Kg(),Qc(893,`td`,10),Sk(894,`@po-ui/ng-components`),Kg(),Qc(895,`td`,12),Sk(896,`v2`),Kg()(),Qc(897,`tr`,9)(898,`th`,10),Sk(899,`Packages`),Kg(),Qc(900,`td`,10),Sk(901,`@portinari/portinari-templates`),Kg(),Qc(902,`td`,10),Sk(903,`@po-ui/ng-templates`),Kg(),Qc(904,`td`,12),Sk(905,`v2`),Kg()(),Qc(906,`tr`,9)(907,`th`,10),Sk(908,`Packages`),Kg(),Qc(909,`td`,10),Sk(910,`@portinari/portinari-code-editor`),Kg(),Qc(911,`td`,10),Sk(912,`@po-ui/ng-code-editor`),Kg(),Qc(913,`td`,12),Sk(914,`v2`),Kg()(),Qc(915,`tr`,9)(916,`th`,10),Sk(917,`Packages`),Kg(),Qc(918,`td`,10),Sk(919,`@portinari/portinari-storage`),Kg(),Qc(920,`td`,10),Sk(921,`@po-ui/ng-storage`),Kg(),Qc(922,`td`,12),Sk(923,`v2`),Kg()(),Qc(924,`tr`,9)(925,`th`,10),Sk(926,`Packages`),Kg(),Qc(927,`td`,10),Sk(928,`@portinari/portinari-sync`),Kg(),Qc(929,`td`,10),Sk(930,`@po-ui/ng-sync`),Kg(),Qc(931,`td`,12),Sk(932,`v2`),Kg()(),Qc(933,`tr`,9)(934,`th`,10)(935,`a`,46),Sk(936,`PoHttpInterceptor`),Kg()(),Qc(937,`td`,10),Sk(938,`X-Portinari-No-Message`),Kg(),Qc(939,`td`,10),Sk(940,`X-PO-No-Message`),Kg(),Qc(941,`td`,12),Sk(942,`v2`),Kg()(),Qc(943,`tr`,9)(944,`th`,10)(945,`a`,46),Sk(946,`PoHttpInterceptor`),Kg()(),Qc(947,`td`,10),Sk(948,`X-Portinari-SCREEN-LOCK`),Kg(),Qc(949,`td`,10),Sk(950,`X-PO-SCREEN-LOCK`),Kg(),Qc(951,`td`,12),Sk(952,`v2`),Kg()(),Qc(953,`tr`,9)(954,`th`,10)(955,`a`,46),Sk(956,`PoHttpInterceptor`),Kg()(),Qc(957,`td`,10),Sk(958,`X-Portinari-No-Count-Pending-Requests`),Kg(),Qc(959,`td`,10),Sk(960,`X-PO-No-Count-Pending-Requests`),Kg(),Qc(961,`td`,12),Sk(962,`v2`),Kg()(),Qc(963,`tr`,9)(964,`th`,10)(965,`a`,47),Sk(966,`PoPageDetail`),Kg()(),Qc(967,`td`,10),Sk(968,`reconhecimento das ações via funções no typescript`),Kg(),Qc(969,`td`,10),Sk(970,`utilização das propriedades p-back, p-edit e p-remove`),Kg(),Qc(971,`td`,12),Sk(972,`v2`),Kg()(),Qc(973,`tr`,9)(974,`th`,10)(975,`a`,48),Sk(976,`PoPageEdit`),Kg()(),Qc(977,`td`,10),Sk(978,`reconhecimento das ações via funções no typescript`),Kg(),Qc(979,`td`,10),Sk(980,`utilização das propriedades p-save, p-save-new e p-cancel`),Kg(),Qc(981,`td`,12),Sk(982,`v2`),Kg()()()()()(),Qc(983,`blockquote`)(984,`p`),Sk(985,`Ver mais detalhes no nosso `),Qc(986,`a`,2),Sk(987,`CHANGELOG`),Kg(),Sk(988,` e na nossa documentação das ferramentas de migração que automatizam a maioria dos breaking changes.`),Kg()()())},dependencies:[Mze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var j=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:423,vars:0,consts:[[`p-title`,`Contribuindo para o PO UI`,1,`guides`,`app-portal`],[`id`,`obrigado-pelo-interesse-em-contribuir-para-a-biblioteca-po-ui`],[`id`,`conteudo`],[`href`,`guides/development-flow#code-of-conduct`],[`href`,`guides/development-flow#flow`],[`href`,`guides/development-flow#create-issue`],[`href`,`guides/development-flow#code-reproduction`],[`href`,`guides/development-flow#contribute`],[`href`,`guides/development-flow#setup`],[`href`,`guides/development-flow#modifying-components`],[`href`,`guides/development-flow#preview-changes`],[`href`,`guides/development-flow#tests`],[`href`,`guides/development-flow#lint`],[`href`,`guides/development-flow#po-style`],[`href`,`guides/development-flow#build`],[`href`,`guides/development-flow#pr`],[`id`,`code-of-conduct`],[`id`,`codigo-de-conduta`],[`href`,`https://github.com/po-ui/po-angular/blob/master/CODE_OF_CONDUCT.md`],[`id`,`flow`],[`id`,`fluxo`],[1,`card-list-item`],[`id`,`create-issue`],[1,`po-row`],[1,`po-pl-md-5`,`po-pr-lg-5`],[`src`,`./assets/graphics/contribute/bug.png`,1,`card-list-icon`],[1,`po-font-subtitle`,`po-pb-1`],[`href`,`https://github.com/po-ui/po-angular/issues/439`],[`href`,`https://github.com/po-ui/po-angular/pulls`],[`id`,`code-reproduction`],[`src`,`./assets/graphics/contribute/ambiente_teste.png`,1,`card-list-icon`],[`href`,`https://stackblitz.com/edit/poui-module`],[`id`,`contribute`],[`src`,`./assets/graphics/contribute/colabore.png`,1,`card-list-icon`],[1,`po-font-text`],[`id`,`setup`],[`src`,`./assets/graphics/contribute/setup.png`,1,`card-list-icon`],[1,`po-text-color-neutral-dark-40`],[`href`,`https://git-scm.com/book/en/v2`],[`href`,`https://github.com/po-ui/po-angular`],[`id`,`modifying-components`],[`src`,`./assets/graphics/contribute/modificando.png`,1,`card-list-icon`],[`href`,`https://github.com/po-ui/po-angular/blob/master/STYLEGUIDE.md`],[`href`,`https://github.com/po-ui/po-angular/blob/master/HOW_TO_DOCUMENT.md`],[`id`,`preview-changes`],[`src`,`./assets/graphics/contribute/rodando_local.png`,1,`card-list-icon`],[`id`,`tests`],[`src`,`./assets/graphics/contribute/teste_unitario.png`,1,`card-list-icon`],[`id`,`lint`],[`src`,`./assets/graphics/contribute/lint.png`,1,`card-list-icon`],[`id`,`po-style`],[`src`,`./assets/graphics/contribute/css.png`,1,`card-list-icon`],[`href`,`https://github.com/po-ui/po-style`],[`href`,`https://github.com/po-ui/po-style/blob/master/README.md`],[`id`,`build`],[`src`,`./assets/graphics/contribute/build.png`,1,`card-list-icon`],[`href`,`https://github.com/po-ui/po-angular/blob/master/CONTRIBUTING.md#commits`],[`id`,`pr`],[1,`po-pl-sm-5`,`po-pl-md-5`,`po-pr-lg-5`],[`src`,`./assets/graphics/contribute/pr.png`,1,`card-list-icon`],[`href`,`https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork`],[`href`,`https://github.com/po-ui/po-angular/blob/master/CONTRIBUTING.md#pull-requests`]],template:function(o,l){o&1&&(Qc(0,`po-page-default`,0)(1,`h4`,1),Sk(2,`Obrigado pelo interesse em contribuir para a biblioteca PO UI!`),Kg(),Qc(3,`h2`,2),Sk(4,`Conteúdo`),Kg(),Qc(5,`ul`)(6,`li`)(7,`a`,3),Sk(8,`Código de conduta`),Kg()(),Qc(9,`li`)(10,`a`,4),Sk(11,`Fluxo`),Kg(),Qc(12,`ul`)(13,`li`)(14,`a`,5),Sk(15,`Criando `),Qc(16,`em`),Sk(17,`issue`),Kg(),Sk(18,` no GitHub`),Kg()(),Qc(19,`li`)(20,`a`,6),Sk(21,`Criando reprodução de código para nova `),Qc(22,`em`),Sk(23,`issue`),Kg()()(),Qc(24,`li`)(25,`a`,7),Sk(26,`Colaborando com o PO UI`),Kg()(),Qc(27,`li`)(28,`a`,8),Sk(29,`Setup Inicial`),Kg()(),Qc(30,`li`)(31,`a`,9),Sk(32,`Modificando Componentes`),Kg()(),Qc(33,`li`)(34,`a`,10),Sk(35,`Subindo as modificações localmente`),Kg()(),Qc(36,`li`)(37,`a`,11),Sk(38,`Testes Unitários`),Kg()(),Qc(39,`li`)(40,`a`,12),Sk(41,`ES Lint`),Kg()(),Qc(42,`li`)(43,`a`,13),Sk(44,`Po Style`),Kg()(),Qc(45,`li`)(46,`a`,14),Sk(47,`Build das modificações`),Kg()(),Qc(48,`li`)(49,`a`,15),Sk(50,`Criando Pull Request`),Kg()()()()(),Qc(51,`p`),vu(52,`a`,16),Kg(),Qc(53,`h3`,17),Sk(54,`Código de conduta`),Kg(),Qc(55,`p`),Sk(56,`Primeiramente, pedimos para que leiam com atenção nosso `),Qc(57,`a`,18),Sk(58,`Código de Conduta`),Kg(),Sk(59,` para se inteirarem sobre nossas regras.`),Kg(),Qc(60,`p`),vu(61,`a`,19),Kg(),Qc(62,`h2`,20),Sk(63,`Fluxo`),Kg(),Qc(64,`p`),Sk(65,`Este guia tem por objetivo definir as regras para criação de `),Qc(66,`em`),Sk(67,`Issues`),Kg(),Sk(68,` relacionadas à melhorias ou defeitos na biblioteca, assim como orientar no interesse em colaborar com o PO UI, definindo premissas para criação de novas `),Qc(69,`em`),Sk(70,`Branchs`),Kg(),Sk(71,`, `),Qc(72,`em`),Sk(73,`Pull Requests`),Kg(),Sk(74,` e `),Qc(75,`em`),Sk(76,`Commits`),Kg(),Sk(77,` no projeto PO UI. `),Kg(),Qc(78,`div`)(79,`div`,21),vu(80,`a`,22),Qc(81,`div`,23)(82,`div`,24),vu(83,`img`,25),Qc(84,`h3`,26),Sk(85,`Criando uma `),Qc(86,`em`),Sk(87,`issue`),Kg(),Sk(88,` no GitHub`),Kg(),Qc(89,`ul`)(90,`li`),Sk(91,`Antes de tudo, se você possui alguma questão relacionada ao uso da biblioteca, bem como dúvidas relacionadas a componentes, bibliotecas PO UI, por favor pergunte nos nossos `),Qc(92,`a`,27),Sk(93,`canais de comunicação`),Kg(),Sk(94,`.`),Kg(),Qc(95,`li`),Sk(96,`A lista de `),Qc(97,`em`),Sk(98,`issues`),Kg(),Sk(99,` do repositório PO UI é de uso exclusivo para informe de `),Qc(100,`em`),Sk(101,`bugs`),Kg(),Sk(102,` e requisições de melhorias. `),Qc(103,`em`),Sk(104,`Issues`),Kg(),Sk(105,` que não se enquadrarem nisso serão fechadas imediatamente.`),Kg(),Qc(106,`li`),Sk(107,`Se você tem uma nova `),Qc(108,`em`),Sk(109,`feature`),Kg(),Sk(110,` para nos sugerir ou então deseja reportar um bug, por favor avalie se nas `),Qc(111,`a`,28)(112,`em`),Sk(113,`Pull Requests`),Kg(),Sk(114,` do PO UI`),Kg(),Sk(115,` não tem nenhuma submissão anterior que resolva o problema, eliminando assim a eventual hipótese de duplicidade.`),Kg(),Qc(116,`li`),Sk(117,`É requerido que você descreva de maneira clara os passos necessários para reproduzir a `),Qc(118,`em`),Sk(119,`issue`),Kg(),Sk(120,` reportada. Entenda que, apesar de sermos sempre solícitos e darmos o pronto-apoio em nossos canais, reproduzir erros sem evidências diretas tomam um grande tempo da equipe.`),Kg(),Qc(121,`li`),Sk(122,`As `),Qc(123,`em`),Sk(124,`issues`),Kg(),Sk(125,` que não tiverem uma descrição detalhada e um passo-a-passo para reprodução terão menor prioridade. Se em caso de solicitação do `),Qc(126,`em`),Sk(127,`core team`),Kg(),Sk(128,` por maiores evidências, o autor da `),Qc(129,`em`),Sk(130,`issue`),Kg(),Sk(131,` terá 30 dias para resposta. Se neste período não houver qualquer resposta, então a `),Qc(132,`em`),Sk(133,`issue`),Kg(),Sk(134,` será fechada.`),Kg()()()()(),Qc(135,`div`,21),vu(136,`a`,29),Qc(137,`div`,23)(138,`div`,24),vu(139,`img`,30),Qc(140,`h3`,26),Sk(141,`Criando reprodução de código para nova `),Qc(142,`em`),Sk(143,`issue`),Kg()(),Qc(144,`ul`)(145,`li`),Sk(146,`Crie uma nova aplicação em Angular incluindo o componente e o comportamento reportado para nossa análise.`),Kg(),Qc(147,`li`),Sk(148,`Adicione o mínimo de código necessário para reprodução do bug, facilitando assim a verificação da situação.`),Kg(),Qc(149,`li`),Sk(150,`Publique a aplicação no GitHub e inclua o link ao criar a issue.`),Kg(),Qc(151,`li`),Sk(152,`Pode-se também usar o `),Qc(153,`a`,31),Sk(154,`Stackblitz`),Kg(),Sk(155,` para reproduzir o `),Qc(156,`em`),Sk(157,`bug`),Kg(),Sk(158,` relatado na `),Qc(159,`em`),Sk(160,`issue`),Kg(),Sk(161,`.`),Kg(),Qc(162,`li`),Sk(163,`Certifique-se de incluir os passos para reprodução da issue. Estes passos devem ser claros e simples de seguir.`),Kg()()()()(),Qc(164,`div`,21),vu(165,`a`,32),Qc(166,`div`,23)(167,`div`,24),vu(168,`img`,33),Qc(169,`h3`,26),Sk(170,`Colaborando com o PO UI`),Kg(),Qc(171,`p`,34),Sk(172,`Mais uma vez agradecemos por dedicar seu tempo para contribuir com o PO UI! Antes de submeter uma `),Qc(173,`em`),Sk(174,`pull request`),Kg(),Sk(175,`, pedimos pra que você crie uma `),Qc(176,`em`),Sk(177,`issue`),Kg(),Sk(178,` reportando uma eventual sugestão de melhoria, nova funcionalidade ou correção de bug e nos deixe ciente de que deseja criar uma `),Qc(179,`em`),Sk(180,`pull request`),Kg(),Sk(181,` para isso. Caso se trate de uma `),Qc(182,`em`),Sk(183,`issue`),Kg(),Sk(184,` já existente, por favor comente na `),Qc(185,`em`),Sk(186,`issue`),Kg(),Sk(187,`. Isso nos ajuda a acompanhar as `),Qc(188,`em`),Sk(189,`pull requests`),Kg(),Sk(190,` e também evitar duplicidades.`),Kg()()()(),Qc(191,`div`,21),vu(192,`a`,35),Qc(193,`div`,23)(194,`div`,24),vu(195,`img`,36),Qc(196,`h3`,26),Sk(197,`Setup Inicial`),Kg(),Qc(198,`blockquote`,37),Sk(199,`Para seguir o guia é fundamental o conhecimento da `),Qc(200,`a`,38),Sk(201,`ferramenta Git.`),Kg()(),Qc(202,`ul`)(203,`li`),Sk(204,`Para utilizar o PO UI, é pré-requisito ter o `),Qc(205,`code`),Sk(206,`Node.js`),Kg(),Sk(207,` instalado (versão 18.13.0 ou acima) e o seu gerenciador de pacote favorito na versão mais atual.`),Kg(),Qc(208,`li`)(209,`p`),Sk(210,`É importante que tenha a versão equivalente do Angular instalada. Instale-o via `),Qc(211,`code`),Sk(212,`npm`),Kg(),Sk(213,` ou `),Qc(214,`code`),Sk(215,`yarn`),Kg(),Sk(216,`:`),Kg(),Qc(217,`p`),Sk(218,`Instalando com npm:`),Kg(),Qc(219,`pre`)(220,`code`),Sk(221,`npm i -g @angular/cli`),Kg()(),Qc(222,`p`),Sk(223,`Caso opte pelo yarn:`),Kg(),Qc(224,`pre`)(225,`code`),Sk(226,`yarn global add @angular/cli`),Kg()()(),Qc(227,`li`),Sk(228,`Faça um `),Qc(229,`a`,39)(230,`em`),Sk(231,`fork`),Kg(),Sk(232,` do repositório PO UI`),Kg(),Sk(233,`. `),Qc(234,`blockquote`),Sk(235,`Membros do `),Qc(236,`em`),Sk(237,`Core Team`),Kg(),Sk(238,` devem gerar uma nova `),Qc(239,`em`),Sk(240,`branch`),Kg(),Sk(241,` ao invés do `),Qc(242,`em`),Sk(243,`fork`),Kg(),Sk(244,`.`),Kg()(),Qc(245,`li`),Sk(246,`Faça `),Qc(247,`em`),Sk(248,`clone`),Kg(),Sk(249,` do `),Qc(250,`em`),Sk(251,`fork`),Kg(),Sk(252,` gerado.`),Kg(),Qc(253,`li`),Sk(254,`Execute `),Qc(255,`code`),Sk(256,`npm install`),Kg(),Sk(257,` para instalar as dependências.`),Kg()()()()(),Qc(258,`div`,21),vu(259,`a`,40),Qc(260,`div`,23)(261,`div`,24),vu(262,`img`,41),Qc(263,`h3`,26),Sk(264,`Modificando componentes`),Kg(),Qc(265,`ul`)(266,`li`),Sk(267,`Localize o componente em `),Qc(268,`code`),Sk(269,`projects/<projeto>/src/lib`),Kg()(),Qc(270,`li`),Sk(271,`É muito importante que analise nossa documentação sobre `),Qc(272,`a`,42),Sk(273,`boas práticas`),Kg(),Sk(274,` para entender a implementação dos componentes PO UI.`),Kg(),Qc(275,`li`),Sk(276,`Modifique a documentação com base em nosso `),Qc(277,`a`,43),Sk(278,`guia detalhado de documentação`),Kg(),Sk(279,`.`),Kg(),Qc(280,`li`),Sk(281,`Se as implementações também contemplarem estilo, note que deverá modificá-las no repositório `),Qc(282,`a`,13),Sk(283,`PO UI Style`),Kg(),Sk(284,`.`),Kg(),Qc(285,`li`),Sk(286,`Faça as implementações desejadas, seja um novo componente, correção ou melhoria, e `),Qc(287,`a`,10),Sk(288,`verifique no portal`),Kg(),Sk(289,` as modificações realizadas tanto nos `),Qc(290,`em`),Sk(291,`samples`),Kg(),Sk(292,` quanto na documentação.`),Kg()()()()(),Qc(293,`div`,21),vu(294,`a`,44),Qc(295,`div`,23)(296,`div`,24),vu(297,`img`,45),Qc(298,`h3`,26),Sk(299,`Subindo as modificações localmente`),Kg(),Qc(300,`ul`)(301,`li`)(302,`p`),Sk(303,`As modificações de código e documentação realizadas podem ser conferidas executando os comandos:`),Kg(),Qc(304,`pre`)(305,`code`),Sk(306,`npm run build:portal && ng serve portal`),Kg()()(),Qc(307,`li`),Sk(308,`O navegador exibirá o portal na url `),Qc(309,`code`),Sk(310,`http://localhost:4200/`),Kg(),Sk(311,`.`),Kg(),Qc(312,`li`),Sk(313,`A partir disso, navegue até o componente para verificação das modificações.`),Kg(),Qc(314,`li`),Sk(315,`Pedimos para que atente para a inclusão da melhoria em nossos `),Qc(316,`em`),Sk(317,`samples`),Kg(),Sk(318,`, em especial no sample `),Qc(319,`code`),Sk(320,`labs`),Kg(),Sk(321,`. Na inviabilidade de usar os `),Qc(322,`em`),Sk(323,`samples`),Kg(),Sk(324,` já existentes, considere a necessidade de criar um novo `),Qc(325,`em`),Sk(326,`sample`),Kg(),Sk(327,` de uso.`),Kg()()()()(),Qc(328,`div`,21),vu(329,`a`,46),Qc(330,`div`,23)(331,`div`,24),vu(332,`img`,47),Qc(333,`h3`,26),Sk(334,`Testes Unitários`),Kg(),Qc(335,`p`),Sk(336,`A cobertura de testes do PO UI é total. Isso significa que, obrigatoriamente, as modificações devem ser totalmente testadas. Para tal, execute os testes nos arquivos `),Qc(337,`em`),Sk(338,`.spec`),Kg(),Sk(339,` contidos no mesmo diretório do componente.`),Kg(),Qc(340,`p`),Sk(341,`Para rodar os testes, rode o comando:`),Kg(),Qc(342,`pre`)(343,`code`),Sk(344,`npm run test`),Kg()(),Qc(345,`p`),Sk(346,`A cobertura de testes pode ser avaliada no arquivo `),Qc(347,`code`),Sk(348,`index.html`),Kg(),Sk(349,` existente no diretório `),Qc(350,`code`),Sk(351,`./coverage`),Kg(),Sk(352,`. `),Kg()()()(),Qc(353,`div`,21),vu(354,`a`,48),Qc(355,`div`,23)(356,`div`,24),vu(357,`img`,49),Qc(358,`h3`,26),Sk(359,`ESLint`),Kg(),Qc(360,`p`),Sk(361,`O PO UI utiliza o ESLint como linter padrão. Execute `),Qc(362,`code`),Sk(363,`ng lint`),Kg(),Sk(364,` para fazer a checagem de código-fonte e verificar eventuais erros programáticos, estilísticos, construções suspeitas, entre outros.`),Kg()()()(),Qc(365,`div`,21),vu(366,`a`,50),Qc(367,`div`,23)(368,`div`,24),vu(369,`img`,51),Qc(370,`h3`,26),Sk(371,`PO Style`),Kg(),Qc(372,`p`),Sk(373,`As implementações de estilo do PO UI são armazenadas no `),Qc(374,`a`,52),Sk(375,`repositório PO Style`),Kg(),Sk(376,`.`),Kg(),Qc(377,`p`),Sk(378,`O desenvolvimento dos estilos é aberto para todos os desenvolvedores e agradecemos aos desenvolvedores que contribuem com melhorias e correções de erros.`),Kg(),Qc(379,`p`),Sk(380,`Para saber como você pode pode participar na melhoria dos estilos, acesse o `),Qc(381,`a`,53),Sk(382,`guia de implementação de estilo`),Kg(),Sk(383,`.`),Kg()()()(),Qc(384,`div`,21),vu(385,`a`,54),Qc(386,`div`,23)(387,`div`,24),vu(388,`img`,55),Qc(389,`h3`,26),Sk(390,`Build das modificações`),Kg(),Qc(391,`p`),Sk(392,`Uma vez em que as modificações desejadas forem concluidas e a documentação esteja atualizada, execute os comandos abaixo para testagem no Portal PO UI.`),Kg(),Qc(393,`pre`)(394,`code`),Sk(395,`npm run build
npm run build:portal
ng serve portal`),Kg()(),Qc(396,`p`),Sk(397,`Revisadas as novas funcionalidades/correções, é chegada a hora da geração de commit. Confira as `),Qc(398,`a`,56),Sk(399,`regras para criação de commit`),Kg(),Sk(400,`.`),Kg()()()(),Qc(401,`div`,21),vu(402,`a`,57),Qc(403,`div`,23)(404,`div`,58),vu(405,`img`,59),Qc(406,`h3`,26),Sk(407,`Criando Pull Request`),Kg(),Qc(408,`p`),Sk(409,`Crie uma nova pull request com a master branch como base. Confira `),Qc(410,`a`,60),Sk(411,`como criar pull request a partir de um fork`),Kg(),Sk(412,`.`),Kg(),Qc(413,`p`),Sk(414,`É importante que siga guia contendo as `),Qc(415,`a`,61),Sk(416,`regras para geração de Pull Requests`),Kg(),Sk(417,`.`),Kg(),Qc(418,`p`),Sk(419,`Ao abrir a `),Qc(420,`em`),Sk(421,`pull request`),Kg(),Sk(422,`, uma análise automática comenta na PR os componentes alterados, os componentes que os consomem, o risco estimado e onde testar. Use esse relatório como ponto de partida para o teste integrado.`),Kg()()()()()())},dependencies:[Mze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var k=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:213,vars:0,consts:[[`p-title`,`Primeiros passos`,1,`guides`,`app-portal`],[`id`,`pre-requisitos`],[`id`,`passo-1-crie-o-seu-primeiro-projeto`],[`href`,`https://cli.angular.io/`],[`id`,`passo-1-1-instalando-as-dependencias`],[1,`language-json`],[`id`,`observacao-para-angular-19`],[`href`,`https://angular.dev/tools/cli/build-system-migration`],[`id`,`passo-2-adicionando-o-pacote-po-ui-ng-components`],[`id`,`passo-3-rode-o-seu-projeto`],[`href`,`http://localhost:4200`],[1,`po-text-center`],[`src`,`./assets/graphics/app-running.png`,`width`,`660px`],[`id`,`e-agora`],[`href`,`/documentation/po-page-login`],[`href`,`/documentation/po-modal-password-recovery`],[`href`,`/documentation/po-page-blocked-user`],[`href`,`/documentation/po-page-dynamic-table`],[`href`,`/documentation`]],template:function(o,l){o&1&&(Qc(0,`po-page-default`,0)(1,`h3`,1),Sk(2,`Pré-requisitos`),Kg(),Qc(3,`p`),Sk(4,`Para começar a utilizar o `),Qc(5,`strong`),Sk(6,`PO UI`),Kg(),Sk(7,` é pré-requisito ter o `),Qc(8,`code`),Sk(9,`Node.js`),Kg(),Sk(10,` instalado (versão 24.22.1 e acima) e o seu gerenciador de pacote favorito na versão mais atual. Caso você ainda não tenha instalado o pacote `),Qc(11,`code`),Sk(12,`@angular/cli`),Kg(),Sk(13,`, instale-o via `),Qc(14,`code`),Sk(15,`npm`),Kg(),Sk(16,` ou `),Qc(17,`code`),Sk(18,`yarn`),Kg(),Sk(19,`.`),Kg(),Qc(20,`p`),Sk(21,`Instalando com npm:`),Kg(),Qc(22,`pre`)(23,`code`),Sk(24,`npm i -g @angular/cli@22
`),Kg()(),Qc(25,`p`),Sk(26,`Caso prefira instalar com o yarn:`),Kg(),Qc(27,`pre`)(28,`code`),Sk(29,`yarn global add @angular/cli@22
`),Kg()(),Qc(30,`h3`,2),Sk(31,`Passo 1 - Crie o seu primeiro projeto`),Kg(),Qc(32,`blockquote`)(33,`p`),Sk(34,`Caso você já tenha um projeto criado e deseje apenas incluir o `),Qc(35,`strong`),Sk(36,`Po`),Kg(),Sk(37,`, pule esta etapa e vá para o `),Qc(38,`strong`),Sk(39,`Passo 1.1`),Kg(),Sk(40,`.`),Kg()(),Qc(41,`p`),Sk(42,`O `),Qc(43,`a`,3),Sk(44,`Angular CLI`),Kg(),Sk(45,` se encarrega de construir toda estrutura inicial do projeto. Para isso, execute o seguinte comando:`),Kg(),Qc(46,`pre`)(47,`code`),Sk(48,`ng new my-po-project --skip-install
`),Kg()(),Qc(49,`blockquote`)(50,`p`),Sk(51,`O parâmetro `),Qc(52,`code`),Sk(53,`--skip-install`),Kg(),Sk(54,` permite criar o projeto, contudo, não instalará as dependências automaticamente.`),Kg()(),Qc(55,`h4`,4),Sk(56,`Passo 1.1 - Instalando as dependências`),Kg(),Qc(57,`p`),Sk(58,`Antes de executar a instalação ou inserir o `),Qc(59,`strong`),Sk(60,`Po`),Kg(),Sk(61,` no seu projeto existente, é necessário verificar as dependências do seu projeto, algumas delas precisam estar de acordo com a versão do `),Qc(62,`strong`),Sk(63,`Po`),Kg(),Sk(64,` e Angular (elas podem ser encontradas no arquivo `),Qc(65,`code`),Sk(66,`package.json`),Kg(),Sk(67,` localizado na raiz da aplicação).`),Kg(),Qc(68,`p`),Sk(69,`Veja abaixo a lista de dependências e as versões compatíveis, elas devem ser conferidas e se necessário, ajustadas no seu projeto.`),Kg(),Qc(70,`pre`)(71,`code`,5),Sk(72,`  "dependencies": {
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
`),Kg()(),Qc(73,`p`),Sk(74,`Após verificar se estas dependências do seu projeto estão com as versões compatíveis declaradas acima, acesse a pasta raiz do seu projeto e execute o comando abaixo:`),Kg(),Qc(75,`p`),Sk(76,`Instalando com npm:`),Kg(),Qc(77,`pre`)(78,`code`),Sk(79,`npm install
`),Kg()(),Qc(80,`p`),Sk(81,`Caso prefira instalar com o yarn:`),Kg(),Qc(82,`pre`)(83,`code`),Sk(84,`yarn install
`),Kg()(),Qc(85,`h3`,6),Sk(86,`Observação para Angular 19+`),Kg(),Qc(87,`p`),Sk(88,`Em versões mais recentes do Angular, o projeto utiliza, por padrão, novo build system baseado em `),Qc(89,`strong`),Sk(90,`@angular/build`),Kg(),Sk(91,`. `),Kg(),Qc(92,`p`),Sk(93,`Verifique se o pacote está declarado em `),Qc(94,`strong`),Sk(95,`devDependencies`),Kg(),Sk(96,`. Além disso, valide no arquivo angular.json se o builder está configurado para `),Qc(97,`strong`),Sk(98,`@angular/build:`),Kg(),Sk(99,`*:`),Kg(),Qc(100,`pre`)(101,`code`),Sk(102,`"projects": {
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
`),Kg()(),Qc(103,`p`),Sk(104,`Para maiores informações veja na documentação oficial do `),Qc(105,`a`,7),Sk(106,`Angular`),Kg(),Sk(107,`.`),Kg(),Qc(108,`h3`,8),Sk(109,`Passo 2 - Adicionando o pacote @po-ui/ng-components`),Kg(),Qc(110,`p`),Sk(111,`Utilizando o comando `),Qc(112,`code`),Sk(113,`ng add`),Kg(),Sk(114,` do `),Qc(115,`a`,3),Sk(116,`Angular CLI`),Kg(),Sk(117,`, vamos adicionar o `),Qc(118,`strong`),Sk(119,`Po`),Kg(),Sk(120,` em seu projeto e o mesmo se encarregará de configurar o tema, instalar o pacote e importar o módulo do `),Qc(121,`strong`),Sk(122,`Po`),Kg(),Sk(123,`. Além de importar também o modulo `),Qc(124,`strong`),Sk(125,`HttpClientModule`),Kg(),Sk(126,`.`),Kg(),Qc(127,`p`),Sk(128,`Execute o comando abaixo na pasta raiz do seu projeto:`),Kg(),Qc(129,`pre`)(130,`code`),Sk(131,`ng add @po-ui/ng-components@next
`),Kg()(),Qc(132,`blockquote`)(133,`p`),Sk(134,`Ao executar o comando acima, será perguntado se deseja incluir uma estrutura inicial em seu projeto com menu lateral, página e toolbar, utilizando componentes do `),Qc(135,`strong`),Sk(136,`Po`),Kg(),Sk(137,`, `),Qc(138,`strong`),Sk(139,`caso desejar, apenas informe: `),Qc(140,`code`),Sk(141,`Y`),Kg()(),Sk(142,`.`),Kg()(),Qc(143,`h3`,9),Sk(144,`Passo 3 - Rode o seu projeto`),Kg(),Qc(145,`p`),Sk(146,`Agora basta executar mais um comando para subir a aplicação e ver o seu projeto rodando no `),Qc(147,`em`),Sk(148,`browser`),Kg(),Sk(149,` ;).`),Kg(),Qc(150,`pre`)(151,`code`),Sk(152,`ng serve
`),Kg()(),Qc(153,`p`),Sk(154,`Abra o `),Qc(155,`em`),Sk(156,`browser`),Kg(),Sk(157,` e acesse a url `),Qc(158,`a`,10),Sk(159,`http://localhost:4200`),Kg(),Sk(160,`. Pronto! Se você escolheu incluir uma estrutura inicial em seu projeto, ele deve estar parecido com essa imagem:`),Kg(),Qc(161,`p`,11),vu(162,`img`,12),Kg(),vu(163,`hr`),Qc(164,`h3`,13),Sk(165,`E agora?`),Kg(),Qc(166,`p`),Sk(167,`Agora é só abrir seu `),Qc(168,`strong`),Sk(169,`editor / IDE`),Kg(),Sk(170,` favorito e começar a trabalhar no seu projeto.`),Kg(),Qc(171,`p`),Sk(172,`Caso você queira utilizar nossos componentes de templates, como o `),Qc(173,`strong`)(174,`a`,14),Sk(175,`po-page-login`),Kg()(),Sk(176,`, `),Qc(177,`strong`)(178,`a`,15),Sk(179,`po-modal-password-recovery`),Kg()(),Sk(180,`, `),Qc(181,`strong`)(182,`a`,16),Sk(183,`po-page-blocked-user`),Kg()(),Sk(184,`, `),Qc(185,`strong`)(186,`a`,17),Sk(187,`po-page-dynamic-table`),Kg()(),Sk(188,` entre outros, basta adicionar o pacote `),Qc(189,`code`),Sk(190,`@po-ui/ng-templates`),Kg(),Sk(191,` executando o comando abaixo:`),Kg(),Qc(192,`pre`)(193,`code`),Sk(194,`ng add @po-ui/ng-templates@next
`),Kg()(),Qc(195,`blockquote`)(196,`p`),Sk(197,`Ao executar este comando, será instalado o pacote `),Qc(198,`code`),Sk(199,`@po-ui/ng-templates`),Kg(),Sk(200,` e configurado o `),Qc(201,`code`),Sk(202,`PoTemplatesModules`),Kg(),Sk(203,` no `),Qc(204,`code`),Sk(205,`app.module`),Kg(),Sk(206,` somente se sua aplicação for configurada com módulos.`),Kg()(),Qc(207,`p`),Sk(208,`A partir dai o seu projeto está preparado para receber outros componentes do `),Qc(209,`strong`)(210,`a`,18),Sk(211,`Po`),Kg()(),Sk(212,`! \\o/`),Kg()())},dependencies:[Mze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var w=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:257,vars:0,consts:[[`p-title`,`Guia de uso para Gráficos`,1,`guides`,`app-portal`],[`id`,`conteudo`],[`href`,`guides/guide-charts#area`],[`href`,`guides/guide-charts#bar`],[`href`,`guides/guide-charts#column`],[`href`,`guides/guide-charts#column-line`],[`href`,`guides/guide-charts#gauge-semicircle`],[`href`,`guides/guide-charts#line`],[`href`,`guides/guide-charts#pie`],[`href`,`guides/guide-charts#donut`],[`href`,`guides/guide-charts#radar`],[`href`,`guides/guide-charts#guide-colors`],[`id`,`area`],[`id`,`grafico-de-area-area-chart`],[`id`,`quando-usar`],[`id`,`bar`],[`id`,`grafico-de-barra-bar-chart`],[`id`,`quando-usar-2`],[`id`,`boas-praticas`],[`id`,`column`],[`id`,`grafico-de-coluna-column-chart`],[`id`,`quando-usar-3`],[`id`,`boas-praticas-2`],[`id`,`column-line`],[`id`,`grafico-de-pareto-coluna-com-linha-column-and-line-chart`],[`id`,`quando-usar-4`],[`id`,`gauge-semicircle`],[`id`,`grafico-de-gauge-semicircular-semi-circle-gauge-chart`],[`id`,`quando-usar-5`],[`id`,`line`],[`id`,`grafico-de-linha-line-chart`],[`id`,`quando-usar-6`],[`id`,`boas-praticas-3`],[`id`,`pie`],[`id`,`grafico-de-pizza-pie-chart`],[`id`,`quando-usar-7`],[`id`,`boas-praticas-4`],[`id`,`donut`],[`id`,`grafico-de-rosca-donut-chart`],[`id`,`quando-usar-8`],[`id`,`boas-praticas-5`],[`id`,`radar`],[`id`,`grafico-de-radar-radar-chart`],[`id`,`quando-usar-9`],[`id`,`guide-colors`],[`id`,`guia-de-cores`],[`id`,`boas-praticas-6`],[`id`,`evite`],[`id`,`opcoes-de-combinacao-de-cores`]],template:function(o,l){o&1&&(Qc(0,`po-page-default`,0)(1,`p`),Sk(2,`Este guia tem o objetivo de informar práticas de uso para cada tipo de gráfico do PO UI, o que devemos evitar ao utilizar determinado gráfico e também as boas práticas relacionadas às cores nos gráficos.`),Kg(),Qc(3,`p`),Sk(4,`Gráficos em geral têm a função de garantir que as pessoas de qualquer cultura ou país tenham entendimento claro para tomar as melhores decisões com base nas suas visualizações.`),Kg(),Qc(5,`h2`,1),Sk(6,`Conteúdo`),Kg(),Qc(7,`ul`)(8,`li`)(9,`a`,2),Sk(10,`Gráfico de área`),Kg()(),Qc(11,`li`)(12,`a`,3),Sk(13,`Gráfico de barra`),Kg()(),Qc(14,`li`)(15,`a`,4),Sk(16,`Gráfico de coluna`),Kg()(),Qc(17,`li`)(18,`a`,5),Sk(19,`Gráfico de coluna com linha`),Kg()(),Qc(20,`li`)(21,`a`,6),Sk(22,`Gráfico de gauge semicircular`),Kg()(),Qc(23,`li`)(24,`a`,7),Sk(25,`Gráfico de linha`),Kg()(),Qc(26,`li`)(27,`a`,8),Sk(28,`Gráfico de pizza`),Kg()(),Qc(29,`li`)(30,`a`,9),Sk(31,`Gráfico de rosca`),Kg()(),Qc(32,`li`)(33,`a`,10),Sk(34,`Gráfico de radar`),Kg()(),Qc(35,`li`)(36,`a`,11),Sk(37,`Guia de cores`),Kg()()(),vu(38,`br`),Qc(39,`p`),vu(40,`a`,12),Kg(),Qc(41,`h2`,13),Sk(42,`Gráfico de área (Area Chart)`),Kg(),Qc(43,`p`),Sk(44,`O gráfico de área combina o gráfico de linhas e o gráfico de barras para mostrar como os valores numéricos de um ou mais grupos mudam ao longo da progressão de uma segunda variável, normalmente a do tempo. Um gráfico de área se distingue de um gráfico de linha pela adição de sombreamento entre as linhas e uma linha de base, como em um gráfico de barras.`),Kg(),Qc(45,`p`),Sk(46,`A versão disponível no PO UI é o gráfico de área de sobreposição ou em inglês, `),Qc(47,`em`),Sk(48,`overlapping area chart`),Kg(),Sk(49,`.`),Kg(),Qc(50,`h4`,14),Sk(51,`Quando usar?`),Kg(),Qc(52,`ul`)(53,`li`),Sk(54,`Para representar os totais acumulados usando números ou porcentagens (gráficos de área empilhados, neste caso) ao longo do tempo;`),Kg(),Qc(55,`li`),Sk(56,`Mostrar tendências ao longo do tempo entre os atributos relacionados.`),Kg()(),vu(57,`br`),Qc(58,`p`),vu(59,`a`,15),Kg(),Qc(60,`h2`,16),Sk(61,`Gráfico de barra (Bar Chart)`),Kg(),Qc(62,`p`),Sk(63,`O gráfico de barra é organizado de forma temporal ou por tópicos ao longo do eixo vertical (y) e seus valores têm variação ao longo do eixo vertical (x). É uma variação direta da estrutura do gráfico de coluna.`),Kg(),Qc(64,`h4`,17),Sk(65,`Quando usar?`),Kg(),Qc(66,`ul`)(67,`li`),Sk(68,`Demonstrar as variações de dados em um período de tempo;`),Kg(),Qc(69,`li`),Sk(70,`Ilustrar comparações entre tópicos diretamente relacionados.`),Kg()(),Qc(71,`h4`,18),Sk(72,`Boas práticas`),Kg(),Qc(73,`p`),Sk(74,`Prefira utilizar o gráfico de barra quando for necessário muitos itens temporais ou de tópicos.`),Kg(),vu(75,`br`),Qc(76,`p`),vu(77,`a`,19),Kg(),Qc(78,`h2`,20),Sk(79,`Gráfico de coluna (Column Chart)`),Kg(),Qc(80,`p`),Sk(81,`O gráfico de coluna é organizado de forma temporal ou por tópicos ao longo do eixo horizontal (x) e seus valores têm variação ao longo do eixo vertical (y).`),Kg(),Qc(82,`h4`,21),Sk(83,`Quando usar?`),Kg(),Qc(84,`ul`)(85,`li`),Sk(86,`Demonstrar as variações de dados em um período de tempo;`),Kg(),Qc(87,`li`),Sk(88,`Ilustrar comparações entre tópicos diretamente relacionados.`),Kg()(),Qc(89,`h4`,22),Sk(90,`Boas práticas`),Kg(),Qc(91,`p`),Sk(92,`Prefira utilizar o gr\xE1fico de barras caso seja necess\xE1rio muitos itens,
pois o gr\xE1fico de coluna cont\xE9m menos espa\xE7o para que sejam exibidos os r\xF3tulos no eixo horizontal.`),Kg(),vu(93,`br`),Qc(94,`p`),vu(95,`a`,23),Kg(),Qc(96,`h2`,24),Sk(97,`Gráfico de pareto / coluna com linha (Column and Line Chart)`),Kg(),Qc(98,`p`),Sk(99,`O gráfico de pareto contém colunas e um gráfico de linhas, onde os valores individuais são representados em ordem decrescente por colunas e o total acumulado é representado pela linha.`),Kg(),Qc(100,`h4`,25),Sk(101,`Quando usar?`),Kg(),Qc(102,`ul`)(103,`li`),Sk(104,`Destacar o mais importante entre um conjunto de fatores, por exemplo:`),Qc(105,`ul`)(106,`li`),Sk(107,`Sempre que uma equipe não estiver certa sobre onde direcionar seus esforços de melhoria deve usar uma análise de pareto.`),Kg()()()(),vu(108,`br`),Qc(109,`p`),vu(110,`a`,26),Kg(),Qc(111,`h2`,27),Sk(112,`Gráfico de gauge semicircular (Semi Circle Gauge Chart)`),Kg(),Qc(113,`p`),Sk(114,`O gráfico de gauge semicircular é uma variação direta do gauge tradicional.`),Kg(),Qc(115,`h4`,28),Sk(116,`Quando usar?`),Kg(),Qc(117,`ul`)(118,`li`),Sk(119,`Demonstrar cálculos de desempenho por um certo período (em andamento ou como histórico), por exemplo: `),Qc(120,`ul`)(121,`li`),Sk(122,`Desempenho de vendas de uma equipe em relação a meta.`),Kg()()()(),vu(123,`br`),Qc(124,`p`),vu(125,`a`,29),Kg(),Qc(126,`h2`,30),Sk(127,`Gráfico de linha (Line Chart)`),Kg(),Qc(128,`p`),Sk(129,`O gráfico de linha pode exibir dados contínuos ao longo de um período de tempo, definidos em relação a uma escala comum. Os dados de categorias são comumente distribuídos uniformemente ao longo do eixo horizontal e todos os dados de valores que tem variação são subdivididos igualmente ao longo do eixo vertical. `),Kg(),Qc(130,`h4`,31),Sk(131,`Quando usar?`),Kg(),Qc(132,`ul`)(133,`li`),Sk(134,`Quando deseja exibir tendências nos dados ao longo do tempo, por exemplo:`),Qc(135,`ul`)(136,`li`),Sk(137,`Demonstrar a alteração no preço das ações em um período de tempo;`),Kg(),Qc(138,`li`),Sk(139,`Quantidade de visitas em um site durante um mês.`),Kg()()()(),Qc(140,`h4`,32),Sk(141,`Boas práticas`),Kg(),Qc(142,`ul`)(143,`li`),Sk(144,`Ideal para demonstrar a frequência em que ocorrem os dados;`),Kg(),Qc(145,`li`),Sk(146,`Não é recomendado para caso de distribuição de dados, neste caso pode-se utilizar o gráfico de coluna.`),Kg()(),vu(147,`br`),Qc(148,`p`),vu(149,`a`,33),Kg(),Qc(150,`h2`,34),Sk(151,`Gráfico de pizza (Pie Chart)`),Kg(),Qc(152,`p`),Sk(153,`O gráfico de pizza ou torta é adequado para mostrar partes divididas de um todo, pois representa fatias que somadas compõem 100% da forma.`),Kg(),Qc(154,`h4`,35),Sk(155,`Quando usar?`),Kg(),Qc(156,`ul`)(157,`li`),Sk(158,`Para demonstrar proporções, por exemplo:`),Qc(159,`ul`)(160,`li`),Sk(161,`Porcentagem de orçamento gasto em diferentes departamentos;`),Kg(),Qc(162,`li`),Sk(163,`Respostas de pesquisa;`),Kg(),Qc(164,`li`),Sk(165,`Divisão de tempo em uma atividade.`),Kg()()()(),Qc(166,`h4`,36),Sk(167,`Boas práticas`),Kg(),Qc(168,`ul`)(169,`li`),Sk(170,`Não é recomendado para comparar dados;`),Kg(),Qc(171,`li`),Sk(172,`Evite gráficos de pizza com mais de cinco partes, pois isso interfere diretamente no entendimento do gráfico ou visualização dos valores.`),Kg()(),vu(173,`br`),Qc(174,`p`),vu(175,`a`,37),Kg(),Qc(176,`h2`,38),Sk(177,`Gráfico de rosca (Donut Chart)`),Kg(),Qc(178,`p`),Sk(179,`O gráfico de rosca é adequado para mostrar partes de um todo, pois representa fatias que somadas compõem 100% de algo. É uma variação visual do gráfico de pizza.`),Kg(),Qc(180,`h4`,39),Sk(181,`Quando usar?`),Kg(),Qc(182,`ul`)(183,`li`),Sk(184,`Para demonstrar proporções comparativas em porcentagem ou quantidade.`),Kg()(),Qc(185,`h4`,40),Sk(186,`Boas práticas:`),Kg(),Qc(187,`p`),Sk(188,`O valor mínimo de visualização deve ser de 10% do total para demonstrar as informações no gráfico, caso tenha mais de um item abaixo do valor de 10%, junte-os em uma sessão agrupada "Outros" e especifique o conteúdo que o compõe na legenda.`),Kg(),vu(189,`br`),Qc(190,`p`),vu(191,`a`,41),Kg(),Qc(192,`h2`,42),Sk(193,`Gráfico de radar (Radar Chart)`),Kg(),Qc(194,`p`),Sk(195,`O gráfico de radar é utilizado para visualizar e comparar o desempenho de diferentes itens em múltiplas categorias.`),Kg(),Qc(196,`h4`,43),Sk(197,`Quando usar?`),Kg(),Qc(198,`ul`)(199,`li`),Sk(200,`Para demonstrar cenários onde é preciso avaliar e apresentar um "perfil" de desempenho de algo/alguém.`),Kg()(),vu(201,`br`),Qc(202,`p`),vu(203,`a`,44),Kg(),Qc(204,`h2`,45),Sk(205,`Guia de cores`),Kg(),Qc(206,`h4`,46),Sk(207,`Boas práticas`),Kg(),Qc(208,`ul`)(209,`li`),Sk(210,`Use uma única cor para representar o mesmo tipo de dados. Por exemplo: para representar vendas mês a mês em um gráfico de barras, use uma única cor. Outro exemplo: para comparar as vendas do ano passado com as do ano vigente em um gráfico agrupado, prefira utilizar uma cor diferente para cada ano;`),Kg(),Qc(211,`li`),Sk(212,`Certifique-se de que existe contraste suficiente entre as cores. Por exemplo: utilize cores com contraste para facilitar a assimilação do usuário referente às informações traduzidas no gráfico;`),Kg(),Qc(213,`li`),Sk(214,`Escolha cores adequadamente. Algumas cores se destacam mais do que outras, dando peso desnecessário ou direcionamento errado aos dados.`),Kg(),Qc(215,`li`),Sk(216,`Prefira utilizar uma única cor com sombra variável ou um espectro entre duas cores análogas para mostrar intensidade;`),Kg(),Qc(217,`li`),Sk(218,`Destaque a informação mais relevante com cores fortes e utilize a mesma com tons com menos contraste para complementar o gráfico.`),Kg()(),Qc(219,`h4`,47),Sk(220,`Evite`),Kg(),Qc(221,`ul`)(222,`li`),Sk(223,`Não use vermelho para números positivos ou verde para números negativos. Essas associações de cores são decisivas na interpretação do usuário;`),Kg(),Qc(224,`li`),Sk(225,`Não utilize combinações de cores de alto contraste, como vermelho e verde ou azul e amarelo (somente com direcionamento da marca);`),Kg(),Qc(226,`li`),Sk(227,`Não utilize cores com baixo contraste, como azul claro e cinza (somente com direcionamento da marca).`),Kg()(),Qc(228,`h4`,48),Sk(229,`Opções de combinação de cores`),Kg(),Qc(230,`p`),Sk(231,`Modelos de cores que podem combinar e facilitar a visualização dos gráficos: `),Kg(),Qc(232,`ul`)(233,`li`)(234,`p`),Sk(235,`Cinza e azul:`),Kg(),Qc(236,`ul`)(237,`li`),Sk(238,`Para informações de atual e passado, mas atenção com o nível do contraste para que sejam legíveis as diferenças entre os dados;`),Kg()()(),Qc(239,`li`)(240,`p`),Sk(241,`Azul e laranja:`),Kg(),Qc(242,`ul`)(243,`li`),Sk(244,`Azul para indicação de dados positivos e laranja para negativos;`),Kg()()(),Qc(245,`li`)(246,`p`),Sk(247,`Verde e vermelho:`),Kg(),Qc(248,`ul`)(249,`li`),Sk(250,`Verde sinaliza dados positivo e vermelho os negativos;`),Kg()()(),Qc(251,`li`)(252,`p`),Sk(253,`Azul, cinza e verde:`),Kg(),Qc(254,`ul`)(255,`li`),Sk(256,`Para uma composição de três cores.`),Kg()()()()())},dependencies:[Mze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var G=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:432,vars:0,consts:[[`p-title`,`Migração do PO UI para V2`,1,`guides`,`app-portal`],[`id`,`atualizando-o-projeto-com-angular`],[`href`,`https://update.angular.io/`],[`href`,`https://angular.io/cli/update`],[`id`,`atualizando-o-po-ui`],[`href`,`guides/migration-poui-v2#components`],[`href`,`guides/migration-poui-v2#sync`],[`id`,`components`],[`id`,`ng-update-po-ui-ng-components`],[`id`,`breaking-changes`],[1,`po-text-color-neutral-dark-40`],[`id`,`depreciacao`],[`href`,`http://po-ui.io/documentation/po-page-change-password`],[`href`,`http://po-ui.io/documentation/po-button-group`],[`href`,`http://po-ui.io/documentation/po-menu`],[`href`,`http://po-ui.io/documentation/po-menu-panel`],[`href`,`http://po-ui.io/documentation/po-navbar`],[`href`,`http://po-ui.io/documentation/po-page-list`],[`href`,`http://po-ui.io/documentation/po-page-default`],[`href`,`http://po-ui.io/documentation/po-popup`],[`href`,`http://po-ui.io/documentation/po-step`],[`href`,`http://po-ui.io/documentation/po-table`],[`href`,`http://po-ui.io/documentation/po-toolbar`],[`id`,`sync`],[`id`,`ng-update-po-ui-ng-sync`],[`id`,`breaking-changes-2`],[`id`,`depreciacao-2`]],template:function(o,l){o&1&&(Qc(0,`po-page-default`,0)(1,`p`),Sk(2,`Este guia contém informações sobre a migração do seu projeto para a versão 2 do PO UI.`),Kg(),Qc(3,`h2`,1),Sk(4,`Atualizando o projeto com Angular`),Kg(),Qc(5,`p`),Sk(6,`Antes de atualizar a vers\xE3o do PO UI, \xE9 importante que voc\xEA tenha atualizado o seu projeto para
o Angular 9, executando o comando abaixo:`),Kg(),Qc(7,`p`)(8,`code`),Sk(9,`ng update @angular/cli@9 @angular/core@9`),Kg()(),Qc(10,`blockquote`)(11,`p`),Sk(12,`Para realizar a migração completa e avaliar se não precisa fazer alguma alteração veja o `),Qc(13,`a`,2)(14,`strong`),Sk(15,`Guia de Upgrade do Angular`),Kg()(),Sk(16,`.`),Kg()(),Qc(17,`p`),Sk(18,`O nosso pacote anterior possu\xEDa depend\xEAncias que eram compat\xEDveis com a vers\xE3o 8 do Angular, portanto
pode ser preciso utilizar a `),Qc(19,`em`),Sk(20,`flag`),Kg(),Qc(21,`code`),Sk(22,`--force`),Kg(),Sk(23,` para que o Angular realize a migra\xE7\xE3o do seu projeto, ignorando a vers\xE3o das depend\xEAncias.
Para avaliar as `),Qc(24,`em`),Sk(25,`flags`),Kg(),Sk(26,` disponíveis veja a `),Qc(27,`a`,3)(28,`strong`),Sk(29,`documentação do ng update`),Kg()(),Sk(30,`.`),Kg(),Qc(31,`h2`,4),Sk(32,`Atualizando o PO UI`),Kg(),Qc(33,`p`),Sk(34,`Para facilitar a migração do seu projeto para o PO UI v2, implementamos o `),Qc(35,`code`),Sk(36,`ng update`),Kg(),Sk(37,` nos pacotes abaixo:`),Kg(),Qc(38,`ul`)(39,`li`)(40,`a`,5)(41,`strong`),Sk(42,`@po-ui/ng-components`),Kg()()(),Qc(43,`li`)(44,`a`,6)(45,`strong`),Sk(46,`@po-ui/ng-sync`),Kg()()()(),Qc(47,`p`),Sk(48,`O `),Qc(49,`code`),Sk(50,`ng update`),Kg(),Sk(51,` ajudará nas alterações necessárias para seu projeto seguir atualizado, que são elas:`),Kg(),Qc(52,`ul`)(53,`li`),Sk(54,`Alterar maioria dos conteúdos relacionados ao `),Qc(55,`strong`),Sk(56,`BREAKING CHANGES`),Kg(),Sk(57,` e `),Qc(58,`strong`),Sk(59,`Depreciações`),Kg(),Sk(60,` no seu projeto;`),Kg(),Qc(61,`li`),Sk(62,`Atualizar as versões dos pacotes `),Qc(63,`code`),Sk(64,`@po-ui`),Kg(),Sk(65,`.`),Kg()(),Qc(66,`p`),Sk(67,`Mas é importante conhecer os `),Qc(68,`strong`),Sk(69,`BREAKING CHANGES`),Kg(),Sk(70,` e `),Qc(71,`strong`),Sk(72,`Depreciações`),Kg(),Sk(73,` para realizar as alterações manualmente caso necessário.`),Kg(),Qc(74,`p`),vu(75,`a`,7),Kg(),Qc(76,`h3`,8),Sk(77,`ng update @po-ui/ng-components`),Kg(),Qc(78,`p`),Sk(79,`Para poder utilizar o comando e realizar a migração, execute os comandos abaixo:`),Kg(),Qc(80,`p`)(81,`code`),Sk(82,`npm i --save @po-ui/ng-components@2`),Kg()(),Qc(83,`p`)(84,`code`),Sk(85,`ng update @po-ui/ng-components --from 1 --migrate-only`),Kg()(),Qc(86,`h4`,9),Sk(87,`Breaking Changes`),Kg(),Qc(88,`p`),Sk(89,`Nesta nova versão o nome dos pacotes foram alterados, de acordo com a tabela abaixo:`),Kg(),Qc(90,`table`)(91,`thead`)(92,`tr`)(93,`th`,10),Sk(94,`Pacotes`),Kg(),Qc(95,`th`,10),Sk(96,`Substituído por`),Kg()()(),Qc(97,`tbody`)(98,`tr`)(99,`td`)(100,`code`),Sk(101,`@portinari/portinari-ui`),Kg()(),Qc(102,`td`)(103,`code`),Sk(104,`@po-ui/ng-components`),Kg()()(),Qc(105,`tr`)(106,`td`)(107,`code`),Sk(108,`@portinari/portinari-templates`),Kg()(),Qc(109,`td`)(110,`code`),Sk(111,`@po-ui/ng-templates`),Kg()()(),Qc(112,`tr`)(113,`td`)(114,`code`),Sk(115,`@portinari/portinari-code-editor`),Kg()(),Qc(116,`td`)(117,`code`),Sk(118,`@po-ui/ng-code-editor`),Kg()()(),Qc(119,`tr`)(120,`td`)(121,`code`),Sk(122,`@portinari/tslint`),Kg()(),Qc(123,`td`)(124,`code`),Sk(125,`@po-ui/ng-tslint`),Kg()()(),Qc(126,`tr`)(127,`td`)(128,`code`),Sk(129,`@portinari/style`),Kg()(),Qc(130,`td`)(131,`code`),Sk(132,`@po-ui/style`),Kg()()()()(),Qc(133,`p`),Sk(134,`Também foi realizado remoções das propriedades, onde passam a valer as novas definições, veja a tabela abaixo:`),Kg(),Qc(135,`table`)(136,`thead`)(137,`tr`)(138,`th`,10),Sk(139,`Componentes`),Kg(),Qc(140,`th`,10),Sk(141,`Anteriormente`),Kg(),Qc(142,`th`,10),Sk(143,`Substituído por`),Kg()()(),Qc(144,`tbody`)(145,`tr`)(146,`td`)(147,`code`),Sk(148,`PoFieldModule`),Kg()(),Qc(149,`td`)(150,`code`),Sk(151,`[p-focus]`),Kg()(),Qc(152,`td`)(153,`code`),Sk(154,`[p-auto-focus]`),Kg()()(),Qc(155,`tr`)(156,`td`)(157,`code`),Sk(158,`PoHttpResquestInterceptor`),Kg()(),Qc(159,`td`)(160,`code`),Sk(161,`X-Portinari-Screen-Lock`),Kg()(),Qc(162,`td`)(163,`code`),Sk(164,`X-PO-Screen-Lock`),Kg()()(),Qc(165,`tr`)(166,`td`)(167,`code`),Sk(168,`PoHttpResquestInterceptor`),Kg()(),Qc(169,`td`)(170,`code`),Sk(171,`X-Portinari-No-Count-Pending-Requests`),Kg()(),Qc(172,`td`)(173,`code`),Sk(174,`X-PO-No-Count-Pending-Requests`),Kg()()(),Qc(175,`tr`)(176,`td`)(177,`code`),Sk(178,`PoHttpInterceptor`),Kg()(),Qc(179,`td`)(180,`code`),Sk(181,`X-Portinari-No-Message`),Kg()(),Qc(182,`td`)(183,`code`),Sk(184,`X-PO-No-Message`),Kg()()(),Qc(185,`tr`)(186,`td`)(187,`code`),Sk(188,`PoPageEdit`),Kg()(),Qc(189,`td`,10),Sk(190,`Possuir a ação `),Qc(191,`code`),Sk(192,`cancel() {}`),Kg(),Sk(193,` no TS`),Kg(),Qc(194,`td`)(195,`code`),Sk(196,`(p-cancel)`),Kg()()(),Qc(197,`tr`)(198,`td`)(199,`code`),Sk(200,`PoPageEdit`),Kg()(),Qc(201,`td`,10),Sk(202,`Possuir a ação `),Qc(203,`code`),Sk(204,`save() {}`),Kg(),Sk(205,` no TS`),Kg(),Qc(206,`td`)(207,`code`),Sk(208,`(p-save)`),Kg()()(),Qc(209,`tr`)(210,`td`)(211,`code`),Sk(212,`PoPageEdit`),Kg()(),Qc(213,`td`,10),Sk(214,`Possuir a ação `),Qc(215,`code`),Sk(216,`saveNew() {}`),Kg(),Sk(217,` no TS`),Kg(),Qc(218,`td`)(219,`code`),Sk(220,`(p-save-new)`),Kg()()(),Qc(221,`tr`)(222,`td`)(223,`code`),Sk(224,`PoPageDetail`),Kg()(),Qc(225,`td`,10),Sk(226,`Possuir a ação `),Qc(227,`code`),Sk(228,`back() {}`),Kg(),Sk(229,` no TS`),Kg(),Qc(230,`td`)(231,`code`),Sk(232,`(p-back)`),Kg()()(),Qc(233,`tr`)(234,`td`)(235,`code`),Sk(236,`PoPageDetail`),Kg()(),Qc(237,`td`,10),Sk(238,`Possuir a ação `),Qc(239,`code`),Sk(240,`edit() {}`),Kg(),Sk(241,` no TS`),Kg(),Qc(242,`td`)(243,`code`),Sk(244,`(p-edit)`),Kg()()(),Qc(245,`tr`)(246,`td`)(247,`code`),Sk(248,`PoPageDetail`),Kg()(),Qc(249,`td`,10),Sk(250,`Possuir a ação `),Qc(251,`code`),Sk(252,`remove() {}`),Kg(),Sk(253,` no TS`),Kg(),Qc(254,`td`)(255,`code`),Sk(256,`(p-remove)`),Kg()()()()(),Qc(257,`h4`,11),Sk(258,`Depreciação`),Kg(),Qc(259,`p`),Sk(260,`Nas versões `),Qc(261,`code`),Sk(262,`1.x.x`),Kg(),Sk(263,` era possível passar funções para nossas propriedades sem informar o `),Qc(264,`code`),Sk(265,`.bind(this)`),Kg(),Sk(266,`,
pois captur\xE1vamos o componente pai e consegu\xEDamos acessar o contexto corrente. Por\xE9m depreciamos este comportamento,
agora necessita passar a refer\xEAncia da fun\xE7\xE3o utilizando o `),Qc(267,`code`),Sk(268,`.bind(this)`),Kg(),Sk(269,` para que o mesmo execute a função no contexto invocado, tanto em funções dentro de `),Qc(270,`em`),Sk(271,`arrays`),Kg(),Sk(272,` quanto em funções via `),Qc(273,`em`),Sk(274,`property bind`),Kg(),Sk(275,`.`),Kg(),Qc(276,`p`),Sk(277,`Os componentes que sofrerão esta depreciação, são:`),Kg(),Qc(278,`ul`)(279,`li`)(280,`a`,12)(281,`strong`),Sk(282,`PageChangePassword`),Kg()()(),Qc(283,`li`)(284,`a`,13)(285,`strong`),Sk(286,`ButtonGroup`),Kg()()(),Qc(287,`li`)(288,`a`,14)(289,`strong`),Sk(290,`Menu`),Kg()()(),Qc(291,`li`)(292,`a`,15)(293,`strong`),Sk(294,`MenuPanel`),Kg()()(),Qc(295,`li`)(296,`a`,16)(297,`strong`),Sk(298,`Navbar`),Kg()()(),Qc(299,`li`)(300,`a`,17)(301,`strong`),Sk(302,`PageList`),Kg()()(),Qc(303,`li`)(304,`a`,18)(305,`strong`),Sk(306,`PageDefault`),Kg()()(),Qc(307,`li`)(308,`a`,19)(309,`strong`),Sk(310,`Popup`),Kg()()(),Qc(311,`li`)(312,`a`,20)(313,`strong`),Sk(314,`Stepper`),Kg()()(),Qc(315,`li`)(316,`a`,21)(317,`strong`),Sk(318,`Table`),Kg()()(),Qc(319,`li`)(320,`a`,22)(321,`strong`),Sk(322,`Toolbar`),Kg()()()(),Qc(323,`p`),Sk(324,`Abaixo listamos dois exemplos comparativos com essas depreciações em alguns componentes.`),Kg(),Qc(325,`p`),Sk(326,`Exemplo via funções dentro de arrays:`),Kg(),Qc(327,`ul`)(328,`li`),Sk(329,`Antes:`),Kg()(),Qc(330,`pre`)(331,`code`),Sk(332,`<po-page-default p-title="P\xE1gina" [p-actions]="actions">
   ...
</po-page-default>
`),Kg()(),Qc(333,`pre`)(334,`code`),Sk(335,`export class ExampleFunction () {

  actions: Array<PoPageAction> = [
    { label: 'Adicionar', action: this.add }
  ]

  add() {
    ...
  }
}
`),Kg()(),Qc(336,`ul`)(337,`li`),Sk(338,`Agora:`),Kg()(),Qc(339,`pre`)(340,`code`),Sk(341,`<po-page-default p-title="P\xE1gina" [p-actions]="actions">
   ...
</po-page-default>
`),Kg()(),Qc(342,`pre`)(343,`code`),Sk(344,`export class ExampleFunction () {

  actions: Array<PoPageAction> = [
    { label: 'Adicionar', action: this.add.bind(this) }
  ]

  add() {
    ...
  }
}
`),Kg()(),Qc(345,`p`),Sk(346,`Exemplo funções via `),Qc(347,`em`),Sk(348,`property bind`),Kg()(),Qc(349,`ul`)(350,`li`),Sk(351,`Antes:`),Kg()(),Qc(352,`pre`)(353,`code`),Sk(354,`<po-stepper>
  <po-step p-label="Personal" [p-can-active-next-step]="canActiveNextStep">
  </po-step>
</po-stepper>
`),Kg()(),Qc(355,`ul`)(356,`li`),Sk(357,`Agora:`),Kg()(),Qc(358,`pre`)(359,`code`),Sk(360,`<po-stepper>
  <po-step p-label="Personal" [p-can-active-next-step]="canActiveNextStep.bind(this)">
  </po-step>
</po-stepper>
`),Kg()(),Qc(361,`p`),vu(362,`a`,23),Kg(),Qc(363,`h3`,24),Sk(364,`ng update @po-ui/ng-sync`),Kg(),Qc(365,`p`),Sk(366,`Para poder utilizar o comando e realizar a migração, execute os comandos abaixo:`),Kg(),Qc(367,`p`)(368,`code`),Sk(369,`npm i --save @po-ui/ng-sync@2`),Kg()(),Qc(370,`p`)(371,`code`),Sk(372,`ng update @po-ui/ng-sync --from 1 --migrate-only`),Kg()(),Qc(373,`h4`,25),Sk(374,`Breaking Changes`),Kg(),Qc(375,`p`),Sk(376,`Nesta nova versão o nome dos pacotes foram alterados, de acordo com a tabela abaixo:`),Kg(),Qc(377,`table`)(378,`thead`)(379,`tr`)(380,`th`,10),Sk(381,`Pacotes`),Kg(),Qc(382,`th`,10),Sk(383,`Substituído por`),Kg()()(),Qc(384,`tbody`)(385,`tr`)(386,`td`)(387,`code`),Sk(388,`@portinari/portinari-sync`),Kg()(),Qc(389,`td`)(390,`code`),Sk(391,`@po-ui/ng-sync`),Kg()()(),Qc(392,`tr`)(393,`td`)(394,`code`),Sk(395,`@portinari/portinari-storage`),Kg()(),Qc(396,`td`)(397,`code`),Sk(398,`@po-ui/ng-storage`),Kg()()(),Qc(399,`tr`)(400,`td`)(401,`code`),Sk(402,`@portinari/tslint`),Kg()(),Qc(403,`td`)(404,`code`),Sk(405,`@po-ui/ng-tslint`),Kg()()()()(),Qc(406,`h4`,26),Sk(407,`Depreciação`),Kg(),Qc(408,`p`),Sk(409,`Também foi realizada uma depreciação, onde ainda será aceito o modelo anterior, porém na versão 3 será removido.`),Kg(),Qc(410,`p`),Sk(411,`A depreciação ocorreu no retorno do `),Qc(412,`code`),Sk(413,`Endpoint de sincronização`),Kg(),Sk(414,`, onde anteriomente deveria retornar a data da \xFAltima sincroniza\xE7\xE3o
na propriedade `),Qc(415,`code`),Sk(416,`portinari_sync_date`),Kg(),Sk(417,`, que agora passa a ser `),Qc(418,`code`),Sk(419,`po_sync_date`),Kg(),Sk(420,`, veja o antes e depois:`),Kg(),Qc(421,`pre`)(422,`code`),Sk(423,`{
  "hasNext": false,
  "items": [],
  "portinari_sync_date": "2018-10-08T13:57:55.008Z"
}
`),Kg()(),Qc(424,`p`),Sk(425,`A propriedade `),Qc(426,`code`),Sk(427,`portinari_sync_date`),Kg(),Sk(428,` foi depreciada e o nova propriedade é:`),Kg(),Qc(429,`pre`)(430,`code`),Sk(431,`{
  "hasNext": false,
  "items": [],
  "po_sync_date": "2018-10-08T13:57:55.008Z"
}
`),Kg()()())},dependencies:[Mze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var U=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:233,vars:0,consts:[[`p-title`,`Migração do PO UI`,1,`guides`,`app-portal`],[`href`,`guides/migration-poui-v2`],[`id`,`atualizando-o-projeto-com-angular`],[`href`,`https://github.com/po-ui/po-angular/wiki#vers%C3%B5es-angular-x-po-ui`],[`href`,`https://update.angular.io/`],[`href`,`https://angular.io/cli/update`],[`id`,`atualizando-o-po-ui`],[`href`,`guides/migration-poui#components`],[`href`,`guides/migration-poui#sync`],[`id`,`components`],[`id`,`ng-update-po-ui-ng-components`],[`href`,`https://github.com/po-ui/po-angular/blob/master/CHANGELOG.md`],[`id`,`sync`],[`id`,`ng-update-po-ui-ng-sync`],[1,`language-json`],[`id`,`depreciacoes-e-breaking-changes`],[`href`,`guides/deprecations`]],template:function(o,l){o&1&&(Qc(0,`po-page-default`,0)(1,`p`),Sk(2,`Este guia contém informações sobre a migração do seu projeto para a versão mais atualizada do PO UI.`),Kg(),Qc(3,`blockquote`)(4,`p`),Sk(5,`Caso você não estiver utilizando a versão anterior da mais atualizada, é importante realizar a migração para a mesma.`),Kg()(),Qc(6,`blockquote`)(7,`p`),Sk(8,`Se seu projeto estiver na v1, veja este Guia de Migração do PO UI para `),Qc(9,`a`,1)(10,`strong`),Sk(11,`V2`),Kg()(),Sk(12,`.`),Kg()(),Qc(13,`h2`,2),Sk(14,`Atualizando o projeto com Angular`),Kg(),Qc(15,`p`),Sk(16,`Antes de atualizar a vers\xE3o do PO UI, \xE9 importante que voc\xEA tenha atualizado o seu projeto para
o Angular que o PO UI est\xE1 homologado, veja nossa
`),Qc(17,`a`,3),Sk(18,`tabela de compatibilidade`),Kg(),Sk(19,` em nosso Github Wiki.`),Kg(),Qc(20,`blockquote`)(21,`p`),Sk(22,`Caso o seu projeto não possua a dependência `),Qc(23,`code`),Sk(24,`@angular-devkit/schematics`),Kg(),Sk(25,`, realize a instalação do pacote para o nosso script de atualização funcionar corretamente:`),Kg()(),Qc(26,`pre`)(27,`code`),Sk(28,`npm install @angular-devkit/schematics --save-dev
`),Kg()(),Qc(29,`p`),Sk(30,`Para atualizar o Angular, execute o comando abaixo:`),Kg(),Qc(31,`pre`)(32,`code`),Sk(33,`ng update @angular/cli@<version> @angular/core@<version> --force
`),Kg()(),Qc(34,`p`),Sk(35,`Por exemplo:`),Kg(),Qc(36,`pre`)(37,`code`),Sk(38,`ng update @angular/cli@22 @angular/core@22 --force
`),Kg()(),Qc(39,`blockquote`)(40,`p`),Sk(41,`Para realizar a migração completa e avaliar se não precisa fazer alguma alteração veja o `),Qc(42,`a`,4)(43,`strong`),Sk(44,`Guia de Upgrade do Angular`),Kg()(),Sk(45,`.`),Kg()(),Qc(46,`p`),Sk(47,`O nosso pacote possu\xEDa depend\xEAncias que eram compat\xEDveis com a vers\xE3o anterior do Angular, portanto
devemos utilizar a `),Qc(48,`em`),Sk(49,`flag`),Kg(),Qc(50,`code`),Sk(51,`--force`),Kg(),Sk(52,` para que o Angular realize a migra\xE7\xE3o do seu projeto, ignorando a vers\xE3o das depend\xEAncias.
Para avaliar as `),Qc(53,`em`),Sk(54,`flags`),Kg(),Sk(55,` disponíveis veja a `),Qc(56,`a`,5)(57,`strong`),Sk(58,`documentação do ng update`),Kg()(),Sk(59,`.`),Kg(),Qc(60,`h2`,6),Sk(61,`Atualizando o PO UI`),Kg(),Qc(62,`p`),Sk(63,`Para facilitar a migração do seu projeto para o PO UI mais recente, implementamos o `),Qc(64,`code`),Sk(65,`ng update`),Kg(),Sk(66,` nos pacotes abaixo:`),Kg(),Qc(67,`ul`)(68,`li`)(69,`a`,7)(70,`strong`),Sk(71,`@po-ui/ng-components`),Kg()()(),Qc(72,`li`)(73,`a`,8)(74,`strong`),Sk(75,`@po-ui/ng-sync`),Kg()()()(),Qc(76,`p`),vu(77,`a`,9),Kg(),Qc(78,`h3`,10),Sk(79,`ng update @po-ui/ng-components`),Kg(),Qc(80,`p`),Sk(81,`Para realizar a migração, devemos executar o comando `),Qc(82,`code`),Sk(83,`ng update`),Kg(),Sk(84,`, conforme exemplo abaixo. Mas antes verifique se comitou os arquivos alterados pela migra\xE7\xE3o do Angular, se preferir voc\xEA pode utilizar a
`),Qc(85,`em`),Sk(86,`flag`),Kg(),Qc(87,`code`),Sk(88,`--allow-dirty`),Kg(),Sk(89,` em conjunto.`),Kg(),Qc(90,`pre`)(91,`code`),Sk(92,`ng update @po-ui/ng-components@<version> --allow-dirty --force
`),Kg()(),Qc(93,`p`),Sk(94,`Por exemplo:`),Kg(),Qc(95,`pre`)(96,`code`),Sk(97,`ng update @po-ui/ng-components@next --allow-dirty --force
`),Kg()(),Qc(98,`blockquote`)(99,`p`),Sk(100,`Caso ocorra um erro ao concluir o comando acima pode ser necessário fazer uma instalação limpa no projeto apagando a pasta `),Qc(101,`code`),Sk(102,`node_modules`),Kg(),Sk(103,` e o arquivo `),Qc(104,`code`),Sk(105,`package-lock.json`),Kg(),Sk(106,` e executando o comando `),Qc(107,`code`),Sk(108,`npm i --legacy-peer-deps`),Kg(),Sk(109,` antes de realizar o `),Qc(110,`code`),Sk(111,`ng update`),Kg(),Sk(112,`.`),Kg()(),Qc(113,`p`),Sk(114,`O `),Qc(115,`code`),Sk(116,`ng update`),Kg(),Sk(117,` ajudará nas alterações necessárias para seu projeto seguir atualizado, que são elas:`),Kg(),Qc(118,`ul`)(119,`li`),Sk(120,`Caso houver `),Qc(121,`em`),Sk(122,`breaking changes`),Kg(),Sk(123,`, serão realizados as alterações possíveis, mas fique atento ao `),Qc(124,`a`,11),Sk(125,`CHANGELOG`),Kg(),Sk(126,`;`),Kg(),Qc(127,`li`),Sk(128,`Atualizar as versões dos pacotes:`),Qc(129,`ul`)(130,`li`)(131,`code`),Sk(132,`@po-ui/ng-components`),Kg(),Sk(133,`;`),Kg(),Qc(134,`li`)(135,`code`),Sk(136,`@po-ui/ng-templates`),Kg(),Sk(137,`;`),Kg(),Qc(138,`li`)(139,`code`),Sk(140,`@po-ui/ng-code-editor`),Kg(),Sk(141,`;`),Kg(),Qc(142,`li`)(143,`code`),Sk(144,`@po-ui/ng-storage`),Kg(),Sk(145,`;`),Kg(),Qc(146,`li`)(147,`code`),Sk(148,`@po-ui/ng-sync`),Kg(),Sk(149,`;`),Kg(),Qc(150,`li`)(151,`code`),Sk(152,`@po-ui/style`),Kg(),Sk(153,`;`),Kg()()()(),Qc(154,`p`),Sk(155,`Além disso, será realizada uma pergunta para que o usuário decida se quer utilizar a nova biblioteca de ícones. Caso a escolha seja positiva, o processo de update irá substituir classes de ícones do po-ui pelas novas referências.`),Kg(),Qc(156,`p`),vu(157,`a`,12),Kg(),Qc(158,`h3`,13),Sk(159,`ng update @po-ui/ng-sync`),Kg(),Qc(160,`blockquote`)(161,`p`),Sk(162,`Caso você também utilize `),Qc(163,`code`),Sk(164,`@po-ui/ng-components`),Kg(),Sk(165,` não há necessidade de executar o `),Qc(166,`em`),Sk(167,`ng update`),Kg(),Sk(168,` do `),Qc(169,`code`),Sk(170,`@po-ui/ng-sync`),Kg(),Sk(171,`.`),Kg()(),Qc(172,`p`),Sk(173,`Para realizar a migração, devemos executar o comando `),Qc(174,`code`),Sk(175,`ng update`),Kg(),Sk(176,`, conforme exemplo abaixo. Mas antes verifique se comitou os arquivos alterados pela migra\xE7\xE3o do Angular, se preferir voc\xEA pode utilizar a
`),Qc(177,`em`),Sk(178,`flag`),Kg(),Qc(179,`code`),Sk(180,`--allow-dirty`),Kg(),Sk(181,` em conjunto.`),Kg(),Qc(182,`pre`)(183,`code`),Sk(184,`ng update @po-ui/ng-sync@<version> --allow-dirty --force
`),Kg()(),Qc(185,`p`),Sk(186,`Por exemplo:`),Kg(),Qc(187,`pre`)(188,`code`),Sk(189,`ng update @po-ui/ng-sync@next --allow-dirty --force
`),Kg()(),Qc(190,`p`),Sk(191,`O `),Qc(192,`code`),Sk(193,`ng update`),Kg(),Sk(194,` ajudará nas alterações necessárias para seu projeto, que será atualizar as versões dos pacotes:`),Kg(),Qc(195,`ul`)(196,`li`)(197,`code`),Sk(198,`@po-ui/ng-sync`),Kg(),Sk(199,`;`),Kg(),Qc(200,`li`)(201,`code`),Sk(202,`@po-ui/ng-storage`),Kg(),Sk(203,`;`),Kg()(),Qc(204,`blockquote`)(205,`p`),Sk(206,`Pode ocorrer o seguinte erro `),Qc(207,`code`),Sk(208,`TypeError: Failed to fetch dynamically imported module...`),Kg(),Sk(209,`, sendo necessário adicionar ao arquivo `),Qc(210,`code`),Sk(211,`angular.json`),Kg(),Sk(212,` as seguintes configurações:`),Kg(),Qc(213,`pre`)(214,`code`,14),Sk(215,`{
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
`),Kg()()(),Qc(216,`h2`,15),Sk(217,`Depreciações e Breaking Changes`),Kg(),Qc(218,`p`),Sk(219,`Possuimos uma documentação que lista as depreciações correntes e os `),Qc(220,`em`),Sk(221,`breaking changes`),Kg(),Sk(222,` j\xE1 realizados na biblioteca,
para consult\xE1-lo acesse o guia `),Qc(223,`a`,16),Sk(224,`Depreciações`),Kg()(),Qc(225,`p`),Sk(226,`Verifique também nosso `),Qc(227,`a`,11),Sk(228,`CHANGELOG`),Kg(),Sk(229,` para obter
mais detalhes dos `),Qc(230,`em`),Sk(231,`breaking changes`),Kg(),Sk(232,` realizados.`),Kg()())},dependencies:[Mze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var R=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:63,vars:0,consts:[[`p-title`,`Migração do THF para o PO UI v1.x`,1,`guides`,`app-portal`],[`id`,`antes-de-iniciar-a-migracao`],[`id`,`instalacao-do-pacote-de-migracao`],[`id`,`migrando-o-seu-projeto`]],template:function(o,l){o&1&&(Qc(0,`po-page-default`,0)(1,`p`),Sk(2,`Para facilitar a migração do seu projeto com o THF para o PO UI, disponibilizamos um pacote para fazer esta conversão. `),Kg(),Qc(3,`p`),Sk(4,`Este pacote, irá passar pelos arquivos do seu projeto alterando as palavras-chaves do THF para a nova nomenclatura do PO UI.`),Kg(),Qc(5,`h3`,1),Sk(6,`Antes de iniciar a migração`),Kg(),Qc(7,`p`),Sk(8,`Antes de iniciar a migração certifique-se que:`),Kg(),Qc(9,`ul`)(10,`li`),Sk(11,`Este pacote de migração é apenas para a migração do `),Qc(12,`strong`),Sk(13,`THF versão 4 ou superior para o PO UI versão 1.x`),Kg(),Sk(14,` que é compatível com a versão 8 do Angular. `),Kg(),Qc(15,`li`),Sk(16,`As dependências do THF encontram-se na versão 4 ou superior.`),Kg(),Qc(17,`li`),Sk(18,`Todos os arquivos estão salvos.`),Kg(),Qc(19,`li`),Sk(20,`Se as pastas e os arquivos possuem permissão para terceiros alterá-los.`),Kg()(),Qc(21,`h3`,2),Sk(22,`Instalação do pacote de migração`),Kg(),Qc(23,`p`),Sk(24,`Instale globalmente o pacote `),Qc(25,`code`),Sk(26,`po-migration`),Kg(),Sk(27,` utilizando o npm, conforme o comando abaixo:`),Kg(),Qc(28,`pre`)(29,`code`),Sk(30,`npm install -g po-migration
`),Kg()(),Qc(31,`h3`,3),Sk(32,`Migrando o seu projeto`),Kg(),Qc(33,`p`),Sk(34,`Após a instalação, navegue até a pasta do projeto que você deseja migrar para o PO UI.`),Kg(),Qc(35,`p`),Sk(36,`Para iniciar a migração, execute o comando:`),Kg(),Qc(37,`pre`)(38,`code`),Sk(39,`po-migration start
`),Kg()(),Qc(40,`p`),Sk(41,`Este comando irá utilizar um dicionário de palavras-chaves do próprio THF para realizar a migração, ou seja, se tiver outra palavra que você criou e que não faz parte do THF, ele não irá alterar.`),Kg(),Qc(42,`p`),Sk(43,`No entanto, caso você queira alterar até mesmo palavras criadas por você, utilize o seguinte comando:`),Kg(),Qc(44,`pre`)(45,`code`),Sk(46,`po-migration start --all
`),Kg()(),Qc(47,`p`),Sk(48,`Este comando atualiza todas as palavras do projeto que contém "thf, t-, ou totvs".`),Kg(),Qc(49,`blockquote`)(50,`p`),Sk(51,`Ao utilizar a opção `),Qc(52,`code`),Sk(53,`--all`),Kg(),Sk(54,` certifique-se que n\xE3o foi alterado nenhuma palavra que fa\xE7a parte
do caminho de algum arquivo, que voc\xEA possa ter colocado com o nome contendo algumas das palavras "thf, t-, ou totvs".`),Kg()(),Qc(55,`p`),Sk(56,`Veja a documentação completa do pacote `),Qc(57,`code`),Sk(58,`po-migration`),Kg(),Sk(59,` executando o comando:`),Kg(),Qc(60,`pre`)(61,`code`),Sk(62,`po-migration --help
`),Kg()()())},dependencies:[Mze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var N=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:81,vars:0,consts:[[`p-title`,`Press Kit`,1,`guides`,`app-portal`],[`id`,`logomarca`],[`href`,`https://creativecommons.org/licenses/by/4.0/`],[1,`docs-presskit-row`,`po-mb-5`],[`src`,`./assets/po-logos/po_color_bg.svg`,`width`,`128`,`height`,`128`,`alt`,`Logo com segundo plano degradê`],[1,`po-ml-md-2`],[`href`,`./assets/po-logos/po_color_bg.png`,`download`,``],[`href`,`./assets/po-logos/po_color_bg.svg`,`download`,``],[`src`,`./assets/po-logos/po_color.svg`,`width`,`128`,`height`,`128`,`alt`,`Logo degradê`],[`href`,`./assets/po-logos/po_color.png`,`download`,``],[`href`,`./assets/po-logos/po_color.svg`,`download`,``],[`src`,`./assets/po-logos/po_black.svg`,`width`,`128`,`height`,`128`,`alt`,`Logo preto`],[`href`,`./assets/po-logos/po_black.png`,`download`,``],[`href`,`./assets/po-logos/po_black.svg`,`download`,``],[`src`,`./assets/po-logos/po_inverse.svg`,`width`,`128`,`height`,`128`,`alt`,`Logo branco com segundo plano preto`],[`href`,`./assets/po-logos/po_inverse.png`,`download`,``],[`href`,`./assets/po-logos/po_inverse.svg`,`download`,``],[`src`,`./assets/po-logos/po_white_mock_bg.png`,`width`,`128`,`height`,`128`,`alt`,`Logo branco com segundo plano transparente`],[`href`,`./assets/po-logos/po_white.png`,`download`,``],[`href`,`./assets/po-logos/po_white.svg`,`download`,``]],template:function(o,l){o&1&&(Qc(0,`po-page-default`,0)(1,`h2`,1),Sk(2,`Logomarca`),Kg(),Qc(3,`p`),Sk(4,`A licença para uso das variações de logomarca do `),Qc(5,`strong`),Sk(6,`PO UI`),Kg(),Sk(7,` é seguida de acordo com a `),Qc(8,`a`,2),Sk(9,`CC BY 4.0`),Kg(),Sk(10,`. Ou seja, pode-se utilizá-las como convier e para qualquer uso, como por exemplo na impressão em camisetas, divulgação em websites, etc.`),Kg(),Qc(11,`div`,3)(12,`div`),vu(13,`img`,4),Kg(),Qc(14,`div`,5)(15,`h3`),Sk(16,`Versão com segundo plano degradê`),Kg(),Qc(17,`p`),Sk(18,`Logo com segundo plano degradê (png) - `),Qc(19,`a`,6),Sk(20,`Download`),Kg()(),Qc(21,`p`),Sk(22,`Logo com segundo plano degradê (svg) - `),Qc(23,`a`,7),Sk(24,`Download`),Kg()()()(),Qc(25,`div`,3)(26,`div`),vu(27,`img`,8),Kg(),Qc(28,`div`,5)(29,`h3`),Sk(30,`Versão do logo degradê`),Kg(),Qc(31,`p`),Sk(32,`Logo degradê (png) - `),Qc(33,`a`,9),Sk(34,`Download`),Kg()(),Qc(35,`p`),Sk(36,`Logo degradê (svg) - `),Qc(37,`a`,10),Sk(38,`Download`),Kg()()()(),Qc(39,`div`,3)(40,`div`),vu(41,`img`,11),Kg(),Qc(42,`div`,5)(43,`h3`),Sk(44,`Versão do logo em preto`),Kg(),Qc(45,`p`),Sk(46,`Logo preto (png) - `),Qc(47,`a`,12),Sk(48,`Download`),Kg()(),Qc(49,`p`),Sk(50,`Logo preto (svg) - `),Qc(51,`a`,13),Sk(52,`Download`),Kg()()()(),Qc(53,`div`,3)(54,`div`),vu(55,`img`,14),Kg(),Qc(56,`div`,5)(57,`h3`),Sk(58,`Versão branco com segundo plano preto`),Kg(),Qc(59,`p`),Sk(60,`Logo branco (png) - `),Qc(61,`a`,15),Sk(62,`Download`),Kg()(),Qc(63,`p`),Sk(64,`Logo branco (svg) - `),Qc(65,`a`,16),Sk(66,`Download`),Kg()()()(),Qc(67,`div`,3)(68,`div`),vu(69,`img`,17),Kg(),Qc(70,`div`,5)(71,`h3`),Sk(72,`Versão branco com segundo plano transparente`),Kg(),Qc(73,`p`),Sk(74,`Logo branco (png) - `),Qc(75,`a`,18),Sk(76,`Download`),Kg()(),Qc(77,`p`),Sk(78,`Logo branco (svg) - `),Qc(79,`a`,19),Sk(80,`Download`),Kg()()()()())},dependencies:[Mze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var L=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:187,vars:0,consts:[[`p-title`,`Lançamentos e suporte`,1,`guides`,`app-portal`],[`id`,`cronograma-de-lancamentos`],[1,`po-row`],[1,`po-xl-12`,`po-lg-12`,`po-md-12`,`po-sm-12`],[`src`,`./assets/graphics/release-schedule.jpg`,`alt`,`Cronograma de Lançamentos`,2,`max-width`,`100%`,`max-height`,`33vh`],[`id`,`janela-de-suporte-po-ui`],[1,`po-xl-10`,`po-lg-12`,`po-md-12`,`po-sm-12`],[1,`po-table`,`po-text-color-neutral-dark-40`],[1,`po-table-header`],[1,`po-table-header-ellipsis`],[1,`po-table-row`],[1,`po-table-column`],[`id`,`versoes-po-ui`],[`href`,`https://semver.org/`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`id`,`seguranca-vulnerabilidades-em-versoes-lts`],[`href`,`https://angular.dev/reference/releases`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`guides/releases`],[`href`,`guides/migration-poui`],[`href`,`guides/getting-started`]],template:function(o,l){o&1&&(Qc(0,`po-page-default`,0)(1,`p`),Sk(2,`Suporte estendido para versões principais ímpares por até 18 meses, a partir da versão 17.`),Kg(),Qc(3,`h3`,1),Sk(4,`Cronograma de Lançamentos`),Kg(),Qc(5,`div`,2)(6,`div`,3),vu(7,`img`,4),Kg()(),Qc(8,`h3`,5),Sk(9,`Janela de Suporte PO UI`),Kg(),Qc(10,`p`),Sk(11,`Todas as versões Major Ímpares possuem período ativo de 12 meses + suporte (LTS) de 18 meses:`),Kg(),Qc(12,`div`,2)(13,`div`,6)(14,`table`,7)(15,`thead`)(16,`tr`,8)(17,`th`,9),Sk(18,`Estágio de suporte`),Kg(),Qc(19,`th`,9),Sk(20,`Tempo de suporte`),Kg(),Qc(21,`th`,9),Sk(22,`Detalhes`),Kg()()(),Qc(23,`tbody`)(24,`tr`,10)(25,`td`,11),Sk(26,`Active (versões major ímpares)`),Kg(),Qc(27,`td`,11),Sk(28,`12 meses`),Kg(),Qc(29,`td`,11),Sk(30,`Atualizações e correções programadas regularmente`),Kg()(),Qc(31,`tr`,10)(32,`td`,11),Sk(33,`Longo prazo (LTS) (versões major ímpares)`),Kg(),Qc(34,`td`,11),Sk(35,`18 meses`),Kg(),Qc(36,`td`,11),Sk(37,`Apenas correções nas versões ímpares`),Kg()(),Qc(38,`tr`,10)(39,`td`,11),Sk(40,`Active (versões major pares)`),Kg(),Qc(41,`td`,11),Sk(42,`6 meses`),Kg(),Qc(43,`td`,11),Sk(44,`Atualizações e correções programadas regularmente até o lançamento da próxima versão major ímpar`),Kg()()()()()(),Qc(45,`h3`,12),Sk(46,`Versões PO UI`),Kg(),Qc(47,`p`),Sk(48,`As bibliotecas seguem as regras de versionamento definidas pelo Semantic Versioning (SemVer), conforme descrito em: `),Qc(49,`a`,13),Sk(50,`https://semver.org/`),Kg()(),Qc(51,`div`,2)(52,`div`,6)(53,`table`,7)(54,`thead`)(55,`tr`,8)(56,`th`,9),Sk(57,`Versão`),Kg(),Qc(58,`th`,9),Sk(59,`Status`),Kg(),Qc(60,`th`,9),Sk(61,`Lançado`),Kg(),Qc(62,`th`,9),Sk(63,`Fim do período ativo`),Kg(),Qc(64,`th`,9),Sk(65,`Fim do LTS`),Kg()()(),Qc(66,`tbody`)(67,`tr`,10)(68,`td`,11),Sk(69,`^23.0.0*`),Kg(),Qc(70,`td`,11),Sk(71,`Previsto`),Kg(),Qc(72,`td`,11),Sk(73,`Janeiro/2027`),Kg(),Qc(74,`td`,11),Sk(75,`Dezembro/2027`),Kg(),Qc(76,`td`,11),Sk(77,`Junho/2029`),Kg()(),Qc(78,`tr`,10)(79,`td`,11),Sk(80,`^22.0.0*`),Kg(),Qc(81,`td`,11),Sk(82,`Previsto`),Kg(),Qc(83,`td`,11),Sk(84,`Julho/2026`),Kg(),Qc(85,`td`,11),Sk(86,`Dezembro/2026`),Kg(),Qc(87,`td`,11),Sk(88,`N/A`),Kg()(),Qc(89,`tr`,10)(90,`td`,11),Sk(91,`^21.0.0`),Kg(),Qc(92,`td`,11),Sk(93,`Active`),Kg(),Qc(94,`td`,11),Sk(95,`Janeiro/2026`),Kg(),Qc(96,`td`,11),Sk(97,`Dezembro/2026`),Kg(),Qc(98,`td`,11),Sk(99,`Junho/2028`),Kg()(),Qc(100,`tr`,10)(101,`td`,11),Sk(102,`^19.0.0`),Kg(),Qc(103,`td`,11),Sk(104,`LTS`),Kg(),Qc(105,`td`,11),Sk(106,`Janeiro/2025`),Kg(),Qc(107,`td`,11),Sk(108,`Dezembro/2025`),Kg(),Qc(109,`td`,11),Sk(110,`Junho/2027`),Kg()(),Qc(111,`tr`,10)(112,`td`,11),Sk(113,`^20.0.0`),Kg(),Qc(114,`td`,11),Sk(115,`Active Encerrado`),Kg(),Qc(116,`td`,11),Sk(117,`Setembro/2025`),Kg(),Qc(118,`td`,11),Sk(119,`Janeiro/2026`),Kg(),Qc(120,`td`,11),Sk(121,`N/A`),Kg()(),Qc(122,`tr`,10)(123,`td`,11),Sk(124,`^18.0.0`),Kg(),Qc(125,`td`,11),Sk(126,`Active Encerrado`),Kg(),Qc(127,`td`,11),Sk(128,`Julho/2024`),Kg(),Qc(129,`td`,11),Sk(130,`Dezembro/2024`),Kg(),Qc(131,`td`,11),Sk(132,`N/A`),Kg()(),Qc(133,`tr`,10)(134,`td`,11),Sk(135,`^17.0.0`),Kg(),Qc(136,`td`,11),Sk(137,`LTS Encerrado`),Kg(),Qc(138,`td`,11),Sk(139,`Março/2024`),Kg(),Qc(140,`td`,11),Sk(141,`Agosto/2024`),Kg(),Qc(142,`td`,11),Sk(143,`Agosto/2025`),Kg()()()()()(),Qc(144,`p`),Sk(145,`Versões LTS recebem apenas correções de segurança e bugs críticos. Não há novas funcionalidades ou melhorias visuais.`),Kg(),Qc(146,`blockquote`)(147,`p`),Sk(148,`*Datas aproximadas, sujeitas a alterações.`),Kg()(),Qc(149,`h3`,14),Sk(150,`Segurança — Vulnerabilidades em versões LTS`),Kg(),Qc(151,`p`),Sk(152,`Versões LTS podem apresentar `),Qc(153,`strong`),Sk(154,`vulnerabilidades altas ou críticas`),Kg(),Sk(155,` no `),Qc(156,`code`),Sk(157,`npm audit`),Kg(),Qc(158,`strong`),Sk(159,`sem patch disponível`),Kg(),Sk(160,`, especialmente quando o Angular (peer dependency) já encerrou o suporte da versão utilizada (`),Qc(161,`strong`),Sk(162,`EOL`),Kg(),Sk(163,`).`),Kg(),Qc(164,`blockquote`)(165,`p`),Sk(166,`O Status EOL reflete o estado do suporte ao respectivo produto no lançamento da release. O PO UI prestará suporte em sistemas operacionais, produtos, bibliotecas terceiras ou serviços (incluindo o Angular), apenas dentro do ciclo de vida e correções de vulnerabilidades estabelecidos por seus respectivos fabricantes e mantenedores. `),Qc(167,`strong`),Sk(168,`O PO UI não prestará suporte`),Kg(),Sk(169,` em sistemas operacionais, produtos, bibliotecas terceiras ou serviços fora de seus ciclos de vida ativos.`),Kg()(),Qc(170,`p`),Sk(171,`Planeje a migração para a versão Active quando possível.`),Kg(),Qc(172,`p`),Sk(173,`Referências:`),Kg(),Qc(174,`ul`)(175,`li`)(176,`a`,15),Sk(177,`Angular Release Schedule`),Kg()(),Qc(178,`li`)(179,`a`,16),Sk(180,`Releases e versionamento`),Kg()(),Qc(181,`li`)(182,`a`,17),Sk(183,`Migração do PO UI`),Kg()(),Qc(184,`li`)(185,`a`,18),Sk(186,`Primeiros passos`),Kg()()()())},dependencies:[Mze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var _=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:253,vars:0,consts:[[`p-title`,`Releases`,1,`guides`,`app-portal`],[`id`,`controle-de-versao-po-ui`],[`href`,`https://semver.org/`],[`id`,`caminhos-de-atualizacao-suportados`],[`id`,`comparativo-de-versoes-angular-x-po-ui`],[1,`po-row`],[1,`po-xl-6`,`po-lg-8`,`po-md-10`,`po-sm-12`],[1,`po-table`,`po-text-color-neutral-dark-40`],[1,`po-table-header`],[1,`po-table-header-ellipsis`],[1,`po-table-row`],[1,`po-table-column`],[`href`,`guides/migration-poui`],[`href`,`guides/migration-poui-v2`],[`href`,`guides/migration-thf-to-po-ui`],[`href`,`https://github.com/po-ui/po-angular/issues/1184`],[`id`,`versoes-previas`],[`href`,`https://www.npmjs.com/package/@po-ui/ng-components?activeTab=versions`],[`id`,`lancamentos-e-suporte`],[`href`,`guides/release-schedule`]],template:function(o,l){o&1&&(Qc(0,`po-page-default`,0)(1,`p`),Sk(2,`Reconhecemos que você precisa da estabilidade da estrutura PO UI. A estabilidade garante que os componentes, samples e tutoriais não se tornem obsoletos inesperadamente. A estabilidade é essencial para um ecossistema com angular e PO UI prosperar.`),Kg(),Qc(3,`p`),Sk(4,`Também compartilhamos com você o desejo de que o PO UI continue evoluindo. Nós nos esforçamos para garantir que a biblioteca de componentes sobre a qual está construindo sua aplicação continue melhorando e permitindo que você se mantenha atualizado com o resto do ecossistema do Angular e com as necessidades do usuário.`),Kg(),Qc(5,`p`),Sk(6,`Este documento contém as práticas que seguimos para fornecer a você uma biblioteca de componentes de ponta, equilibrada e com estabilidade. Nós nos esforçamos para garantir que as mudanças futuras sejam sempre introduzidas de forma previsível. Queremos que todos que dependam do PO UI saibam quando e como os novos recursos serão adicionados e estejam bem preparados quando os obsoletos são removidos.`),Kg(),Qc(7,`h2`,1),Sk(8,`Controle de Versão PO UI`),Kg(),Qc(9,`p`),Sk(10,`Os números de versão do PO UI indicam o nível de mudanças introduzidas pelo lançamento. Este uso de `),Qc(11,`a`,2),Sk(12,`versionamento semântico`),Kg(),Sk(13,` ajuda a entender o impacto potencial de atualizar para uma nova versão.`),Kg(),Qc(14,`p`),Sk(15,`Números de versão PO UI tem três partes: `),Qc(16,`code`),Sk(17,`major.minor.patch`),Kg(),Sk(18,`. Por exemplo, a versão 4.16.1 indica a versão principal 4, a versão secundária 2 e o nível de patch 1.`),Kg(),Qc(19,`p`),Sk(20,`O número da versão principal é incrementado com base na versão do Angular que ele atende.`),Kg(),Qc(21,`ul`)(22,`li`)(23,`strong`),Sk(24,`As versões principais`),Kg(),Sk(25,` contêm os novos recursos disponibilizados pelo Angular, mas espera-se uma assistência mínima do desenvolvedor durante a atualização. Ao atualizar para uma nova versão principal, pode ser necessário executar scripts de atualização, refatorar códigos, executar testes adicionais e aprender novas APIs.`),Kg(),Qc(26,`li`)(27,`strong`),Sk(28,`Versões secundárias`),Kg(),Sk(29,` contém novos recursos menores. Versões menores são totalmente compatíveis com versões anteriores; nenhuma assistência do desenvolvedor é esperada durante a atualização, mas você pode opcionalmente modificar seus aplicativos e bibliotecas para começar a usar novas APIs, recursos e capacidades que foram adicionados na versão. São incrementadas regularmente ao final de nossas sprints.`),Kg(),Qc(30,`li`)(31,`strong`),Sk(32,`Lançamentos de patch`),Kg(),Sk(33,` são lançamentos de correção de bugs. Nenhuma ajuda do desenvolvedor é esperada durante a atualização.`),Kg()(),Qc(34,`h2`,3),Sk(35,`Caminhos de atualização suportados`),Kg(),Qc(36,`p`),Sk(37,`Em alinhamento com o esquema de controle de versão descrito acima, nos comprometemos a oferecer suporte aos seguintes caminhos de atualização:`),Kg(),Qc(38,`ul`)(39,`li`),Sk(40,`Se você estiver atualizando na `),Qc(41,`strong`),Sk(42,`versão principal`),Kg(),Sk(43,`, poderá pular todas as versões intermediárias e atualizar diretamente para a versão de destino. Por exemplo, você pode atualizar diretamente da versão 4.0.0 para a 4.17.0.`),Kg(),Qc(44,`li`),Sk(45,`Se você estiver atualizando de `),Qc(46,`strong`),Sk(47,`uma versão principal para outra`),Kg(),Sk(48,`, recomendamos que `),Qc(49,`strong`),Sk(50,`não ignore as versões principais`),Kg(),Sk(51,`. Siga as instruções para atualizar de forma incremental para a próxima versão principal, testando e validando em cada erapa. Por exemplo, se você deseja atualizar da versão 2.xx para a versão 4.xx, recomendamos que você atualize para a versão 3.xx mais recente primeiro. Depois de atualizar com sucesso para a versão 3.xx, você pode atualizar para a 4.xx.`),Kg()(),Qc(52,`p`),Sk(53,`Consulte abaixo nossos guias de migração de versão para obter mais informações sobre como atualizar o PO UI para a versão mais recente nos seus projetos Angular.`),Kg(),Qc(54,`h3`,4),Sk(55,`Comparativo de versões Angular x PO UI`),Kg(),Qc(56,`div`,5)(57,`div`,6)(58,`table`,7)(59,`thead`)(60,`tr`,8)(61,`th`,9),Sk(62,`Angular`),Kg(),Qc(63,`th`,9),Sk(64,`PO UI`),Kg(),Qc(65,`th`,9),Sk(66,`Migração`),Kg()()(),Qc(67,`tbody`)(68,`tr`,10)(69,`td`,11),Sk(70,`22.0.0`),Kg(),Qc(71,`td`,11),Sk(72,`22.0.0`),Kg(),Qc(73,`td`,11)(74,`a`,12),Sk(75,`Migração do PO UI`),Kg()()(),Qc(76,`tr`,10)(77,`td`,11),Sk(78,`21.0.0`),Kg(),Qc(79,`td`,11),Sk(80,`21.0.0`),Kg(),Qc(81,`td`,11)(82,`a`,12),Sk(83,`Migração do PO UI`),Kg()()(),Qc(84,`tr`,10)(85,`td`,11),Sk(86,`20.0.0`),Kg(),Qc(87,`td`,11),Sk(88,`20.0.0`),Kg(),Qc(89,`td`,11)(90,`a`,12),Sk(91,`Migração do PO UI`),Kg()()(),Qc(92,`tr`,10)(93,`td`,11),Sk(94,`19.0.0`),Kg(),Qc(95,`td`,11),Sk(96,`19.0.0`),Kg(),Qc(97,`td`,11)(98,`a`,12),Sk(99,`Migração do PO UI`),Kg()()(),Qc(100,`tr`,10)(101,`td`,11),Sk(102,`18.0.0`),Kg(),Qc(103,`td`,11),Sk(104,`18.0.0`),Kg(),Qc(105,`td`,11)(106,`a`,12),Sk(107,`Migração do PO UI`),Kg()()(),Qc(108,`tr`,10)(109,`td`,11),Sk(110,`17.0.0`),Kg(),Qc(111,`td`,11),Sk(112,`17.0.0`),Kg(),Qc(113,`td`,11)(114,`a`,12),Sk(115,`Migração do PO UI`),Kg()()(),Qc(116,`tr`,10)(117,`td`,11),Sk(118,`16.0.0`),Kg(),Qc(119,`td`,11),Sk(120,`16.0.0`),Kg(),Qc(121,`td`,11)(122,`a`,12),Sk(123,`Migração do PO UI`),Kg()()(),Qc(124,`tr`,10)(125,`td`,11),Sk(126,`15.0.0`),Kg(),Qc(127,`td`,11),Sk(128,`15.0.0`),Kg(),Qc(129,`td`,11)(130,`a`,12),Sk(131,`Migração do PO UI`),Kg()()(),Qc(132,`tr`,10)(133,`td`,11),Sk(134,`14.0.0`),Kg(),Qc(135,`td`,11),Sk(136,`14.0.0`),Kg(),Qc(137,`td`,11)(138,`a`,12),Sk(139,`Migração do PO UI`),Kg()()(),Qc(140,`tr`,10)(141,`td`,11),Sk(142,`13.0.0`),Kg(),Qc(143,`td`,11),Sk(144,`6.0.0`),Kg(),Qc(145,`td`,11)(146,`a`,12),Sk(147,`Migração do PO UI`),Kg()()(),Qc(148,`tr`,10)(149,`td`,11),Sk(150,`12.0.0`),Kg(),Qc(151,`td`,11),Sk(152,`5.0.0`),Kg(),Qc(153,`td`,11)(154,`a`,12),Sk(155,`Migração do PO UI`),Kg()()(),Qc(156,`tr`,10)(157,`td`,11),Sk(158,`11.0.0`),Kg(),Qc(159,`td`,11),Sk(160,`4.0.0`),Kg(),Qc(161,`td`,11)(162,`a`,12),Sk(163,`Migração do PO UI`),Kg()()(),Qc(164,`tr`,10)(165,`td`,11),Sk(166,`10.0.0`),Kg(),Qc(167,`td`,11),Sk(168,`3.0.0`),Kg(),Qc(169,`td`,11)(170,`a`,12),Sk(171,`Migração do PO UI`),Kg()()(),Qc(172,`tr`,10)(173,`td`,11),Sk(174,`9.0.0`),Kg(),Qc(175,`td`,11),Sk(176,`2.0.0`),Kg(),Qc(177,`td`,11)(178,`a`,13),Sk(179,`Migração do PO UI para V2`),Kg()()(),Qc(180,`tr`,10)(181,`td`,11),Sk(182,`8.0.0`),Kg(),Qc(183,`td`,11),Sk(184,`1.0.0`),Kg(),Qc(185,`td`,11)(186,`a`,14),Sk(187,`Migração THF para PO UI v1.x`),Kg()()()()()()(),Qc(188,`blockquote`)(189,`p`),Sk(190,`Conforme agenda de publicação de novas versões estáveis do Angular, nós atualizamos nossas versões como de costume e aproveitaremos para fazer uma mudança na nomenclatura das nossas versões. A versão `),Qc(191,`code`),Sk(192,`v7.x.x`),Kg(),Sk(193,` foi lançada como `),Qc(194,`strong`)(195,`code`),Sk(196,`v14.x.x`),Kg()(),Sk(197,`, assim `),Qc(198,`code`),Sk(199,`a versão 14.x.x do PO UI tem compatibilidade com a v14 do Angular`),Kg(),Sk(200,` e assim por diante. `),Qc(201,`a`,15),Sk(202,`Mais informações`),Kg(),Sk(203,`.`),Kg()(),Qc(204,`h2`,16),Sk(205,`Versões prévias`),Kg(),Qc(206,`p`),Sk(207,`Permitimos que você visualize o que está por vir, fornecendo pré-lançamentos `),Qc(208,`code`),Sk(209,`next`),Kg(),Sk(210,` ou Release Candidates (`),Qc(211,`code`),Sk(212,`rc`),Kg(),Sk(213,`) para cada versão principal:`),Kg(),Qc(214,`ul`)(215,`li`)(216,`strong`),Sk(217,`Next`),Kg(),Sk(218,`: a versão que está em desenvolvimento, com testes ativos e com breaking changes a resolver. O próximo lançamento é indicado por uma tag de lançamento anexada ao identificador `),Qc(219,`code`),Sk(220,`-next`),Kg(),Sk(221,`, como `),Qc(222,`code`),Sk(223,`17.0.0-next`),Kg(),Sk(224,`.`),Kg(),Qc(225,`li`)(226,`strong`),Sk(227,`Release Candidate`),Kg(),Sk(228,`: um lançamento com recurso concluído, teste finalizado e sem breaking changes a resolver. Um candidato a lançamento é indicado por uma tag de lançamento anexada ao identificador `),Qc(229,`code`),Sk(230,`-rc`),Kg(),Sk(231,`, como versão `),Qc(232,`code`),Sk(233,`17.0.0-rc`),Kg(),Sk(234,`.`),Kg()(),Qc(235,`p`),Sk(236,`A versão mais recente `),Qc(237,`code`),Sk(238,`next`),Kg(),Sk(239,` ou de pré-lançamento `),Qc(240,`code`),Sk(241,`rc`),Kg(),Sk(242,` fica disponível no `),Qc(243,`a`,17),Sk(244,`npm do projeto`),Kg(),Sk(245,`.`),Kg(),Qc(246,`h2`,18),Sk(247,`Lançamentos e suporte`),Kg(),Qc(248,`p`),Sk(249,`Para informações sobre o cronograma de lançamentos, janela de suporte (Active/LTS) e política de segurança em versões LTS, consulte o guia `),Qc(250,`a`,19),Sk(251,`Lançamentos e suporte`),Kg(),Sk(252,`.`),Kg()())},dependencies:[Mze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var B=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:60,vars:0,consts:[[`p-title`,`Schematics`,1,`guides`,`app-portal`],[`href`,`https://angular.io/cli`],[`id`,`instalando`],[`id`,`po-ui-components`],[`id`,`po-ui-templates`]],template:function(o,l){o&1&&(Qc(0,`po-page-default`,0)(1,`p`),Sk(2,`O PO contém `),Qc(3,`em`),Sk(4,`schematics`),Kg(),Sk(5,` do `),Qc(6,`a`,1),Sk(7,`Angular CLI`),Kg(),Sk(8,` em seu pacote, para facilitar o desenvolvimento de aplicações PO.`),Kg(),Qc(9,`h2`,2),Sk(10,`Instalando`),Kg(),Qc(11,`p`),Sk(12,`Um vez que for instalado o pacotes, teremos disponível os `),Qc(13,`em`),Sk(14,`schematics`),Kg(),Sk(15,` através do Angular CLI.`),Kg(),Qc(16,`h3`,3),Sk(17,`PO UI Components`),Kg(),Qc(18,`p`),Sk(19,`Caso esteja iniciando uma aplica\xE7\xE3o com PO, indica-se utilizar o comando abaixo,
no qual ser\xE1 instalado o pacote `),Qc(20,`code`),Sk(21,`@po-ui/ng-components`),Kg(),Sk(22,` e realizadas algumas configurações, que serão descritas em seguida:`),Kg(),Qc(23,`pre`)(24,`code`),Sk(25,`ng add @po-ui/ng-components@next
`),Kg()(),Qc(26,`ul`)(27,`li`),Sk(28,`Substitui o `),Qc(29,`code`),Sk(30,`AppComponent`),Kg(),Sk(31,` com uma estrutura incial de um projeto, utilizando os components `),Qc(32,`code`),Sk(33,`po-page-default`),Kg(),Sk(34,`, `),Qc(35,`code`),Sk(36,`po-toolbar`),Kg(),Sk(37,`, e `),Qc(38,`code`),Sk(39,`po-menu`),Kg(),Sk(40,`;`),Kg(),Qc(41,`li`),Sk(42,`Importa o módulo do PO;`),Kg(),Qc(43,`li`),Sk(44,`Configura o tema do PO no projeto;`),Kg()(),Qc(45,`h3`,4),Sk(46,`PO UI Templates`),Kg(),Qc(47,`p`),Sk(48,`Para a utiliza\xE7\xE3o de componentes de template o processo para inclus\xE3o \xE9 semelhante.
Primeiramente, deve-se utilizar o comando abaixo, no qual ser\xE1 instalado o pacote `),Qc(49,`code`),Sk(50,`@po-ui/ng-templates`),Kg(),Sk(51,`:`),Kg(),Qc(52,`pre`)(53,`code`),Sk(54,`ng add @po-ui/ng-templates@next
`),Kg()(),Qc(55,`ul`)(56,`li`),Sk(57,`Importa o módulo do PO;`),Kg(),Qc(58,`li`),Sk(59,`Configura o tema do PO no projeto caso não possua;`),Kg()()())},dependencies:[Mze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var H=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:1071,vars:0,consts:[[`p-title`,`Fundamentos do PO Sync`,1,`guides`,`app-portal`],[`id`,`conteudo`],[`href`,`guides/sync-fundamentals#introduction`],[`href`,`guides/sync-fundamentals#knowledge`],[`href`,`guides/sync-fundamentals#schemas`],[`href`,`guides/sync-fundamentals#create-schema`],[`href`,`guides/sync-fundamentals#schematic`],[`href`,`guides/sync-fundamentals#prepare-api`],[`href`,`guides/sync-fundamentals#logical-deletion`],[`href`,`guides/sync-fundamentals#sync-url`],[`href`,`guides/sync-fundamentals#prepare`],[`href`,`guides/sync-fundamentals#periodic`],[`href`,`guides/sync-fundamentals#load-data`],[`href`,`guides/sync-fundamentals#po-entity`],[`href`,`guides/sync-fundamentals#find-data`],[`href`,`guides/sync-fundamentals#save-and-remove`],[`href`,`guides/sync-fundamentals#sync`],[`href`,`guides/sync-fundamentals#advanced-techniques`],[`href`,`guides/sync-fundamentals#on-sync`],[`href`,`guides/sync-fundamentals#po-data-transform`],[`href`,`guides/sync-fundamentals#get-responses`],[`href`,`guides/sync-fundamentals#insert-http-command`],[`href`,`guides/sync-fundamentals#custom-request-id`],[`href`,`guides/sync-fundamentals#schemas-definition`],[`href`,`guides/sync-fundamentals#po-conference`],[`id`,`introduction`],[`id`,`introducao`],[`id`,`como-o-po-sync-mantem-os-dados-atualizados-com-o-servidor`],[2,`text-align`,`center`],[`src`,`./assets/graphics/po-sync/event-sourcing.jpg`,1,`po-mt-2`,`po-mb-2`,2,`max-width`,`100%`],[`id`,`como-ocorre-a-sincronizacao`],[`src`,`./assets/graphics/po-sync/sync-send.jpg`,1,`po-mt-2`,`po-mb-2`,2,`max-width`,`100%`],[`src`,`./assets/graphics/po-sync/sync-get.jpg`,1,`po-mt-2`,`po-mb-2`,2,`max-width`,`100%`],[`href`,`/documentation/po-sync`],[`href`,`guides/sync-get-started`],[`id`,`knowledge`],[`id`,`conhecimentos-necessarios`],[`href`,`http://es6-features.org`],[`href`,`http://es6-features.org/#PromiseUsage`],[`href`,`https://ionicframework.com/`],[`href`,`http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html`],[`href`,`https://rxjs-dev.firebaseapp.com/guide/overview`],[`id`,`schemas`],[`id`,`create-schema`],[`id`,`como-criar-um-schema`],[1,`language-shell`],[1,`language-typescript`],[`id`,`schematic`],[`id`,`prepare-api`],[`id`,`preparando-a-api-para-a-sincronizacao`],[`id`,`logical-deletion`],[`id`,`exclusao-logica`],[1,`language-javascript`],[`id`,`porque-exclusao-logica`],[`id`,`sync-url`],[`id`,`endpoint-de-sincronizacao`],[`href`,`https://po-sample-conference.onrender.com/conferences/diff/2018-10-08T13:23:31.893Z`],[`href`,`https://po-ui.io/guides/api`],[`id`,`prepare`],[`id`,`preparando-a-aplicacao`],[`id`,`periodic`],[`id`,`sincronizacao-periodica`],[`id`,`load-data`],[`id`,`carga-inicial-dos-dados`],[`id`,`po-entity`],[`id`,`manipulando-os-registros-de-um-schema`],[`href`,`/documentation/po-entity`],[`id`,`find-data`],[`id`,`buscando-os-registros`],[`href`,`/documentation/po-query-builder`],[`id`,`save-and-remove`],[`id`,`criacao-atualizacao-e-exclusao-de-um-registro`],[`id`,`sync`],[`id`,`sincronizacao-manual`],[`id`,`advanced-techniques`],[`id`,`tecnicas-avancadas`],[`id`,`on-sync`],[`id`,`notificacao-pos-sincronizacao`],[`id`,`po-data-transform`],[`id`,`adaptando-a-resposta-da-api-para-o-padrao-do-po`],[`href`,`/documentation/po-data-transform`],[`id`,`get-responses`],[`id`,`capturando-respostas-da-sincronizacao`],[`id`,`em-que-situacoes-este-monitoramento-pode-ser-util`],[`href`,`/documentation/po-event-sourcing-error-response`],[`id`,`insert-http-command`],[`id`,`inserindo-requisicoes-http-na-fila-de-eventos`],[`id`,`custom-request-id`],[`id`,`criacao-de-identificador-customizado-para-eventos-da-fila`],[`id`,`schemas-definition`],[`id`,`alterando-as-definicoes-dos-schemas`],[`id`,`po-conference`],[`id`,`aplicativo-de-demonstracao-do-po-sync`],[`href`,`https://github.com/ionic-team/ionic-conference-app`],[`href`,`https://github.com/po-ui/po-sample-conference`]],template:function(o,l){o&1&&(Qc(0,`po-page-default`,0)(1,`h2`,1),Sk(2,`Conteúdo`),Kg(),Qc(3,`ul`)(4,`li`)(5,`a`,2),Sk(6,`Introdução`),Kg()(),Qc(7,`li`)(8,`a`,3),Sk(9,`Conhecimentos necessários`),Kg()(),Qc(10,`li`)(11,`a`,4)(12,`em`),Sk(13,`Schemas`),Kg()(),Qc(14,`ul`)(15,`li`)(16,`a`,5),Sk(17,`Como criar um `),Qc(18,`em`),Sk(19,`schema`),Kg()()(),Qc(20,`li`)(21,`a`,6),Sk(22,`Schematic`),Kg()()()(),Qc(23,`li`)(24,`a`,7),Sk(25,`Preparando a API para a sincronização`),Kg(),Qc(26,`ul`)(27,`li`)(28,`a`,8),Sk(29,`Exclusão lógica`),Kg()(),Qc(30,`li`)(31,`a`,9)(32,`em`),Sk(33,`Endpoint`),Kg(),Sk(34,` de sincronização`),Kg()()()(),Qc(35,`li`)(36,`a`,10),Sk(37,`Preparando a aplicação`),Kg(),Qc(38,`ul`)(39,`li`)(40,`a`,11),Sk(41,`Sincronização periódica`),Kg()(),Qc(42,`li`)(43,`a`,12),Sk(44,`Carga inicial dos dados`),Kg()()()(),Qc(45,`li`)(46,`a`,13),Sk(47,`Manipulando os registros de um `),Qc(48,`em`),Sk(49,`schema`),Kg()(),Qc(50,`ul`)(51,`li`)(52,`a`,14),Sk(53,`Buscando os registros`),Kg()(),Qc(54,`li`)(55,`a`,15),Sk(56,`Criação, atualização e exclusão de um registro`),Kg()()()(),Qc(57,`li`)(58,`a`,16),Sk(59,`Sincronização manual`),Kg()(),Qc(60,`li`)(61,`a`,17),Sk(62,`Técnicas avançadas`),Kg(),Qc(63,`ul`)(64,`li`)(65,`a`,18),Sk(66,`Notificação pós-sincronização`),Kg()(),Qc(67,`li`)(68,`a`,19),Sk(69,`Adaptando a resposta da API para o padrão do PO UI`),Kg()(),Qc(70,`li`)(71,`a`,20),Sk(72,`Capturando respostas da sincronização`),Kg()(),Qc(73,`li`)(74,`a`,21),Sk(75,`Inserindo requisições HTTP na fila de eventos`),Kg()(),Qc(76,`li`)(77,`a`,22),Sk(78,`Criação de identificador customizado para eventos da fila`),Kg()(),Qc(79,`li`)(80,`a`,23),Sk(81,`Alterando as definições dos `),Qc(82,`em`),Sk(83,`schemas`),Kg()()()()(),Qc(84,`li`)(85,`a`,24),Sk(86,`Aplicativo de demonstração do PO Sync`),Kg()()(),Qc(87,`p`),vu(88,`a`,25),Kg(),Qc(89,`h2`,26),Sk(90,`Introdução`),Kg(),Qc(91,`p`),Sk(92,`O PO Sync \xE9 uma biblioteca que possibilita armazenar dados na aplica\xE7\xE3o local mantendo a sincroniza\xE7\xE3o entre os dados locais e o servidor.
Permitindo que o usu\xE1rio utilize a aplica\xE7\xE3o tanto `),Qc(93,`em`),Sk(94,`online`),Kg(),Sk(95,` quanto `),Qc(96,`em`),Sk(97,`offline`),Kg(),Sk(98,`, com a mesma experiência de uso.`),Kg(),Qc(99,`h3`,27),Sk(100,`Como o PO Sync mantém os dados atualizados com o servidor?`),Kg(),Qc(101,`p`),Sk(102,`Todas as modifica\xE7\xF5es nos registros como criar, alterar e excluir acontecem primeiramente no armazenamento local.
Para cada modifica\xE7\xE3o feita em um registro tamb\xE9m \xE9 criado um evento. Este evento representa uma opera\xE7\xE3o, sendo
composto basicamente pelo tipo de opera\xE7\xE3o (cria\xE7\xE3o, altera\xE7\xE3o ou remo\xE7\xE3o) e o registro modificado.
Este evento \xE9 adicionado a uma fila de eventos que ser\xE1 consumida pelo processo de sincroniza\xE7\xE3o (atualiza\xE7\xE3o dos dados).
Este processo \xE9 demonstrado na figura a seguir:`),Kg(),Qc(103,`p`,28),vu(104,`img`,29),Kg(),Qc(105,`p`),Sk(106,`É no processo de sincronização que os dados são atualizados tanto da aplicação local para o servidor quanto do servidor para a aplicação local.`),Kg(),Qc(107,`blockquote`)(108,`p`),Sk(109,`A sincronização sempre acontece com a aplicação `),Qc(110,`em`),Sk(111,`online`),Kg(),Sk(112,` e em segundo plano, permitindo que o usuário continue utilizando a aplicação normalmente.`),Kg()(),Qc(113,`h4`,30),Sk(114,`Como ocorre a sincronização?`),Kg(),Qc(115,`p`),Sk(116,`A sincronização dos dados acontece em duas etapas:`),Kg(),Qc(117,`p`)(118,`strong`),Sk(119,`1)`),Kg(),Sk(120,` Busca os itens da fila de eventos e envia os dados modificados da aplicação local para o servidor sequencialmente:`),Kg(),Qc(121,`p`,28),vu(122,`img`,31),Kg(),Qc(123,`p`)(124,`strong`),Sk(125,`2)`),Kg(),Sk(126,` Busca os dados que foram modificados no servidor e atualiza na aplicação local:`),Kg(),Qc(127,`p`,28),vu(128,`img`,32),Kg(),Qc(129,`p`),Sk(130,`Esta sincronização pode ser acionada (gatilho) das seguintes formas:`),Kg(),Qc(131,`ul`)(132,`li`)(133,`p`),Sk(134,`Reativa: toda vez que houver alguma mudança no hardware do dispositivo, como na troca do tipo de rede 4G para WI-FI;`),Kg()(),Qc(135,`li`)(136,`p`)(137,`a`,11),Sk(138,`Periódica`),Kg(),Sk(139,`: será acionada periodicamente baseada nos parâmetros de configurações do `),Qc(140,`a`,33),Sk(141,`PoSyncConfig`),Kg(),Sk(142,`;`),Kg()(),Qc(143,`li`)(144,`p`)(145,`a`,16),Sk(146,`Manualmente`),Kg(),Sk(147,`: será acionada na chamada manual do método `),Qc(148,`code`),Sk(149,`PoSyncService.sync()`),Kg(),Sk(150,`.`),Kg()()(),Qc(151,`blockquote`)(152,`p`),Sk(153,`Antes de continuar os próximos passos, siga as instruções do `),Qc(154,`a`,34),Sk(155,`Começando com o PO Sync`),Kg(),Sk(156,` para
saber como criar um novo projeto com Ionic 7 utilizando o PO Sync.`),Kg()(),Qc(157,`p`),vu(158,`a`,35),Kg(),Qc(159,`h2`,36),Sk(160,`Conhecimentos necessários`),Kg(),Qc(161,`p`),Sk(162,`Para compreender o funcionamento do PO Sync e utilizá-lo é necessário ter conhecimento técnico em:`),Kg(),Qc(163,`ul`)(164,`li`)(165,`a`,37),Sk(166,`JavaScript (ES6)`),Kg(),Sk(167,`, em particular a utilização do padrão `),Qc(168,`a`,38)(169,`em`),Sk(170,`Promises`),Kg()(),Sk(171,`;`),Kg(),Qc(172,`li`)(173,`a`,39),Sk(174,`Ionic`),Kg(),Sk(175,`;`),Kg(),Qc(176,`li`)(177,`a`,40),Sk(178,`Observable`),Kg(),Sk(179,` do `),Qc(180,`a`,41),Sk(181,`RxJS`),Kg(),Sk(182,`;`),Kg(),Qc(183,`li`),Sk(184,`Protocolo de comunicação HTTP;`),Kg(),Qc(185,`li`),Sk(186,`Arquitetura REST.`),Kg()(),Qc(187,`p`),vu(188,`a`,42),Kg(),Qc(189,`h2`,42)(190,`em`),Sk(191,`Schemas`),Kg()(),Qc(192,`p`),Sk(193,`O PO Sync sincroniza os dados com base em um conjunto de `),Qc(194,`em`),Sk(195,`schemas`),Kg(),Sk(196,`. Onde cada `),Qc(197,`em`),Sk(198,`schema`),Kg(),Sk(199,` representa um modelo de dados,
ou seja, a estrutura l\xF3gica e as caracter\xEDsticas de um conjunto de registros. Sendo semelhante a uma tabela
convencional de um banco de dados, como por exemplo uma tabela de clientes, produtos ou autom\xF3veis. No entanto os `),Qc(200,`em`),Sk(201,`schemas`),Kg(),Sk(202,`
n\xE3o possuem relacionamentos entre si como as tabelas convencionais.`),Kg(),Qc(203,`p`),vu(204,`a`,43),Kg(),Qc(205,`h3`,44),Sk(206,`Como criar um `),Qc(207,`em`),Sk(208,`schema`),Kg()(),Qc(209,`p`),Sk(210,`Cada `),Qc(211,`em`),Sk(212,`schema`),Kg(),Sk(213,` deve implementar a interface `),Qc(214,`a`,33),Sk(215,`PoSyncSchema`),Kg(),Sk(216,`. Para criar um `),Qc(217,`em`),Sk(218,`schema`),Kg(),Sk(219,` que represente uma "Confer\xEAncia"
podemos fazer:`),Kg(),Qc(220,`pre`)(221,`code`,45),Sk(222,`ng generate @po-ui/ng-sync:schema --name=conference
`),Kg()(),Qc(223,`p`),Sk(224,`O comando ng generate do Angular CLI criará um arquivo com uma estrutura semelhante a essa:`),Kg(),Qc(225,`pre`)(226,`code`,46),Sk(227,`import { PoSyncSchema } from '@po-ui/ng-sync';

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
`),Kg()(),Qc(228,`p`),Sk(229,`Nesta definição de `),Qc(230,`em`),Sk(231,`schema`),Kg(),Sk(232,` podem ser configurados os `),Qc(233,`em`),Sk(234,`endpoints`),Kg(),Sk(235,` para os m\xE9todos HTTP: GET, POST, DELETE e PATCH,
sendo somente o `),Qc(236,`em`),Sk(237,`endpoint`),Kg(),Sk(238,` do m\xE9todo GET obrigat\xF3rio. Caso os demais n\xE3o sejam informados, ser\xE1 utilizado o mesmo endere\xE7o
do `),Qc(239,`em`),Sk(240,`endpoint`),Kg(),Sk(241,` do método GET para os outros métodos.`),Kg(),Qc(242,`p`),Sk(243,`A propriedade `),Qc(244,`code`),Sk(245,`fields`),Kg(),Sk(246,` da interface `),Qc(247,`a`,33),Sk(248,`PoSyncSchema`),Kg(),Sk(249,` representa os campos que estar\xE3o no registro.
Por exemplo, para um `),Qc(250,`em`),Sk(251,`schema`),Kg(),Sk(252,` do tipo Pessoa, poderíamos ter os campos: nome, idade e endereço.`),Kg(),Qc(253,`p`),Sk(254,`N\xE3o necessariamente precisam ser representados todos os campos retornados pela API, somente os necess\xE1rios para as
manipula\xE7\xF5es atrav\xE9s do PO Sync.`),Kg(),Qc(255,`p`),vu(256,`a`,47),Kg(),Qc(257,`h3`,47),Sk(258,`Schematic`),Kg(),Qc(259,`p`),Sk(260,`Você pode utilizar um schematic para criar o arquivo com a estrutura básica do schema.`),Kg(),Qc(261,`p`),Sk(262,`Para isso utilize o comando`),Kg(),Qc(263,`pre`)(264,`code`,45),Sk(265,`ng generate @po-ui/ng-sync:schema
`),Kg()(),Qc(266,`p`),Sk(267,`Você também pode informar um caminho completo.`),Kg(),Qc(268,`pre`)(269,`code`,45),Sk(270,`ng generate @po-ui/ng-sync:schema --name=conference/schema/conference
`),Kg()(),Qc(271,`p`),Sk(272,`Ou apenas o nome do schema que ele criará o arquivo na pasta que o comando for executado.`),Kg(),Qc(273,`pre`)(274,`code`,45),Sk(275,`ng generate @po-ui/ng-sync:schema --name=conference
`),Kg()(),Qc(276,`p`),vu(277,`a`,48),Kg(),Qc(278,`h2`,49),Sk(279,`Preparando a API para a sincronização`),Kg(),Qc(280,`p`),Sk(281,`Para que a sincronização aconteça corretamente é necessário que a API tenha implementado a `),Qc(282,`a`,8),Sk(283,`exclusão lógica`),Kg(),Sk(284,` e um `),Qc(285,`a`,9)(286,`em`),Sk(287,`endpoint`),Kg(),Sk(288,` de sincronização`),Kg(),Sk(289,`.`),Kg(),Qc(290,`p`),vu(291,`a`,50),Kg(),Qc(292,`h3`,51),Sk(293,`Exclusão lógica`),Kg(),Qc(294,`p`),Sk(295,`A exclus\xE3o dos registros na API dever\xE1 ser feita de forma l\xF3gica, ou seja, \xE9 necess\xE1rio que cada registro contenha um
campo que representa se aquele registro foi exclu\xEDdo, por exemplo:`),Kg(),Qc(296,`pre`)(297,`code`,52),Sk(298,`{
  "id": 1,
  "title": "PO conference 2018",
  "date": "2018-08-11T00:00:00Z",
  "location": "Av. Santos Dumont, 831 - Santo Ant\xF4nio, Joinville - SC",
  "description": "Conference organized by PO",
  // Campo informando se o registro foi exclu\xEDdo
  "isDeleted": false
}
`),Kg()(),Qc(299,`p`),Sk(300,`No registro acima o campo chamado `),Qc(301,`code`),Sk(302,`isDeleted`),Kg(),Sk(303,` descreve se ele foi excluído ou não.`),Kg(),Qc(304,`p`),Sk(305,`Esta informação do campo deverá ser fornecida ao PO Sync dentro da declaração de cada `),Qc(306,`em`),Sk(307,`schema`),Kg(),Sk(308,`, para isso temos a
propriedade `),Qc(309,`code`),Sk(310,`deletedField`),Kg(),Sk(311,` na interface `),Qc(312,`a`,33),Sk(313,`PoSyncSchema`),Kg(),Sk(314,`, por exemplo:`),Kg(),Qc(315,`pre`)(316,`code`,46),Sk(317,`import { PoSyncSchema } from '@po-ui/ng-sync';

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
`),Kg()(),Qc(318,`h4`,53),Sk(319,`Porque exclusão lógica?`),Kg(),Qc(320,`p`),Sk(321,`A exclusão lógica é utilizada para que outras aplicações possam saber se um registro foi removido.`),Kg(),Qc(322,`p`),Sk(323,`Imagine que dois aplicativos estejam manipulando o mesmo registro através de um `),Qc(324,`em`),Sk(325,`endpoint`),Kg(),Sk(326,`. Um dos aplicativos remove
este registro, como o outro aplicativo saber\xE1 que este registro foi removido? Atrav\xE9s da exclus\xE3o l\xF3gica, o PO Sync
tem o controle dessa informa\xE7\xE3o.`),Kg(),Qc(327,`p`),vu(328,`a`,54),Kg(),Qc(329,`h3`,55)(330,`em`),Sk(331,`Endpoint`),Kg(),Sk(332,` de sincronização`),Kg(),Qc(333,`p`),Sk(334,`Sempre que houver uma sincronização, uma requisição é feita neste `),Qc(335,`em`),Sk(336,`endpoint`),Kg(),Sk(337,` utilizando a data da \xFAltima sincroniza\xE7\xE3o
como refer\xEAncia (como par\xE2metro da URL). Ao receber esta data, o `),Qc(338,`em`),Sk(339,`endpoint`),Kg(),Sk(340,` deve retornar todos os registros que
tiveram a \xFAltima atualiza\xE7\xE3o maior ou igual a data que foi recebida como par\xE2metro, logo, somente os dados n\xE3o
sincronizados ser\xE3o retornados. Para cada um dos `),Qc(341,`em`),Sk(342,`schemas`),Kg(),Sk(343,` é necessário ter um `),Qc(344,`em`),Sk(345,`endpoint`),Kg(),Sk(346,` de sincronização.`),Kg(),Qc(347,`p`),Sk(348,`Abra o seu navegador e acesse a URL
`),Qc(349,`a`,56),Sk(350,`https://po-sample-conference.onrender.com/conferences/diff/2018-10-08T13:23:31.893Z`),Kg(),Sk(351,`.`),Kg(),Qc(352,`p`),Sk(353,`O `),Qc(354,`em`),Sk(355,`endpoint`),Kg(),Sk(356,` de sincronização deve retornar uma resposta com a estrutura como a da URL acima, por exemplo:`),Kg(),Qc(357,`pre`)(358,`code`,52),Sk(359,`{
  "hasNext": false,
  "items": [],
  "po_sync_date": "2018-10-08T13:57:55.008Z"
}
`),Kg()(),Qc(360,`p`),Sk(361,`Onde:`),Kg(),Qc(362,`ul`)(363,`li`)(364,`code`),Sk(365,`hasNext`),Kg(),Sk(366,`: Indica se existe uma próxima página com mais registros para aquela coleção de itens.`),Kg(),Qc(367,`li`)(368,`code`),Sk(369,`items`),Kg(),Sk(370,`: Lista de itens retornados.`),Kg(),Qc(371,`li`)(372,`code`),Sk(373,`po_sync_date`),Kg(),Sk(374,`: Data da \xFAltima sincroniza\xE7\xE3o. Ao realizar esta requisi\xE7\xE3o estamos solicitando uma
sincroniza\xE7\xE3o, ent\xE3o esta data deve ser a data em que o servidor est\xE1 devolvendo a resposta. Se na requisi\xE7\xE3o o `),Qc(375,`em`),Sk(376,`endpoint`),Kg(),Sk(377,`
n\xE3o enviar esta data, n\xE3o ser\xE1 poss\xEDvel fazer a pr\xF3xima sincroniza\xE7\xE3o, pois esta data ser\xE1 utilizada
para a pr\xF3xima URL de sincroniza\xE7\xE3o.`),Kg()(),Qc(378,`blockquote`)(379,`p`),Sk(380,`Esta estrutura de resposta é padronizada pelo `),Qc(381,`a`,57),Sk(382,`Guia de implementação de APIs`),Kg(),Sk(383,`.`),Kg()(),Qc(384,`blockquote`)(385,`p`)(386,`strong`),Sk(387,`Primeira sincronização:`),Kg(),Sk(388,` como na primeira sincronização o PO Sync ainda não recebeu nenhuma data dos `),Qc(389,`em`),Sk(390,`endpoints`),Kg(),Sk(391,`, a URL \xE9 montada com uma data muito
antiga, o que faz com que todos os dados sejam retornados na primeira sincroniza\xE7\xE3o.`),Kg()(),Qc(392,`p`),Sk(393,`A definição deste `),Qc(394,`em`),Sk(395,`endpoint`),Kg(),Sk(396,` deve ser feita na propriedade `),Qc(397,`code`),Sk(398,`diffUrlApi`),Kg(),Sk(399,` da sua definição do `),Qc(400,`em`),Sk(401,`schema`),Kg(),Sk(402,`, como no exemplo
abaixo:`),Kg(),Qc(403,`pre`)(404,`code`,46),Sk(405,`import { PoSyncSchema } from '@po-ui/ng-sync';

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
`),Kg()(),Qc(406,`p`),vu(407,`a`,58),Kg(),Qc(408,`h2`,59),Sk(409,`Preparando a aplicação`),Kg(),Qc(410,`p`),Sk(411,`Após ter criado os `),Qc(412,`em`),Sk(413,`schemas`),Kg(),Sk(414,` e preparado a API, \xE9 necess\xE1rio preparar a aplica\xE7\xE3o para utilizar o PO Sync passando para
ele os `),Qc(415,`em`),Sk(416,`schemas`),Kg(),Sk(417,` e as configurações iniciais. Se você seguiu o guia `),Qc(418,`a`,34),Sk(419,`Começando com o PO Sync`),Kg(),Sk(420,`,
dentro do arquivo `),Qc(421,`code`),Sk(422,`src/app/app.component.ts`),Kg(),Sk(423,`, no método `),Qc(424,`code`),Sk(425,`initSync()`),Kg(),Sk(426,` foi feita a seguinte implementação:`),Kg(),Qc(427,`pre`)(428,`code`,46),Sk(429,`const config: PoSyncConfig = {
  type: PoNetworkType.ethernet
};
const schemas = [conferenceSchema];

this.poSync.prepare(schemas, config).then(() => {
  this.poSync.sync();
  ...
});
`),Kg()(),Qc(430,`p`),Sk(431,`A variável `),Qc(432,`code`),Sk(433,`config`),Kg(),Sk(434,` implementa a interface `),Qc(435,`a`,33),Sk(436,`PoSyncConfig`),Kg(),Sk(437,` e representa as configura\xE7\xF5es iniciais de sincroniza\xE7\xE3o. Neste
exemplo, a propriedade `),Qc(438,`code`),Sk(439,`type`),Kg(),Sk(440,` descreve o tipo de conex\xE3o que ir\xE1 permitir que aconte\xE7a o sincronismo. Ao terminar de
preparar a aplica\xE7\xE3o os dados estar\xE3o dispon\xEDveis para serem sincronizados do servidor para a aplica\xE7\xE3o local. Por esta raz\xE3o,
ap\xF3s a conclus\xE3o da promessa deste m\xE9todo, o `),Qc(441,`code`),Sk(442,`poSync.sync()`),Kg(),Sk(443,` pode ser chamado para sincronizar os dados.`),Kg(),Qc(444,`p`),vu(445,`a`,60),Kg(),Qc(446,`h3`,61),Sk(447,`Sincronização periódica`),Kg(),Qc(448,`p`),Sk(449,`Para que os dados sejam atualizados dentro de um período de tempo, modifique a constante `),Qc(450,`code`),Sk(451,`config`),Kg(),Sk(452,` do exemplo
anterior para ficar da seguinte forma:`),Kg(),Qc(453,`pre`)(454,`code`,46),Sk(455,`const config: PoSyncConfig = {
  type: PoNetworkType.ethernet,
  // Linha adicionada
  period: 30
};

const schemas = [conferenceSchema];

this.poSync.prepare(schemas, config).then(() => {
  this.poSync.sync();
  ...
});
`),Kg()(),Qc(456,`p`),Sk(457,`Onde o valor da propriedade `),Qc(458,`code`),Sk(459,`period`),Kg(),Sk(460,` define que o sincronismo deverá ser ativado a cada 30 segundos.`),Kg(),Qc(461,`p`),vu(462,`a`,62),Kg(),Qc(463,`h3`,63),Sk(464,`Carga inicial dos dados`),Kg(),Qc(465,`p`),Sk(466,`Caso queira fazer a carga inicial dos dados que estão no servidor antes de fazer o primeiro sincronismo, o serviço `),Qc(467,`a`,33),Sk(468,`PoSyncService`),Kg(),Sk(469,`
disponibiliza um m\xE9todo chamado `),Qc(470,`code`),Sk(471,`PoSyncService.loadData()`),Kg(),Sk(472,`.`),Kg(),Qc(473,`blockquote`)(474,`p`)(475,`strong`),Sk(476,`Atenção:`),Kg(),Sk(477,` este método deve ser chamado apenas uma vez para carregar os dados iniciais e antes do primeiro sincronismo.`),Kg()(),Qc(478,`p`),Sk(479,`Para implementar a carga inicial no código anterior, basta substituir a linha onde estava `),Qc(480,`code`),Sk(481,`this.poSync.sync();`),Kg(),Sk(482,` pela
seguinte implementa\xE7\xE3o:`),Kg(),Qc(483,`pre`)(484,`code`,46),Sk(485,`const config: PoSyncConfig = {
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
`),Kg()(),Qc(486,`p`),Sk(487,`Onde `),Qc(488,`code`),Sk(489,`<condicao>`),Kg(),Sk(490,` deve ser substitu\xEDda por uma valida\xE7\xE3o que verifique se \xE9 a primeira vez em que os dados est\xE3o sendo
carregados na aplica\xE7\xE3o, como por exemplo na instala\xE7\xE3o do aplicativo.`),Kg(),Qc(491,`p`),vu(492,`a`,64),Kg(),Qc(493,`h2`,65),Sk(494,`Manipulando os registros de um `),Qc(495,`em`),Sk(496,`schema`),Kg()(),Qc(497,`p`),Sk(498,`Toda a manipulação dos registros de um `),Qc(499,`em`),Sk(500,`schema`),Kg(),Sk(501,` como salvar, remover e buscar \xE9 feita atrav\xE9s da inst\xE2ncia da classe
`),Qc(502,`a`,66),Sk(503,`PoEntity`),Kg(),Sk(504,` que pode ser obtida a partir do método `),Qc(505,`code`),Sk(506,`PoSyncService.getModel()`),Kg(),Sk(507,`, por exemplo:`),Kg(),Qc(508,`pre`)(509,`code`,46),Sk(510,`this.conferenceModel = await this.poSync.getModel('conference');
`),Kg()(),Qc(511,`p`),Sk(512,`Onde o parâmetro "conference" representa o nome do `),Qc(513,`em`),Sk(514,`schema`),Kg(),Sk(515,` que se deseja manipular.
Este \xE9 o mesmo valor colocado na propriedade `),Qc(516,`code`),Sk(517,`name`),Kg(),Sk(518,` da interface `),Qc(519,`a`,33),Sk(520,`PoSyncSchema`),Kg(),Sk(521,`.`),Kg(),Qc(522,`p`),Sk(523,`Agora com esta instância podemos utilizar todos os métodos do `),Qc(524,`a`,66),Sk(525,`PoEntity`),Kg(),Sk(526,` para manipular os registros.`),Kg(),Qc(527,`p`),vu(528,`a`,67),Kg(),Qc(529,`h3`,68),Sk(530,`Buscando os registros`),Kg(),Qc(531,`blockquote`)(532,`p`),Sk(533,`A busca dos registros sempre é feita na aplicação local, pois a mesma é atualizada com o servidor através do processo de sincronização.`),Kg()(),Qc(534,`p`),Sk(535,`Com a instância de `),Qc(536,`a`,66),Sk(537,`PoEntity`),Kg(),Sk(538,` armazenada na propriedade `),Qc(539,`code`),Sk(540,`this.conferenceModel`),Kg(),Sk(541,` podemos buscar
os registros com o `),Qc(542,`code`),Sk(543,`PoEntity.find()`),Kg(),Sk(544,` da seguinte forma:`),Kg(),Qc(545,`pre`)(546,`code`,46),Sk(547,`this.conferences = await this.conferenceModel.find().exec();
`),Kg()(),Qc(548,`p`),Sk(549,`Podemos notar que após usar o método, foi necessário concatená-lo com o método `),Qc(550,`code`),Sk(551,`PoQueryBuilder.exec()`),Kg(),Sk(552,`
para que a busca pudesse ser conclu\xEDda e os registros serem retornados.`),Kg(),Qc(553,`p`),Sk(554,`Isso acontece porque o método `),Qc(555,`code`),Sk(556,`PoEntity.find()`),Kg(),Sk(557,` retorna uma instância da classe `),Qc(558,`a`,69),Sk(559,`PoQueryBuilder`),Kg(),Sk(560,` e todos os m\xE9todos
desta classe podem ser encadeados e no final chamar o m\xE9todo `),Qc(561,`code`),Sk(562,`PoQueryBuilder.exec()`),Kg(),Sk(563,` para concluir a busca.`),Kg(),Qc(564,`p`),Sk(565,`Por exemplo, para buscar os dados e ordená-los pelo campo do `),Qc(566,`em`),Sk(567,`schema`),Kg(),Sk(568,` chamado `),Qc(569,`code`),Sk(570,`title`),Kg(),Sk(571,`, podemos fazer:`),Kg(),Qc(572,`pre`)(573,`code`,46),Sk(574,`this.conferences = await this.conferenceModel.find().sort('title').exec();
`),Kg()(),Qc(575,`p`),Sk(576,`E se quisermos retornar somente os campos `),Qc(577,`code`),Sk(578,`title`),Kg(),Sk(579,` e `),Qc(580,`code`),Sk(581,`location`),Kg(),Sk(582,`, podemos fazer:`),Kg(),Qc(583,`pre`)(584,`code`,46),Sk(585,`this.conferences = await this.conferenceModel.find().sort('title').select('title location').exec();
`),Kg()(),Qc(586,`blockquote`)(587,`p`),Sk(588,`Para saber mais sobre os métodos para construção de consultas, acesse `),Qc(589,`a`,69),Sk(590,`PoQueryBuilder`),Kg(),Sk(591,`.`),Kg()(),Qc(592,`p`),vu(593,`a`,70),Kg(),Qc(594,`h3`,71),Sk(595,`Criação, atualização e exclusão de um registro`),Kg(),Qc(596,`p`),Sk(597,`Ainda com a instância de `),Qc(598,`a`,66),Sk(599,`PoEntity`),Kg(),Sk(600,` podemos utilizar o método `),Qc(601,`code`),Sk(602,`PoEntity.save()`),Kg(),Sk(603,` para criar um
novo registro. Portanto para criar uma nova confer\xEAncia no nosso exemplo, podemos fazer:`),Kg(),Qc(604,`pre`)(605,`code`,46),Sk(606,`const conference = { title: 'BrasilJS', location: 'Barra Shopping Sul - Porto Alegre, RS - Brasil' };

this.conferenceModel.save(conference).then(() => {
  // Confer\xEAncia criada!
});
`),Kg()(),Qc(607,`p`),Sk(608,`E para atualizar a conferência, é necessário ter o registro buscado através do `),Qc(609,`a`,66),Sk(610,`PoEntity`),Kg(),Sk(611,`,
pois este registro dever\xE1 conter o `),Qc(612,`em`),Sk(613,`id`),Kg(),Sk(614,` depois que for salvo.`),Kg(),Qc(615,`p`),Sk(616,`Por exemplo, para buscarmos e atualizarmos a conferência que criamos acima, podemos fazer:`),Kg(),Qc(617,`p`)(618,`strong`),Sk(619,`1)`),Kg(),Sk(620,` Buscar a conferência pelo título "BrasilJS":`),Kg(),Qc(621,`pre`)(622,`code`,46),Sk(623,`const conferenceUpdated = await this.conferenceModel.find().filter({ title: 'BrasilJS' }).exec();
`),Kg()(),Qc(624,`p`)(625,`strong`),Sk(626,`2)`),Kg(),Sk(627,` Podemos atualizar a localização, por exemplo:`),Kg(),Qc(628,`pre`)(629,`code`,46),Sk(630,`conferenceUpdated.location = 'UFRGS - Porto Alegre, RS - Brasil';
`),Kg()(),Qc(631,`p`)(632,`strong`),Sk(633,`3)`),Kg(),Sk(634,` Utilizamos o método `),Qc(635,`code`),Sk(636,`PoEntity.save()`),Kg(),Sk(637,` para efetuar a atualização:`),Kg(),Qc(638,`pre`)(639,`code`,46),Sk(640,`this.conferenceModel.save(conferenceUpdated).then(() => {
  // Confer\xEAncia atualizada!
});
`),Kg()(),Qc(641,`p`),Sk(642,`Para excluir um registro também é necessário buscá-lo através do `),Qc(643,`a`,66),Sk(644,`PoEntity`),Kg(),Sk(645,`
como na atualiza\xE7\xE3o e ap\xF3s esta busca utilizar o m\xE9todo `),Qc(646,`code`),Sk(647,`PoEntity.remove()`),Kg(),Sk(648,` para remover o registro, por exemplo:`),Kg(),Qc(649,`pre`)(650,`code`,46),Sk(651,`const conferenceRemove = await this.conferenceModel.find().filter({ title: 'BrasilJS' }).exec();

this.conferenceModel.remove(conferenceRemove).then(() => {
  // Confer\xEAncia removida!
});
`),Kg()(),Qc(652,`p`),vu(653,`a`,72),Kg(),Qc(654,`h2`,73),Sk(655,`Sincronização manual`),Kg(),Qc(656,`p`),Sk(657,`Existem casos onde o usu\xE1rio do aplicativo deseja ativar manualmente a sincroniza\xE7\xE3o, como por exemplo apertando um
bot\xE3o para atualizar os dados.`),Kg(),Qc(658,`p`),Sk(659,`Esta operação pode ser feita através do método `),Qc(660,`code`),Sk(661,`PoSyncService.sync()`),Kg(),Sk(662,`. Por exemplo:`),Kg(),Qc(663,`pre`)(664,`code`,46),Sk(665,`this.poSync.sync().then(() => {
  // Sincroniza\xE7\xE3o conclu\xEDda
}).catch(() => {
  // Erro durante a sincroniza\xE7\xE3o
});
`),Kg()(),Qc(666,`p`),vu(667,`a`,74),Kg(),Qc(668,`h2`,75),Sk(669,`Técnicas avançadas`),Kg(),Qc(670,`p`),vu(671,`a`,76),Kg(),Qc(672,`h3`,77),Sk(673,`Notificação pós-sincronização`),Kg(),Qc(674,`p`),Sk(675,`Em algumas situa\xE7\xF5es, \xE9 necess\xE1rio ser notificado sempre que uma sincroniza\xE7\xE3o acontecer para, por exemplo, atualizar a tela do usu\xE1rio com os dados sincronizados. Para isso, se inscreva atrav\xE9s do m\xE9todo
`),Qc(676,`code`),Sk(677,`PoSyncService.onSync()`),Kg(),Sk(678,` que irá notificá-lo sempre que uma sincronização acontecer com sucesso.`),Kg(),Qc(679,`p`),Sk(680,`Por exemplo, no guia `),Qc(681,`a`,34),Sk(682,`Começando com o PO Sync`),Kg(),Sk(683,` temos a utiliza\xE7\xE3o do m\xE9todo
`),Qc(684,`code`),Sk(685,`PoSyncService.onSync()`),Kg(),Sk(686,` dentro do `),Qc(687,`code`),Sk(688,`constructor()`),Kg(),Sk(689,`, localizado no arquivo `),Qc(690,`code`),Sk(691,`src/pages/home/home.ts`),Kg(),Sk(692,`:`),Kg(),Qc(693,`pre`)(694,`code`,46),Sk(695,`constructor(public navCtrl: NavController, private poSync: PoSyncService) {
  // Deve chamar o m\xE9todo loadHomePage() sempre que acontecer uma sincroniza\xE7\xE3o
  this.poSync.onSync().subscribe(() => this.loadHomePage());
}

async loadHomePage() {
  this.conference = await this.poSync.getModel('conference').findOne().exec();
}
`),Kg()(),Qc(696,`blockquote`)(697,`p`),Sk(698,`Para saber mais sobre este método acesse `),Qc(699,`a`,33),Sk(700,`PoSyncService.onSync()`),Kg(),Sk(701,`.`),Kg()(),Qc(702,`p`),vu(703,`a`,78),Kg(),Qc(704,`h3`,79),Sk(705,`Adaptando a resposta da API para o padrão do PO`),Kg(),Qc(706,`p`),Sk(707,`O PO Sync necessita que as APIs utilizem o padrão de respostas que está no `),Qc(708,`a`,57),Sk(709,`Guia de implementação de APIs`),Kg(),Sk(710,` que segue a seguinte estrutura:`),Kg(),Qc(711,`pre`)(712,`code`,52),Sk(713,`{
  "hasNext": boolean,
  "items": [],
  "po_sync_date": date
}
`),Kg()(),Qc(714,`p`),Sk(715,`No entanto, existem APIs que ainda não seguem este padrão. Imagine que você possua uma API que sempre retorne a seguinte estrutura:`),Kg(),Qc(716,`pre`)(717,`code`,46),Sk(718,`{
  "next": string,
  "data": [],
  "sync_date": date
}
`),Kg()(),Qc(719,`p`),Sk(720,`Onde:`),Kg(),Qc(721,`ul`)(722,`li`)(723,`code`),Sk(724,`next`),Kg(),Sk(725,`: é a URL da próxima página. Por exemplo: `),Qc(726,`code`),Sk(727,`https://<url>?page=3`),Kg(),Sk(728,`;`),Kg(),Qc(729,`li`)(730,`code`),Sk(731,`data`),Kg(),Sk(732,`: lista de itens retornados;`),Kg(),Qc(733,`li`)(734,`code`),Sk(735,`sync_date`),Kg(),Sk(736,`: data da última sincronização.`),Kg()(),Qc(737,`p`),Sk(738,`E a API espera para paginação os seguintes parâmetros na URL:`),Kg(),Qc(739,`ul`)(740,`li`)(741,`code`),Sk(742,`pageNumber`),Kg(),Sk(743,`: indica o número da página;`),Kg(),Qc(744,`li`)(745,`code`),Sk(746,`size`),Kg(),Sk(747,`: quantidade de itens por página.`),Kg()(),Qc(748,`p`),Sk(749,`Por exemplo:`),Kg(),Qc(750,`pre`)(751,`code`),Sk(752,`http://<url>/?pageNumber=2&size=10
`),Kg()(),Qc(753,`p`),Sk(754,`É possível fazer a adaptação desta resposta utilizando a classe `),Qc(755,`a`,80),Sk(756,`PoDataTransform`),Kg(),Sk(757,`.
Esta classe possui uma propriedade chamada `),Qc(758,`code`),Sk(759,`data`),Kg(),Sk(760,` que representa a resposta que o `),Qc(761,`em`),Sk(762,`endpoint`),Kg(),Sk(763,` retornou.`),Kg(),Qc(764,`p`),Sk(765,`Para fazer a adaptação desta estrutura de resposta:`),Kg(),Qc(766,`p`)(767,`strong`),Sk(768,`1)`),Kg(),Sk(769,` Crie uma nova classe e a faça herdar a classe `),Qc(770,`a`,80),Sk(771,`PoDataTransform`),Kg(),Sk(772,`:`),Kg(),Qc(773,`pre`)(774,`code`,46),Sk(775,`import { PoDataTransform } from '@po-ui/ng-sync';

class MyDataTransform extends PoDataTransform {
  ...
}
`),Kg()(),Qc(776,`p`)(777,`strong`),Sk(778,`2)`),Kg(),Sk(779,` Implemente os métodos da classe `),Qc(780,`a`,80),Sk(781,`PoDataTransform`),Kg(),Sk(782,`:`),Kg(),Qc(783,`pre`)(784,`code`,46),Sk(785,`import { PoDataTransform } from '@po-ui/ng-sync';

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
`),Kg()(),Qc(786,`p`),Sk(787,`Os primeiros quatro m\xE9todos representam os nomes que ir\xE3o corresponder a cada par\xE2metro. No nosso exemplo, a cole\xE7\xE3o de
registros n\xE3o est\xE1 em uma propriedade `),Qc(788,`code`),Sk(789,`items`),Kg(),Sk(790,` conforme o padrão PO UI, mas sim em `),Qc(791,`code`),Sk(792,`data`),Kg(),Sk(793,`, ent\xE3o no m\xE9todo
`),Qc(794,`code`),Sk(795,`MyDataTransform.getItemsFieldName()`),Kg(),Sk(796,` será retornado o valor `),Qc(797,`code`),Sk(798,`data`),Kg(),Sk(799,`.`),Kg(),Qc(800,`p`),Sk(801,`O método `),Qc(802,`code`),Sk(803,`MyDataTransform.hasNext()`),Kg(),Sk(804,` deve retornar um valor `),Qc(805,`em`),Sk(806,`booleano`),Kg(),Sk(807,` que determina se existe mais p\xE1ginas para serem
buscadas ou n\xE3o. No nosso exemplo podemos acessar a pr\xF3xima p\xE1gina com a propriedade `),Qc(808,`code`),Sk(809,`next`),Kg(),Sk(810,`.
Como temos acesso a resposta da API atrav\xE9s da propriedade `),Qc(811,`code`),Sk(812,`data`),Kg(),Sk(813,`, podemos saber se existe uma próxima página do seguinte modo:`),Kg(),Qc(814,`pre`)(815,`code`,46),Sk(816,`hasNext(): boolean {
  return !!this.data.next;
}
`),Kg()(),Qc(817,`p`)(818,`strong`),Sk(819,`3)`),Kg(),Sk(820,` Por fim, deve ser criado uma instância desta classe `),Qc(821,`code`),Sk(822,`MyDataTransform`),Kg(),Sk(823,` e incluí-la na propriedade do objeto `),Qc(824,`code`),Sk(825,`PoSyncConfig`),Kg(),Sk(826,`
que \xE9 inserido no m\xE9todo `),Qc(827,`code`),Sk(828,`PoSyncService.prepare()`),Kg(),Sk(829,`, da seguinte forma:`),Kg(),Qc(830,`pre`)(831,`code`,46),Sk(832,`const config: PoSyncConfig = {
  type: PoNetworkType.ethernet,
  period: 30,
  // Inst\xE2ncia da classe MyDataTransform
  dataTransform: new MyDataTransform()
};

const schemas = [conferenceSchema];

this.poSync.prepare(schemas, config).then(() => {
  ...
});
`),Kg()(),Qc(833,`p`),Sk(834,`Com isto, todas as respostas dos `),Qc(835,`em`),Sk(836,`endpoints`),Kg(),Sk(837,` dos schemas ser\xE3o adaptados para seguir o padr\xE3o de API do PO UI esperado pelo
PO Sync.`),Kg(),Qc(838,`p`),vu(839,`a`,81),Kg(),Qc(840,`h3`,82),Sk(841,`Capturando respostas da sincronização`),Kg(),Qc(842,`p`),Sk(843,`Conforme os itens que est\xE3o na fila de eventos s\xE3o enviados para o servidor \xE9 poss\xEDvel fazer este monitoramento
atrav\xE9s da inscri\xE7\xE3o no m\xE9todo `),Qc(844,`code`),Sk(845,`PoSyncService.getResponses()`),Kg(),Sk(846,`.
A inscri\xE7\xE3o realizada atrav\xE9s do m\xE9todo `),Qc(847,`code`),Sk(848,`.subscribe()`),Kg(),Sk(849,`, retorna um objeto do tipo `),Qc(850,`code`),Sk(851,`PoSyncResponse`),Kg(),Sk(852,` que cont\xE9m as
informa\xE7\xF5es do item que foi consumido da fila de eventos. Exemplo de utiliza\xE7\xE3o:`),Kg(),Qc(853,`pre`)(854,`code`,46),Sk(855,`this.poSync.getResponses().subscribe(poSyncResponse => {
  // Foi consumido um item da fila de eventos.
});
`),Kg()(),Qc(856,`h4`,83),Sk(857,`Em que situações este monitoramento pode ser útil?`),Kg(),Qc(858,`p`),Sk(859,`Este monitoramento \xE9 \xFAtil para saber se os itens conseguiram ser enviados para o servidor com sucesso. Caso um item
enviado n\xE3o tiver sucesso, o consumo da fila de eventos ser\xE1 suspenso e os demais itens n\xE3o ser\xE3o enviados para o
servidor enquanto este item que n\xE3o est\xE1 sendo enviado for resolvido.`),Kg(),Qc(860,`p`),Sk(861,`O consumo da fila de eventos pode ser suspenso em duas situações:`),Kg(),Qc(862,`ul`)(863,`li`),Sk(864,`Se o servidor rejeitar a requisição com `),Qc(865,`em`),Sk(866,`status`),Kg(),Sk(867,` diferente da classe de `),Qc(868,`em`),Sk(869,`status 2xx`),Kg(),Sk(870,` (sucesso);`),Kg(),Qc(871,`li`),Sk(872,`Se um item da fila representa uma requisição de alteração ou exclusão e o registro envolvido não possuir `),Qc(873,`em`),Sk(874,`id`),Kg(),Sk(875,`.`),Kg()(),Qc(876,`p`),Sk(877,`Para resolver este tipo de problema, uma solução é remover este item da fila de eventos, isto pode ser feito da seguinte forma:`),Kg(),Qc(878,`pre`)(879,`code`,46),Sk(880,`// Monitora o consumo da fila de eventos
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
`),Kg()(),Qc(881,`blockquote`)(882,`p`),Sk(883,`Saiba mais sobre `),Qc(884,`a`,33),Sk(885,`PoSyncService.getResponses()`),Kg(),Sk(886,`, `),Qc(887,`a`,33),Sk(888,`PoSyncService.removeItemOfSync()`),Kg(),Sk(889,`
e `),Qc(890,`a`,84),Sk(891,`PoEventSourcingErrorResponse`),Kg(),Sk(892,`.`),Kg()(),Qc(893,`p`),vu(894,`a`,85),Kg(),Qc(895,`h3`,86),Sk(896,`Inserindo requisições HTTP na fila de eventos`),Kg(),Qc(897,`p`),Sk(898,`A manipula\xE7\xE3o da fila de eventos \xE9 feita pelo PO Sync, mas existe a possibilidade de criar um evento na fila contendo uma
requisi\xE7\xE3o HTTP customizada. Isso pode ser feito atrav\xE9s da utiliza\xE7\xE3o do m\xE9todo `),Qc(899,`code`),Sk(900,`PoSyncService.insertHttpCommand()`),Kg(),Sk(901,`.
Este m\xE9todo recebe como primeiro par\xE2metro um objeto no formato `),Qc(902,`a`,33),Sk(903,`PoHttpRequestData`),Kg(),Sk(904,` que cont\xE9m as informa\xE7\xF5es da requisi\xE7\xE3o.
Exemplo de utiliza\xE7\xE3o:`),Kg(),Qc(905,`pre`)(906,`code`,46),Sk(907,`const poHttpRequestData: PoHttpRequestData = {
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
`),Kg()(),Qc(908,`p`),Sk(909,`O método `),Qc(910,`code`),Sk(911,`PoSyncService.insertHttpCommand()`),Kg(),Sk(912,` retorna uma promessa e no parâmetro do `),Qc(913,`em`),Sk(914,`callback`),Kg(),Sk(915,` da promessa \xE9 fornecido
o identificador daquele evento. Este identificador por ser armazenado e utilizado posteriormente em alguma valida\xE7\xE3o no m\xE9todo
`),Qc(916,`a`,33),Sk(917,`PoSyncService.getResponses()`),Kg(),Sk(918,`, por exemplo:`),Kg(),Qc(919,`pre`)(920,`code`,46),Sk(921,`this.poSync.getResponses().subscribe(poSyncResponse => {

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
`),Kg()(),Qc(922,`p`),Sk(923,`Também é possível fazer o envio de arquivo (File) para o servidor utilizando o `),Qc(924,`code`),Sk(925,`Content-Type: multipart/form-data`),Kg(),Sk(926,`. Para isso, deve ser informado no `),Qc(927,`code`),Sk(928,`body`),Kg(),Sk(929,` o `),Qc(930,`code`),Sk(931,`rawFile`),Kg(),Sk(932,`, conforme exemplo abaixo:`),Kg(),Qc(933,`pre`)(934,`code`,46),Sk(935,`public insertFileHttpCommand(file: File) {
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
`),Kg()(),Qc(936,`blockquote`)(937,`p`),Sk(938,`Caso não seja passado nenhum valor para a propriedade `),Qc(939,`code`),Sk(940,`formField`),Kg(),Sk(941,` será aplicado o valor padrão `),Qc(942,`code`),Sk(943,`file`),Kg(),Sk(944,`.`),Kg()(),Qc(945,`blockquote`)(946,`p`),Sk(947,`Para o envio de arquivos recomendamos o uso prioritário do `),Qc(948,`code`),Sk(949,`lokijs`),Kg(),Sk(950,` nas configurações do `),Qc(951,`code`),Sk(952,`PoStorageModule`),Kg(),Sk(953,` por sua maior capacidade de armazenamento.
A configura\xE7\xE3o deve ser feita no `),Qc(954,`code`),Sk(955,`app.module.ts`),Kg(),Sk(956,` da sua aplicação, por exemplo:`),Kg()(),Qc(957,`pre`)(958,`code`,46),Sk(959,`...
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
`),Kg()(),Qc(960,`p`),vu(961,`a`,87),Kg(),Qc(962,`h3`,88),Sk(963,`Criação de identificador customizado para eventos da fila`),Kg(),Qc(964,`p`),Sk(965,`Para monitorar se um evento em espec\xEDfico foi enviado ou n\xE3o para o servidor \xE9 poss\xEDvel criar um identificador customizado
para ele e inseri-lo como par\xE2metro nos m\xE9todos `),Qc(966,`code`),Sk(967,`PoEntity.save()`),Kg(),Sk(968,`, `),Qc(969,`code`),Sk(970,`PoEntity.remove()`),Kg(),Sk(971,` ou `),Qc(972,`code`),Sk(973,`PoSync.insertHttpCommand`),Kg(),Sk(974,`. Este identificador é retornado junto com o objeto `),Qc(975,`code`),Sk(976,`PoSyncResponse`),Kg(),Sk(977,` do método `),Qc(978,`code`),Sk(979,`PoSync.getResponses()`),Kg(),Sk(980,`, o que possibilita identificar se o evento foi enviado ou não, da seguinte forma:`),Kg(),Qc(981,`p`),Sk(982,`Na criação ou alteração de um registro:`),Kg(),Qc(983,`pre`)(984,`code`,46),Sk(985,`// Capturando os eventos enviados ao servidor
this.poSync.getResponses().subscribe(poSyncResponse => {

  if (poSyncResponse.customRequestId === customId) {
    // A cria\xE7\xE3o/altera\xE7\xE3o com o id-1234 foi processado no servidor
  }

});

const conferenceModel = this.poSync.getModel('conference');

const customId = 'id-1234';

// Inserido o identificador 'customId' no segundo par\xE2metro
conferenceModel.save(conference, customId).then(() => {});
`),Kg()(),Qc(986,`p`),Sk(987,`Na remoção de um registro:`),Kg(),Qc(988,`pre`)(989,`code`,46),Sk(990,`// Capturando os eventos enviados ao servidor
this.poSync.getResponses().subscribe(poSyncResponse => {

  if (poSyncResponse.customRequestId === customId) {
    // A remo\xE7\xE3o com o id-ABC foi processado no servidor
  }

});

const conferenceModel = this.poSync.getModel('conference');

const customId = 'id-ABC';

// Inserido o identificador 'customId' no segundo par\xE2metro
conferenceModel.remove(conference, customId).then(() => {});
`),Kg()(),Qc(991,`p`),Sk(992,`Ou na criação de uma requisição HTTP customizada:`),Kg(),Qc(993,`pre`)(994,`code`,46),Sk(995,`// Capturando os eventos enviados ao servidor
this.poSync.getResponses().subscribe(poSyncResponse => {
  
  if (poSyncResponse.customRequestId === customId) {
    // A requisi\xE7\xE3o HTTP com o id-XYZ foi processado no servidor
  }

});

const customId = 'id-XYZ';

// Inserido o identificador 'customId' no segundo par\xE2metro
this.poSync.insertHttpCommand(poHttpRequestData, customId).then(() => {});
`),Kg()(),Qc(996,`p`),vu(997,`a`,89),Kg(),Qc(998,`h3`,90),Sk(999,`Alterando as definições dos `),Qc(1e3,`em`),Sk(1001,`schemas`),Kg()(),Qc(1002,`p`),Sk(1003,`Em algumas situações, pode existir a necessidade de alterar a definição do `),Qc(1004,`em`),Sk(1005,`schema`),Kg(),Sk(1006,` que foi inserido como parâmetro dentro do método `),Qc(1007,`code`),Sk(1008,`PoSyncService.prepare()`),Kg(),Sk(1009,`. Uma alternativa para fazer esta alteração é:`),Kg(),Qc(1010,`p`)(1011,`strong`),Sk(1012,`1)`),Kg(),Sk(1013,` Chamar o método `),Qc(1014,`a`,33)(1015,`code`),Sk(1016,`PoSynceService.destroy()`),Kg()(),Sk(1017,`:`),Kg(),Qc(1018,`pre`)(1019,`code`,46),Sk(1020,`this.poSync.destroy().then(() => {
  // As defini\xE7\xF5es dos schemas, os itens da fila de eventos e todos os registros foram destru\xEDdos
});
`),Kg()(),Qc(1021,`blockquote`)(1022,`p`)(1023,`strong`),Sk(1024,`Atenção:`),Kg(),Sk(1025,` ao utilizar o método `),Qc(1026,`code`),Sk(1027,`PoSynceService.destroy()`),Kg(),Sk(1028,`, todos os registros armazenados localmente
ser\xE3o removidos inclusive os itens que estiverem na fila de eventos esperando para sincronizar.`),Kg()(),Qc(1029,`p`)(1030,`strong`),Sk(1031,`2)`),Kg(),Sk(1032,` E após a conclusão da promessa do método `),Qc(1033,`code`),Sk(1034,`PoSynceService.destroy()`),Kg(),Sk(1035,` chamar o m\xE9todo
`),Qc(1036,`code`),Sk(1037,`PoSyncService.prepare()`),Kg(),Sk(1038,` com a nova definição:`),Kg(),Qc(1039,`pre`)(1040,`code`,46),Sk(1041,`// Schemas atualizados
const schemasUpdated = [...];

this.poSync.destroy()
  .then(() => this.poSync.prepare(schemasUpdated, config))
  .then(() => {
    // Defini\xE7\xF5es dos schemas atualizadas
  });
`),Kg()(),Qc(1042,`blockquote`)(1043,`p`)(1044,`strong`),Sk(1045,`Atenção:`),Kg(),Sk(1046,` para que não venham ocorrer erros em ações que dependem das definições dos `),Qc(1047,`em`),Sk(1048,`schemas`),Kg(),Sk(1049,`, recomenda-se utilizar
o m\xE9todo `),Qc(1050,`code`),Sk(1051,`PoSyncService.prepare()`),Kg(),Sk(1052,` logo após o método `),Qc(1053,`code`),Sk(1054,`PoSynceService.destroy()`),Kg(),Sk(1055,`.`),Kg()(),Qc(1056,`p`),vu(1057,`a`,91),Kg(),Qc(1058,`h2`,92),Sk(1059,`Aplicativo de demonstração do PO Sync`),Kg(),Qc(1060,`p`),Sk(1061,`PO Conference Application é um aplicativo de demonstração do PO Sync baseado no `),Qc(1062,`a`,93),Sk(1063,`Ionic Conference Application`),Kg(),Sk(1064,`. Tendo como objetivo, demonstrar as funcionalidades do PO Sync de forma didática.`),Kg(),Qc(1065,`blockquote`)(1066,`p`),Sk(1067,`Acesse o repositório do aplicativo `),Qc(1068,`a`,94),Sk(1069,`neste link`),Kg(),Sk(1070,`.`),Kg()()())},dependencies:[Mze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var V=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:414,vars:0,consts:[[`p-title`,`Começando com o PO Sync`,1,`guides`,`app-portal`],[`href`,`https://ionicframework.com/docs`],[`href`,`/guides/sync-fundamentals`],[`href`,`/documentation/po-sync`],[`id`,`pre-requisitos`],[`href`,`https://nodejs.org/en/`],[`href`,`https://cli.angular.io/`],[1,`language-shell`],[`href`,`https://ionicframework.com/docs/cli/`],[`id`,`passo-1-criando-o-aplicativo`],[`id`,`passo-2-instalando-as-dependencias`],[1,`language-json`],[`id`,`passo-3-instalando-o-po-sync`],[`id`,`passo-4-utilizando-o-po-sync`],[`id`,`passo-4-1-ng-module-importando-o-po-sync-e-o-po-storage`],[1,`language-typescript`],[`id`,`passo-4-1-standalone-importando-o-po-sync-e-o-po-storage`],[`id`,`passo-4-2-mapeando-seu-primeiro-schema`],[`id`,`passo-5-configurando-o-metodo-prepare`],[`id`,`passo-5-1-ng-module-alterando-o-src-app-app-component-ts`],[`id`,`passo-5-1-standalone-alterando-o-src-app-app-component-ts`],[`id`,`passo-6-ng-module-acessando-os-dados`],[`id`,`passo-6-standalone-acessando-os-dados`],[`id`,`passo-7-exibindo-os-dados-em-tela`],[1,`language-html`],[`id`,`passo-8-executando-o-aplicativo`],[`href`,`https://github.com/ionic-team/ionicons/issues/1011`],[`id`,`passo-8-1-entendendo-o-funcionamento-do-po-sync`],[`src`,`./assets/graphics/po-sync/app-get-started.gif`,`alt`,`Getting Started App`],[`id`,`proximos-passos`],[`href`,`./guides/sync-fundamentals`],[`href`,`./documentation/po-sync`]],template:function(o,l){o&1&&(Qc(0,`po-page-default`,0)(1,`p`),Sk(2,`Esse guia servirá para criar e configurar uma aplicação em `),Qc(3,`a`,1),Sk(4,`Ionic`),Kg(),Sk(5,` com o uso do PO Sync.`),Kg(),Qc(6,`p`),Sk(7,`Para maiores detalhes sobre os servi\xE7os e m\xE9todos utilizados neste tutorial, consulte a documenta\xE7\xE3o de
`),Qc(8,`a`,2),Sk(9,`Fundamentos do PO Sync`),Kg(),Sk(10,` e a documentação de referência de `),Qc(11,`a`,3),Sk(12,`API do PO Sync`),Kg(),Sk(13,`.`),Kg(),Qc(14,`h3`,4),Sk(15,`Pré-requisitos`),Kg(),Qc(16,`ul`)(17,`li`)(18,`a`,5),Sk(19,`Node.js e NPM`),Kg()(),Qc(20,`li`)(21,`a`,6),Sk(22,`Angular CLI`),Kg(),Sk(23,` (~22.2.1):`),Qc(24,`ul`)(25,`li`)(26,`pre`)(27,`code`,7),Sk(28,`npm install -g @angular/cli@22
`),Kg()()()()(),Qc(29,`li`)(30,`a`,8),Sk(31,`Ionic`),Kg(),Sk(32,`:`),Qc(33,`ul`)(34,`li`)(35,`pre`)(36,`code`,7),Sk(37,`npm install -g @ionic/cli
`),Kg()()()()()(),Qc(38,`blockquote`)(39,`p`),Sk(40,`É importante ter conhecimento prévio em Angular e Ionic para seguir esta documentação e obter melhor entendimento do PO Sync.`),Kg()(),Qc(41,`h3`,9),Sk(42,`Passo 1 - Criando o aplicativo`),Kg(),Qc(43,`p`),Sk(44,`Para a aplicação de exemplo usaremos o template `),Qc(45,`em`),Sk(46,`blank`),Kg(),Sk(47,` do Ionic. Para isso, execute o seguinte comando:`),Kg(),Qc(48,`pre`)(49,`code`,7),Sk(50,`ionic start po-sync-getting-started blank
`),Kg()(),Qc(51,`p`),Sk(52,`Caso surja a questão relacionada ao framework desejado, opte por `),Qc(53,`code`),Sk(54,`Angular`),Kg(),Sk(55,`.`),Kg(),Qc(56,`h3`,10),Sk(57,`Passo 2 - Instalando as dependências`),Kg(),Qc(58,`p`),Sk(59,`É necessário realizar alguns ajustes de compatibilidade do PO UI para o projeto criado.`),Kg(),Qc(60,`p`),Sk(61,`Navegue até a pasta do aplicativo:`),Kg(),Qc(62,`pre`)(63,`code`,7),Sk(64,`cd po-sync-getting-started
`),Kg()(),Qc(65,`p`),Sk(66,`Veja abaixo a lista de dependências e as versões compatíveis, elas devem ser conferidas e se necessário, ajustadas no seu projeto.`),Kg(),Qc(67,`pre`)(68,`code`,11),Sk(69,`  ...
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
`),Kg()(),Qc(70,`blockquote`)(71,`p`)(72,`strong`),Sk(73,`Nota para projetos com módulos (NgModule)`),Kg(),Sk(74,`: A CLI do Ionic pode gerar projetos com o arquivo `),Qc(75,`code`),Sk(76,`src/main.ts`),Kg(),Sk(77,` utilizando o `),Qc(78,`code`),Sk(79,`platformBrowserDynamic`),Kg(),Sk(80,`. Caso isso aconteça, será necessário adicionar o pacote `),Qc(81,`code`),Sk(82,`@angular/platform-browser-dynamic`),Kg(),Sk(83,` no arquivo `),Qc(84,`code`),Sk(85,`package.json`),Kg(),Sk(86,` (dentro de `),Qc(87,`code`),Sk(88,`dependencies`),Kg(),Sk(89,`), juntamente com as outras dependências listadas acima:`),Kg(),Qc(90,`pre`)(91,`code`,11),Sk(92,`"dependencies": {
  ...
  "@angular/platform-browser-dynamic": "~22.2.1",
  ...
}
`),Kg()()(),Qc(93,`blockquote`)(94,`p`),Sk(95,`Após configurar seu arquivo, certifique-se de salvar as alterações realizadas.`),Kg()(),Qc(96,`p`),Sk(97,`Realize a limpeza do arquivo `),Qc(98,`code`),Sk(99,`package-lock.json`),Kg(),Sk(100,` e da pasta `),Qc(101,`code`),Sk(102,`node_modules/`),Kg(),Sk(103,`, para então executar o seguinte comando para instalar as dependências:`),Kg(),Qc(104,`pre`)(105,`code`,7),Sk(106,`npm install
`),Kg()(),Qc(107,`h3`,12),Sk(108,`Passo 3 - Instalando o po-sync`),Kg(),Qc(109,`p`),Sk(110,`Para instalar o `),Qc(111,`code`),Sk(112,`po-sync`),Kg(),Sk(113,` no aplicativo execute o seguinte comando:`),Kg(),Qc(114,`pre`)(115,`code`,7),Sk(116,`ng add @po-ui/ng-sync@next
`),Kg()(),Qc(117,`h3`,13),Sk(118,`Passo 4 - Utilizando o po-sync`),Kg(),Qc(119,`h4`,14),Sk(120,`Passo 4.1 (NgModule) - Importando o `),Qc(121,`code`),Sk(122,`po-sync`),Kg(),Sk(123,` e o `),Qc(124,`code`),Sk(125,`po-storage`),Kg()(),Qc(126,`p`),Sk(127,`No arquivo `),Qc(128,`code`),Sk(129,`src/app/app.module.ts`),Kg(),Sk(130,`, adicione a importação dos módulos do `),Qc(131,`code`),Sk(132,`po-storage`),Kg(),Sk(133,` e do `),Qc(134,`code`),Sk(135,`po-sync`),Kg(),Sk(136,`:`),Kg(),Qc(137,`pre`)(138,`code`,15),Sk(139,`import { NgModule } from '@angular/core';
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
`),Kg()(),Qc(140,`h4`,16),Sk(141,`Passo 4.1 (Standalone) - Importando o `),Qc(142,`code`),Sk(143,`po-sync`),Kg(),Sk(144,` e o `),Qc(145,`code`),Sk(146,`po-storage`),Kg()(),Qc(147,`p`),Sk(148,`No arquivo `),Qc(149,`code`),Sk(150,`src/main.ts`),Kg(),Sk(151,`, avalie se foi feita a importação dos módulos do `),Qc(152,`code`),Sk(153,`po-storage`),Kg(),Sk(154,` e do `),Qc(155,`code`),Sk(156,`po-sync`),Kg(),Sk(157,`: `),Kg(),Qc(158,`pre`)(159,`code`,15),Sk(160,`import { bootstrapApplication } from '@angular/platform-browser';
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
`),Kg()(),Qc(161,`h4`,17),Sk(162,`Passo 4.2 - Mapeando seu primeiro `),Qc(163,`em`),Sk(164,`schema`),Kg()(),Qc(165,`p`),Sk(166,`O `),Qc(167,`code`),Sk(168,`po-sync`),Kg(),Sk(169,` utiliza a definição de `),Qc(170,`code`),Sk(171,`schemas`),Kg(),Sk(172,`, onde cada `),Qc(173,`code`),Sk(174,`schema`),Kg(),Sk(175,` representa um modelo de dados armazenado no dispositivo.`),Kg(),Qc(176,`p`),Sk(177,`Crie o arquivo `),Qc(178,`code`),Sk(179,`src/app/home/conference-schema.constants.ts`),Kg(),Sk(180,` e adicione o conteúdo abaixo:`),Kg(),Qc(181,`pre`)(182,`code`,15),Sk(183,`import { PoSyncSchema } from '@po-ui/ng-sync';

export const conferenceSchema: PoSyncSchema = {
  getUrlApi: 'https://po-sample-conference.onrender.com/conferences',
  diffUrlApi: 'https://po-sample-conference.onrender.com/conferences/diff',
  deletedField: 'deleted',
  fields: [ 'id', 'title', 'location', 'description' ],
  idField: 'id',
  name: 'conference',
  pageSize: 1
};
`),Kg()(),Qc(184,`h3`,18),Sk(185,`Passo 5 - Configurando o método prepare`),Kg(),Qc(186,`p`),Sk(187,`Após ter o seu primeiro `),Qc(188,`em`),Sk(189,`schema`),Kg(),Sk(190,` criado, configure o seu aplicativo utilizando o `),Qc(191,`code`),Sk(192,`po-sync`),Kg(),Sk(193,` através do método `),Qc(194,`code`),Sk(195,`PoSyncService.prepare()`),Kg(),Sk(196,`.`),Kg(),Qc(197,`h4`,19),Sk(198,`Passo 5.1 (NgModule) - Alterando o `),Qc(199,`code`),Sk(200,`src/app/app.component.ts`),Kg()(),Qc(201,`p`),Sk(202,`Substitua o conteúdo do arquivo pelo conteúdo abaixo:`),Kg(),Qc(203,`pre`)(204,`code`,15),Sk(205,`import { Component, OnInit, inject } from '@angular/core';
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
`),Kg()(),Qc(206,`p`),Sk(207,`Após utilizar o método `),Qc(208,`code`),Sk(209,`PoSyncService.prepare()`),Kg(),Sk(210,`, a aplicação estará pronta para sincronizar os dados através do método `),Qc(211,`code`),Sk(212,`PoSyncService.sync()`),Kg(),Sk(213,`.`),Kg(),Qc(214,`h4`,20),Sk(215,`Passo 5.1 (Standalone) - Alterando o `),Qc(216,`code`),Sk(217,`src/app/app.component.ts`),Kg()(),Qc(218,`p`),Sk(219,`Substitua o conteúdo do arquivo pelo conteúdo abaixo:`),Kg(),Qc(220,`pre`)(221,`code`,15),Sk(222,`import { Component, OnInit, inject } from '@angular/core';
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
`),Kg()(),Qc(223,`h3`,21),Sk(224,`Passo 6 (NgModule) - Acessando os dados`),Kg(),Qc(225,`p`),Sk(226,`Caso o projeto tenha sido gerado em uma versão anterior a 9.x do `),Qc(227,`code`),Sk(228,`@ionic/angular`),Kg(),Sk(229,`, no arquivo `),Qc(230,`code`),Sk(231,`po-sync-getting-started/src/app/home/home.module.ts`),Kg(),Sk(232,`, atualize a importação do `),Qc(233,`code`),Sk(234,`IonicModule`),Kg(),Sk(235,` para utilizar o caminho `),Qc(236,`code`),Sk(237,`import { IonicModule } from '@ionic/angular';`),Kg(),Sk(238,`:`),Kg(),Qc(239,`pre`)(240,`code`,15),Sk(241,`import { NgModule } from '@angular/core';
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
`),Kg()(),Qc(242,`blockquote`)(243,`p`)(244,`strong`),Sk(245,`Nota sobre importação do `),Qc(246,`code`),Sk(247,`IonicModule`),Kg()(),Sk(248,`: As versões anteriores à 9.x do `),Qc(249,`code`),Sk(250,`@ionic/angular`),Kg(),Sk(251,` não possuem o export `),Qc(252,`code`),Sk(253,`lazy`),Kg(),Sk(254,`, devendo ser feito o import de `),Qc(255,`code`),Sk(256,`@ionic/angular`),Kg(),Sk(257,`. A partir da versão 9.x, o import de `),Qc(258,`code`),Sk(259,`@ionic/angular/lazy`),Kg(),Sk(260,` funciona normalmente (sendo o padrão da CLI do ionic para projetos standalone).`),Kg()(),Qc(261,`p`),Sk(262,`Localize o arquivo `),Qc(263,`code`),Sk(264,`src/app/home/home.page.ts`),Kg(),Sk(265,` e faça as seguintes alterações:`),Kg(),Qc(266,`pre`)(267,`code`,15),Sk(268,`import { Component, inject, signal } from '@angular/core';

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
`),Kg()(),Qc(269,`p`),Sk(270,`No construtor, foi realizado uma inscrição no método `),Qc(271,`code`),Sk(272,`PoSyncService.onSync()`),Kg(),Sk(273,`, para quando ocorrer uma sincronização, o método `),Qc(274,`code`),Sk(275,`loadHomePage()`),Kg(),Sk(276,` busque um registro do `),Qc(277,`em`),Sk(278,`schema`),Kg(),Sk(279,` "Conference".`),Kg(),Qc(280,`h3`,22),Sk(281,`Passo 6 (Standalone) - Acessando os dados`),Kg(),Qc(282,`p`),Sk(283,`Localize o arquivo `),Qc(284,`code`),Sk(285,`src/app/home/home.page.ts`),Kg(),Sk(286,` e faça as seguintes alterações:`),Kg(),Qc(287,`pre`)(288,`code`,15),Sk(289,`import { Component, inject, signal } from '@angular/core';

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

`),Kg()(),Qc(290,`h3`,23),Sk(291,`Passo 7 - Exibindo os dados em tela`),Kg(),Qc(292,`p`),Sk(293,`No arquivo `),Qc(294,`code`),Sk(295,`src/app/home/home.page.html`),Kg(),Sk(296,` crie a seguinte estrutura:`),Kg(),Qc(297,`pre`)(298,`code`,24),Sk(299,`<ion-content class="ion-padding">
  <ion-button expand="full" (click)="loadHomePage()" (keyup.enter)="loadHomePage()">Buscar informa\xE7\xF5es</ion-button>  
  <ion-button expand="full" color="danger" (click)="clear()" (keyup.enter)="clear()">Apagar informa\xE7\xF5es</ion-button>

  @if (conference(); as conference) {
    <ion-card>
      <ion-card-content>
        <ion-card-title>
          `),Qc(300,`span`),j_(),Sk(301,`{{`),V_(),Kg(),Sk(302,` conference.title `),Qc(303,`span`),j_(),Sk(304,`}}`),V_(),Kg(),Sk(305,`
        </ion-card-title>
        <p>`),Qc(306,`span`),j_(),Sk(307,`{{`),V_(),Kg(),Sk(308,` conference.description `),Qc(309,`span`),j_(),Sk(310,`}}`),V_(),Kg(),Sk(311,`</p>
        <p>`),Qc(312,`span`),j_(),Sk(313,`{{`),V_(),Kg(),Sk(314,` conference.location `),Qc(315,`span`),j_(),Sk(316,`}}`),V_(),Kg(),Sk(317,`</p>
      </ion-card-content>
    </ion-card>
  }
</ion-content>
`),Kg()(),Qc(318,`h3`,25),Sk(319,`Passo 8 - Executando o aplicativo`),Kg(),Qc(320,`p`),Sk(321,`Execute o comando `),Qc(322,`code`),Sk(323,`ionic serve`),Kg(),Sk(324,` e verifique o funcionamento do aplicativo Ionic com `),Qc(325,`code`),Sk(326,`po-sync`),Kg(),Sk(327,`.`),Kg(),Qc(328,`blockquote`)(329,`p`),Sk(330,`Pode ocorrer o seguinte erro `),Qc(331,`code`),Sk(332,`TypeError: Failed to fetch dynamically imported module...`),Kg(),Sk(333,`, sendo necessário adicionar ao arquivo `),Qc(334,`code`),Sk(335,`angular.json`),Kg(),Sk(336,` as seguintes configurações:`),Kg(),Qc(337,`pre`)(338,`code`,11),Sk(339,`{
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
`),Kg()()(),Qc(340,`blockquote`)(341,`p`),Sk(342,`Pode ocorrer o seguinte erro `),Qc(343,`code`),Sk(344,`TS2320: Interface 'HTMLIonIconElement' cannot simultaneously extend types 'IonIcon' and 'HTMLStencilElement'`),Kg(),Sk(345,` por conta da versão do TypeScript conforme esta `),Qc(346,`a`,26),Sk(347,`issue`),Kg(),Sk(348,`, neste caso adicione no arquivo `),Qc(349,`strong`),Sk(350,`tsconfig.json`),Kg(),Qc(351,`code`),Sk(352,`"skipLibCheck": true`),Kg(),Sk(353,`.`),Kg()(),Qc(354,`blockquote`)(355,`p`),Sk(356,`Ao executar um projeto standalone, pode ocorrer o seguinte erro: `),Qc(357,`code`),Sk(358,`[ERROR] Invalid project type: angular-standalone (project config: ./ionic.config.json).`),Kg(),Sk(359,`. Para corrigir, edite o arquivo `),Qc(360,`code`),Sk(361,`ionic.config.json`),Kg(),Sk(362,` e ajuste a propriedade `),Qc(363,`code`),Sk(364,`type`),Kg(),Sk(365,` para o valor `),Qc(366,`code`),Sk(367,`angular`),Kg(),Sk(368,`.`),Kg()(),Qc(369,`h4`,27),Sk(370,`Passo 8.1 - Entendendo o funcionamento do `),Qc(371,`code`),Sk(372,`po-sync`),Kg()(),Qc(373,`ul`)(374,`li`)(375,`p`),Sk(376,`O aplicativo sincroniza os dados que estão no servidor através do método `),Qc(377,`code`),Sk(378,`PoSyncService.sync()`),Kg(),Sk(379,`;`),Kg()(),Qc(380,`li`)(381,`p`),Sk(382,`Durante esta sincronização é efetuada a busca dos registros utilizando a URL de GET, informada no `),Qc(383,`code`),Sk(384,`conference-schema.constants.ts`),Kg(),Sk(385,`, e o retorno é salvo no dispositivo do cliente;`),Kg()(),Qc(386,`li`)(387,`p`),Sk(388,`Com os dados salvos no dispositivo, é possível desabilitar o acesso à internet do aplicativo e ainda continuar acessando os dados através do `),Qc(389,`code`),Sk(390,`po-sync`),Kg(),Sk(391,`.`),Kg()()(),Qc(392,`p`),Sk(393,`Demonstração do aplicativo acessando os dados `),Qc(394,`em`),Sk(395,`offline`),Kg(),Sk(396,`:`),Kg(),Qc(397,`p`),vu(398,`img`,28),Kg(),Qc(399,`h3`,29),Sk(400,`Próximos passos`),Kg(),Qc(401,`ul`)(402,`li`)(403,`p`),Sk(404,`Leia sobre os principais `),Qc(405,`a`,30),Sk(406,`fundamentos do PO Sync`),Kg(),Sk(407,`.`),Kg()(),Qc(408,`li`)(409,`p`),Sk(410,`Saiba mais sobre a `),Qc(411,`a`,31),Sk(412,`API do PO Sync`),Kg(),Sk(413,`.`),Kg()()()())},dependencies:[Mze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var W=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:298,vars:0,consts:[[`p-title`,`Customização de Temas usando o serviço PO-UI`,1,`guides`,`app-portal`],[1,`po-row`,2,`margin`,`20px 0`],[1,`po-lg-2`,`po-md-5`,`po-sm-12`,2,`padding`,`10px`],[2,`text-align`,`center`],[`p-icon`,`an an-palette`,2,`font-size`,`24px`],[`p-icon`,`an an-sun`,2,`font-size`,`24px`],[`p-icon`,`an an-moon`,2,`font-size`,`24px`],[`p-icon`,`an an-wheelchair-motion`,2,`font-size`,`24px`],[`p-icon`,`an an-wrench`,2,`font-size`,`24px`],[`p-icon`,`an an-lightning`,2,`font-size`,`24px`],[`id`,`conteudo`],[`href`,`guides/theme-service#introduction`],[`href`,`guides/theme-service#whyUse`],[`href`,`guides/theme-service#config`],[`href`,`guides/theme-service#configModule`],[`href`,`guides/theme-service#configStyle`],[`href`,`guides/theme-service#configService`],[`href`,`guides/theme-service#howToUse`],[`href`,`guides/theme-service#howToUseBasic`],[`href`,`guides/theme-service#howToUseComplete`],[`href`,`guides/theme-service#applyTheme`],[`href`,`guides/theme-service#applyThemeInitial`],[`href`,`guides/theme-service#applyThemeDynamic`],[`href`,`guides/theme-service#advanced`],[`href`,`guides/theme-service#advancedOverride`],[`href`,`guides/theme-service#advancedReset`],[`href`,`guides/theme-service#advancedPersist`],[`href`,`guides/theme-service#advancedSize`],[`href`,`guides/theme-service#more`],[`href`,`guides/theme-service#sampleStackblitz`],[`id`,`introduction`],[`id`,`introducao-a-customizacao-de-temas-no-po-ui`],[`id`,`whyUse`],[`id`,`por-que-usar-o-po-theme-service`],[`id`,`config`],[`id`,`configuracao-inicial`],[`id`,`configModule`],[`id`,`importacao-do-modulo`],[1,`language-typescript`],[`id`,`configStyle`],[`id`,`estilo-po-ui`],[1,`language-json`],[`id`,`configService`],[`id`,`injecao-do-servico`],[`id`,`howToUse`],[`id`,`como-utilizar-o-servico-de-tema`],[`id`,`howToUseBasic`],[`id`,`estrutura-basica`],[`id`,`howToUseComplete`],[`id`,`exemplo-completo`],[`id`,`applyTheme`],[`id`,`aplicando-o-tema`],[`id`,`applyThemeInitial`],[`id`,`aplicacao-inicial`],[`id`,`applyThemeDynamic`],[`id`,`aplicacao-dinamica`],[`id`,`advanced`],[`id`,`tecnicas-avancadas`],[`id`,`advancedOverride`],[`id`,`sobrescrita-de-variaveis`],[1,`language-html`],[1,`language-css`],[`id`,`advancedReset`],[`id`,`reset-para-tema-padrao`],[`id`,`advancedPersist`],[`id`,`persistencia-de-tema`],[`id`,`advancedSize`],[`id`,`gerenciamento-de-tamanhos`],[`id`,`more`],[`id`,`referencias-tecnicas`],[`href`,`documentation/po-theme`],[`href`,`https://doc.animaliads.io/`],[`id`,`sampleStackblitz`],[`id`,`exemplo-completo-no-stackblitz`],[`href`,`https://stackblitz.com/edit/poui-theme-service`,`target`,`_blank`,`rel`,`noreferrer`],[`src`,`https://developer.stackblitz.com/img/open_in_stackblitz.svg`,`alt`,`Open in StackBlitz`]],template:function(o,l){o&1&&(Qc(0,`po-page-default`,0)(1,`p`),Sk(2,`A partir da versão 19.X.X, o PO-UI oferece um serviço completo para criação e gestão de temas personalizados, permitindo controle total sobre cores, tipografia, acessibilidade e comportamentos específicos de componente.`),Kg(),Qc(3,`p`),Sk(4,`Principais Recursos:`),Kg(),Qc(5,`div`,1)(6,`div`,2)(7,`div`,3),vu(8,`po-icon`,4),Qc(9,`p`),Sk(10,`Paletas de cores`),Kg()()(),Qc(11,`div`,2)(12,`div`,3)(13,`div`),vu(14,`po-icon`,5)(15,`po-icon`,6),Kg(),Qc(16,`p`),Sk(17,`Temas light/dark`),Kg()()(),Qc(18,`div`,2)(19,`div`,3),vu(20,`po-icon`,7),Qc(21,`p`),Sk(22,`Acessibilidade (AA/AAA)`),Kg()()(),Qc(23,`div`,2)(24,`div`,3),vu(25,`po-icon`,8),Qc(26,`p`),Sk(27,`Sobrescrita de estilos`),Kg()()(),Qc(28,`div`,2)(29,`div`,3),vu(30,`po-icon`,9),Qc(31,`p`),Sk(32,`Aplicação dinâmica`),Kg()()()(),Qc(33,`h3`,10),Sk(34,`Conteúdo`),Kg(),Qc(35,`ul`)(36,`li`)(37,`a`,11),Sk(38,`Introdução à Customização de Temas no PO UI`),Kg()(),Qc(39,`li`)(40,`a`,12),Sk(41,`Por Que Usar o PoThemeService?`),Kg()(),Qc(42,`li`)(43,`a`,13),Sk(44,`Configuração Inicial`),Kg(),Qc(45,`ul`)(46,`li`)(47,`a`,14),Sk(48,`Importação do Módulo`),Kg()(),Qc(49,`li`)(50,`a`,15),Sk(51,`Estilo PO-UI`),Kg()(),Qc(52,`li`)(53,`a`,16),Sk(54,`Injeção do Serviço`),Kg()()()(),Qc(55,`li`)(56,`a`,17),Sk(57,`Como Utilizar o Serviço de Tema`),Kg(),Qc(58,`ul`)(59,`li`)(60,`a`,18),Sk(61,`Estrutura Básica`),Kg()(),Qc(62,`li`)(63,`a`,19),Sk(64,`Exemplo Completo`),Kg()()()(),Qc(65,`li`)(66,`a`,20),Sk(67,`Aplicando o Tema`),Kg(),Qc(68,`ul`)(69,`li`)(70,`a`,21),Sk(71,`Aplicação Inicial`),Kg()(),Qc(72,`li`)(73,`a`,22),Sk(74,`Aplicação Dinâmica`),Kg()()()(),Qc(75,`li`)(76,`a`,23),Sk(77,`Técnicas Avançadas`),Kg(),Qc(78,`ul`)(79,`li`)(80,`a`,24),Sk(81,`Sobrescrita de Variáveis`),Kg()(),Qc(82,`li`)(83,`a`,25),Sk(84,`Reset para Tema Padrão`),Kg()(),Qc(85,`li`)(86,`a`,26),Sk(87,`Persistência de Tema`),Kg()(),Qc(88,`li`)(89,`a`,27),Sk(90,`Gerenciamento de Tamanhos`),Kg()()()(),Qc(91,`li`)(92,`a`,28),Sk(93,`Mais informações`),Kg()(),Qc(94,`li`)(95,`a`,29),Sk(96,`Exemplo Completo no Stackblitz`),Kg()()(),Qc(97,`p`),vu(98,`a`,30),Kg(),Qc(99,`h3`,31),Sk(100,`Introdução à Customização de Temas no PO UI`),Kg(),Qc(101,`p`),Sk(102,`O PO UI oferece um sistema robusto e flexível para personalização visual de componentes, permitindo que desenvolvedores e designers criem experiências únicas e alinhadas às necessidades específicas de cada projeto. A customização vai além da simples alteração de cores - é um sistema completo que abrange desde variáveis CSS globais até a criação de temas dinâmicos com suporte a light/dark mode, acessibilidade avançada e controle granular sobre cada componente.`),Kg(),Qc(103,`p`),vu(104,`a`,32),Kg(),Qc(105,`h3`,33),Sk(106,`Por Que Usar o PoThemeService?`),Kg(),Qc(107,`p`),Sk(108,`O serviço de temas do PO UI (PoThemeService) é o coração do sistema de customização, oferecendo:`),Kg(),Qc(109,`details`)(110,`summary`)(111,`strong`),Sk(112,`Aplicação Dinâmica de Temas`),Kg()(),Qc(113,`ul`)(114,`li`),Sk(115,`Alterações em tempo real sem recarregar a aplicação`),Kg(),Qc(116,`li`),Sk(117,`Transições suaves entre temas light/dark`),Kg()()(),Qc(118,`details`)(119,`summary`)(120,`strong`),Sk(121,`Gestão Centralizada`),Kg()(),Qc(122,`ul`)(123,`li`),Sk(124,`Criação e armazenamento de múltiplos temas`),Kg(),Qc(125,`li`),Sk(126,`Combinação de temas globais e customizações locais`),Kg()()(),Qc(127,`details`)(128,`summary`)(129,`strong`),Sk(130,`Integração com Estado da Aplicação`),Kg()(),Qc(131,`ul`)(132,`li`),Sk(133,`Persistência de preferências (localStorage)`),Kg(),Qc(134,`li`),Sk(135,`Sincronização com configurações do usuário`),Kg()()(),Qc(136,`details`)(137,`summary`)(138,`strong`),Sk(139,`Controle de Acessibilidade`),Kg()(),Qc(140,`ul`)(141,`li`),Sk(142,`Ativação de níveis AA/AAA conforme requisitos`),Kg(),Qc(143,`li`),Sk(144,`Ajustes automáticos de contrastes`),Kg()()(),Qc(145,`details`)(146,`summary`)(147,`strong`),Sk(148,`Sobrescrita Flexível`),Kg()(),Qc(149,`ul`)(150,`li`),Sk(151,`Hierarquia clara: Tema > Variáveis Globais > Estilos Locais`),Kg()()(),Qc(152,`p`),vu(153,`a`,34),Kg(),Qc(154,`h3`,35),Sk(155,`Configuração Inicial`),Kg(),Qc(156,`p`),vu(157,`a`,36),Kg(),Qc(158,`h4`,37),Sk(159,`Importação do Módulo`),Kg(),Qc(160,`pre`)(161,`code`,38),Sk(162,`import { PoModule } from '@po-ui/ng-components';

@NgModule({
  imports: [
    PoThemeModule
  ]
})
export class AppModule { }
`),Kg()(),Qc(163,`p`),vu(164,`a`,39),Kg(),Qc(165,`h4`,40),Sk(166,`Estilo PO-UI`),Kg(),Qc(167,`p`),Sk(168,`Configurar o arquivo angular.json da seguinte maneira:`),Kg(),Qc(169,`pre`)(170,`code`,41),Sk(171,`"styles": [
  "node_modules/@po-ui/style/css/po-theme-default.min.css", 
  "src/styles.css"
]
`),Kg()(),Qc(172,`p`),vu(173,`a`,42),Kg(),Qc(174,`h4`,43),Sk(175,`Injeção do Serviço`),Kg(),Qc(176,`p`),Sk(177,`Injeção do Serviço no construtor do componente:`),Kg(),Qc(178,`pre`)(179,`code`,38),Sk(180,`import { PoThemeService } from '@po-ui/ng-components';

export class AppComponent {
  constructor(private poThemeService: PoThemeService) { }
}
`),Kg()(),Qc(181,`p`),vu(182,`a`,44),Kg(),Qc(183,`h3`,45),Sk(184,`Como Utilizar o Serviço de Tema`),Kg(),Qc(185,`p`),Sk(186,`Criando um Tema Personalizado`),Kg(),Qc(187,`p`),vu(188,`a`,46),Kg(),Qc(189,`h4`,47),Sk(190,`Estrutura Básica`),Kg(),Qc(191,`pre`)(192,`code`,38),Sk(193,`const meuTema: PoTheme = {
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
`),Kg()(),Qc(194,`p`),vu(195,`a`,48),Kg(),Qc(196,`h4`,49),Sk(197,`Exemplo Completo`),Kg(),Qc(198,`pre`)(199,`code`,38),Sk(200,`import { PoTheme, PoThemeTypeEnum } from '@po-ui/ng-components';

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
`),Kg()(),Qc(201,`p`),vu(202,`a`,50),Kg(),Qc(203,`h3`,51),Sk(204,`Aplicando o Tema`),Kg(),Qc(205,`p`),vu(206,`a`,52),Kg(),Qc(207,`h4`,53),Sk(208,`Aplicação Inicial`),Kg(),Qc(209,`pre`)(210,`code`,38),Sk(211,`ngOnInit() {
  this.poTheme.setTheme(meuTema, PoThemeTypeEnum.light, PoThemeA11yEnum.AAA);
}
`),Kg()(),Qc(212,`p`),vu(213,`a`,54),Kg(),Qc(214,`h4`,55),Sk(215,`Aplicação Dinâmica`),Kg(),Qc(216,`pre`)(217,`code`,38),Sk(218,`// Alternar entre light/dark mode
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
`),Kg()(),Qc(219,`p`),vu(220,`a`,56),Kg(),Qc(221,`h3`,57),Sk(222,`Técnicas Avançadas`),Kg(),Qc(223,`p`),vu(224,`a`,58),Kg(),Qc(225,`h4`,59),Sk(226,`Sobrescrita de Variáveis`),Kg(),Qc(227,`blockquote`)(228,`p`)(229,`strong`),Sk(230,`Recomendação:`),Kg(),Sk(231,` Utilize sempre o serviço `),Qc(232,`code`),Sk(233,`PoThemeService`),Kg(),Sk(234,` para manipulação de temas. Reserve esta técnica para casos extremos.`),Kg()(),Qc(235,`p`)(236,`strong`),Sk(237,`Quando usar?`),Kg()(),Qc(238,`ul`)(239,`li`),Sk(240,`Necessidade de ajustes pontuais não cobertos pelos tokens padrão `),Kg(),Qc(241,`li`),Sk(242,`Prototipagem rápida`),Kg()(),Qc(243,`p`)(244,`strong`),Sk(245,`Implementação:`),Kg()(),Qc(246,`pre`)(247,`code`,60),Sk(248,`<html class='override-theme'>
`),Kg()(),Qc(249,`pre`)(250,`code`,61),Sk(251,`/* styles.scss */
:root .override-theme {
  --color-brand-01-base: #FF0000;
  --po-density-header-padding: 2rem; /* Padding interno em headers (inclui pages, dynamics, page slide e modal) */
  --po-density-content-padding: 1rem; /* Padding interno em contents (inclui pages, dynamics, container, list view, page slide, modal, stepper e disclaimer-group) */
  --po-density-footer-padding: 1rem; /* Padding interno em footers (inclui modal e page slide) */
  --po-density-gap-header-content: 1rem; /* Espa\xE7o interno entre o header e o content (inclui pages, tabs e stepper) */
  --po-density-gap-spacing: 1rem; /* Espa\xE7o interno entre blocos de conte\xFAdo presentes no header e content (inclui dividers e gaps) */
  --po-density-floating-padding: 0.5rem; /* Padding interno de componentes flutuantes como tooltip e popover */ 
}
`),Kg()(),Qc(252,`p`),vu(253,`a`,62),Kg(),Qc(254,`h4`,63),Sk(255,`Reset para Tema Padrão`),Kg(),Qc(256,`p`),Sk(257,`Restaura todos os valores para o tema base configurado:`),Kg(),Qc(258,`pre`)(259,`code`,38),Sk(260,`// Em qualquer componente/service:
resetarTema() {
  this.poThemeService.resetBaseTheme();
}
`),Kg()(),Qc(261,`p`),vu(262,`a`,64),Kg(),Qc(263,`h4`,65),Sk(264,`Persistência de Tema`),Kg(),Qc(265,`p`),Sk(266,`Fluxo recomendado:`),Kg(),Qc(267,`pre`)(268,`code`,38),Sk(269,`ngOnInit() {
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
`),Kg()(),Qc(270,`p`),vu(271,`a`,66),Kg(),Qc(272,`h4`,67),Sk(273,`Gerenciamento de Tamanhos`),Kg(),Qc(274,`p`),Sk(275,`Padrão acessível (AAA):`),Kg(),Qc(276,`pre`)(277,`code`,38),Sk(278,`  // Habilitar tamanhos para small
  this.themeService.setA11yDefaultSizeSmall(true);

  // Verificar configura\xE7\xE3o atual
  const currentSize = this.poThemeService.getDefaultSize();
`),Kg()(),Qc(279,`p`),vu(280,`a`,68),Kg(),Qc(281,`h4`,69),Sk(282,`Referências Técnicas`),Kg(),Qc(283,`ul`)(284,`li`)(285,`a`,70),Sk(286,`PoThemeService API`),Kg(),Sk(287,` - Métodos completos do serviço`),Kg(),Qc(288,`li`)(289,`a`,71),Sk(290,`Animalia DS`),Kg(),Sk(291,` - Base dos nossos tokens de design`),Kg()(),Qc(292,`p`),vu(293,`a`,72),Kg(),Qc(294,`h3`,73),Sk(295,`Exemplo Completo no Stackblitz`),Kg(),Qc(296,`a`,74),vu(297,`img`,75),Kg()())},dependencies:[Tt,Mze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var Q=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:149,vars:0,consts:[[`p-title`,`Criando um tema para o PO UI`,1,`guides`,`app-portal`],[`id`,`instalacao`],[`id`,`iniciando-um-projeto-para-o-novo-tema-customizado`],[`id`,`gerando-build-do-tema-customizado`],[`id`,`publicando-o-novo-tema-customizado`],[`id`,`utilizando-o-tema-customizado`],[`id`,`1-usar-o-arquivo-compilado-com-todo-o-css`],[1,`language-json`],[`id`,`2-usar-o-arquivo-de-variaveis-do-tema-customizado-arquivo-css-do-tema-padrao`],[`id`,`3-usar-o-arquivo-de-variaveis-do-tema-padrao-variaveis-do-tema-customizado-arquivo-css-do-tema-padrao`],[`href`,`https://caniuse.com/#search=CSS%20Variables`]],template:function(o,l){o&1&&(Qc(0,`po-page-default`,0)(1,`p`),Sk(2,`Para criação de novos temas vamos utilizar a ferramenta `),Qc(3,`strong`),Sk(4,`Po Theme Cli`),Kg()(),Qc(5,`h2`,1),Sk(6,`Instalação`),Kg(),Qc(7,`p`),Sk(8,`Faça a instalação global da ferramenta:`),Kg(),Qc(9,`pre`)(10,`code`),Sk(11,`npm install -g @po-ui/theme-cli
`),Kg()(),Qc(12,`p`),Sk(13,`Você pode ver as opções disponíveis através do comando:`),Kg(),Qc(14,`pre`)(15,`code`),Sk(16,`po-theme -help
`),Kg()(),Qc(17,`h2`,2),Sk(18,`Iniciando um projeto para o novo tema customizado`),Kg(),Qc(19,`p`),Sk(20,`Navegue até o diretório que você deseja e execute o comando:`),Kg(),Qc(21,`pre`)(22,`code`),Sk(23,`po-theme new my-custom-po-theme
`),Kg()(),Qc(24,`p`),Sk(25,`Isso irá gerar um novo diretório com o nome `),Qc(26,`code`),Sk(27,`my-custom-po-theme`),Kg(),Sk(28,` e com os arquivos iniciais
para seu tema.`),Kg(),Qc(29,`p`),Sk(30,`Acesse o arquivo `),Qc(31,`code`),Sk(32,`src/po-theme-custom.css`),Kg(),Sk(33,` e faça as customizações necessárias.`),Kg(),Qc(34,`blockquote`)(35,`p`),Sk(36,`Para customização das fontes você deve colocar seus arquivos na pasta `),Qc(37,`code`),Sk(38,`src/assets/fonts`),Kg(),Sk(39,`.`),Kg()(),Qc(40,`h2`,3),Sk(41,`Gerando build do tema customizado`),Kg(),Qc(42,`p`),Sk(43,`Para fazer o build e preparar o tema para publica\xE7\xE3o, voc\xEA deve executar o seguinte comando dentro da
pasta do projeto:`),Kg(),Qc(44,`pre`)(45,`code`),Sk(46,`po-theme build
`),Kg()(),Qc(47,`blockquote`)(48,`p`),Sk(49,`Caso queira atribuir um nome ao arquivo a ser gerado, deve-se utilizar o parâmetro `),Qc(50,`code`),Sk(51,`--name`),Kg(),Sk(52,` informando o nome desejado.`),Kg()(),Qc(53,`blockquote`)(54,`p`),Sk(55,`Se você estiver customizando as fontes do tema, você deve usar o parâmetro `),Qc(56,`code`),Sk(57,`--fonts`),Kg(),Sk(58,`.`),Kg()(),Qc(59,`p`),Sk(60,`Após a execução do comando de `),Qc(61,`em`),Sk(62,`build`),Kg(),Sk(63,`, irá ser gerado uma pasta chamada `),Qc(64,`code`),Sk(65,`dist`),Kg(),Sk(66,` dentro do diret\xF3rio
do seu projeto.`),Kg(),Qc(67,`blockquote`)(68,`p`),Sk(69,`Você pode modificar seu `),Qc(70,`code`),Sk(71,`package.json`),Kg(),Sk(72,` adicionando informa\xE7\xF5es sobre o seu pacote, como name, version,
entre outras informa\xE7\xF5es importantes.`),Kg()(),Qc(73,`h3`,4),Sk(74,`Publicando o novo tema customizado`),Kg(),Qc(75,`p`),Sk(76,`Acesse a pasta `),Qc(77,`code`),Sk(78,`dist`),Kg(),Sk(79,` e execute o seguinte comando:`),Kg(),Qc(80,`pre`)(81,`code`),Sk(82,`npm publish
`),Kg()(),Qc(83,`h2`,5),Sk(84,`Utilizando o tema customizado`),Kg(),Qc(85,`p`),Sk(86,`Existem 3 formas de você usar o tema customizado após a publicação.`),Kg(),Qc(87,`p`),Sk(88,`Configure o arquivo `),Qc(89,`code`),Sk(90,`angular.json`),Kg(),Sk(91,` da aplicação conforme for mais conveniente as suas necessidade.`),Kg(),Qc(92,`h3`,6),Sk(93,`1 - Usar o arquivo "compilado" com todo o CSS.`),Kg(),Qc(94,`pre`)(95,`code`,7),Sk(96,`"styles": [
  "node_modules/my-custom-po-theme/css/po-theme-custom.min.css",
  "src/styles.css"
],
`),Kg()(),Qc(97,`p`)(98,`strong`),Sk(99,`Prós:`),Kg(),Sk(100,` Modo mais simples de usar e atende aos browser suportados.`),Kg(),Qc(101,`p`)(102,`strong`),Sk(103,`Contras:`),Kg(),Sk(104,` O tema customizado deve ser sempre atualizado conforme o tema padr\xE3o for publicado, pois
pode ficar sem os novos estilos publicados.`),Kg(),Qc(105,`h3`,8),Sk(106,`2 - Usar o arquivo de variáveis do tema customizado + arquivo CSS do tema padrão`),Kg(),Qc(107,`pre`)(108,`code`,7),Sk(109,`"styles": [
  "node_modules/my-custom-po-theme/css/po-theme-custom-variables.min.css",
  "node_modules/@po-ui/style/css/po-theme-core.min.css",
  "src/styles.css"
],
`),Kg()(),Qc(110,`blockquote`)(111,`p`),Sk(112,`Atenção a ordem dos arquivos`),Kg()(),Qc(113,`p`)(114,`strong`),Sk(115,`Prós:`),Kg(),Sk(116,` Permite que o usu\xE1rio do tema customizado aplique customiza\xE7\xF5es em cima do tema customizado
na aplica\xE7\xE3o final.`),Kg(),Qc(117,`p`)(118,`strong`),Sk(119,`Contras:`),Kg(),Sk(120,` O tema customizado deve ser sempre atualizado conforme o tema padr\xE3o for publicado e pode
ter incompatibilidade com `),Qc(121,`em`),Sk(122,`browsers`),Kg(),Sk(123,` antigos que não dão suporte a variáveis no CSS.`),Kg(),Qc(124,`h3`,9),Sk(125,`3 - Usar o arquivo de variáveis do tema padrão + variáveis do tema customizado + arquivo CSS do tema padrão`),Kg(),Qc(126,`pre`)(127,`code`,7),Sk(128,`"styles": [
  "node_modules/@po-ui/style/css/po-theme-default-variables.min.css",
  "node_modules/my-custom-po-theme/css/po-theme-custom-variables.min.css",
  "node_modules/@po-ui/style/css/po-theme-core.min.css",
  "src/styles.css"
],
`),Kg()(),Qc(129,`blockquote`)(130,`p`),Sk(131,`Atenção a ordem dos arquivos`),Kg()(),Qc(132,`p`)(133,`strong`),Sk(134,`Prós:`),Kg(),Sk(135,` N\xE3o corre risco de perder novos estilos, permite que o usu\xE1rio do tema customizado aplique
customiza\xE7\xF5es em cima do tema customizado na aplica\xE7\xE3o final.`),Kg(),Qc(136,`p`)(137,`strong`),Sk(138,`Contras:`),Kg(),Sk(139,` Pode ter incompatibilidade com `),Qc(140,`em`),Sk(141,`browsers`),Kg(),Sk(142,` antigos que não dão suporte a variáveis no CSS.`),Kg(),Qc(143,`blockquote`)(144,`p`),Sk(145,`Atenção: Para saber quais browsers dão suporte a variáveis você pode consultar a ferramenta `),Qc(146,`a`,10),Sk(147,`Can I use`),Kg(),Sk(148,`.`),Kg()()())},dependencies:[Mze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var X=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:402,vars:0,consts:[[`p-title`,`Grid System`,1,`guides`,`app-portal`],[`href`,`https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout`],[1,`po-row`,`guides-grid-system-box`],[1,`po-xl-1`,`po-lg-1`,`po-md-1`,`po-sm-1`],[1,`language-html`],[`href`,`/guides/how-install`],[`id`,`nomenclatura-das-classes-e-tamanhos-das-telas`],[1,`po-xl-6`,`po-lg-6`,`po-md-6`,`po-sm-6`],[1,`po-xl-8`,`po-lg-8`,`po-md-8`,`po-sm-8`],[1,`po-xl-4`,`po-lg-4`,`po-md-4`,`po-sm-4`],[1,`po-md-6`],[1,`po-lg-4`],[`id`,`responsividade`],[1,`po-xl-6`,`po-lg-6`,`po-md-12`,`po-sm-12`],[`id`,`classes-visible-e-hidden`],[`id`,`po-visible-tamanho`],[1,`guides-grid-system-containers`],[1,`po-visible-sm`,`po-sm-12`],[1,`po-visible-md`,`po-md-12`],[1,`po-visible-lg-12`],[1,`po-visible-xl-12`],[`id`,`po-hidden-tamanho`],[1,`po-hidden-sm`,`po-md-12`,`po-lg-12`,`po-xl-12`],[1,`po-hidden-md`,`po-sm-12`,`po-lg-12`,`po-xl-12`],[1,`po-hidden-lg`,`po-sm-12`,`po-md-12`,`po-xl-12`],[1,`po-hidden-xl`,`po-sm-12`,`po-md-12`,`po-lg-12`],[`id`,`deslocamento-de-colunas-po-offset`],[1,`po-xl-4`,`po-lg-4`,`po-md-6`,`po-sm-12`],[1,`po-offset-lg-4`,`po-offset-xl-4`,`po-xl-4`,`po-lg-4`,`po-md-6`,`po-sm-12`],[1,`po-offset-lg-3`,`po-offset-xl-3`,`po-xl-4`,`po-lg-4`,`po-md-6`,`po-sm-12`],[1,`po-xl-3`,`po-lg-3`,`po-md-6`,`po-sm-12`],[`id`,`customizacao-dos-breakpoints`],[`id`,`tokens-de-breakpoint-customizaveis`],[1,`language-css`],[1,`language-typescript`],[1,`po-row`],[1,`po-xl-6`,`po-lg-8`,`po-md-10`,`po-sm-12`],[1,`po-table`,`po-text-color-neutral-dark-40`],[1,`po-table-header`],[1,`po-table-header-ellipsis`],[1,`po-table-row`],[1,`po-table-column`]],template:function(o,l){o&1&&(Qc(0,`po-page-default`,0)(1,`p`),Sk(2,`O `),Qc(3,`a`,1),Sk(4,`Grid System`),Kg(),Sk(5,` \xE9 uma estrutura
que permite combinar os elementos em linhas ou em colunas. Esta estrutura costuma seguir um padr\xE3o de configura\xE7\xE3o, determinando:`),Kg(),Qc(6,`ul`)(7,`li`),Sk(8,`Um número máximo de colunas que uma tela pode ser dividida.`),Kg(),Qc(9,`li`),Sk(10,`Padrão na nomenclatura das classes que referem-se as colunas.`),Kg(),Qc(11,`li`),Sk(12,`As colunas podem ser envolvidas por uma classe que delimita e representa a linha.`),Kg(),Qc(13,`li`),Sk(14,`O somat\xF3rio dos n\xFAmeros das colunas de uma linha deve ser igual ao n\xFAmero m\xE1ximo de colunas. Por exemplo, supondo que o
n\xFAmero m\xE1ximo seja igual a 12 colunas, ent\xE3o: po-md-5 + po-md-7 = 12 colunas.`),Kg()(),Qc(15,`p`),Sk(16,`O Grid System do PO, trabalha com a divis\xE3o m\xE1xima da tela em 12 colunas, ou seja, o somat\xF3rio de todas as colunas dentro
de uma linha deve ser igual a 12. No exemplo abaixo, temos 12 colunas de tamanho igual a 1. Cada uma dessas colunas tem o
tamanho igual a 1/12 do seu elemento pai. `),Kg(),Qc(17,`div`,2),vu(18,`div`,3)(19,`div`,3)(20,`div`,3)(21,`div`,3)(22,`div`,3)(23,`div`,3)(24,`div`,3)(25,`div`,3)(26,`div`,3)(27,`div`,3)(28,`div`,3)(29,`div`,3),Kg(),Qc(30,`pre`)(31,`code`,4),Sk(32,`<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
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
`),Kg()(),Qc(33,`blockquote`)(34,`p`),Sk(35,`Estas classes podem ser usadas instalando o `),Qc(36,`code`),Sk(37,`@po-ui/style`),Kg(),Sk(38,` do `),Qc(39,`strong`),Sk(40,`PO`),Kg(),Sk(41,`. Veja mais em `),Qc(42,`a`,5),Sk(43,`Como instalar o PO`),Kg(),Sk(44,`.`),Kg()(),Qc(45,`h2`,6),Sk(46,`Nomenclatura das classes e tamanhos das telas`),Kg(),Qc(47,`p`),Sk(48,`A nomenclatura das classes das colunas seguem o padrão: `),Qc(49,`code`),Sk(50,`po-<tamanho-tela>-<tamanho-coluna>`),Kg(),Sk(51,`, como por exemplo a classe
`),Qc(52,`code`),Sk(53,`po-md-6`),Kg(),Sk(54,` que representa uma coluna com tamanho m\xE9dio e que utiliza 6/12 da largura do elemento pai. Para os intervalos
de tamanhos, tem-se o padr\xE3o:`),Kg(),Qc(55,`ul`)(56,`li`)(57,`code`),Sk(58,`po-sm-*`),Kg(),Sk(59,` para telas com tamanho máximo de 480px.`),Kg(),Qc(60,`li`)(61,`code`),Sk(62,`po-md-*`),Kg(),Sk(63,` para telas com tamanho entre 481px e 960px.`),Kg(),Qc(64,`li`)(65,`code`),Sk(66,`po-lg-*`),Kg(),Sk(67,` para telas com tamanho entre 961px e 1366px.`),Kg(),Qc(68,`li`)(69,`code`),Sk(70,`po-xl-*`),Kg(),Sk(71,` para telas com tamanho mínimo de 1367px.`),Kg()(),Qc(72,`p`),Sk(73,`Para dividir a tela em duas colunas do mesmo tamanho, basta criar dois elementos com classes de tamanho 6, conforme o pr\xF3ximo
exemplo:`),Kg(),Qc(74,`div`,2),vu(75,`div`,7)(76,`div`,7),Kg(),Qc(77,`pre`)(78,`code`,4),Sk(79,`<div class="po-row">
  <div class="po-xl-6 po-lg-6 po-md-6 po-sm-6"></div>
  <div class="po-xl-6 po-lg-6 po-md-6 po-sm-6"></div>
</div>
`),Kg()(),Qc(80,`p`),Sk(81,`Outro exemplo para criar duas colunas, sendo uma com tamanho 8 e outra com tamanho 4:`),Kg(),Qc(82,`div`,2),vu(83,`div`,8)(84,`div`,9),Kg(),Qc(85,`pre`)(86,`code`,4),Sk(87,`<div class="po-xl-8 po-lg-8 po-md-8 po-sm-8"></div>
<div class="po-xl-4 po-lg-4 po-md-4 po-sm-4"></div>
`),Kg()(),Qc(88,`p`),Sk(89,`Ao definir apenas a classe `),Qc(90,`code`),Sk(91,`po-md-*`),Kg(),Sk(92,`, os tamanhos de tela menores que po-md assumem o tamanho de coluna igual a 12 e os
maiores o tamanho definido no `),Qc(93,`code`),Sk(94,`*`),Kg(),Sk(95,`. Da mesma forma ocorre com a classe `),Qc(96,`code`),Sk(97,`po-lg-*`),Kg(),Sk(98,`, os tamanhos menores ficam igual a 12 e
os maiores igual ao tamanho do `),Qc(99,`code`),Sk(100,`*`),Kg(),Sk(101,`.`),Kg(),Qc(102,`blockquote`)(103,`p`),Sk(104,`Este comportamento limita-se apenas as classes `),Qc(105,`code`),Sk(106,`po-md-*`),Kg(),Sk(107,` e `),Qc(108,`code`),Sk(109,`po-lg-*`),Kg(),Sk(110,`.`),Kg()(),Qc(111,`p`),Sk(112,`O exemplo abaixo mostra este comportamento, para isso redimensione a tela do navegador.`),Kg(),Qc(113,`div`,2)(114,`div`,10),Sk(115,`po-md-6`),Kg(),Qc(116,`div`,10),Sk(117,`po-md-6`),Kg()(),Qc(118,`div`,2)(119,`div`,11),Sk(120,`po-lg-4`),Kg(),Qc(121,`div`,11),Sk(122,`po-lg-4`),Kg(),Qc(123,`div`,11),Sk(124,`po-lg-4`),Kg()(),Qc(125,`pre`)(126,`code`,4),Sk(127,`<div class="po-row">
  <div class="po-md-6">po-md-6</div>
  <div class="po-md-6">po-md-6</div>
</div>

<div class="po-row">
  <div class="po-lg-4">po-lg-4</div>
  <div class="po-lg-4">po-lg-4</div>
  <div class="po-lg-4">po-lg-4</div>
</div>
`),Kg()(),Qc(128,`blockquote`)(129,`p`),Sk(130,`A classe para envolver as colunas é chamada de `),Qc(131,`code`),Sk(132,`po-row`),Kg(),Sk(133,`, sendo o seu uso opcional. Normalmente sendo utilizada para poder
organizar telas que cont\xE9m diversas linhas. `),Kg()(),Qc(134,`h2`,12),Sk(135,`Responsividade`),Kg(),Qc(136,`p`),Sk(137,`Para alterar a largura das colunas conforme o tamanho da tela, \xE9 necess\xE1rio determinar que tamanho estar\xE1 a coluna em cada
tamanho de tela. Supondo que se tenha uma tela com duas colunas do mesmo tamanho, conforme o exemplo abaixo:`),Kg(),Qc(138,`div`,2),vu(139,`div`,7)(140,`div`,7),Kg(),Qc(141,`pre`)(142,`code`,4),Sk(143,`<div class="po-row">
  <div class="po-xl-6 po-lg-6 po-md-6 po-sm-6"></div>
  <div class="po-xl-6 po-lg-6 po-md-6 po-sm-6"></div>
</div>
`),Kg()(),Qc(144,`p`),Sk(145,`No entanto, quando a tela diminui os elementos no interior da coluna podem n\xE3o ficar bem estruturados, ent\xE3o podemos determinar
que quando a tela estiver pequena estas duas colunas ter\xE3o a largura total do seu elemento pai, da seguinte forma:`),Kg(),Qc(146,`div`,2),vu(147,`div`,13)(148,`div`,13),Kg(),Qc(149,`pre`)(150,`code`,4),Sk(151,`<div class="po-row">
  <div class="po-xl-6 po-lg-6 po-md-12 po-sm-12"></div>
  <div class="po-xl-6 po-lg-6 po-md-12 po-sm-12"></div>
</div>
`),Kg()(),Qc(152,`p`),Sk(153,`Se a tela for redimensionada, as colunas ir\xE3o mudar de tamanho. Desta mesma forma, pode-se determinar e estruturar diversos
tamanhos de colunas para cada tamanho de tela.`),Kg(),Qc(154,`blockquote`)(155,`p`),Sk(156,`Consulte o Style Guide do PO UI, para saber o número máximo de colunas por tamanho de tela.`),Kg()(),Qc(157,`h2`,14),Sk(158,`Classes visible e hidden`),Kg(),Qc(159,`p`),Sk(160,`Para poder deixar um determinado tamanho visível ou não, existem disponíveis as classes `),Qc(161,`code`),Sk(162,`po-visible-[tamanho]`),Kg(),Sk(163,` e `),Qc(164,`code`),Sk(165,`po-hidden-[tamanho]`),Kg(),Sk(166,`.`),Kg(),Qc(167,`h3`,15),Sk(168,`po-visible-[tamanho]`),Kg(),Qc(169,`p`),Sk(170,`Esta classe determina que o elemento será visível na tela quando estiver em determinado tamanho. Ao fazer essa declaração, o elemento assume a propriedade `),Qc(171,`code`),Sk(172,`display: block`),Kg(),Sk(173,` e os demais tamanhos ficarão invisíveis `),Qc(174,`code`),Sk(175,`(display: none)`),Kg(),Sk(176,`. Existem duas formas de descrever a classe po-visible. Uma forma seria a definição de visibilidade separado da definição do tamanho, como `),Qc(177,`code`),Sk(178,`po-visible-sm po-sm-6`),Kg(),Sk(179,`. Outra forma seria a opção de utilizar a definição junto com a declaração do tamanho, como: `),Qc(180,`code`),Sk(181,`po-visible-sm-6`),Kg(),Sk(182,`.`),Kg(),Qc(183,`p`),Sk(184,`Abaixo tem-se um exemplo onde só irá aparecer a `),Qc(185,`code`),Sk(186,`<div>`),Kg(),Sk(187,` quando atingir o tamanho especificado no po-visible. `),Kg(),Qc(188,`blockquote`)(189,`p`),Sk(190,`Para isso, redimensione a tela do seu navegador.`),Kg()(),Qc(191,`div`,16)(192,`div`,17),Sk(193,`Visível no tamanho 'sm'`),Kg(),Qc(194,`div`,18),Sk(195,`Visível no tamanho 'md'`),Kg(),Qc(196,`div`,19),Sk(197,`Visível no tamanho 'lg'`),Kg(),Qc(198,`div`,20),Sk(199,`Visível no tamanho 'xl'`),Kg()(),Qc(200,`pre`)(201,`code`,4),Sk(202,`<div class="po-visible-sm po-sm-12">Vis\xEDvel no tamanho 'sm'</div>
<div class="po-visible-md po-md-12">Vis\xEDvel no tamanho 'md'</div>
<div class="po-visible-lg-12">Vis\xEDvel no tamanho 'lg'</div>
<div class="po-visible-xl-12">Vis\xEDvel no tamanho 'xl'</div>
`),Kg()(),Qc(203,`blockquote`)(204,`p`),Sk(205,`Atenção: ao utilizar esta classe, o elemento recebe a propriedade `),Qc(206,`code`),Sk(207,`display`),Kg(),Sk(208,` com o valor `),Qc(209,`code`),Sk(210,`block`),Kg(),Sk(211,`. `),Kg()(),Qc(212,`h3`,21),Sk(213,`po-hidden-[tamanho]`),Kg(),Qc(214,`p`),Sk(215,`Ao utilizar esta classe, o elemento ficará invisível `),Qc(216,`code`),Sk(217,`(display: none)`),Kg(),Sk(218,` ao atingir o tamanho especificado. Por exemplo, as `),Qc(219,`code`),Sk(220,`<div>`),Kg(),Sk(221,` abaixo irão desaparecer quando atingir o tamanho especificado no po-hidden. `),Kg(),Qc(222,`blockquote`)(223,`p`),Sk(224,`Para isso, redimensione a tela do seu navegador.`),Kg()(),Qc(225,`div`,16)(226,`div`,22),Sk(227,`Ficará invisível no tamanho 'sm'`),Kg(),Qc(228,`div`,23),Sk(229,`Ficará invisível no tamanho 'md'`),Kg(),Qc(230,`div`,24),Sk(231,`Ficará invisível no tamanho 'lg'`),Kg(),Qc(232,`div`,25),Sk(233,`Ficará invisível no tamanho 'xl'`),Kg()(),Qc(234,`pre`)(235,`code`,4),Sk(236,`<div class="po-hidden-sm po-md-12 po-lg-12 po-xl-12">Ficar\xE1 invis\xEDvel no tamanho 'sm'</div>
<div class="po-hidden-md po-sm-12 po-lg-12 po-xl-12">Ficar\xE1 invis\xEDvel no tamanho 'md'</div>
<div class="po-hidden-lg po-sm-12 po-md-12 po-xl-12">Ficar\xE1 invis\xEDvel no tamanho 'lg'</div>
<div class="po-hidden-xl po-sm-12 po-md-12 po-lg-12">Ficar\xE1 invis\xEDvel no tamanho 'xl'</div>
`),Kg()(),Qc(237,`h2`,26),Sk(238,`Deslocamento de colunas (po-offset)`),Kg(),Qc(239,`p`),Sk(240,`É possível fazer o deslocamento das colunas para a direita utilizando a classe `),Qc(241,`code`),Sk(242,`po-offset-[ sm | md | lg | xl ]-[tamanho]`),Kg(),Sk(243,`.
Quando esta classe \xE9 definida em um elemento, o mesmo receber\xE1 uma margem \xE0 esquerda quando atingir o tamanho de tela indicado,
como o `),Qc(244,`code`),Sk(245,`sm`),Kg(),Sk(246,` ou `),Qc(247,`code`),Sk(248,`md`),Kg(),Sk(249,`. A quantidade de deslocamento \xE9 definida por n\xFAmero de colunas, assim como no tamanho. Ent\xE3o, para ter
um deslocamento com tamanho 2 no tamanho de tela `),Qc(250,`code`),Sk(251,`sm`),Kg(),Sk(252,`, basta escrever: `),Qc(253,`code`),Sk(254,`po-offset-sm-2`),Kg(),Sk(255,`.`),Kg(),Qc(256,`p`),Sk(257,`No exemplo abaixo, tem-se duas linhas e ambas utilizam o deslocamento para a direita quando atingirem o tamanho `),Qc(258,`code`),Sk(259,`lg`),Kg(),Sk(260,` e `),Qc(261,`code`),Sk(262,`xl`),Kg(),Sk(263,`.
A primeira linha tem um deslocamento igual \xE0 4 na segunda coluna. E a segunda linha tem um deslocamento igual \xE0 3 na primeira
coluna.`),Kg(),Qc(264,`div`,2)(265,`div`,27),Sk(266,`Tamanho 4 e sem offset`),Kg(),Qc(267,`div`,28),Sk(268,`Tamanho 4 e offset 4`),Kg()(),Qc(269,`div`,2)(270,`div`,29),Sk(271,`Tamanho 4 e offset 3`),Kg(),Qc(272,`div`,30),Sk(273,`Tamanho 3 e sem offset`),Kg()(),Qc(274,`pre`)(275,`code`,4),Sk(276,`<div class="po-row">
  <div class="po-xl-4 po-lg-4  po-md-6 po-sm-12">Tamanho 4 e sem offset</div>
  <div class="po-offset-lg-4 po-offset-xl-4 po-xl-4 po-lg-4 po-md-6 po-sm-12">Tamanho 4 e offset 4</div>
</div>

<div class="po-row">
  <div class="po-offset-lg-3 po-offset-xl-3 po-xl-4 po-lg-4 po-md-6 po-sm-12">Tamanho 4 e offset 3</div>
  <div class="po-xl-3 po-lg-3 po-md-6 po-sm-12">Tamanho 3 e sem offset</div>
</div>
`),Kg()(),Qc(277,`blockquote`)(278,`p`),Sk(279,`O número de colunas para o deslocamento não necessita ser igual ao tamanho do elemento. Por exemplo: `),Qc(280,`code`),Sk(281,`po-offset-lg-3 po-lg-4`),Kg(),Sk(282,`.`),Kg()(),Qc(283,`blockquote`)(284,`p`),Sk(285,`É importante lembrar que o somatório de colunas com po-offset e os tamanhos dos elementos deve ser menor ou igual a 12.`),Kg()(),Qc(286,`blockquote`)(287,`p`),Sk(288,`Os tamanhos de deslocamentos do po-offset variam de 1 a 11, não incluindo o espaçamento igual a 12.`),Kg()(),Qc(289,`h2`,31),Sk(290,`Customização dos breakpoints`),Kg(),Qc(291,`p`),Sk(292,`Atualmente, os navegadores não interpretam a leitura de variáveis em regras de breakpoint como por exemplo:`),Kg(),Qc(293,`p`)(294,`code`),Sk(295,`@media (min-width: var(--variavel-customizavel))`),Kg()(),Qc(296,`p`),Sk(297,`Porém, disponibilizamos os tokens de breakpoint no formato `),Qc(298,`code`),Sk(299,`var(--nome-da-variavel)`),Kg(),Sk(300,` junto as regras de media query permitindo ao desenvolvedor realizar a customização dos breakpoints em tempo de execução através do serviço `),Qc(301,`code`),Sk(302,`PoMediaQueryService`),Kg(),Sk(303,`.`),Kg(),Qc(304,`h3`,32),Sk(305,`Tokens de breakpoint customizáveis:`),Kg(),Qc(306,`ul`)(307,`li`)(308,`code`),Sk(309,`--gridSystemSmMaxWidth`),Kg(),Sk(310,`: 480px (valor padrão)`),Kg(),Qc(311,`li`)(312,`code`),Sk(313,`--gridSystemMdMinWidth`),Kg(),Sk(314,`: 481px (valor padrão)`),Kg(),Qc(315,`li`)(316,`code`),Sk(317,`--gridSystemMdMaxWidth`),Kg(),Sk(318,`: 960px (valor padrão)`),Kg(),Qc(319,`li`)(320,`code`),Sk(321,`--gridSystemLgMinWidth`),Kg(),Sk(322,`: 961px (valor padrão)`),Kg(),Qc(323,`li`)(324,`code`),Sk(325,`--gridSystemLgMaxWidth`),Kg(),Sk(326,`: 1366px (valor padrão)`),Kg(),Qc(327,`li`)(328,`code`),Sk(329,`--gridSystemXlMinWidth`),Kg(),Sk(330,`: 1367px (valor padrão)`),Kg(),Qc(331,`li`)(332,`code`),Sk(333,`--gridSystemPullMaxWidth`),Kg(),Sk(334,`: 480px (valor padrão)`),Kg(),Qc(335,`li`)(336,`code`),Sk(337,`--gidSystemOffsetMaxWidth`),Kg(),Sk(338,`: 480px (valor padrão)`),Kg()(),Qc(339,`p`),Sk(340,`Nos arquivos de `),Qc(341,`code`),Sk(342,`grid-system`),Kg(),Sk(343,` do `),Qc(344,`code`),Sk(345,`po-style`),Kg(),Sk(346,`, a regra de breakpoint está escrita conforme modelo:`),Kg(),Qc(347,`pre`)(348,`code`,33),Sk(349,`@media (min-width: var(--gridSystemMdMinWidth)) and (max-width: var(--gridSystemMdMaxWidth)){...}
`),Kg()(),Qc(350,`p`),Sk(351,`No exemplo acima está demonstrado o formato da regra de breakpoint para `),Qc(352,`code`),Sk(353,`gridsystem-md`),Kg(),Sk(354,`.`),Kg(),Qc(355,`p`),Sk(356,`Para o desenvolvedor customizar a regra do grid-system acima, poderá utilizar o serviço PoMediaQueryService na inicialização do seu app, informando a regra e os respectivos valores, conforme o exemplo abaixo:`),Kg(),Qc(357,`pre`)(358,`code`,34),Sk(359,`const tokens: PoMediaQueryTokens =  {
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
`),Kg()(),Qc(360,`p`),Sk(361,`A seguir segue a relação das regras de breakpoints do grid-system caso necessite customizá-las:`),Kg(),Qc(362,`div`,35)(363,`div`,36)(364,`table`,37)(365,`thead`)(366,`tr`,38)(367,`th`,39),Sk(368,`Grid-System`),Kg(),Qc(369,`th`,39),Sk(370,`Regra de breakpoint`),Kg()()(),Qc(371,`tbody`)(372,`tr`,40)(373,`td`,41),Sk(374,`po-grid-system-sm`),Kg(),Qc(375,`td`,41),Sk(376,`(max-width: var(--gridSystemSmMaxWidth))`),Kg()(),Qc(377,`tr`,40)(378,`td`,41),Sk(379,`po-grid-system-md`),Kg(),Qc(380,`td`,41),Sk(381,`(min-width: var(--gridSystemMdMinWidth)) and (max-width: var(--gridSystemMdMaxWidth))`),Kg()(),Qc(382,`tr`,40)(383,`td`,41),Sk(384,`po-grid-system-lg`),Kg(),Qc(385,`td`,41),Sk(386,`(min-width: var(--gridSystemLgMinWidth)) and (max-width: var(--gridSystemLgMaxWidth))`),Kg()(),Qc(387,`tr`,40)(388,`td`,41),Sk(389,`po-grid-system-xl`),Kg(),Qc(390,`td`,41),Sk(391,`(min-width: var(--gridSystemXlMinWidth))`),Kg()(),Qc(392,`tr`,40)(393,`td`,41),Sk(394,`po-grid-system-pull`),Kg(),Qc(395,`td`,41),Sk(396,`(max-width: var(--gridSystemPullMaxWidth))`),Kg()(),Qc(397,`tr`,40)(398,`td`,41),Sk(399,`po-grid-system-offset`),Kg(),Qc(400,`td`,41),Sk(401,`(min-width: var(--gridSystemOffsetMaxWidth)) and (max-width: var(--gridSystemOffsetMaxWidth))`),Kg()()()()()()())},dependencies:[Mze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var J=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:287,vars:0,consts:[[`p-title`,`Espaçamento`,1,`guides`,`app-portal`],[`id`,`como-funciona`],[`id`,`definicoes`],[`href`,`/guides/how-install`],[`id`,`exemplos`],[1,`guides-spacing-sample-container`,`po-mt-1`,`po-mb-1`],[1,`guides-spacing`],[1,`po-m-5`],[1,`po-ml-5`],[1,`po-ml-md-5`],[1,`po-ml-lg-5`],[1,`po-ml-5`,`po-mr-5`],[1,`po-ml-md-5`,`po-ml-xl-0`],[1,`language-html`],[`href`,`https://www.w3schools.com/cssref/pr_margin.asp`]],template:function(o,l){o&1&&(Qc(0,`po-page-default`,0)(1,`p`),Sk(2,`O PO conta com um set de classes CSS utilitárias para modificação do espaçamento entre elementos HTML.`),Kg(),Qc(3,`h2`,1),Sk(4,`Como funciona`),Kg(),Qc(5,`p`),Sk(6,`Na composição de telas é eventual o ajuste do espaçamento entre os elementos adjacentes envolvidos. Exemplos disso são vistos quando trabalha-se responsivamente um grupo de elementos, como `),Qc(7,`em`),Sk(8,`widgets`),Kg(),Sk(9,` (po-widget) ou linhas de um `),Qc(10,`em`),Sk(11,`grid system`),Kg(),Sk(12,` (po-row).`),Kg(),Qc(13,`p`),Sk(14,`Há cinco dimensões disponíveis para definição de `),Qc(15,`strong`),Sk(16,`margin`),Kg(),Sk(17,` e também para `),Qc(18,`strong`),Sk(19,`padding`),Kg(),Sk(20,`. A unidade de medida utilizada para elas no CSS é a REM. Basicamente, a REM sempre terá o valor do contexto do ROOT, ou seja, o valor de font-size definido em `),Qc(21,`em`),Sk(22,`body`),Kg(),Sk(23,`. Considerando que `),Qc(24,`code`),Sk(25,`font-family: 16px`),Kg(),Sk(26,` é o padrão no PO, então `),Qc(27,`code`),Sk(28,`margin: 1rem`),Kg(),Sk(29,` também equivale a 16px. As variantes das classes de margem e padding vão de 0.5rem (8px) a 2.5rem (40px).`),Kg(),Qc(30,`h2`,2),Sk(31,`Definições`),Kg(),Qc(32,`p`),Sk(33,`Os nomes das classes usam o formato: `),Kg(),Qc(34,`ul`)(35,`li`)(36,`code`),Sk(37,`po-<propriedade>-<tamanho-espaçamento>`),Kg(),Sk(38,` para definição em todos os lados do elemento. Por exemplo: `),Qc(39,`code`),Sk(40,`po-m-1`),Kg(),Sk(41,`; `),Kg(),Qc(42,`li`)(43,`code`),Sk(44,`po-<propriedade><lado>-<tamanho-espaçamento>`),Kg(),Sk(45,` para apenas um dos lados. Por exemplo: `),Qc(46,`code`),Sk(47,`po-ml-1`),Kg(),Sk(48,`;`),Kg(),Qc(49,`li`)(50,`code`),Sk(51,`po-<propriedade><lado>-<tamanho-tela>-<tamanho-espaçamento>`),Kg(),Sk(52,` para tamanhos específicos de telas. Por exemplo: `),Qc(53,`code`),Sk(54,`po-ml-md-1`),Kg(),Sk(55,`.`),Kg()(),Qc(56,`p`),Sk(57,`As definições de propridades são:`),Kg(),Qc(58,`ul`)(59,`li`)(60,`code`),Sk(61,`m`),Kg(),Sk(62,` - para classes de ajuste de `),Qc(63,`code`),Sk(64,`margin`),Kg(),Sk(65,`;`),Kg(),Qc(66,`li`)(67,`code`),Sk(68,`p`),Kg(),Sk(69,` - para classes de ajuste de `),Qc(70,`code`),Sk(71,`padding`),Kg(),Sk(72,`.`),Kg()(),Qc(73,`p`),Sk(74,`As definições de lados são:`),Kg(),Qc(75,`ul`)(76,`li`)(77,`code`),Sk(78,`t`),Kg(),Sk(79,` - para ajustes de `),Qc(80,`code`),Sk(81,`margin-top`),Kg(),Sk(82,` ou `),Qc(83,`code`),Sk(84,`padding-top`),Kg(),Sk(85,`;`),Kg(),Qc(86,`li`)(87,`code`),Sk(88,`r`),Kg(),Sk(89,` - para ajustes de `),Qc(90,`code`),Sk(91,`margin-right`),Kg(),Sk(92,` ou `),Qc(93,`code`),Sk(94,`padding-right`),Kg(),Sk(95,`;`),Kg(),Qc(96,`li`)(97,`code`),Sk(98,`b`),Kg(),Sk(99,` - para ajustes de `),Qc(100,`code`),Sk(101,`margin-bottom`),Kg(),Sk(102,` ou `),Qc(103,`code`),Sk(104,`padding-bottom`),Kg(),Sk(105,`;`),Kg(),Qc(106,`li`)(107,`code`),Sk(108,`l`),Kg(),Sk(109,` - para ajustes de `),Qc(110,`code`),Sk(111,`margin-left`),Kg(),Sk(112,` ou `),Qc(113,`code`),Sk(114,`padding-left`),Kg(),Sk(115,`;`),Kg(),Qc(116,`li`)(117,`em`),Sk(118,`Para todos os lados basta ignorar essa definição`),Kg(),Sk(119,`;`),Kg()(),Qc(120,`p`),Sk(121,`As definições de tamanho de tela são:`),Kg(),Qc(122,`ul`)(123,`li`)(124,`code`),Sk(125,`sm`),Kg(),Sk(126,` - para telas com tamanho máximo de `),Qc(127,`code`),Sk(128,`480px`),Kg(),Sk(129,`;`),Kg(),Qc(130,`li`)(131,`code`),Sk(132,`md`),Kg(),Sk(133,` - para telas com tamanho a partir de `),Qc(134,`code`),Sk(135,`481px`),Kg(),Sk(136,`;`),Kg(),Qc(137,`li`)(138,`code`),Sk(139,`lg`),Kg(),Sk(140,` - para telas com tamanho a partir de `),Qc(141,`code`),Sk(142,`961px`),Kg(),Sk(143,`;`),Kg(),Qc(144,`li`)(145,`code`),Sk(146,`xl`),Kg(),Sk(147,` - para telas com tamanho a partir de `),Qc(148,`code`),Sk(149,`1367px`),Kg(),Sk(150,`.`),Kg()(),Qc(151,`p`),Sk(152,`As definições de tamanhos disponíveis são:`),Kg(),Qc(153,`ul`)(154,`li`)(155,`code`),Sk(156,`0`),Kg(),Sk(157,` - `),Qc(158,`code`),Sk(159,`margin`),Kg(),Sk(160,` ou `),Qc(161,`code`),Sk(162,`padding`),Kg(),Sk(163,` com valor igual a `),Qc(164,`code`),Sk(165,`0`),Kg(),Sk(166,`; `),Kg(),Qc(167,`li`)(168,`code`),Sk(169,`1`),Kg(),Sk(170,` - `),Qc(171,`code`),Sk(172,`margin`),Kg(),Sk(173,` ou `),Qc(174,`code`),Sk(175,`padding`),Kg(),Sk(176,` com valor igual a `),Qc(177,`code`),Sk(178,`8px`),Kg(),Sk(179,`; `),Kg(),Qc(180,`li`)(181,`code`),Sk(182,`2`),Kg(),Sk(183,` - `),Qc(184,`code`),Sk(185,`margin`),Kg(),Sk(186,` ou `),Qc(187,`code`),Sk(188,`padding`),Kg(),Sk(189,` com valor igual a `),Qc(190,`code`),Sk(191,`16px`),Kg(),Sk(192,`; `),Kg(),Qc(193,`li`)(194,`code`),Sk(195,`3`),Kg(),Sk(196,` - `),Qc(197,`code`),Sk(198,`margin`),Kg(),Sk(199,` ou `),Qc(200,`code`),Sk(201,`padding`),Kg(),Sk(202,` com valor igual a `),Qc(203,`code`),Sk(204,`24px`),Kg(),Sk(205,`; `),Kg(),Qc(206,`li`)(207,`code`),Sk(208,`4`),Kg(),Sk(209,` - `),Qc(210,`code`),Sk(211,`margin`),Kg(),Sk(212,` ou `),Qc(213,`code`),Sk(214,`padding`),Kg(),Sk(215,` com valor igual a `),Qc(216,`code`),Sk(217,`32px`),Kg(),Sk(218,`; `),Kg(),Qc(219,`li`)(220,`code`),Sk(221,`5`),Kg(),Sk(222,` - `),Qc(223,`code`),Sk(224,`margin`),Kg(),Sk(225,` ou `),Qc(226,`code`),Sk(227,`padding`),Kg(),Sk(228,` com valor igual a `),Qc(229,`code`),Sk(230,`40px`),Kg(),Sk(231,`;`),Kg()(),Qc(232,`blockquote`)(233,`p`),Sk(234,`Estas classes podem ser usadas instalando o `),Qc(235,`code`),Sk(236,`@po-ui/style`),Kg(),Sk(237,` do `),Qc(238,`strong`),Sk(239,`PO`),Kg(),Sk(240,`. Veja mais em `),Qc(241,`a`,3),Sk(242,`Como instalar o PO`),Kg(),Sk(243,`.`),Kg()(),Qc(244,`h2`,4),Sk(245,`Exemplos`),Kg(),Qc(246,`p`),Sk(247,`Alguns exemplos de aplicação das classes:`),Kg(),Qc(248,`div`,5)(249,`div`,6)(250,`div`,7),Sk(251,`po-m-5`),Kg()()(),Qc(252,`div`,5)(253,`div`,6)(254,`div`,8),Sk(255,`po-ml-5`),Kg()()(),Qc(256,`div`,5)(257,`div`,6)(258,`div`,9),Sk(259,`po-ml-md-5`),Kg()()(),Qc(260,`div`,5)(261,`div`,6)(262,`div`,10),Sk(263,`po-ml-lg-5`),Kg()()(),Qc(264,`div`,5)(265,`div`,6)(266,`div`,11),Sk(267,`po-ml-5 po-mr-5`),Kg()()(),Qc(268,`div`,5)(269,`div`,6)(270,`div`,12),Sk(271,`po-ml-md-5 po-ml-xl-0`),Kg()()(),Qc(272,`pre`)(273,`code`,13),Sk(274,`<div class="po-m-5">po-m-5</div>
<div class="po-ml-5">po-ml-5</div>
<div class="po-ml-md-5">po-ml-md-5</div>
<div class="po-ml-lg-5">po-ml-lg-5</div>
<div class="po-ml-5 po-mr-5">po-ml-5 po-mr-5</div>
<div class="po-ml-md-5 po-ml-xl-0">po-ml-md-5 po-ml-xl-0</div>
`),Kg()(),Qc(275,`blockquote`)(276,`p`),Sk(277,`Quando duas margens verticais entrarem em contato entre si, ocorrerá um `),Qc(278,`a`,14),Sk(279,`colapso de margem`),Kg(),Sk(280,`. Se uma margem for maior que a outra, esta sobrescreverá o valor da menor, sobrando apenas a definição de margem com maior valor.`),Kg()(),Qc(281,`blockquote`)(282,`p`),Sk(283,`É considerada uma boa prática de CSS trabalhar, sempre que possível, apenas com definições de `),Qc(284,`code`),Sk(285,`margin-bottom`),Kg(),Sk(286,` para espaçamento entre elementos adjacentes.`),Kg()()())},dependencies:[Mze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var K=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:122,vars:0,consts:[[`p-title`,`Personalizando o Tema Padrão com Tokens CSS`,1,`guides`,`app-portal`],[`href`,`guides/theme-service`],[`id`,`como-o-tema-do-po-ui-funciona`],[1,`language-json`],[1,`language-css`],[`id`,`configurando-sua-aplicacao-para-permitir-personalizacao-abrangente`],[`id`,`customizando-estilos-no-seu-projeto`],[`src`,`./assets/graphics/theme/button-green-and-black.png`,`alt`,`Componente Button com a cor preta.`],[`src`,`./assets/graphics/theme/components-custom-colors.png`,`alt`,`Exemplo dos componentes com cores customizadas. Scroll da página com track amarelo e thumb laranja.`],[`href`,`https://doc.animaliads.io/docs/components/button/#live-demo`],[`href`,`https://caniuse.com/#search=CSS%20Variables`]],template:function(o,l){o&1&&(Qc(0,`po-page-default`,0)(1,`blockquote`)(2,`p`)(3,`strong`),Sk(4,`⚠️ Atualização Importante para Versões 18+`),Kg(),vu(5,`br`),Sk(6,`A partir da versão 18.X.X do PO-UI, recomendamos `),Qc(7,`strong`),Sk(8,`fortemente`),Kg(),Sk(9,` a utilização do `),Qc(10,`code`),Sk(11,`PoThemeService`),Kg(),Sk(12,` para todas as customizações de temas, incluindo:`),Kg(),Qc(13,`ul`)(14,`li`),Sk(15,`Tokens globais (cores, tipografia, espaçamentos) `),Kg(),Qc(16,`li`),Sk(17,`Estilos específicos por componente `),Kg(),Qc(18,`li`),Sk(19,`Gerenciamento de dark/light mode `),Kg(),Qc(20,`li`),Sk(21,`Controle de acessibilidade (AA/AAA)`),Kg()(),Qc(22,`p`)(23,`strong`),Sk(24,`Benefícios:`),Kg(),vu(25,`br`),Sk(26,`✅ Maior consistência visual`),vu(27,`br`),Sk(28,`✅ Manutenção simplificada`),vu(29,`br`),Sk(30,`✅ Transições suaves entre temas`),vu(31,`br`),Sk(32,`✅ Suporte integrado a acessibilidade `),Kg(),Qc(33,`p`),Sk(34,`📚 `),Qc(35,`a`,1),Sk(36,`Guia completo de Customização de Temas`),Kg()()(),Qc(37,`p`),Sk(38,`A partir da versão 1.9.0, o `),Qc(39,`strong`),Sk(40,`PO UI`),Kg(),Sk(41,` oferece a flexibilidade de personalização do tema padrão. Você pode ajustar várias propriedades como as cores, fonte, tamanho da fonte entre outros. Para isso, basta modificar os valores das variáveis utilizadas no CSS do tema padrão.`),Kg(),Qc(42,`h3`,2),Sk(43,`Como o tema do PO UI funciona`),Kg(),Qc(44,`p`),Sk(45,`Se voc\xEA j\xE1 tem uma aplica\xE7\xE3o que est\xE1 usando o tema padr\xE3o do PO UI, voc\xEA deve ter seu arquivo
`),Qc(46,`code`),Sk(47,`angular.json`),Kg(),Sk(48,` configurado da seguinte maneira.`),Kg(),Qc(49,`pre`)(50,`code`,3),Sk(51,`"styles": [
  // Arquivo com o tema do PO UI com as vari\xE1veis "compiladas"
  "node_modules/@po-ui/style/css/po-theme-default.min.css", 
  "src/styles.css"
],
`),Kg()(),Qc(52,`p`),Sk(53,`Essa configuração usa o arquivo CSS minificado e `),Qc(54,`em`),Sk(55,`"compilado"`),Kg(),Sk(56,`, ou seja, as vari\xE1veis do CSS foram
substitu\xEDdas pelos valores hexadecimais correspondentes das cores usadas (entre outras coisas). Na pr\xE1tica e resumidamente falando, o que aconteceu com esse arquivo foi o seguinte:`),Kg(),Qc(57,`pre`)(58,`code`,4),Sk(59,`/* Isso "compilando" ... */
po-button {
  --color: var(--color-action-default);
  --background-color: var(--color-transparent);
}

/* ... vira isso. */
.po-button{background-color: transparent;color: #753399;}
`),Kg()(),Qc(60,`h3`,5),Sk(61,`Configurando sua aplicação para permitir personalização abrangente`),Kg(),Qc(62,`p`),Sk(63,`Para possibilitar uma personalização abrangente, o `),Qc(64,`em`),Sk(65,`package`),Kg(),Qc(66,`code`),Sk(67,`@po-ui/style`),Kg(),Sk(68,` agora disponibiliza os arquivos contendo as variáveis CSS, bem como o arquivo de estilo sem a `),Qc(69,`em`),Sk(70,`"compilação"`),Kg(),Sk(71,` das variáveis. Isso permite não apenas a modificação das cores, mas também de outras propriedades via tokens. Para realizar essa configuração em seu projeto, é necessário carregar esses novos arquivos, substituindo o arquivo anterior que restringia a modificação abrangente das cores.`),Kg(),Qc(72,`pre`)(73,`code`,3),Sk(74,`"styles": [
  // Arquivo de vari\xE1veis (tema padr\xE3o)
  "node_modules/@po-ui/style/css/po-theme-default-variables.min.css",
  // Arquivo com os estilos sem as vari\xE1veis "compiladas"
  "node_modules/@po-ui/style/css/po-theme-core.min.css",
  "src/styles.css"
],
`),Kg()(),Qc(75,`blockquote`)(76,`p`),Sk(77,`Só isso não vai fazer diferença no seu projeto, as cores padrões ainda serão mantidas.`),Kg()(),Qc(78,`h3`,6),Sk(79,`Customizando Estilos no Seu Projeto`),Kg(),Qc(80,`p`),Sk(81,`Para personalizar os estilos no seu projeto Angular, voc\xEA pode criar um novo arquivo CSS ou editar um existente e
adicionar as seguintes linhas de c\xF3digo:`),Kg(),Qc(82,`pre`)(83,`code`,4),Sk(84,`po-button {
    --color: rgb(43, 215, 60);
    --border-radius: 12px;
    --font-size: 16px;
    --background-color: black;
}
`),Kg()(),Qc(85,`p`),Sk(86,`Só com isso já conseguimos dar uma nova cara para os nossos botões.`),Kg(),Qc(87,`p`),vu(88,`img`,7),Kg(),Qc(89,`p`),Sk(90,`Caso queira personalizar cores de forma global, é possível sobrescrever algumas variáveis globais:`),Kg(),Qc(91,`pre`)(92,`code`,4),Sk(93,`:root {
  --color-track: #ffecb3;
  --color-thumb: orange;
}
`),Kg()(),Qc(94,`p`),vu(95,`img`,8),Kg(),Qc(96,`p`),Sk(97,`Com essas personalizações, você terá controle não apenas sobre as cores, mas também sobre outros aspectos visuais dos componentes e templates em sua aplicação que utilizam o PO UI.`),Kg(),Qc(98,`blockquote`)(99,`p`),Sk(100,`Para descobrir quais variáveis você pode personalizar, consulte o arquivo `),Qc(101,`code`),Sk(102,`po-theme-default-variables.css`),Kg(),Sk(103,` na pasta `),Qc(104,`code`),Sk(105,`node_modules/@po-ui/style/css`),Kg(),Sk(106,`, l\xE1, voc\xEA
encontrar\xE1 uma lista completa de todas as vari\xE1veis utilizadas pelo tema padr\xE3o. Voc\xEA tamb\xE9m pode consultar a documenta\xE7\xE3o de cada componente no pr\xF3prio portal.`),Kg()(),Qc(107,`blockquote`)(108,`p`),Sk(109,`Para customização do componente `),Qc(110,`code`),Sk(111,`po-button`),Kg(),Sk(112,` verificar `),Qc(113,`a`,9),Sk(114,`variáveis customizaveis`),Kg(),Sk(115,` na aba de customização.`),Kg()(),Qc(116,`blockquote`)(117,`p`),Sk(118,`Atenção: Para saber quais browsers dão suporte a variáveis você pode consultar a ferramenta `),Qc(119,`a`,10),Sk(120,`Can I use`),Kg(),Sk(121,`.`),Kg()()())},dependencies:[Mze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var Z=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:378,vars:0,consts:[[`p-title`,`Tipografia`,1,`guides`,`app-portal`],[`id`,`como-usar`],[1,`language-html`],[1,`po-font-text`],[`id`,`tipos-disponiveis`],[1,`po-row`],[1,`po-md-8`,`po-lg-6`,`po-offset-md-2`,`po-offset-lg-3`,`po-offset-xl-3`,`po-shadow-card`],[1,`po-font-display`],[1,`po-sm-6`],[1,`po-font-text-large-bold`],[1,`po-font-large`],[1,`po-md-12`,`po-text-center`],[1,`po-font-title`],[1,`po-font-subtitle`],[1,`po-font-text-large`],[1,`po-font-text-bold`],[1,`po-font-text-uppercase`],[1,`po-font-text-small`],[1,`po-font-text-small-bold`],[1,`po-font-text-smaller`]],template:function(o,l){o&1&&(Qc(0,`po-page-default`,0)(1,`p`),Sk(2,`O PO disponibiliza as fontes usadas pelos componentes, essas fontes foram disponibilizadas no Style Guide pela equipe de UX.`),Kg(),Qc(3,`h3`,1),Sk(4,`Como Usar?`),Kg(),Qc(5,`pre`)(6,`code`,2),Sk(7,`<font class="po-font-text">Texto usado pelo PO</font>
`),Kg()(),Qc(8,`p`)(9,`font`,3),Sk(10,`Texto usado pelo PO`),Kg()(),Qc(11,`h3`,4),Sk(12,`Tipos Disponíveis`),Kg(),Qc(13,`div`,5)(14,`div`,6)(15,`div`,5)(16,`font`,7),Sk(17,`Display`),Kg()(),vu(18,`hr`),Qc(19,`div`,5)(20,`div`,8)(21,`font`,9),Sk(22,`Typeface:`),Kg()(),Qc(23,`div`,8)(24,`font`,10),Sk(25,`NunitoSans-ExtraLight`),Kg()()(),Qc(26,`div`,5)(27,`div`,8)(28,`font`,9),Sk(29,`Font-size:`),Kg()(),Qc(30,`div`,8)(31,`font`,10),Sk(32,`50`),Kg()()(),Qc(33,`div`,5)(34,`div`,8)(35,`font`,9),Sk(36,`Line-height:`),Kg()(),Qc(37,`div`,8)(38,`font`,10),Sk(39,`64`),Kg()()(),Qc(40,`div`,5)(41,`div`,11)(42,`font`,9),Sk(43,`.po-font-display`),Kg()()()()(),vu(44,`br`),Qc(45,`div`,5)(46,`div`,6)(47,`div`,5)(48,`font`,12),Sk(49,`Title`),Kg()(),vu(50,`hr`),Qc(51,`div`,5)(52,`div`,8)(53,`font`,9),Sk(54,`Typeface:`),Kg()(),Qc(55,`div`,8)(56,`font`,10),Sk(57,`NunitoSans-ExtraLight`),Kg()()(),Qc(58,`div`,5)(59,`div`,8)(60,`font`,9),Sk(61,`Font-size:`),Kg()(),Qc(62,`div`,8)(63,`font`,10),Sk(64,`34`),Kg()()(),Qc(65,`div`,5)(66,`div`,8)(67,`font`,9),Sk(68,`Line-height:`),Kg()(),Qc(69,`div`,8)(70,`font`,10),Sk(71,`48`),Kg()()(),Qc(72,`div`,5)(73,`div`,11)(74,`font`,9),Sk(75,`.po-font-title`),Kg()()()()(),vu(76,`br`),Qc(77,`div`,5)(78,`div`,6)(79,`div`,5)(80,`font`,13),Sk(81,`Subtitle`),Kg()(),vu(82,`hr`),Qc(83,`div`,5)(84,`div`,8)(85,`font`,9),Sk(86,`Typeface:`),Kg()(),Qc(87,`div`,8)(88,`font`,10),Sk(89,`NunitoSans`),Kg()()(),Qc(90,`div`,5)(91,`div`,8)(92,`font`,9),Sk(93,`Font-size:`),Kg()(),Qc(94,`div`,8)(95,`font`,10),Sk(96,`24`),Kg()()(),Qc(97,`div`,5)(98,`div`,8)(99,`font`,9),Sk(100,`Line-height:`),Kg()(),Qc(101,`div`,8)(102,`font`,10),Sk(103,`32`),Kg()()(),Qc(104,`div`,5)(105,`div`,11)(106,`font`,9),Sk(107,`.po-font-subtitle`),Kg()()()()(),vu(108,`br`),Qc(109,`div`,5)(110,`div`,6)(111,`div`,5)(112,`font`,14),Sk(113,`Text Large`),Kg()(),vu(114,`hr`),Qc(115,`div`,5)(116,`div`,8)(117,`font`,9),Sk(118,`Typeface:`),Kg()(),Qc(119,`div`,8)(120,`font`,10),Sk(121,`NunitoSans`),Kg()()(),Qc(122,`div`,5)(123,`div`,8)(124,`font`,9),Sk(125,`Font-size:`),Kg()(),Qc(126,`div`,8)(127,`font`,10),Sk(128,`16`),Kg()()(),Qc(129,`div`,5)(130,`div`,8)(131,`font`,9),Sk(132,`Line-height:`),Kg()(),Qc(133,`div`,8)(134,`font`,10),Sk(135,`24`),Kg()()(),Qc(136,`div`,5)(137,`div`,11)(138,`font`,9),Sk(139,`.po-font-text-large`),Kg()()()()(),vu(140,`br`),Qc(141,`div`,5)(142,`div`,6)(143,`div`,5)(144,`font`,9),Sk(145,`Text Large Bold`),Kg()(),vu(146,`hr`),Qc(147,`div`,5)(148,`div`,8)(149,`font`,9),Sk(150,`Typeface:`),Kg()(),Qc(151,`div`,8)(152,`font`,10),Sk(153,`NunitoSans-Bold`),Kg()()(),Qc(154,`div`,5)(155,`div`,8)(156,`font`,9),Sk(157,`Font-size:`),Kg()(),Qc(158,`div`,8)(159,`font`,10),Sk(160,`16`),Kg()()(),Qc(161,`div`,5)(162,`div`,8)(163,`font`,9),Sk(164,`Line-height:`),Kg()(),Qc(165,`div`,8)(166,`font`,10),Sk(167,`24`),Kg()()(),Qc(168,`div`,5)(169,`div`,11)(170,`font`,9),Sk(171,`.po-font-text-large-bold`),Kg()()()()(),vu(172,`br`),Qc(173,`div`,5)(174,`div`,6)(175,`div`,5)(176,`font`,3),Sk(177,`Text`),Kg()(),vu(178,`hr`),Qc(179,`div`,5)(180,`div`,8)(181,`font`,9),Sk(182,`Typeface:`),Kg()(),Qc(183,`div`,8)(184,`font`,10),Sk(185,`NunitoSans`),Kg()()(),Qc(186,`div`,5)(187,`div`,8)(188,`font`,9),Sk(189,`Font-size:`),Kg()(),Qc(190,`div`,8)(191,`font`,10),Sk(192,`14`),Kg()()(),Qc(193,`div`,5)(194,`div`,8)(195,`font`,9),Sk(196,`Line-height:`),Kg()(),Qc(197,`div`,8)(198,`font`,10),Sk(199,`24`),Kg()()(),Qc(200,`div`,5)(201,`div`,11)(202,`font`,9),Sk(203,`.po-font-text`),Kg()()()()(),vu(204,`br`),Qc(205,`div`,5)(206,`div`,6)(207,`div`,5)(208,`font`,15),Sk(209,`Text Bold`),Kg()(),vu(210,`hr`),Qc(211,`div`,5)(212,`div`,8)(213,`font`,9),Sk(214,`Typeface:`),Kg()(),Qc(215,`div`,8)(216,`font`,10),Sk(217,`NunitoSans-Bold`),Kg()()(),Qc(218,`div`,5)(219,`div`,8)(220,`font`,9),Sk(221,`Font-size:`),Kg()(),Qc(222,`div`,8)(223,`font`,10),Sk(224,`14`),Kg()()(),Qc(225,`div`,5)(226,`div`,8)(227,`font`,9),Sk(228,`Line-height:`),Kg()(),Qc(229,`div`,8)(230,`font`,10),Sk(231,`24`),Kg()()(),Qc(232,`div`,5)(233,`div`,11)(234,`font`,9),Sk(235,`.po-font-text-bold`),Kg()()()()(),vu(236,`br`),Qc(237,`div`,5)(238,`div`,6)(239,`div`,5)(240,`font`,16),Sk(241,`Text Uppercase`),Kg()(),vu(242,`hr`),Qc(243,`div`,5)(244,`div`,8)(245,`font`,9),Sk(246,`Typeface:`),Kg()(),Qc(247,`div`,8)(248,`font`,10),Sk(249,`NunitoSans-Bold`),Kg()()(),Qc(250,`div`,5)(251,`div`,8)(252,`font`,9),Sk(253,`Font-size:`),Kg()(),Qc(254,`div`,8)(255,`font`,10),Sk(256,`14`),Kg()()(),Qc(257,`div`,5)(258,`div`,8)(259,`font`,9),Sk(260,`Line-height:`),Kg()(),Qc(261,`div`,8)(262,`font`,10),Sk(263,`24`),Kg()()(),Qc(264,`div`,5)(265,`div`,8)(266,`font`,9),Sk(267,`Transform:`),Kg()(),Qc(268,`div`,8)(269,`font`,10),Sk(270,`Uppercase`),Kg()()(),Qc(271,`div`,5)(272,`div`,11)(273,`font`,9),Sk(274,`.po-font-text-uppercase`),Kg()()()()(),vu(275,`br`),Qc(276,`div`,5)(277,`div`,6)(278,`div`,5)(279,`font`,17),Sk(280,`Text Small`),Kg()(),vu(281,`hr`),Qc(282,`div`,5)(283,`div`,8)(284,`font`,9),Sk(285,`Typeface:`),Kg()(),Qc(286,`div`,8)(287,`font`,10),Sk(288,`NunitoSans`),Kg()()(),Qc(289,`div`,5)(290,`div`,8)(291,`font`,9),Sk(292,`Font-size:`),Kg()(),Qc(293,`div`,8)(294,`font`,10),Sk(295,`12`),Kg()()(),Qc(296,`div`,5)(297,`div`,8)(298,`font`,9),Sk(299,`Line-height:`),Kg()(),Qc(300,`div`,8)(301,`font`,10),Sk(302,`16`),Kg()()(),Qc(303,`div`,5)(304,`div`,11)(305,`font`,9),Sk(306,`.po-font-text-small`),Kg()()()()(),vu(307,`br`),Qc(308,`div`,5)(309,`div`,6)(310,`div`,5)(311,`font`,18),Sk(312,`Text Small Bold`),Kg()(),vu(313,`hr`),Qc(314,`div`,5)(315,`div`,8)(316,`font`,9),Sk(317,`Typeface:`),Kg()(),Qc(318,`div`,8)(319,`font`,10),Sk(320,`NunitoSans-Bold`),Kg()()(),Qc(321,`div`,5)(322,`div`,8)(323,`font`,9),Sk(324,`Font-size:`),Kg()(),Qc(325,`div`,8)(326,`font`,10),Sk(327,`12`),Kg()()(),Qc(328,`div`,5)(329,`div`,8)(330,`font`,9),Sk(331,`Line-height:`),Kg()(),Qc(332,`div`,8)(333,`font`,10),Sk(334,`16`),Kg()()(),Qc(335,`div`,5)(336,`div`,11)(337,`font`,9),Sk(338,`.po-font-text-small-bold`),Kg()()()()(),vu(339,`br`),Qc(340,`div`,5)(341,`div`,6)(342,`div`,5)(343,`font`,19),Sk(344,`Text Smaller`),Kg()(),vu(345,`hr`),Qc(346,`div`,5)(347,`div`,8)(348,`font`,9),Sk(349,`Typeface:`),Kg()(),Qc(350,`div`,8)(351,`font`,10),Sk(352,`NunitoSans-Bold`),Kg()()(),Qc(353,`div`,5)(354,`div`,8)(355,`font`,9),Sk(356,`Font-size:`),Kg()(),Qc(357,`div`,8)(358,`font`,10),Sk(359,`10`),Kg()()(),Qc(360,`div`,5)(361,`div`,8)(362,`font`,9),Sk(363,`Line-height:`),Kg()(),Qc(364,`div`,8)(365,`font`,10),Sk(366,`16`),Kg()()(),Qc(367,`div`,5)(368,`div`,8)(369,`font`,9),Sk(370,`Transform:`),Kg()(),Qc(371,`div`,8)(372,`font`,10),Sk(373,`Uppercase`),Kg()()(),Qc(374,`div`,5)(375,`div`,11)(376,`font`,9),Sk(377,`.po-font-text-smaller`),Kg()()()()()())},dependencies:[Mze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var ee=[{path:``,component:T,children:[{path:`api`,component:O},{path:`browser-support`,component:M},{path:`deprecations`,component:I},{path:`development-flow`,component:j},{path:`getting-started`,component:k},{path:`guide-charts`,component:w},{path:`migration-poui-v2`,component:G},{path:`migration-poui`,component:U},{path:`migration-thf-to-po-ui`,component:R},{path:`press-kit`,component:N},{path:`release-schedule`,component:L},{path:`releases`,component:_},{path:`schematics`,component:B},{path:`sync-fundamentals`,component:H},{path:`sync-get-started`,component:V},{path:`theme-service`,component:W},{path:`create-theme-customization`,component:Q},{path:`grid-system`,component:X},{path:`spacing`,component:J},{path:`theme-customization`,component:K},{path:`typography`,component:Z},{path:``,pathMatch:`full`,redirectTo:`getting-started`}]}];var Y=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[GV.forChild(ee),GV]})}return a})();var Vt=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[M$1,Y]})}return a})();export{Vt as GuideModule};