import{Ar as Ig,Ei as WV,Fr as Jn,Hr as Me,Mr as Jc,Ri as Zg,Vi as _u,Vr as Ly,aa as j_,da as kI,ea as ge,et as P5,fi as Rb,gi as Tk,ir as B_,kr as I$1,mt as Tze,pt as Tt,qi as de,ui as R$1}from"./chunk-DvS_Nb_w.js";import{t as M$1}from"./main-HXZZSDJT.js";var S=(()=>{class a{constructor(){}getMenus(r){return new Array({label:`Guia de implementação de APIs`,link:`guides/api`},{label:`Compatibilidade com os navegadores`,link:`guides/browser-support`},{label:`Depreciações`,link:`guides/deprecations`},{label:`Contribuindo para o PO UI`,link:`guides/development-flow`},{label:`Primeiros passos`,link:`guides/getting-started`},{label:`Guia de uso para Gráficos`,link:`guides/guide-charts`},{label:`Migração do PO UI para V2`,link:`guides/migration-poui-v2`},{label:`Migração do PO UI`,link:`guides/migration-poui`},{label:`Migração do THF para o PO UI v1.x`,link:`guides/migration-thf-to-po-ui`},{label:`Press Kit`,link:`guides/press-kit`},{label:`Lançamentos e suporte`,link:`guides/release-schedule`},{label:`Releases`,link:`guides/releases`},{label:`Schematics`,link:`guides/schematics`},{label:`Fundamentos do PO Sync`,link:`guides/sync-fundamentals`},{label:`Começando com o PO Sync`,link:`guides/sync-get-started`},{label:`Customização de Temas usando o serviço PO-UI`,link:`guides/theme-service`},{label:`Criando um tema para o PO UI`,link:`guides/create-theme-customization`},{label:`Grid System`,link:`guides/grid-system`},{label:`Espaçamento`,link:`guides/spacing`},{label:`Personalizando o Tema Padrão com Tokens CSS`,link:`guides/theme-customization`},{label:`Tipografia`,link:`guides/typography`})}static ɵfac=function(o){return new(o||a)};static ɵprov=R$1({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var F=(()=>{class a{menuGuidesService;http;menus=[];constructor(r,o){this.menuGuidesService=r,this.http=o}ngOnInit(){this.http.get(`./assets/json/api-list.json`).subscribe(r=>{this.menus=this.menuGuidesService.getMenus(r).map(o=>(o.link=o.link.replace(`guides/`,``),o))},r=>console.error(r))}static ɵfac=function(o){return new(o||a)(I$1(S),I$1(kI))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,features:[Me([S])],decls:4,vars:1,consts:[[`userMenu`,``],[1,`po-wrapper`],[`p-filter`,``,3,`p-menus`]],template:function(o,s){o&1&&(Jc(0,`div`,1),_u(1,`po-menu`,2,0)(3,`router-outlet`),Zg()),o&2&&(Ig(),Rb(`p-menus`,s.menus))},dependencies:[P5,Ly],encapsulation:2,changeDetection:1})}return a})();var T=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:225,vars:0,consts:[[`p-title`,`Guia de implementação de APIs`,1,`guides`,`app-portal`],[`href`,`guides/api#introduction`],[`href`,`guides/api#responseMessage`],[`href`,`guides/api#errorMessages`],[`href`,`guides/api#successMessages`],[`href`,`guides/api#successMessagesForCollections`],[`href`,`guides/api#collections`],[`href`,`guides/api#order`],[`href`,`guides/api#filters`],[`href`,`guides/api#pagination`],[`id`,`introduction`],[`id`,`responseMessage`],[`id`,`errorMessages`],[`id`,`successMessages`],[`id`,`successMessagesForCollections`],[`id`,`collections`],[`id`,`order`],[`id`,`filters`],[`id`,`pagination`],[`href`,`#successMessagesForCollections`]],template:function(o,s){o&1&&(Jc(0,`po-page-default`,0)(1,`h2`),Tk(2,`Conteúdo`),Zg(),Jc(3,`ul`)(4,`li`)(5,`a`,1),Tk(6,`Introdução`),Zg()(),Jc(7,`li`)(8,`a`,2),Tk(9,`Formato das mensagens de resposta`),Zg(),Jc(10,`ul`)(11,`li`)(12,`a`,3),Tk(13,`Mensagens de erro`),Zg()(),Jc(14,`li`)(15,`a`,4),Tk(16,`Mensagens de sucesso`),Zg()(),Jc(17,`li`)(18,`a`,5),Tk(19,`Mensagens de sucesso para coleções`),Zg()()()(),Jc(20,`li`)(21,`a`,6),Tk(22,`Formato das requisições para coleções`),Zg(),Jc(23,`ul`)(24,`li`)(25,`a`,7),Tk(26,`Ordenação`),Zg()(),Jc(27,`li`)(28,`a`,8),Tk(29,`Filtros`),Zg()(),Jc(30,`li`)(31,`a`,9),Tk(32,`Paginação`),Zg()()()()(),Jc(33,`p`),_u(34,`a`,10),Zg(),Jc(35,`h2`),Tk(36,`Introdução`),Zg(),Jc(37,`p`),Tk(38,`Este guia tem a finalidade de exibir os modelos de requisições e respostas HTTP que o PO UI utiliza em seus componentes e `),Jc(39,`em`),Tk(40,`interceptors`),Zg(),Tk(41,`.`),Zg(),Jc(42,`p`),_u(43,`a`,11),Zg(),Jc(44,`h2`),Tk(45,`Formato das mensagens de resposta`),Zg(),Jc(46,`p`),Tk(47,`Alguns componentes utilizam `),Jc(48,`code`),Tk(49,`endpoints`),Zg(),Tk(50,` para poder buscar os itens. Para isso, é necessário que o formato no qual estes itens serão devolvidos seja padronizado, para uma comunicação mais efetiva. A seguir serão apresentados o formato de mensagem de resposta esperado pelos `),Jc(51,`code`),Tk(52,`endpoints`),Zg(),Tk(53,`.`),Zg(),Jc(54,`p`),_u(55,`a`,12),Zg(),Jc(56,`h3`),Tk(57,`Mensagens de erro`),Zg(),Jc(58,`p`),Tk(59,`Para todas as mensagens que representam um erro (códigos HTTP 4xx e 5xx) deve-se retornar obrigatoriamente os campos a seguir, caso deseje apresentá-las:`),Zg(),Jc(60,`pre`)(61,`code`),Tk(62,`{
    code: "C\xF3digo identificador do erro",
    message: "Literal no idioma da requisi\xE7\xE3o descrevendo o erro para o cliente",
    detailedMessage: "Mensagem t\xE9cnica e mais detalhada do erro"
}
`),Zg()(),Jc(63,`p`),Tk(64,`Opcionalmente pode-se retornar os campos:`),Zg(),Jc(65,`ul`)(66,`li`)(67,`code`),Tk(68,`helpUrl`),Zg(),Tk(69,`: link para a documentação do erro;`),Zg(),Jc(70,`li`)(71,`code`),Tk(72,`type`),Zg(),Tk(73,`: pode ser informado os seguintes valores: `),Jc(74,`code`),Tk(75,`error`),Zg(),Tk(76,`, `),Jc(77,`code`),Tk(78,`warning`),Zg(),Tk(79,` e `),Jc(80,`code`),Tk(81,`information`),Zg(),Tk(82,`;`),Zg(),Jc(83,`li`)(84,`code`),Tk(85,`details`),Zg(),Tk(86,`: lista de objetos de erro (recursiva) com mais detalhes sobre o erro principal.`),Zg()(),Jc(87,`pre`)(88,`code`),Tk(89,`{
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
`),Zg()(),Jc(90,`p`),_u(91,`a`,13),Zg(),Jc(92,`h3`),Tk(93,`Mensagens de sucesso`),Zg(),Jc(94,`p`),Tk(95,`Mensagens de sucesso (código HTTP 2xx) devem retornar diretamente a entidade que representa o objeto resultante da operação do `),Jc(96,`em`),Tk(97,`endpoint`),Zg(),Tk(98,`. Exemplo:`),Zg(),Jc(99,`pre`)(100,`code`),Tk(101,`GET https://example.com.br/api/users/10

{
    id: 10,
    name: "John",
    surname: "Doe",
    age: 25,
    country: "US"
}
`),Zg()(),Jc(102,`p`),Tk(103,`Opcionalmente, o atributo `),Jc(104,`code`),Tk(105,`_messages`),Zg(),Tk(106,` pode ser incluído no objeto retornado para fornecer alguma informação complementar ao processamento realizado (mensagens de aviso, de negócio, etc). `),Zg(),Jc(107,`p`),Tk(108,`O formato do objeto de mensagem segue o padrão anteriormente descrito, para mensagens de erro.`),Zg(),Jc(109,`pre`)(110,`code`),Tk(111,`GET https://example.com.br/api/users/10
 
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
`),Zg()(),Jc(112,`p`),_u(113,`a`,14),Zg(),Jc(114,`h4`),Tk(115,`Mensagens de sucesso para coleções`),Zg(),Jc(116,`p`),Tk(117,`Nos casos em que o resultado da operação do `),Jc(118,`em`),Tk(119,`endpoint`),Zg(),Tk(120,` representa uma coleção (lista de itens), os itens devem estar agrupados em um objeto com as propriedades `),Jc(121,`code`),Tk(122,`hasNext`),Zg(),Tk(123,`, indicando se existe uma próxima página com mais registros para aquela coleção e `),Jc(124,`code`),Tk(125,`items`),Zg(),Tk(126,` que representam a lista de itens retornados.`),Zg(),Jc(127,`pre`)(128,`code`),Tk(129,`{
  hasNext: true,
  items: [
    {},
    {},
    ...
  ]
}
`),Zg()(),Jc(130,`p`),Tk(131,`Para o retorno de coleções, também é possível incluir o atributo `),Jc(132,`code`),Tk(133,`_messages`),Zg(),Tk(134,`, conforme segue:`),Zg(),Jc(135,`pre`)(136,`code`),Tk(137,`{
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
`),Zg()(),Jc(138,`p`),_u(139,`a`,15),Zg(),Jc(140,`h2`),Tk(141,`Formato das requisições para as coleções`),Zg(),Jc(142,`p`),Tk(143,`Os `),Jc(144,`em`),Tk(145,`endpoints`),Zg(),Tk(146,` também podem receber parâmetros na requisição que servem para especificar o tipo de resposta desejada, por exemplo: ordenação. A seguir, serão apresentados os parâmetros que poderão ser enviados nessas requisições.`),Zg(),Jc(147,`p`),_u(148,`a`,16),Zg(),Jc(149,`h3`),Tk(150,`Ordenação`),Zg(),Jc(151,`p`),Tk(152,`Quando algum componente, como `),Jc(153,`code`),Tk(154,`po-lookup`),Zg(),Tk(155,`, realizar alguma ordenação será enviado o parâmetro `),Jc(156,`code`),Tk(157,`order`),Zg(),Tk(158,`, com as seguintes características:`),Zg(),Jc(159,`ul`)(160,`li`),Tk(161,`campos precedidos por um sinal de subtração (-) devem ser ordenados de forma decrescente;`),Zg(),Jc(162,`li`),Tk(163,`campos que omitirem o sinal (subtração) devem ser ordenados de forma crescente.`),Zg()(),Jc(164,`p`),Tk(165,`Por exemplo, a seguinte requisição deve retornar a lista de usuários ordenados pelo nome de forma crescente e então pela idade de forma decrescente e pelo sobrenome de forma crescente:`),Zg(),Jc(166,`pre`)(167,`code`),Tk(168,`GET https://example.com.br/api/users?order=name,-age,surname
`),Zg()(),Jc(169,`p`),_u(170,`a`,17),Zg(),Jc(171,`h3`),Tk(172,`Filtros`),Zg(),Jc(173,`p`),Tk(174,`Aos realizar um filtro será enviado um parâmetro no formato `),Jc(175,`code`),Tk(176,`property=value`),Zg(),Tk(177,`:`),Zg(),Jc(178,`p`)(179,`code`),Tk(180,`GET https://example.com.br/api/users?name=john&surname=doe`),Zg()(),Jc(181,`p`),_u(182,`a`,18),Zg(),Jc(183,`h3`),Tk(184,`Paginação`),Zg(),Jc(185,`p`),Tk(186,`A paginação é definida pelos parâmetros `),Jc(187,`code`),Tk(188,`page`),Zg(),Tk(189,` e `),Jc(190,`code`),Tk(191,`pageSize`),Zg(),Tk(192,`, respeitando as seguintes regras: `),Zg(),Jc(193,`ul`)(194,`li`),Tk(195,`o valor do parâmetro `),Jc(196,`code`),Tk(197,`page`),Zg(),Tk(198,` deve ser um valor numérico (maior que zero) representando a página solicitada;`),Zg(),Jc(199,`li`),Tk(200,`o valor do parâmetro `),Jc(201,`code`),Tk(202,`pageSize`),Zg(),Tk(203,` deve ser um valor numérico (maior que zero) representando o total de registros retornados na consulta;`),Zg(),Jc(204,`li`),Tk(205,`os parâmetros de paginação devem obedecer a semântica de multiplicador, ou seja, se o cliente solicitou `),Jc(206,`code`),Tk(207,`page=2`),Zg(),Tk(208,` com um `),Jc(209,`code`),Tk(210,`pageSize=20`),Zg(),Tk(211,` deve-se retornar os registros de 21 até 40;`),Zg(),Jc(212,`li`),Tk(213,`a resposta de uma requisição com paginação deve retornar um atributo indicando se existe uma próxima página disponível conforme descrito na `),Jc(214,`a`,19),Tk(215,`mensagem de sucesso de coleções`),Zg(),Tk(216,` e esse atributo deve ter o nome `),Jc(217,`code`),Tk(218,`hasNext`),Zg(),Tk(219,`.`),Zg()(),Jc(220,`p`),Tk(221,`Por exemplo, a seguinte requisição deve retornar a quarta página de registros (dos registros 31 a 40 inclusive) de usuários:`),Zg(),Jc(222,`p`)(223,`code`),Tk(224,`GET https://example.com.br/api/users/?page=4&pageSize=10`),Zg()()())},dependencies:[Tze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var O=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:72,vars:0,consts:[[`p-title`,`Compatibilidade com os navegadores`,1,`guides`,`app-portal`],[1,`po-row`],[1,`po-xl-6`,`po-lg-8`,`po-md-10`,`po-sm-12`],[1,`po-table`,`po-text-color-neutral-dark-40`],[1,`po-table-header`],[1,`po-table-header-ellipsis`],[1,`po-table-row`],[1,`po-table-column`],[`href`,`https://angular.dev/reference/versions#browser-support`],[`href`,`https://angular.io/guide/deployment#local-development-in-older-browsers`]],template:function(o,s){o&1&&(Jc(0,`po-page-default`,0)(1,`p`),Tk(2,`Atualmente o PO está homologado para os seguintes navegadores:`),Zg(),Jc(3,`div`,1)(4,`div`,2)(5,`table`,3)(6,`thead`)(7,`tr`,4)(8,`th`,5),Tk(9,`Navegadores`),Zg(),Jc(10,`th`,5),Tk(11,`Versões`),Zg()()(),Jc(12,`tbody`)(13,`tr`,6)(14,`th`,7),Tk(15,`Chrome`),Zg(),Jc(16,`td`,7),Tk(17,`2 versões mais recentes`),Zg()(),Jc(18,`tr`,6)(19,`th`,7),Tk(20,`Firefox`),Zg(),Jc(21,`td`,7),Tk(22,`versão mais recente e versão de suporte estendido (ESR)`),Zg()(),Jc(23,`tr`,6)(24,`th`,7),Tk(25,`Edge`),Zg(),Jc(26,`td`,7),Tk(27,`2 últimas versões principais`),Zg()(),Jc(28,`tr`,6)(29,`th`,7),Tk(30,`Android`),Zg(),Jc(31,`td`,7),Tk(32,`2 últimas versões principais`),Zg()()()()()(),Jc(33,`blockquote`)(34,`p`),Tk(35,`Nossa homologa\xE7\xE3o tem como base os navegadores que o Angular suporta nativamente. Para saber mais, acesse o guia
`),Jc(36,`a`,8)(37,`em`),Tk(38,`Browser support`),Zg()(),Tk(39,` do Angular.`),Zg()(),Jc(40,`blockquote`)(41,`p`),Tk(42,`Caso precise de algum `),Jc(43,`em`),Tk(44,`polyfill`),Zg(),Tk(45,` em sua aplicação ou precisa de mais informação sobre como funciona um `),Jc(46,`em`),Tk(47,`polyfill`),Zg(),Tk(48,` acesse a documentação `),Jc(49,`a`,8)(50,`em`),Tk(51,`Browser support`),Zg()(),Tk(52,` do Angular.`),Zg()(),Jc(53,`h2`),Tk(54,`Executando a aplicação localmente`),Zg(),Jc(55,`p`),Tk(56,`A partir do Angular CLI v8, os comandos `),Jc(57,`em`),Tk(58,`ng serve`),Zg(),Tk(59,`, `),Jc(60,`em`),Tk(61,`ng test`),Zg(),Tk(62,` e `),Jc(63,`em`),Tk(64,`ng e2e`),Zg(),Tk(65,` são executados com ES2015, não sendo suportado para navegadores como Internet Explorer.`),Zg(),Jc(66,`p`),Tk(67,`Para conseguir executar a aplicação localmente no Internet Explorer, veja a documentação`),_u(68,`br`),Jc(69,`a`,9),Tk(70,`Desenvolvendo localmente em navegadores antigos`),Zg(),Tk(71,`.`),Zg()())},dependencies:[Tze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var D=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:865,vars:0,consts:[[`p-title`,`Depreciações`,1,`guides`,`app-portal`],[`href`,`https://github.com/po-ui/po-angular/blob/master/CHANGELOG.md`],[1,`po-row`],[1,`po-xl-6`,`po-lg-8`,`po-md-10`,`po-sm-12`],[1,`po-table`,`po-text-color-neutral-dark-40`],[1,`po-table-header`],[1,`po-table-header-ellipsis`],[1,`po-table-row`],[1,`po-table-column`],[`href`,`documentation/po-navbar`],[1,`po-table-column`,2,`text-align`,`center`],[`href`,`documentation/po-gauge`],[`href`,`documentation/po-tabs`],[`href`,`documentation/po-tag`],[`href`,`documentation/po-button`],[`href`,`documentation/po-button-group`],[`href`,`documentation/po-container`],[`href`,`documentation/po-table`],[`href`,`documentation/po-chart`],[`href`,`/icons`],[`href`,`documentation/po-header`],[`href`,`documentation/po-input`],[`href`,`documentation/po-dynamic-form`],[`href`,`documentation/po-select`],[`href`,`documentation/po-switch`],[`href`,`documentation`],[`href`,`https://animaliads.notion.site/Bot-o-fb3a921e8ba54bd38b39758c24613368`],[`href`,`documentation/po-page-list`],[`href`,`documentation/po-page-login`],[`href`,`documentation/po-sync`],[`href`,`documentation/po-upload`],[`href`,`documentation/po-lookup`],[`href`,`documentation/po-http-interceptor`],[`href`,`documentation/po-page-detail`],[`href`,`documentation/po-page-edit`]],template:function(o,s){o&1&&(Jc(0,`po-page-default`,0)(1,`p`),Tk(2,`Às vezes as mudanças são necessárias para inovar e se manter atualizado, e para tornar essas transições o mais fácil possível, assumimos o compromisso de minimizar o número de mudanças significativas e fornecer ferramentas de migração, além disso, seguimos uma política de suspensão de uso para que você tenha tempo hábil para atualizar suas aplicações com as funcionalidades mais recentes.`),Zg(),Jc(3,`h2`),Tk(4,`Descontinuidade`),Zg(),Jc(5,`p`),Tk(6,`Anunciamos os recursos obsoletos no nosso `),Jc(7,`a`,1),Tk(8,`CHANGELOG`),Zg(),Tk(9,`. Esses recursos obsoletos aparecem na documentação com uma marcação de `),Jc(10,`em`)(11,`code`),Tk(12,`Deprecated`),Zg()(),Tk(13,` e não são mais exemplificados nos `),Jc(14,`em`),Tk(15,`samples`),Zg(),Tk(16,` do portal. Quando anunciamos uma suspensão de uso, sempre anunciamos também um caminho de atualização recomendado. Neste documento teremos um resumo desses recursos depreciados.`),Zg(),Jc(17,`p`),Tk(18,`Quando um recurso é descontinuado ele ainda se mantém presente geralmente pelas próximas `),Jc(19,`code`),Tk(20,`duas`),Zg(),Tk(21,` versões principais. Depois disso esses recursos serão removidos. Uma descontinuação pode ser anunciada em qualquer versão, mas a sua remoção acontecerá apenas na versão principal. Até um recurso depreciado ser removido, manteremos o suporte a problemas críticos e de segurança e também temos ferramentas de migração que geralmente automatizam a maior parte das atualizações.`),Zg(),Jc(22,`h2`),Tk(23,`Índice`),Zg(),Jc(24,`p`),Tk(25,`A tabela a seguir lista todos os recursos depreciados, organizados pelo release em que serão removidos. Cada item contém um link para a seção que descreve o motivo da suspensão de uso e as opções de substituição.`),Zg(),Jc(26,`div`,2)(27,`div`,3)(28,`table`,4)(29,`thead`)(30,`tr`,5)(31,`th`,6),Tk(32,`Área`),Zg(),Jc(33,`th`,6),Tk(34,`API ou Funcionalidade`),Zg(),Jc(35,`th`,6),Tk(36,`Removida em`),Zg()()(),Jc(37,`tbody`)(38,`tr`,7)(39,`th`,8)(40,`a`,9),Tk(41,`PoNavbar`),Zg()(),Jc(42,`td`,8),Tk(43,`Componente descontinuado`),Zg(),Jc(44,`td`,10),Tk(45,`v23`),Zg()(),Jc(46,`tr`,7)(47,`th`,8)(48,`a`,11),Tk(49,`PoGauge`),Zg()(),Jc(50,`td`,8),Tk(51,`Componente descontinuado`),Zg(),Jc(52,`td`,10),Tk(53,`v22`),Zg()(),Jc(54,`tr`,7)(55,`th`,8)(56,`a`,12),Tk(57,`PoTabs`),Zg()(),Jc(58,`td`,8),Tk(59,`p-small`),Zg(),Jc(60,`td`,10),Tk(61,`v18`),Zg()(),Jc(62,`tr`,7)(63,`th`,8)(64,`a`,13),Tk(65,`PoTag`),Zg()(),Jc(66,`td`,8),Tk(67,`p-inverse`),Zg(),Jc(68,`td`,10),Tk(69,`v18`),Zg()(),Jc(70,`tr`,7)(71,`th`,8)(72,`a`,14),Tk(73,`PoButton`),Zg()(),Jc(74,`td`,8),Tk(75,`p-small`),Zg(),Jc(76,`td`,10),Tk(77,`v17`),Zg()(),Jc(78,`tr`,7)(79,`th`,8)(80,`a`,15),Tk(81,`PoButtonGroup`),Zg()(),Jc(82,`td`,8),Tk(83,`p-small`),Zg(),Jc(84,`td`,10),Tk(85,`v17`),Zg()(),Jc(86,`tr`,7)(87,`th`,8)(88,`a`,16),Tk(89,`PoContainer`),Zg()(),Jc(90,`td`,8),Tk(91,`p-no-shadow`),Zg(),Jc(92,`td`,10),Tk(93,`v17`),Zg()(),Jc(94,`tr`,7)(95,`th`,8)(96,`a`,17),Tk(97,`PoTable`),Zg()(),Jc(98,`td`,8),Tk(99,`p-hide-text-overflow`),Zg(),Jc(100,`td`,10),Tk(101,`v17`),Zg()()()()()(),Jc(102,`blockquote`)(103,`p`),Tk(104,`Ver mais detalhes no nosso `),Jc(105,`a`,1),Tk(106,`CHANGELOG`),Zg(),Tk(107,` e na nossa documentação das ferramentas de migração que automatizam a maioria dos breaking changes.`),Zg()(),Jc(108,`h2`),Tk(109,`Depreciações`),Zg(),Jc(110,`p`),Tk(111,`Esta seção contém uma lista completa de todos os recursos obsoletos com detalhes para ajudá-lo a planejar sua migração.`),Zg(),Jc(112,`h3`),Tk(113,`PoGauge`),Zg(),Jc(114,`div`,2)(115,`div`,3)(116,`table`,4)(117,`thead`)(118,`tr`,5)(119,`th`,6),Tk(120,`Recurso`),Zg(),Jc(121,`th`,6),Tk(122,`Substituição`),Zg(),Jc(123,`th`,6),Tk(124,`Anúncio da Depreciação`),Zg(),Jc(125,`th`,6),Tk(126,`Removido em`),Zg()()(),Jc(127,`tbody`)(128,`tr`,7)(129,`th`,8),Tk(130,`Componente po-gauge`),Zg(),Jc(131,`td`,8)(132,`a`,18),Tk(133,`po-chart (type=gauge)`),Zg()(),Jc(134,`td`,10),Tk(135,`v19`),Zg(),Jc(136,`td`,10),Tk(137,`v22`),Zg()()()()()(),Jc(138,`p`),Tk(139,`O componente `),Jc(140,`code`),Tk(141,`po-gauge`),Zg(),Tk(142,` foi removido. Utilize o `),Jc(143,`code`),Tk(144,`po-chart`),Zg(),Tk(145,` com `),Jc(146,`code`),Tk(147,`p-type="gauge"`),Zg(),Tk(148,` como alternativa.`),Zg(),Jc(149,`p`),Tk(150,`Antes:`),Zg(),Jc(151,`pre`)(152,`code`),Tk(153,`<po-gauge [p-value]="72" [p-ranges]="ranges"></po-gauge>
`),Zg()(),Jc(154,`p`),Tk(155,`Depois:`),Zg(),Jc(156,`pre`)(157,`code`),Tk(158,`<po-chart p-type="gauge" [p-options]="gaugeOptions" [p-series]="gaugeSeries"></po-chart>
`),Zg()(),Jc(159,`h3`),Tk(160,`PoButton`),Zg(),Jc(161,`div`,2)(162,`div`,3)(163,`table`,4)(164,`thead`)(165,`tr`,5)(166,`th`,6),Tk(167,`Recurso`),Zg(),Jc(168,`th`,6),Tk(169,`Substituição`),Zg(),Jc(170,`th`,6),Tk(171,`Anúncio da Depreciação`),Zg(),Jc(172,`th`,6),Tk(173,`Removido em`),Zg()()(),Jc(174,`tbody`)(175,`tr`,7)(176,`th`,8),Tk(177,`p-type`),Zg(),Jc(178,`td`,8)(179,`a`,14),Tk(180,`p-kind`),Zg()(),Jc(181,`td`,10),Tk(182,`v6`),Zg(),Jc(183,`td`,10),Tk(184,`v15`),Zg()()()()()(),Jc(185,`h4`),Tk(186,`Deprecia p-type default`),Zg(),Jc(187,`p`),Tk(188,`Indicamos o uso da propriedade `),Jc(189,`code`),Tk(190,`p-kind`),Zg(),Tk(191,` secondary`),Zg(),Jc(192,`p`),Tk(193,`Antes:`),Zg(),Jc(194,`pre`)(195,`code`),Tk(196,`// html
<po-button [p-type]="default" ...></po-button>
`),Zg()(),Jc(197,`p`),Tk(198,`Depois:`),Zg(),Jc(199,`pre`)(200,`code`),Tk(201,`// html
<po-button p-kind="secondary" ...></po-button>
`),Zg()(),Jc(202,`h4`),Tk(203,`Deprecia p-type primary`),Zg(),Jc(204,`p`),Tk(205,`Indicamos o uso da propriedade `),Jc(206,`code`),Tk(207,`p-kind`),Zg(),Tk(208,` primary`),Zg(),Jc(209,`p`),Tk(210,`Antes:`),Zg(),Jc(211,`pre`)(212,`code`),Tk(213,`// html
<po-button [p-type]="primary" ...></po-button>
`),Zg()(),Jc(214,`p`),Tk(215,`Depois:`),Zg(),Jc(216,`pre`)(217,`code`),Tk(218,`// html
<po-button p-kind="primary" ...></po-button>
`),Zg()(),Jc(219,`h4`),Tk(220,`Deprecia p-type link`),Zg(),Jc(221,`p`),Tk(222,`Indicamos o uso da propriedade `),Jc(223,`code`),Tk(224,`p-kind`),Zg(),Tk(225,` tertiary`),Zg(),Jc(226,`p`),Tk(227,`Antes:`),Zg(),Jc(228,`pre`)(229,`code`),Tk(230,`// html
<po-button [p-type]="link" ...></po-button>
`),Zg()(),Jc(231,`p`),Tk(232,`Depois:`),Zg(),Jc(233,`pre`)(234,`code`),Tk(235,`// html
<po-button p-kind="tertiary" ...></po-button>
`),Zg()(),Jc(236,`h4`),Tk(237,`Deprecia p-type danger`),Zg(),Jc(238,`p`),Tk(239,`Indicamos o uso da propriedade `),Jc(240,`code`),Tk(241,`p-danger`),Zg(),Tk(242,` true`),Zg(),Jc(243,`p`),Tk(244,`Antes:`),Zg(),Jc(245,`pre`)(246,`code`),Tk(247,`// html
<po-button [p-type]="danger" ...></po-button>
`),Zg()(),Jc(248,`p`),Tk(249,`Depois:`),Zg(),Jc(250,`pre`)(251,`code`),Tk(252,`// html
<po-button [p-danger]="true" ...></po-button>
`),Zg()(),Jc(253,`h3`),Tk(254,`HttpClientModule`),Zg(),Jc(255,`blockquote`)(256,`p`),Tk(257,`O módulo HttpClientModule foi removido do projeto não sendo mais importado diretamente nos componentes que o utilizavam e por motivos de boas práticas é necessário importar o HttpClientModule apenas no módulo principal da aplicação.`),Zg()(),Jc(258,`p`),Tk(259,`Exemplo:`),Zg(),Jc(260,`pre`)(261,`code`),Tk(262,`// app.module.ts
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
`),Zg()(),Jc(263,`h3`),Tk(264,`Remoção da biblioteca POIcon`),Zg(),Jc(265,`p`),Tk(266,`A partir da v21, a biblioteca de ícones POIcon foi removida. O conjunto padrão de ícones passa a ser a lib Animalia Icons.`),Zg(),Jc(267,`p`),Tk(268,`Antes - PO Icon (legado)`),Zg(),Jc(269,`pre`)(270,`code`),Tk(271,`//html
<i class="po-icon po-icon-user"></i>
`),Zg()(),Jc(272,`p`),Tk(273,`Depois - Animalia Icons (atual)`),Zg(),Jc(274,`pre`)(275,`code`),Tk(276,`//html
<i class="an an-user"></i>
`),Zg()(),Jc(277,`blockquote`)(278,`p`),Tk(279,`Para saber como utilizar, veja em `),Jc(280,`a`,19),Tk(281,`Biblioteca de ícones`),Zg(),Tk(282,` do PO UI.`),Zg()(),Jc(283,`h2`),Tk(284,`Breaking Changes`),Zg(),Jc(285,`div`,2)(286,`div`,3)(287,`table`,4)(288,`thead`)(289,`tr`,5)(290,`th`,6),Tk(291,`Área`),Zg(),Jc(292,`th`,6),Tk(293,`Funcionalidade`),Zg(),Jc(294,`th`,6),Tk(295,`Substituição`),Zg(),Jc(296,`th`,6),Tk(297,`Removida em`),Zg()()(),Jc(298,`tbody`)(299,`tr`,7)(300,`th`,8)(301,`a`,11),Tk(302,`PoGauge`),Zg()(),Jc(303,`td`,8),Tk(304,`Componente descontinuado`),Zg(),Jc(305,`td`,8)(306,`a`,18),Tk(307,`PoChart (type=gauge)`),Zg()(),Jc(308,`td`,10),Tk(309,`v22`),Zg()(),Jc(310,`tr`,7)(311,`th`,8)(312,`a`,9),Tk(313,`PoNavbar`),Zg()(),Jc(314,`td`,8),Tk(315,`Componente descontinuado`),Zg(),Jc(316,`td`,8)(317,`a`,20),Tk(318,`PoHeader`),Zg()(),Jc(319,`td`,10),Tk(320,`v23`),Zg()(),Jc(321,`tr`,7)(322,`th`,8)(323,`a`,21),Tk(324,`Campos de formulários`),Zg()(),Jc(325,`td`,8),Tk(326,`p-additional-help-tooltip`),Zg(),Jc(327,`td`,8),Tk(328,`p-helper`),Zg(),Jc(329,`td`,10),Tk(330,`v23`),Zg()(),Jc(331,`tr`,7)(332,`th`,8)(333,`a`,22),Tk(334,`PoDynamicForm`),Zg()(),Jc(335,`td`,8),Tk(336,`p-additional-help-tooltip`),Zg(),Jc(337,`td`,8),Tk(338,`p-helper`),Zg(),Jc(339,`td`,10),Tk(340,`v23`),Zg()(),Jc(341,`tr`,7)(342,`th`,8)(343,`a`,19),Tk(344,`POIcon`),Zg()(),Jc(345,`td`,8),Tk(346,`Biblioteca de ícones`),Zg(),Jc(347,`td`,8),Tk(348,`Animalia Icons`),Zg(),Jc(349,`td`,10),Tk(350,`v21`),Zg()(),Jc(351,`tr`,7)(352,`th`,8)(353,`a`,12),Tk(354,`PoTabs`),Zg()(),Jc(355,`td`,8),Tk(356,`p-small`),Zg(),Jc(357,`td`,8),Tk(358,`-`),Zg(),Jc(359,`td`,10),Tk(360,`v18`),Zg()(),Jc(361,`tr`,7)(362,`th`,8)(363,`a`,13),Tk(364,`PoTag`),Zg()(),Jc(365,`td`,8),Tk(366,`p-inverse`),Zg(),Jc(367,`td`,8),Tk(368,`-`),Zg(),Jc(369,`td`,10),Tk(370,`v18`),Zg()(),Jc(371,`tr`,7)(372,`th`,8)(373,`a`,14),Tk(374,`PoButton`),Zg()(),Jc(375,`td`,8),Tk(376,`p-small`),Zg(),Jc(377,`td`,8),Tk(378,`-`),Zg(),Jc(379,`td`,10),Tk(380,`v17`),Zg()(),Jc(381,`tr`,7)(382,`th`,8)(383,`a`,15),Tk(384,`PoButtonGroup`),Zg()(),Jc(385,`td`,8),Tk(386,`p-small`),Zg(),Jc(387,`td`,8),Tk(388,`-`),Zg(),Jc(389,`td`,10),Tk(390,`v17`),Zg()(),Jc(391,`tr`,7)(392,`th`,8)(393,`a`,16),Tk(394,`PoContainer`),Zg()(),Jc(395,`td`,8),Tk(396,`p-no-shadow`),Zg(),Jc(397,`td`,8),Tk(398,`-`),Zg(),Jc(399,`td`,10),Tk(400,`v17`),Zg()(),Jc(401,`tr`,7)(402,`th`,8)(403,`a`,17),Tk(404,`PoTable`),Zg()(),Jc(405,`td`,8),Tk(406,`p-hide-text-overflow`),Zg(),Jc(407,`td`,8),Tk(408,`-`),Zg(),Jc(409,`td`,10),Tk(410,`v17`),Zg()(),Jc(411,`tr`,7)(412,`th`,8)(413,`a`,14),Tk(414,`PoButton`),Zg()(),Jc(415,`td`,8),Tk(416,`p-type`),Zg(),Jc(417,`td`,8),Tk(418,`-`),Zg(),Jc(419,`td`,10),Tk(420,`v15`),Zg()(),Jc(421,`tr`,7)(422,`th`,8),Tk(423,`Build`),Zg(),Jc(424,`td`,8),Tk(425,`HttpClientModule`),Zg(),Jc(426,`td`,8),Tk(427,`-`),Zg(),Jc(428,`td`,10),Tk(429,`v15`),Zg()(),Jc(430,`tr`,7)(431,`th`,8)(432,`a`,21),Tk(433,`PoDynamicFormFields`),Zg()(),Jc(434,`td`,8),Tk(435,`p-auto-focus`),Zg(),Jc(436,`td`,8),Tk(437,`-`),Zg(),Jc(438,`td`,10),Tk(439,`v14`),Zg()(),Jc(440,`tr`,7)(441,`th`,8)(442,`a`,23),Tk(443,`PoSelect`),Zg()(),Jc(444,`td`,8),Tk(445,`p-auto-focus`),Zg(),Jc(446,`td`,8),Tk(447,`-`),Zg(),Jc(448,`td`,10),Tk(449,`v14`),Zg()(),Jc(450,`tr`,7)(451,`th`,8)(452,`a`,24),Tk(453,`PoSwitch`),Zg()(),Jc(454,`td`,8),Tk(455,`p-auto-focus`),Zg(),Jc(456,`td`,8),Tk(457,`-`),Zg(),Jc(458,`td`,10),Tk(459,`v14`),Zg()(),Jc(460,`tr`,7)(461,`th`,8)(462,`a`,14),Tk(463,`PoButton`),Zg()(),Jc(464,`td`,8),Tk(465,`p-auto-focus`),Zg(),Jc(466,`td`,8),Tk(467,`-`),Zg(),Jc(468,`td`,10),Tk(469,`v14`),Zg()(),Jc(470,`tr`,7)(471,`th`,8)(472,`a`,21),Tk(473,`PoSelectOptionTemplate`),Zg()(),Jc(474,`td`,8),Tk(475,`-`),Zg(),Jc(476,`td`,8),Tk(477,`PoComboOptionTemplate`),Zg(),Jc(478,`td`,10),Tk(479,`v14`),Zg()(),Jc(480,`tr`,7)(481,`th`,8)(482,`a`,25),Tk(483,`Components`),Zg()(),Jc(484,`td`,8),Tk(485,`diminuição da altura em pequenas resoluções. `),Jc(486,`a`,26),Tk(487,`Ver mais`),Zg()(),Jc(488,`td`,8),Tk(489,`-`),Zg(),Jc(490,`td`,10),Tk(491,`v14`),Zg()(),Jc(492,`tr`,7)(493,`th`,8)(494,`a`,18),Tk(495,`PoChart`),Zg()(),Jc(496,`td`,8),Tk(497,`PoChartGaugeSerie`),Zg(),Jc(498,`td`,8)(499,`a`,11),Tk(500,`PoGauge`),Zg()(),Jc(501,`td`,10),Tk(502,`v6`),Zg()(),Jc(503,`tr`,7)(504,`th`,8)(505,`a`,18),Tk(506,`PoChart`),Zg()(),Jc(507,`td`,8),Tk(508,`PoChartSerie.category`),Zg(),Jc(509,`td`,8),Tk(510,`PoChartSerie.label`),Zg(),Jc(511,`td`,10),Tk(512,`v6`),Zg()(),Jc(513,`tr`,7)(514,`th`,8)(515,`a`,18),Tk(516,`PoChart`),Zg()(),Jc(517,`td`,8),Tk(518,`PoChartSerie.value`),Zg(),Jc(519,`td`,8),Tk(520,`PoChartSerie.data`),Zg(),Jc(521,`td`,10),Tk(522,`v6`),Zg()(),Jc(523,`tr`,7)(524,`th`,8)(525,`a`,18),Tk(526,`PoChart`),Zg()(),Jc(527,`td`,8),Tk(528,`PoChartType.Gauge`),Zg(),Jc(529,`td`,8)(530,`a`,11),Tk(531,`PoGauge`),Zg()(),Jc(532,`td`,10),Tk(533,`v6`),Zg()(),Jc(534,`tr`,7)(535,`th`,8)(536,`a`,9),Tk(537,`PoNavBar`),Zg()(),Jc(538,`td`,8),Tk(539,`p-menu`),Zg(),Jc(540,`td`,8),Tk(541,`-`),Zg(),Jc(542,`td`,10),Tk(543,`v6`),Zg()(),Jc(544,`tr`,7)(545,`th`,8)(546,`a`,18),Tk(547,`PoChart`),Zg()(),Jc(548,`td`,8),Tk(549,`PoPieChartSeries`),Zg(),Jc(550,`td`,8),Tk(551,`PoChartSerie`),Zg(),Jc(552,`td`,10),Tk(553,`v5`),Zg()(),Jc(554,`tr`,7)(555,`th`,8)(556,`a`,18),Tk(557,`PoChart`),Zg()(),Jc(558,`td`,8),Tk(559,`PoDonutChartSeries`),Zg(),Jc(560,`td`,8),Tk(561,`PoChartSerie`),Zg(),Jc(562,`td`,10),Tk(563,`v5`),Zg()(),Jc(564,`tr`,7)(565,`th`,8)(566,`a`,18),Tk(567,`PoChart`),Zg()(),Jc(568,`td`,8),Tk(569,`PoBarChartSeries`),Zg(),Jc(570,`td`,8),Tk(571,`PoChartSerie`),Zg(),Jc(572,`td`,10),Tk(573,`v5`),Zg()(),Jc(574,`tr`,7)(575,`th`,8)(576,`a`,18),Tk(577,`PoChart`),Zg()(),Jc(578,`td`,8),Tk(579,`PoColumnChartSeries`),Zg(),Jc(580,`td`,8),Tk(581,`PoChartSerie`),Zg(),Jc(582,`td`,10),Tk(583,`v5`),Zg()(),Jc(584,`tr`,7)(585,`th`,8)(586,`a`,18),Tk(587,`PoChart`),Zg()(),Jc(588,`td`,8),Tk(589,`PoLineChartSeries`),Zg(),Jc(590,`td`,8),Tk(591,`PoChartSerie`),Zg(),Jc(592,`td`,10),Tk(593,`v5`),Zg()(),Jc(594,`tr`,7)(595,`th`,8)(596,`a`,17),Tk(597,`PoTable`),Zg()(),Jc(598,`td`,8),Tk(599,`p-single-select`),Zg(),Jc(600,`td`,8),Tk(601,`[p-single-select]="false"`),Zg(),Jc(602,`td`,10),Tk(603,`v5`),Zg()(),Jc(604,`tr`,7)(605,`th`,8)(606,`a`,17),Tk(607,`PoTable`),Zg()(),Jc(608,`td`,8),Tk(609,`p-hide-select-all`),Zg(),Jc(610,`td`,8),Tk(611,`[p-hide-select-all]="false"`),Zg(),Jc(612,`td`,10),Tk(613,`v5`),Zg()(),Jc(614,`tr`,7)(615,`th`,8)(616,`a`,17),Tk(617,`PoTable`),Zg()(),Jc(618,`td`,8),Tk(619,`p-striped`),Zg(),Jc(620,`td`,8),Tk(621,`[p-striped]="false"`),Zg(),Jc(622,`td`,10),Tk(623,`v5`),Zg()(),Jc(624,`tr`,7)(625,`th`,8)(626,`a`,17),Tk(627,`PoTable`),Zg()(),Jc(628,`td`,8),Tk(629,`p-show-more-disabled`),Zg(),Jc(630,`td`,8),Tk(631,`[p-show-more-disabled]="false"`),Zg(),Jc(632,`td`,10),Tk(633,`v5`),Zg()(),Jc(634,`tr`,7)(635,`th`,8)(636,`a`,17),Tk(637,`PoTable`),Zg()(),Jc(638,`td`,8),Tk(639,`p-sort`),Zg(),Jc(640,`td`,8),Tk(641,`[p-sort]="false"`),Zg(),Jc(642,`td`,10),Tk(643,`v5`),Zg()(),Jc(644,`tr`,7)(645,`th`,8)(646,`a`,27),Tk(647,`PoPageList`),Zg()(),Jc(648,`td`,8),Tk(649,`PoPageFilter.ngModel`),Zg(),Jc(650,`td`,8),Tk(651,`-`),Zg(),Jc(652,`td`,10),Tk(653,`v4`),Zg()(),Jc(654,`tr`,7)(655,`th`,8)(656,`a`,27),Tk(657,`PoPageList`),Zg()(),Jc(658,`td`,8),Tk(659,`PoPageFilter.action: string`),Zg(),Jc(660,`td`,8),Tk(661,`PoPageFilter.action: Function`),Zg(),Jc(662,`td`,10),Tk(663,`v4`),Zg()(),Jc(664,`tr`,7)(665,`th`,8)(666,`a`,27),Tk(667,`PoPageList`),Zg()(),Jc(668,`td`,8),Tk(669,`PoPageFilter.advancedAction: string`),Zg(),Jc(670,`td`,8),Tk(671,`PoPageFilter.advancedAction: Function`),Zg(),Jc(672,`td`,10),Tk(673,`v4`),Zg()(),Jc(674,`tr`,7)(675,`th`,8)(676,`a`,28),Tk(677,`PoPageLogin`),Zg()(),Jc(678,`td`,8),Tk(679,`PoPageLoginLiterals.title`),Zg(),Jc(680,`td`,8),Tk(681,`p-product-name`),Zg(),Jc(682,`td`,10),Tk(683,`v4`),Zg()(),Jc(684,`tr`,7)(685,`th`,8)(686,`a`,18),Tk(687,`PoChart`),Zg()(),Jc(688,`td`,8),Tk(689,`PoChartOptions.axis.axisXGridLines`),Zg(),Jc(690,`td`,8),Tk(691,`PoChartOptions.axis.gridLines`),Zg(),Jc(692,`td`,10),Tk(693,`v4`),Zg()(),Jc(694,`tr`,7)(695,`th`,8)(696,`a`,29),Tk(697,`PoSync`),Zg()(),Jc(698,`td`,8),Tk(699,`portinari_sync_date`),Zg(),Jc(700,`td`,8),Tk(701,`po_sync_date`),Zg(),Jc(702,`td`,10),Tk(703,`v3`),Zg()(),Jc(704,`tr`,7)(705,`th`,8)(706,`a`,30),Tk(707,`PoUpload`),Zg()(),Jc(708,`td`,8),Tk(709,`PoUploadLiterals.cancel`),Zg(),Jc(710,`td`,8),Tk(711,`-`),Zg(),Jc(712,`td`,10),Tk(713,`v3`),Zg()(),Jc(714,`tr`,7)(715,`th`,8)(716,`a`,30),Tk(717,`PoUpload`),Zg()(),Jc(718,`td`,8),Tk(719,`PoUploadLiterals.deleteFile`),Zg(),Jc(720,`td`,8),Tk(721,`-`),Zg(),Jc(722,`td`,10),Tk(723,`v3`),Zg()(),Jc(724,`tr`,7)(725,`th`,8)(726,`a`,30),Tk(727,`PoUpload`),Zg()(),Jc(728,`td`,8),Tk(729,`PoUploadLiterals.tryAgain`),Zg(),Jc(730,`td`,8),Tk(731,`-`),Zg(),Jc(732,`td`,10),Tk(733,`v3`),Zg()(),Jc(734,`tr`,7)(735,`th`,8)(736,`a`,31),Tk(737,`PoLookup`),Zg()(),Jc(738,`td`,8),Tk(739,`getFilteredData`),Zg(),Jc(740,`td`,8),Tk(741,`getFilteredItems`),Zg(),Jc(742,`td`,10),Tk(743,`v3`),Zg()(),Jc(744,`tr`,7)(745,`th`,8)(746,`a`,17),Tk(747,`PoTable`),Zg()(),Jc(748,`td`,8),Tk(749,`p-checkbox`),Zg(),Jc(750,`td`,8),Tk(751,`p-selectable`),Zg(),Jc(752,`td`,10),Tk(753,`v3`),Zg()(),Jc(754,`tr`,7)(755,`th`,8)(756,`a`,21),Tk(757,`PoField`),Zg()(),Jc(758,`td`,8),Tk(759,`p-focus`),Zg(),Jc(760,`td`,8),Tk(761,`p-auto-focus`),Zg(),Jc(762,`td`,10),Tk(763,`v2`),Zg()(),Jc(764,`tr`,7)(765,`th`,8),Tk(766,`Packages`),Zg(),Jc(767,`td`,8),Tk(768,`@portinari/portinari-ui`),Zg(),Jc(769,`td`,8),Tk(770,`@po-ui/ng-components`),Zg(),Jc(771,`td`,10),Tk(772,`v2`),Zg()(),Jc(773,`tr`,7)(774,`th`,8),Tk(775,`Packages`),Zg(),Jc(776,`td`,8),Tk(777,`@portinari/portinari-templates`),Zg(),Jc(778,`td`,8),Tk(779,`@po-ui/ng-templates`),Zg(),Jc(780,`td`,10),Tk(781,`v2`),Zg()(),Jc(782,`tr`,7)(783,`th`,8),Tk(784,`Packages`),Zg(),Jc(785,`td`,8),Tk(786,`@portinari/portinari-code-editor`),Zg(),Jc(787,`td`,8),Tk(788,`@po-ui/ng-code-editor`),Zg(),Jc(789,`td`,10),Tk(790,`v2`),Zg()(),Jc(791,`tr`,7)(792,`th`,8),Tk(793,`Packages`),Zg(),Jc(794,`td`,8),Tk(795,`@portinari/portinari-storage`),Zg(),Jc(796,`td`,8),Tk(797,`@po-ui/ng-storage`),Zg(),Jc(798,`td`,10),Tk(799,`v2`),Zg()(),Jc(800,`tr`,7)(801,`th`,8),Tk(802,`Packages`),Zg(),Jc(803,`td`,8),Tk(804,`@portinari/portinari-sync`),Zg(),Jc(805,`td`,8),Tk(806,`@po-ui/ng-sync`),Zg(),Jc(807,`td`,10),Tk(808,`v2`),Zg()(),Jc(809,`tr`,7)(810,`th`,8)(811,`a`,32),Tk(812,`PoHttpInterceptor`),Zg()(),Jc(813,`td`,8),Tk(814,`X-Portinari-No-Message`),Zg(),Jc(815,`td`,8),Tk(816,`X-PO-No-Message`),Zg(),Jc(817,`td`,10),Tk(818,`v2`),Zg()(),Jc(819,`tr`,7)(820,`th`,8)(821,`a`,32),Tk(822,`PoHttpInterceptor`),Zg()(),Jc(823,`td`,8),Tk(824,`X-Portinari-SCREEN-LOCK`),Zg(),Jc(825,`td`,8),Tk(826,`X-PO-SCREEN-LOCK`),Zg(),Jc(827,`td`,10),Tk(828,`v2`),Zg()(),Jc(829,`tr`,7)(830,`th`,8)(831,`a`,32),Tk(832,`PoHttpInterceptor`),Zg()(),Jc(833,`td`,8),Tk(834,`X-Portinari-No-Count-Pending-Requests`),Zg(),Jc(835,`td`,8),Tk(836,`X-PO-No-Count-Pending-Requests`),Zg(),Jc(837,`td`,10),Tk(838,`v2`),Zg()(),Jc(839,`tr`,7)(840,`th`,8)(841,`a`,33),Tk(842,`PoPageDetail`),Zg()(),Jc(843,`td`,8),Tk(844,`reconhecimento das ações via funções no typescript`),Zg(),Jc(845,`td`,8),Tk(846,`utilização das propriedades p-back, p-edit e p-remove`),Zg(),Jc(847,`td`,10),Tk(848,`v2`),Zg()(),Jc(849,`tr`,7)(850,`th`,8)(851,`a`,34),Tk(852,`PoPageEdit`),Zg()(),Jc(853,`td`,8),Tk(854,`reconhecimento das ações via funções no typescript`),Zg(),Jc(855,`td`,8),Tk(856,`utilização das propriedades p-save, p-save-new e p-cancel`),Zg(),Jc(857,`td`,10),Tk(858,`v2`),Zg()()()()()(),Jc(859,`blockquote`)(860,`p`),Tk(861,`Ver mais detalhes no nosso `),Jc(862,`a`,1),Tk(863,`CHANGELOG`),Zg(),Tk(864,` e na nossa documentação das ferramentas de migração que automatizam a maioria dos breaking changes.`),Zg()()())},dependencies:[Tze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var M=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:423,vars:0,consts:[[`p-title`,`Contribuindo para o PO UI`,1,`guides`,`app-portal`],[`href`,`guides/development-flow#code-of-conduct`],[`href`,`guides/development-flow#flow`],[`href`,`guides/development-flow#create-issue`],[`href`,`guides/development-flow#code-reproduction`],[`href`,`guides/development-flow#contribute`],[`href`,`guides/development-flow#setup`],[`href`,`guides/development-flow#modifying-components`],[`href`,`guides/development-flow#preview-changes`],[`href`,`guides/development-flow#tests`],[`href`,`guides/development-flow#lint`],[`href`,`guides/development-flow#po-style`],[`href`,`guides/development-flow#build`],[`href`,`guides/development-flow#pr`],[`id`,`code-of-conduct`],[`href`,`https://github.com/po-ui/po-angular/blob/master/CODE_OF_CONDUCT.md`],[`id`,`flow`],[1,`card-list-item`],[`id`,`create-issue`],[1,`po-row`],[1,`po-pl-md-5`,`po-pr-lg-5`],[`src`,`./assets/graphics/contribute/bug.png`,1,`card-list-icon`],[1,`po-font-subtitle`,`po-pb-1`],[`href`,`https://github.com/po-ui/po-angular/issues/439`],[`href`,`https://github.com/po-ui/po-angular/pulls`],[`id`,`code-reproduction`],[`src`,`./assets/graphics/contribute/ambiente_teste.png`,1,`card-list-icon`],[`href`,`https://stackblitz.com/edit/poui-module`],[`id`,`contribute`],[`src`,`./assets/graphics/contribute/colabore.png`,1,`card-list-icon`],[1,`po-font-text`],[`id`,`setup`],[`src`,`./assets/graphics/contribute/setup.png`,1,`card-list-icon`],[1,`po-text-color-neutral-dark-40`],[`href`,`https://git-scm.com/book/en/v2`],[`href`,`https://github.com/po-ui/po-angular`],[`id`,`modifying-components`],[`src`,`./assets/graphics/contribute/modificando.png`,1,`card-list-icon`],[`href`,`https://github.com/po-ui/po-angular/blob/master/STYLEGUIDE.md`],[`href`,`https://github.com/po-ui/po-angular/blob/master/HOW_TO_DOCUMENT.md`],[`id`,`preview-changes`],[`src`,`./assets/graphics/contribute/rodando_local.png`,1,`card-list-icon`],[`id`,`tests`],[`src`,`./assets/graphics/contribute/teste_unitario.png`,1,`card-list-icon`],[`id`,`lint`],[`src`,`./assets/graphics/contribute/lint.png`,1,`card-list-icon`],[`id`,`po-style`],[`src`,`./assets/graphics/contribute/css.png`,1,`card-list-icon`],[`href`,`https://github.com/po-ui/po-style`],[`href`,`https://github.com/po-ui/po-style/blob/master/README.md`],[`id`,`build`],[`src`,`./assets/graphics/contribute/build.png`,1,`card-list-icon`],[`href`,`https://github.com/po-ui/po-angular/blob/master/CONTRIBUTING.md#commits`],[`id`,`pr`],[1,`po-pl-sm-5`,`po-pl-md-5`,`po-pr-lg-5`],[`src`,`./assets/graphics/contribute/pr.png`,1,`card-list-icon`],[`href`,`https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork`],[`href`,`https://github.com/po-ui/po-angular/blob/master/CONTRIBUTING.md#pull-requests`]],template:function(o,s){o&1&&(Jc(0,`po-page-default`,0)(1,`h4`),Tk(2,`Obrigado pelo interesse em contribuir para a biblioteca PO UI!`),Zg(),Jc(3,`h2`),Tk(4,`Conteúdo`),Zg(),Jc(5,`ul`)(6,`li`)(7,`a`,1),Tk(8,`Código de conduta`),Zg()(),Jc(9,`li`)(10,`a`,2),Tk(11,`Fluxo`),Zg(),Jc(12,`ul`)(13,`li`)(14,`a`,3),Tk(15,`Criando `),Jc(16,`em`),Tk(17,`issue`),Zg(),Tk(18,` no GitHub`),Zg()(),Jc(19,`li`)(20,`a`,4),Tk(21,`Criando reprodução de código para nova `),Jc(22,`em`),Tk(23,`issue`),Zg()()(),Jc(24,`li`)(25,`a`,5),Tk(26,`Colaborando com o PO UI`),Zg()(),Jc(27,`li`)(28,`a`,6),Tk(29,`Setup Inicial`),Zg()(),Jc(30,`li`)(31,`a`,7),Tk(32,`Modificando Componentes`),Zg()(),Jc(33,`li`)(34,`a`,8),Tk(35,`Subindo as modificações localmente`),Zg()(),Jc(36,`li`)(37,`a`,9),Tk(38,`Testes Unitários`),Zg()(),Jc(39,`li`)(40,`a`,10),Tk(41,`ES Lint`),Zg()(),Jc(42,`li`)(43,`a`,11),Tk(44,`Po Style`),Zg()(),Jc(45,`li`)(46,`a`,12),Tk(47,`Build das modificações`),Zg()(),Jc(48,`li`)(49,`a`,13),Tk(50,`Criando Pull Request`),Zg()()()()(),Jc(51,`p`),_u(52,`a`,14),Zg(),Jc(53,`h3`),Tk(54,`Código de conduta`),Zg(),Jc(55,`p`),Tk(56,`Primeiramente, pedimos para que leiam com atenção nosso `),Jc(57,`a`,15),Tk(58,`Código de Conduta`),Zg(),Tk(59,` para se inteirarem sobre nossas regras.`),Zg(),Jc(60,`p`),_u(61,`a`,16),Zg(),Jc(62,`h2`),Tk(63,`Fluxo`),Zg(),Jc(64,`p`),Tk(65,`Este guia tem por objetivo definir as regras para criação de `),Jc(66,`em`),Tk(67,`Issues`),Zg(),Tk(68,` relacionadas à melhorias ou defeitos na biblioteca, assim como orientar no interesse em colaborar com o PO UI, definindo premissas para criação de novas `),Jc(69,`em`),Tk(70,`Branchs`),Zg(),Tk(71,`, `),Jc(72,`em`),Tk(73,`Pull Requests`),Zg(),Tk(74,` e `),Jc(75,`em`),Tk(76,`Commits`),Zg(),Tk(77,` no projeto PO UI. `),Zg(),Jc(78,`div`)(79,`div`,17),_u(80,`a`,18),Jc(81,`div`,19)(82,`div`,20),_u(83,`img`,21),Jc(84,`h3`,22),Tk(85,`Criando uma `),Jc(86,`em`),Tk(87,`issue`),Zg(),Tk(88,` no GitHub`),Zg(),Jc(89,`ul`)(90,`li`),Tk(91,`Antes de tudo, se você possui alguma questão relacionada ao uso da biblioteca, bem como dúvidas relacionadas a componentes, bibliotecas PO UI, por favor pergunte nos nossos `),Jc(92,`a`,23),Tk(93,`canais de comunicação`),Zg(),Tk(94,`.`),Zg(),Jc(95,`li`),Tk(96,`A lista de `),Jc(97,`em`),Tk(98,`issues`),Zg(),Tk(99,` do repositório PO UI é de uso exclusivo para informe de `),Jc(100,`em`),Tk(101,`bugs`),Zg(),Tk(102,` e requisições de melhorias. `),Jc(103,`em`),Tk(104,`Issues`),Zg(),Tk(105,` que não se enquadrarem nisso serão fechadas imediatamente.`),Zg(),Jc(106,`li`),Tk(107,`Se você tem uma nova `),Jc(108,`em`),Tk(109,`feature`),Zg(),Tk(110,` para nos sugerir ou então deseja reportar um bug, por favor avalie se nas `),Jc(111,`a`,24)(112,`em`),Tk(113,`Pull Requests`),Zg(),Tk(114,` do PO UI`),Zg(),Tk(115,` não tem nenhuma submissão anterior que resolva o problema, eliminando assim a eventual hipótese de duplicidade.`),Zg(),Jc(116,`li`),Tk(117,`É requerido que você descreva de maneira clara os passos necessários para reproduzir a `),Jc(118,`em`),Tk(119,`issue`),Zg(),Tk(120,` reportada. Entenda que, apesar de sermos sempre solícitos e darmos o pronto-apoio em nossos canais, reproduzir erros sem evidências diretas tomam um grande tempo da equipe.`),Zg(),Jc(121,`li`),Tk(122,`As `),Jc(123,`em`),Tk(124,`issues`),Zg(),Tk(125,` que não tiverem uma descrição detalhada e um passo-a-passo para reprodução terão menor prioridade. Se em caso de solicitação do `),Jc(126,`em`),Tk(127,`core team`),Zg(),Tk(128,` por maiores evidências, o autor da `),Jc(129,`em`),Tk(130,`issue`),Zg(),Tk(131,` terá 30 dias para resposta. Se neste período não houver qualquer resposta, então a `),Jc(132,`em`),Tk(133,`issue`),Zg(),Tk(134,` será fechada.`),Zg()()()()(),Jc(135,`div`,17),_u(136,`a`,25),Jc(137,`div`,19)(138,`div`,20),_u(139,`img`,26),Jc(140,`h3`,22),Tk(141,`Criando reprodução de código para nova `),Jc(142,`em`),Tk(143,`issue`),Zg()(),Jc(144,`ul`)(145,`li`),Tk(146,`Crie uma nova aplicação em Angular incluindo o componente e o comportamento reportado para nossa análise.`),Zg(),Jc(147,`li`),Tk(148,`Adicione o mínimo de código necessário para reprodução do bug, facilitando assim a verificação da situação.`),Zg(),Jc(149,`li`),Tk(150,`Publique a aplicação no GitHub e inclua o link ao criar a issue.`),Zg(),Jc(151,`li`),Tk(152,`Pode-se também usar o `),Jc(153,`a`,27),Tk(154,`Stackblitz`),Zg(),Tk(155,` para reproduzir o `),Jc(156,`em`),Tk(157,`bug`),Zg(),Tk(158,` relatado na `),Jc(159,`em`),Tk(160,`issue`),Zg(),Tk(161,`.`),Zg(),Jc(162,`li`),Tk(163,`Certifique-se de incluir os passos para reprodução da issue. Estes passos devem ser claros e simples de seguir.`),Zg()()()()(),Jc(164,`div`,17),_u(165,`a`,28),Jc(166,`div`,19)(167,`div`,20),_u(168,`img`,29),Jc(169,`h3`,22),Tk(170,`Colaborando com o PO UI`),Zg(),Jc(171,`p`,30),Tk(172,`Mais uma vez agradecemos por dedicar seu tempo para contribuir com o PO UI! Antes de submeter uma `),Jc(173,`em`),Tk(174,`pull request`),Zg(),Tk(175,`, pedimos pra que você crie uma `),Jc(176,`em`),Tk(177,`issue`),Zg(),Tk(178,` reportando uma eventual sugestão de melhoria, nova funcionalidade ou correção de bug e nos deixe ciente de que deseja criar uma `),Jc(179,`em`),Tk(180,`pull request`),Zg(),Tk(181,` para isso. Caso se trate de uma `),Jc(182,`em`),Tk(183,`issue`),Zg(),Tk(184,` já existente, por favor comente na `),Jc(185,`em`),Tk(186,`issue`),Zg(),Tk(187,`. Isso nos ajuda a acompanhar as `),Jc(188,`em`),Tk(189,`pull requests`),Zg(),Tk(190,` e também evitar duplicidades.`),Zg()()()(),Jc(191,`div`,17),_u(192,`a`,31),Jc(193,`div`,19)(194,`div`,20),_u(195,`img`,32),Jc(196,`h3`,22),Tk(197,`Setup Inicial`),Zg(),Jc(198,`blockquote`,33),Tk(199,`Para seguir o guia é fundamental o conhecimento da `),Jc(200,`a`,34),Tk(201,`ferramenta Git.`),Zg()(),Jc(202,`ul`)(203,`li`),Tk(204,`Para utilizar o PO UI, é pré-requisito ter o `),Jc(205,`code`),Tk(206,`Node.js`),Zg(),Tk(207,` instalado (versão 18.13.0 ou acima) e o seu gerenciador de pacote favorito na versão mais atual.`),Zg(),Jc(208,`li`)(209,`p`),Tk(210,`É importante que tenha a versão equivalente do Angular instalada. Instale-o via `),Jc(211,`code`),Tk(212,`npm`),Zg(),Tk(213,` ou `),Jc(214,`code`),Tk(215,`yarn`),Zg(),Tk(216,`:`),Zg(),Jc(217,`p`),Tk(218,`Instalando com npm:`),Zg(),Jc(219,`pre`)(220,`code`),Tk(221,`npm i -g @angular/cli`),Zg()(),Jc(222,`p`),Tk(223,`Caso opte pelo yarn:`),Zg(),Jc(224,`pre`)(225,`code`),Tk(226,`yarn global add @angular/cli`),Zg()()(),Jc(227,`li`),Tk(228,`Faça um `),Jc(229,`a`,35)(230,`em`),Tk(231,`fork`),Zg(),Tk(232,` do repositório PO UI`),Zg(),Tk(233,`. `),Jc(234,`blockquote`),Tk(235,`Membros do `),Jc(236,`em`),Tk(237,`Core Team`),Zg(),Tk(238,` devem gerar uma nova `),Jc(239,`em`),Tk(240,`branch`),Zg(),Tk(241,` ao invés do `),Jc(242,`em`),Tk(243,`fork`),Zg(),Tk(244,`.`),Zg()(),Jc(245,`li`),Tk(246,`Faça `),Jc(247,`em`),Tk(248,`clone`),Zg(),Tk(249,` do `),Jc(250,`em`),Tk(251,`fork`),Zg(),Tk(252,` gerado.`),Zg(),Jc(253,`li`),Tk(254,`Execute `),Jc(255,`code`),Tk(256,`npm install`),Zg(),Tk(257,` para instalar as dependências.`),Zg()()()()(),Jc(258,`div`,17),_u(259,`a`,36),Jc(260,`div`,19)(261,`div`,20),_u(262,`img`,37),Jc(263,`h3`,22),Tk(264,`Modificando componentes`),Zg(),Jc(265,`ul`)(266,`li`),Tk(267,`Localize o componente em `),Jc(268,`code`),Tk(269,`projects/<projeto>/src/lib`),Zg()(),Jc(270,`li`),Tk(271,`É muito importante que analise nossa documentação sobre `),Jc(272,`a`,38),Tk(273,`boas práticas`),Zg(),Tk(274,` para entender a implementação dos componentes PO UI.`),Zg(),Jc(275,`li`),Tk(276,`Modifique a documentação com base em nosso `),Jc(277,`a`,39),Tk(278,`guia detalhado de documentação`),Zg(),Tk(279,`.`),Zg(),Jc(280,`li`),Tk(281,`Se as implementações também contemplarem estilo, note que deverá modificá-las no repositório `),Jc(282,`a`,11),Tk(283,`PO UI Style`),Zg(),Tk(284,`.`),Zg(),Jc(285,`li`),Tk(286,`Faça as implementações desejadas, seja um novo componente, correção ou melhoria, e `),Jc(287,`a`,8),Tk(288,`verifique no portal`),Zg(),Tk(289,` as modificações realizadas tanto nos `),Jc(290,`em`),Tk(291,`samples`),Zg(),Tk(292,` quanto na documentação.`),Zg()()()()(),Jc(293,`div`,17),_u(294,`a`,40),Jc(295,`div`,19)(296,`div`,20),_u(297,`img`,41),Jc(298,`h3`,22),Tk(299,`Subindo as modificações localmente`),Zg(),Jc(300,`ul`)(301,`li`)(302,`p`),Tk(303,`As modificações de código e documentação realizadas podem ser conferidas executando os comandos:`),Zg(),Jc(304,`pre`)(305,`code`),Tk(306,`npm run build:portal && ng serve portal`),Zg()()(),Jc(307,`li`),Tk(308,`O navegador exibirá o portal na url `),Jc(309,`code`),Tk(310,`http://localhost:4200/`),Zg(),Tk(311,`.`),Zg(),Jc(312,`li`),Tk(313,`A partir disso, navegue até o componente para verificação das modificações.`),Zg(),Jc(314,`li`),Tk(315,`Pedimos para que atente para a inclusão da melhoria em nossos `),Jc(316,`em`),Tk(317,`samples`),Zg(),Tk(318,`, em especial no sample `),Jc(319,`code`),Tk(320,`labs`),Zg(),Tk(321,`. Na inviabilidade de usar os `),Jc(322,`em`),Tk(323,`samples`),Zg(),Tk(324,` já existentes, considere a necessidade de criar um novo `),Jc(325,`em`),Tk(326,`sample`),Zg(),Tk(327,` de uso.`),Zg()()()()(),Jc(328,`div`,17),_u(329,`a`,42),Jc(330,`div`,19)(331,`div`,20),_u(332,`img`,43),Jc(333,`h3`,22),Tk(334,`Testes Unitários`),Zg(),Jc(335,`p`),Tk(336,`A cobertura de testes do PO UI é total. Isso significa que, obrigatoriamente, as modificações devem ser totalmente testadas. Para tal, execute os testes nos arquivos `),Jc(337,`em`),Tk(338,`.spec`),Zg(),Tk(339,` contidos no mesmo diretório do componente.`),Zg(),Jc(340,`p`),Tk(341,`Para rodar os testes, rode o comando:`),Zg(),Jc(342,`pre`)(343,`code`),Tk(344,`npm run test`),Zg()(),Jc(345,`p`),Tk(346,`A cobertura de testes pode ser avaliada no arquivo `),Jc(347,`code`),Tk(348,`index.html`),Zg(),Tk(349,` existente no diretório `),Jc(350,`code`),Tk(351,`./coverage`),Zg(),Tk(352,`. `),Zg()()()(),Jc(353,`div`,17),_u(354,`a`,44),Jc(355,`div`,19)(356,`div`,20),_u(357,`img`,45),Jc(358,`h3`,22),Tk(359,`ESLint`),Zg(),Jc(360,`p`),Tk(361,`O PO UI utiliza o ESLint como linter padrão. Execute `),Jc(362,`code`),Tk(363,`ng lint`),Zg(),Tk(364,` para fazer a checagem de código-fonte e verificar eventuais erros programáticos, estilísticos, construções suspeitas, entre outros.`),Zg()()()(),Jc(365,`div`,17),_u(366,`a`,46),Jc(367,`div`,19)(368,`div`,20),_u(369,`img`,47),Jc(370,`h3`,22),Tk(371,`PO Style`),Zg(),Jc(372,`p`),Tk(373,`As implementações de estilo do PO UI são armazenadas no `),Jc(374,`a`,48),Tk(375,`repositório PO Style`),Zg(),Tk(376,`.`),Zg(),Jc(377,`p`),Tk(378,`O desenvolvimento dos estilos é aberto para todos os desenvolvedores e agradecemos aos desenvolvedores que contribuem com melhorias e correções de erros.`),Zg(),Jc(379,`p`),Tk(380,`Para saber como você pode pode participar na melhoria dos estilos, acesse o `),Jc(381,`a`,49),Tk(382,`guia de implementação de estilo`),Zg(),Tk(383,`.`),Zg()()()(),Jc(384,`div`,17),_u(385,`a`,50),Jc(386,`div`,19)(387,`div`,20),_u(388,`img`,51),Jc(389,`h3`,22),Tk(390,`Build das modificações`),Zg(),Jc(391,`p`),Tk(392,`Uma vez em que as modificações desejadas forem concluidas e a documentação esteja atualizada, execute os comandos abaixo para testagem no Portal PO UI.`),Zg(),Jc(393,`pre`)(394,`code`),Tk(395,`npm run build
npm run build:portal
ng serve portal`),Zg()(),Jc(396,`p`),Tk(397,`Revisadas as novas funcionalidades/correções, é chegada a hora da geração de commit. Confira as `),Jc(398,`a`,52),Tk(399,`regras para criação de commit`),Zg(),Tk(400,`.`),Zg()()()(),Jc(401,`div`,17),_u(402,`a`,53),Jc(403,`div`,19)(404,`div`,54),_u(405,`img`,55),Jc(406,`h3`,22),Tk(407,`Criando Pull Request`),Zg(),Jc(408,`p`),Tk(409,`Crie uma nova pull request com a master branch como base. Confira `),Jc(410,`a`,56),Tk(411,`como criar pull request a partir de um fork`),Zg(),Tk(412,`.`),Zg(),Jc(413,`p`),Tk(414,`É importante que siga guia contendo as `),Jc(415,`a`,57),Tk(416,`regras para geração de Pull Requests`),Zg(),Tk(417,`.`),Zg(),Jc(418,`p`),Tk(419,`Ao abrir a `),Jc(420,`em`),Tk(421,`pull request`),Zg(),Tk(422,`, uma análise automática comenta na PR os componentes alterados, os componentes que os consomem, o risco estimado e onde testar. Use esse relatório como ponto de partida para o teste integrado.`),Zg()()()()()())},dependencies:[Tze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var I=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:213,vars:0,consts:[[`p-title`,`Primeiros passos`,1,`guides`,`app-portal`],[`href`,`https://cli.angular.io/`],[1,`language-json`],[`href`,`https://angular.dev/tools/cli/build-system-migration`],[`href`,`http://localhost:4200`],[1,`po-text-center`],[`src`,`./assets/graphics/app-running.png`,`width`,`660px`],[`href`,`/documentation/po-page-login`],[`href`,`/documentation/po-modal-password-recovery`],[`href`,`/documentation/po-page-blocked-user`],[`href`,`/documentation/po-page-dynamic-table`],[`href`,`/documentation`]],template:function(o,s){o&1&&(Jc(0,`po-page-default`,0)(1,`h3`),Tk(2,`Pré-requisitos`),Zg(),Jc(3,`p`),Tk(4,`Para começar a utilizar o `),Jc(5,`strong`),Tk(6,`PO UI`),Zg(),Tk(7,` é pré-requisito ter o `),Jc(8,`code`),Tk(9,`Node.js`),Zg(),Tk(10,` instalado (versão 24.22.1 e acima) e o seu gerenciador de pacote favorito na versão mais atual. Caso você ainda não tenha instalado o pacote `),Jc(11,`code`),Tk(12,`@angular/cli`),Zg(),Tk(13,`, instale-o via `),Jc(14,`code`),Tk(15,`npm`),Zg(),Tk(16,` ou `),Jc(17,`code`),Tk(18,`yarn`),Zg(),Tk(19,`.`),Zg(),Jc(20,`p`),Tk(21,`Instalando com npm:`),Zg(),Jc(22,`pre`)(23,`code`),Tk(24,`npm i -g @angular/cli@22
`),Zg()(),Jc(25,`p`),Tk(26,`Caso prefira instalar com o yarn:`),Zg(),Jc(27,`pre`)(28,`code`),Tk(29,`yarn global add @angular/cli@22
`),Zg()(),Jc(30,`h3`),Tk(31,`Passo 1 - Crie o seu primeiro projeto`),Zg(),Jc(32,`blockquote`)(33,`p`),Tk(34,`Caso você já tenha um projeto criado e deseje apenas incluir o `),Jc(35,`strong`),Tk(36,`Po`),Zg(),Tk(37,`, pule esta etapa e vá para o `),Jc(38,`strong`),Tk(39,`Passo 1.1`),Zg(),Tk(40,`.`),Zg()(),Jc(41,`p`),Tk(42,`O `),Jc(43,`a`,1),Tk(44,`Angular CLI`),Zg(),Tk(45,` se encarrega de construir toda estrutura inicial do projeto. Para isso, execute o seguinte comando:`),Zg(),Jc(46,`pre`)(47,`code`),Tk(48,`ng new my-po-project --skip-install
`),Zg()(),Jc(49,`blockquote`)(50,`p`),Tk(51,`O parâmetro `),Jc(52,`code`),Tk(53,`--skip-install`),Zg(),Tk(54,` permite criar o projeto, contudo, não instalará as dependências automaticamente.`),Zg()(),Jc(55,`h4`),Tk(56,`Passo 1.1 - Instalando as dependências`),Zg(),Jc(57,`p`),Tk(58,`Antes de executar a instalação ou inserir o `),Jc(59,`strong`),Tk(60,`Po`),Zg(),Tk(61,` no seu projeto existente, é necessário verificar as dependências do seu projeto, algumas delas precisam estar de acordo com a versão do `),Jc(62,`strong`),Tk(63,`Po`),Zg(),Tk(64,` e Angular (elas podem ser encontradas no arquivo `),Jc(65,`code`),Tk(66,`package.json`),Zg(),Tk(67,` localizado na raiz da aplicação).`),Zg(),Jc(68,`p`),Tk(69,`Veja abaixo a lista de dependências e as versões compatíveis, elas devem ser conferidas e se necessário, ajustadas no seu projeto.`),Zg(),Jc(70,`pre`)(71,`code`,2),Tk(72,`  "dependencies": {
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
`),Zg()(),Jc(73,`p`),Tk(74,`Após verificar se estas dependências do seu projeto estão com as versões compatíveis declaradas acima, acesse a pasta raiz do seu projeto e execute o comando abaixo:`),Zg(),Jc(75,`p`),Tk(76,`Instalando com npm:`),Zg(),Jc(77,`pre`)(78,`code`),Tk(79,`npm install
`),Zg()(),Jc(80,`p`),Tk(81,`Caso prefira instalar com o yarn:`),Zg(),Jc(82,`pre`)(83,`code`),Tk(84,`yarn install
`),Zg()(),Jc(85,`h3`),Tk(86,`Observação para Angular 19+`),Zg(),Jc(87,`p`),Tk(88,`Em versões mais recentes do Angular, o projeto utiliza, por padrão, novo build system baseado em `),Jc(89,`strong`),Tk(90,`@angular/build`),Zg(),Tk(91,`. `),Zg(),Jc(92,`p`),Tk(93,`Verifique se o pacote está declarado em `),Jc(94,`strong`),Tk(95,`devDependencies`),Zg(),Tk(96,`. Além disso, valide no arquivo angular.json se o builder está configurado para `),Jc(97,`strong`),Tk(98,`@angular/build:`),Zg(),Tk(99,`*:`),Zg(),Jc(100,`pre`)(101,`code`),Tk(102,`"projects": {
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
`),Zg()(),Jc(103,`p`),Tk(104,`Para maiores informações veja na documentação oficial do `),Jc(105,`a`,3),Tk(106,`Angular`),Zg(),Tk(107,`.`),Zg(),Jc(108,`h3`),Tk(109,`Passo 2 - Adicionando o pacote @po-ui/ng-components`),Zg(),Jc(110,`p`),Tk(111,`Utilizando o comando `),Jc(112,`code`),Tk(113,`ng add`),Zg(),Tk(114,` do `),Jc(115,`a`,1),Tk(116,`Angular CLI`),Zg(),Tk(117,`, vamos adicionar o `),Jc(118,`strong`),Tk(119,`Po`),Zg(),Tk(120,` em seu projeto e o mesmo se encarregará de configurar o tema, instalar o pacote e importar o módulo do `),Jc(121,`strong`),Tk(122,`Po`),Zg(),Tk(123,`. Além de importar também o modulo `),Jc(124,`strong`),Tk(125,`HttpClientModule`),Zg(),Tk(126,`.`),Zg(),Jc(127,`p`),Tk(128,`Execute o comando abaixo na pasta raiz do seu projeto:`),Zg(),Jc(129,`pre`)(130,`code`),Tk(131,`ng add @po-ui/ng-components@next
`),Zg()(),Jc(132,`blockquote`)(133,`p`),Tk(134,`Ao executar o comando acima, será perguntado se deseja incluir uma estrutura inicial em seu projeto com menu lateral, página e toolbar, utilizando componentes do `),Jc(135,`strong`),Tk(136,`Po`),Zg(),Tk(137,`, `),Jc(138,`strong`),Tk(139,`caso desejar, apenas informe: `),Jc(140,`code`),Tk(141,`Y`),Zg()(),Tk(142,`.`),Zg()(),Jc(143,`h3`),Tk(144,`Passo 3 - Rode o seu projeto`),Zg(),Jc(145,`p`),Tk(146,`Agora basta executar mais um comando para subir a aplicação e ver o seu projeto rodando no `),Jc(147,`em`),Tk(148,`browser`),Zg(),Tk(149,` ;).`),Zg(),Jc(150,`pre`)(151,`code`),Tk(152,`ng serve
`),Zg()(),Jc(153,`p`),Tk(154,`Abra o `),Jc(155,`em`),Tk(156,`browser`),Zg(),Tk(157,` e acesse a url `),Jc(158,`a`,4),Tk(159,`http://localhost:4200`),Zg(),Tk(160,`. Pronto! Se você escolheu incluir uma estrutura inicial em seu projeto, ele deve estar parecido com essa imagem:`),Zg(),Jc(161,`p`,5),_u(162,`img`,6),Zg(),_u(163,`hr`),Jc(164,`h3`),Tk(165,`E agora?`),Zg(),Jc(166,`p`),Tk(167,`Agora é só abrir seu `),Jc(168,`strong`),Tk(169,`editor / IDE`),Zg(),Tk(170,` favorito e começar a trabalhar no seu projeto.`),Zg(),Jc(171,`p`),Tk(172,`Caso você queira utilizar nossos componentes de templates, como o `),Jc(173,`strong`)(174,`a`,7),Tk(175,`po-page-login`),Zg()(),Tk(176,`, `),Jc(177,`strong`)(178,`a`,8),Tk(179,`po-modal-password-recovery`),Zg()(),Tk(180,`, `),Jc(181,`strong`)(182,`a`,9),Tk(183,`po-page-blocked-user`),Zg()(),Tk(184,`, `),Jc(185,`strong`)(186,`a`,10),Tk(187,`po-page-dynamic-table`),Zg()(),Tk(188,` entre outros, basta adicionar o pacote `),Jc(189,`code`),Tk(190,`@po-ui/ng-templates`),Zg(),Tk(191,` executando o comando abaixo:`),Zg(),Jc(192,`pre`)(193,`code`),Tk(194,`ng add @po-ui/ng-templates@next
`),Zg()(),Jc(195,`blockquote`)(196,`p`),Tk(197,`Ao executar este comando, será instalado o pacote `),Jc(198,`code`),Tk(199,`@po-ui/ng-templates`),Zg(),Tk(200,` e configurado o `),Jc(201,`code`),Tk(202,`PoTemplatesModules`),Zg(),Tk(203,` no `),Jc(204,`code`),Tk(205,`app.module`),Zg(),Tk(206,` somente se sua aplicação for configurada com módulos.`),Zg()(),Jc(207,`p`),Tk(208,`A partir dai o seu projeto está preparado para receber outros componentes do `),Jc(209,`strong`)(210,`a`,11),Tk(211,`Po`),Zg()(),Tk(212,`! \\o/`),Zg()())},dependencies:[Tze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var j=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:257,vars:0,consts:[[`p-title`,`Guia de uso para Gráficos`,1,`guides`,`app-portal`],[`href`,`guides/guide-charts#area`],[`href`,`guides/guide-charts#bar`],[`href`,`guides/guide-charts#column`],[`href`,`guides/guide-charts#column-line`],[`href`,`guides/guide-charts#gauge-semicircle`],[`href`,`guides/guide-charts#line`],[`href`,`guides/guide-charts#pie`],[`href`,`guides/guide-charts#donut`],[`href`,`guides/guide-charts#radar`],[`href`,`guides/guide-charts#guide-colors`],[`id`,`area`],[`id`,`bar`],[`id`,`column`],[`id`,`column-line`],[`id`,`gauge-semicircle`],[`id`,`line`],[`id`,`pie`],[`id`,`donut`],[`id`,`radar`],[`id`,`guide-colors`]],template:function(o,s){o&1&&(Jc(0,`po-page-default`,0)(1,`p`),Tk(2,`Este guia tem o objetivo de informar práticas de uso para cada tipo de gráfico do PO UI, o que devemos evitar ao utilizar determinado gráfico e também as boas práticas relacionadas às cores nos gráficos.`),Zg(),Jc(3,`p`),Tk(4,`Gráficos em geral têm a função de garantir que as pessoas de qualquer cultura ou país tenham entendimento claro para tomar as melhores decisões com base nas suas visualizações.`),Zg(),Jc(5,`h2`),Tk(6,`Conteúdo`),Zg(),Jc(7,`ul`)(8,`li`)(9,`a`,1),Tk(10,`Gráfico de área`),Zg()(),Jc(11,`li`)(12,`a`,2),Tk(13,`Gráfico de barra`),Zg()(),Jc(14,`li`)(15,`a`,3),Tk(16,`Gráfico de coluna`),Zg()(),Jc(17,`li`)(18,`a`,4),Tk(19,`Gráfico de coluna com linha`),Zg()(),Jc(20,`li`)(21,`a`,5),Tk(22,`Gráfico de gauge semicircular`),Zg()(),Jc(23,`li`)(24,`a`,6),Tk(25,`Gráfico de linha`),Zg()(),Jc(26,`li`)(27,`a`,7),Tk(28,`Gráfico de pizza`),Zg()(),Jc(29,`li`)(30,`a`,8),Tk(31,`Gráfico de rosca`),Zg()(),Jc(32,`li`)(33,`a`,9),Tk(34,`Gráfico de radar`),Zg()(),Jc(35,`li`)(36,`a`,10),Tk(37,`Guia de cores`),Zg()()(),_u(38,`br`),Jc(39,`p`),_u(40,`a`,11),Zg(),Jc(41,`h2`),Tk(42,`Gráfico de área (Area Chart)`),Zg(),Jc(43,`p`),Tk(44,`O gráfico de área combina o gráfico de linhas e o gráfico de barras para mostrar como os valores numéricos de um ou mais grupos mudam ao longo da progressão de uma segunda variável, normalmente a do tempo. Um gráfico de área se distingue de um gráfico de linha pela adição de sombreamento entre as linhas e uma linha de base, como em um gráfico de barras.`),Zg(),Jc(45,`p`),Tk(46,`A versão disponível no PO UI é o gráfico de área de sobreposição ou em inglês, `),Jc(47,`em`),Tk(48,`overlapping area chart`),Zg(),Tk(49,`.`),Zg(),Jc(50,`h4`),Tk(51,`Quando usar?`),Zg(),Jc(52,`ul`)(53,`li`),Tk(54,`Para representar os totais acumulados usando números ou porcentagens (gráficos de área empilhados, neste caso) ao longo do tempo;`),Zg(),Jc(55,`li`),Tk(56,`Mostrar tendências ao longo do tempo entre os atributos relacionados.`),Zg()(),_u(57,`br`),Jc(58,`p`),_u(59,`a`,12),Zg(),Jc(60,`h2`),Tk(61,`Gráfico de barra (Bar Chart)`),Zg(),Jc(62,`p`),Tk(63,`O gráfico de barra é organizado de forma temporal ou por tópicos ao longo do eixo vertical (y) e seus valores têm variação ao longo do eixo vertical (x). É uma variação direta da estrutura do gráfico de coluna.`),Zg(),Jc(64,`h4`),Tk(65,`Quando usar?`),Zg(),Jc(66,`ul`)(67,`li`),Tk(68,`Demonstrar as variações de dados em um período de tempo;`),Zg(),Jc(69,`li`),Tk(70,`Ilustrar comparações entre tópicos diretamente relacionados.`),Zg()(),Jc(71,`h4`),Tk(72,`Boas práticas`),Zg(),Jc(73,`p`),Tk(74,`Prefira utilizar o gráfico de barra quando for necessário muitos itens temporais ou de tópicos.`),Zg(),_u(75,`br`),Jc(76,`p`),_u(77,`a`,13),Zg(),Jc(78,`h2`),Tk(79,`Gráfico de coluna (Column Chart)`),Zg(),Jc(80,`p`),Tk(81,`O gráfico de coluna é organizado de forma temporal ou por tópicos ao longo do eixo horizontal (x) e seus valores têm variação ao longo do eixo vertical (y).`),Zg(),Jc(82,`h4`),Tk(83,`Quando usar?`),Zg(),Jc(84,`ul`)(85,`li`),Tk(86,`Demonstrar as variações de dados em um período de tempo;`),Zg(),Jc(87,`li`),Tk(88,`Ilustrar comparações entre tópicos diretamente relacionados.`),Zg()(),Jc(89,`h4`),Tk(90,`Boas práticas`),Zg(),Jc(91,`p`),Tk(92,`Prefira utilizar o gr\xE1fico de barras caso seja necess\xE1rio muitos itens,
pois o gr\xE1fico de coluna cont\xE9m menos espa\xE7o para que sejam exibidos os r\xF3tulos no eixo horizontal.`),Zg(),_u(93,`br`),Jc(94,`p`),_u(95,`a`,14),Zg(),Jc(96,`h2`),Tk(97,`Gráfico de pareto / coluna com linha (Column and Line Chart)`),Zg(),Jc(98,`p`),Tk(99,`O gráfico de pareto contém colunas e um gráfico de linhas, onde os valores individuais são representados em ordem decrescente por colunas e o total acumulado é representado pela linha.`),Zg(),Jc(100,`h4`),Tk(101,`Quando usar?`),Zg(),Jc(102,`ul`)(103,`li`),Tk(104,`Destacar o mais importante entre um conjunto de fatores, por exemplo:`),Jc(105,`ul`)(106,`li`),Tk(107,`Sempre que uma equipe não estiver certa sobre onde direcionar seus esforços de melhoria deve usar uma análise de pareto.`),Zg()()()(),_u(108,`br`),Jc(109,`p`),_u(110,`a`,15),Zg(),Jc(111,`h2`),Tk(112,`Gráfico de gauge semicircular (Semi Circle Gauge Chart)`),Zg(),Jc(113,`p`),Tk(114,`O gráfico de gauge semicircular é uma variação direta do gauge tradicional.`),Zg(),Jc(115,`h4`),Tk(116,`Quando usar?`),Zg(),Jc(117,`ul`)(118,`li`),Tk(119,`Demonstrar cálculos de desempenho por um certo período (em andamento ou como histórico), por exemplo: `),Jc(120,`ul`)(121,`li`),Tk(122,`Desempenho de vendas de uma equipe em relação a meta.`),Zg()()()(),_u(123,`br`),Jc(124,`p`),_u(125,`a`,16),Zg(),Jc(126,`h2`),Tk(127,`Gráfico de linha (Line Chart)`),Zg(),Jc(128,`p`),Tk(129,`O gráfico de linha pode exibir dados contínuos ao longo de um período de tempo, definidos em relação a uma escala comum. Os dados de categorias são comumente distribuídos uniformemente ao longo do eixo horizontal e todos os dados de valores que tem variação são subdivididos igualmente ao longo do eixo vertical. `),Zg(),Jc(130,`h4`),Tk(131,`Quando usar?`),Zg(),Jc(132,`ul`)(133,`li`),Tk(134,`Quando deseja exibir tendências nos dados ao longo do tempo, por exemplo:`),Jc(135,`ul`)(136,`li`),Tk(137,`Demonstrar a alteração no preço das ações em um período de tempo;`),Zg(),Jc(138,`li`),Tk(139,`Quantidade de visitas em um site durante um mês.`),Zg()()()(),Jc(140,`h4`),Tk(141,`Boas práticas`),Zg(),Jc(142,`ul`)(143,`li`),Tk(144,`Ideal para demonstrar a frequência em que ocorrem os dados;`),Zg(),Jc(145,`li`),Tk(146,`Não é recomendado para caso de distribuição de dados, neste caso pode-se utilizar o gráfico de coluna.`),Zg()(),_u(147,`br`),Jc(148,`p`),_u(149,`a`,17),Zg(),Jc(150,`h2`),Tk(151,`Gráfico de pizza (Pie Chart)`),Zg(),Jc(152,`p`),Tk(153,`O gráfico de pizza ou torta é adequado para mostrar partes divididas de um todo, pois representa fatias que somadas compõem 100% da forma.`),Zg(),Jc(154,`h4`),Tk(155,`Quando usar?`),Zg(),Jc(156,`ul`)(157,`li`),Tk(158,`Para demonstrar proporções, por exemplo:`),Jc(159,`ul`)(160,`li`),Tk(161,`Porcentagem de orçamento gasto em diferentes departamentos;`),Zg(),Jc(162,`li`),Tk(163,`Respostas de pesquisa;`),Zg(),Jc(164,`li`),Tk(165,`Divisão de tempo em uma atividade.`),Zg()()()(),Jc(166,`h4`),Tk(167,`Boas práticas`),Zg(),Jc(168,`ul`)(169,`li`),Tk(170,`Não é recomendado para comparar dados;`),Zg(),Jc(171,`li`),Tk(172,`Evite gráficos de pizza com mais de cinco partes, pois isso interfere diretamente no entendimento do gráfico ou visualização dos valores.`),Zg()(),_u(173,`br`),Jc(174,`p`),_u(175,`a`,18),Zg(),Jc(176,`h2`),Tk(177,`Gráfico de rosca (Donut Chart)`),Zg(),Jc(178,`p`),Tk(179,`O gráfico de rosca é adequado para mostrar partes de um todo, pois representa fatias que somadas compõem 100% de algo. É uma variação visual do gráfico de pizza.`),Zg(),Jc(180,`h4`),Tk(181,`Quando usar?`),Zg(),Jc(182,`ul`)(183,`li`),Tk(184,`Para demonstrar proporções comparativas em porcentagem ou quantidade.`),Zg()(),Jc(185,`h4`),Tk(186,`Boas práticas:`),Zg(),Jc(187,`p`),Tk(188,`O valor mínimo de visualização deve ser de 10% do total para demonstrar as informações no gráfico, caso tenha mais de um item abaixo do valor de 10%, junte-os em uma sessão agrupada "Outros" e especifique o conteúdo que o compõe na legenda.`),Zg(),_u(189,`br`),Jc(190,`p`),_u(191,`a`,19),Zg(),Jc(192,`h2`),Tk(193,`Gráfico de radar (Radar Chart)`),Zg(),Jc(194,`p`),Tk(195,`O gráfico de radar é utilizado para visualizar e comparar o desempenho de diferentes itens em múltiplas categorias.`),Zg(),Jc(196,`h4`),Tk(197,`Quando usar?`),Zg(),Jc(198,`ul`)(199,`li`),Tk(200,`Para demonstrar cenários onde é preciso avaliar e apresentar um "perfil" de desempenho de algo/alguém.`),Zg()(),_u(201,`br`),Jc(202,`p`),_u(203,`a`,20),Zg(),Jc(204,`h2`),Tk(205,`Guia de cores`),Zg(),Jc(206,`h4`),Tk(207,`Boas práticas`),Zg(),Jc(208,`ul`)(209,`li`),Tk(210,`Use uma única cor para representar o mesmo tipo de dados. Por exemplo: para representar vendas mês a mês em um gráfico de barras, use uma única cor. Outro exemplo: para comparar as vendas do ano passado com as do ano vigente em um gráfico agrupado, prefira utilizar uma cor diferente para cada ano;`),Zg(),Jc(211,`li`),Tk(212,`Certifique-se de que existe contraste suficiente entre as cores. Por exemplo: utilize cores com contraste para facilitar a assimilação do usuário referente às informações traduzidas no gráfico;`),Zg(),Jc(213,`li`),Tk(214,`Escolha cores adequadamente. Algumas cores se destacam mais do que outras, dando peso desnecessário ou direcionamento errado aos dados.`),Zg(),Jc(215,`li`),Tk(216,`Prefira utilizar uma única cor com sombra variável ou um espectro entre duas cores análogas para mostrar intensidade;`),Zg(),Jc(217,`li`),Tk(218,`Destaque a informação mais relevante com cores fortes e utilize a mesma com tons com menos contraste para complementar o gráfico.`),Zg()(),Jc(219,`h4`),Tk(220,`Evite`),Zg(),Jc(221,`ul`)(222,`li`),Tk(223,`Não use vermelho para números positivos ou verde para números negativos. Essas associações de cores são decisivas na interpretação do usuário;`),Zg(),Jc(224,`li`),Tk(225,`Não utilize combinações de cores de alto contraste, como vermelho e verde ou azul e amarelo (somente com direcionamento da marca);`),Zg(),Jc(226,`li`),Tk(227,`Não utilize cores com baixo contraste, como azul claro e cinza (somente com direcionamento da marca).`),Zg()(),Jc(228,`h4`),Tk(229,`Opções de combinação de cores`),Zg(),Jc(230,`p`),Tk(231,`Modelos de cores que podem combinar e facilitar a visualização dos gráficos: `),Zg(),Jc(232,`ul`)(233,`li`)(234,`p`),Tk(235,`Cinza e azul:`),Zg(),Jc(236,`ul`)(237,`li`),Tk(238,`Para informações de atual e passado, mas atenção com o nível do contraste para que sejam legíveis as diferenças entre os dados;`),Zg()()(),Jc(239,`li`)(240,`p`),Tk(241,`Azul e laranja:`),Zg(),Jc(242,`ul`)(243,`li`),Tk(244,`Azul para indicação de dados positivos e laranja para negativos;`),Zg()()(),Jc(245,`li`)(246,`p`),Tk(247,`Verde e vermelho:`),Zg(),Jc(248,`ul`)(249,`li`),Tk(250,`Verde sinaliza dados positivo e vermelho os negativos;`),Zg()()(),Jc(251,`li`)(252,`p`),Tk(253,`Azul, cinza e verde:`),Zg(),Jc(254,`ul`)(255,`li`),Tk(256,`Para uma composição de três cores.`),Zg()()()()())},dependencies:[Tze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var k=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:432,vars:0,consts:[[`p-title`,`Migração do PO UI para V2`,1,`guides`,`app-portal`],[`href`,`https://update.angular.io/`],[`href`,`https://angular.io/cli/update`],[`href`,`guides/migration-poui-v2#components`],[`href`,`guides/migration-poui-v2#sync`],[`id`,`components`],[1,`po-text-color-neutral-dark-40`],[`href`,`http://po-ui.io/documentation/po-page-change-password`],[`href`,`http://po-ui.io/documentation/po-button-group`],[`href`,`http://po-ui.io/documentation/po-menu`],[`href`,`http://po-ui.io/documentation/po-menu-panel`],[`href`,`http://po-ui.io/documentation/po-navbar`],[`href`,`http://po-ui.io/documentation/po-page-list`],[`href`,`http://po-ui.io/documentation/po-page-default`],[`href`,`http://po-ui.io/documentation/po-popup`],[`href`,`http://po-ui.io/documentation/po-step`],[`href`,`http://po-ui.io/documentation/po-table`],[`href`,`http://po-ui.io/documentation/po-toolbar`],[`id`,`sync`]],template:function(o,s){o&1&&(Jc(0,`po-page-default`,0)(1,`p`),Tk(2,`Este guia contém informações sobre a migração do seu projeto para a versão 2 do PO UI.`),Zg(),Jc(3,`h2`),Tk(4,`Atualizando o projeto com Angular`),Zg(),Jc(5,`p`),Tk(6,`Antes de atualizar a vers\xE3o do PO UI, \xE9 importante que voc\xEA tenha atualizado o seu projeto para
o Angular 9, executando o comando abaixo:`),Zg(),Jc(7,`p`)(8,`code`),Tk(9,`ng update @angular/cli@9 @angular/core@9`),Zg()(),Jc(10,`blockquote`)(11,`p`),Tk(12,`Para realizar a migração completa e avaliar se não precisa fazer alguma alteração veja o `),Jc(13,`a`,1)(14,`strong`),Tk(15,`Guia de Upgrade do Angular`),Zg()(),Tk(16,`.`),Zg()(),Jc(17,`p`),Tk(18,`O nosso pacote anterior possu\xEDa depend\xEAncias que eram compat\xEDveis com a vers\xE3o 8 do Angular, portanto
pode ser preciso utilizar a `),Jc(19,`em`),Tk(20,`flag`),Zg(),Jc(21,`code`),Tk(22,`--force`),Zg(),Tk(23,` para que o Angular realize a migra\xE7\xE3o do seu projeto, ignorando a vers\xE3o das depend\xEAncias.
Para avaliar as `),Jc(24,`em`),Tk(25,`flags`),Zg(),Tk(26,` disponíveis veja a `),Jc(27,`a`,2)(28,`strong`),Tk(29,`documentação do ng update`),Zg()(),Tk(30,`.`),Zg(),Jc(31,`h2`),Tk(32,`Atualizando o PO UI`),Zg(),Jc(33,`p`),Tk(34,`Para facilitar a migração do seu projeto para o PO UI v2, implementamos o `),Jc(35,`code`),Tk(36,`ng update`),Zg(),Tk(37,` nos pacotes abaixo:`),Zg(),Jc(38,`ul`)(39,`li`)(40,`a`,3)(41,`strong`),Tk(42,`@po-ui/ng-components`),Zg()()(),Jc(43,`li`)(44,`a`,4)(45,`strong`),Tk(46,`@po-ui/ng-sync`),Zg()()()(),Jc(47,`p`),Tk(48,`O `),Jc(49,`code`),Tk(50,`ng update`),Zg(),Tk(51,` ajudará nas alterações necessárias para seu projeto seguir atualizado, que são elas:`),Zg(),Jc(52,`ul`)(53,`li`),Tk(54,`Alterar maioria dos conteúdos relacionados ao `),Jc(55,`strong`),Tk(56,`BREAKING CHANGES`),Zg(),Tk(57,` e `),Jc(58,`strong`),Tk(59,`Depreciações`),Zg(),Tk(60,` no seu projeto;`),Zg(),Jc(61,`li`),Tk(62,`Atualizar as versões dos pacotes `),Jc(63,`code`),Tk(64,`@po-ui`),Zg(),Tk(65,`.`),Zg()(),Jc(66,`p`),Tk(67,`Mas é importante conhecer os `),Jc(68,`strong`),Tk(69,`BREAKING CHANGES`),Zg(),Tk(70,` e `),Jc(71,`strong`),Tk(72,`Depreciações`),Zg(),Tk(73,` para realizar as alterações manualmente caso necessário.`),Zg(),Jc(74,`p`),_u(75,`a`,5),Zg(),Jc(76,`h3`),Tk(77,`ng update @po-ui/ng-components`),Zg(),Jc(78,`p`),Tk(79,`Para poder utilizar o comando e realizar a migração, execute os comandos abaixo:`),Zg(),Jc(80,`p`)(81,`code`),Tk(82,`npm i --save @po-ui/ng-components@2`),Zg()(),Jc(83,`p`)(84,`code`),Tk(85,`ng update @po-ui/ng-components --from 1 --migrate-only`),Zg()(),Jc(86,`h4`),Tk(87,`Breaking Changes`),Zg(),Jc(88,`p`),Tk(89,`Nesta nova versão o nome dos pacotes foram alterados, de acordo com a tabela abaixo:`),Zg(),Jc(90,`table`)(91,`thead`)(92,`tr`)(93,`th`,6),Tk(94,`Pacotes`),Zg(),Jc(95,`th`,6),Tk(96,`Substituído por`),Zg()()(),Jc(97,`tbody`)(98,`tr`)(99,`td`)(100,`code`),Tk(101,`@portinari/portinari-ui`),Zg()(),Jc(102,`td`)(103,`code`),Tk(104,`@po-ui/ng-components`),Zg()()(),Jc(105,`tr`)(106,`td`)(107,`code`),Tk(108,`@portinari/portinari-templates`),Zg()(),Jc(109,`td`)(110,`code`),Tk(111,`@po-ui/ng-templates`),Zg()()(),Jc(112,`tr`)(113,`td`)(114,`code`),Tk(115,`@portinari/portinari-code-editor`),Zg()(),Jc(116,`td`)(117,`code`),Tk(118,`@po-ui/ng-code-editor`),Zg()()(),Jc(119,`tr`)(120,`td`)(121,`code`),Tk(122,`@portinari/tslint`),Zg()(),Jc(123,`td`)(124,`code`),Tk(125,`@po-ui/ng-tslint`),Zg()()(),Jc(126,`tr`)(127,`td`)(128,`code`),Tk(129,`@portinari/style`),Zg()(),Jc(130,`td`)(131,`code`),Tk(132,`@po-ui/style`),Zg()()()()(),Jc(133,`p`),Tk(134,`Também foi realizado remoções das propriedades, onde passam a valer as novas definições, veja a tabela abaixo:`),Zg(),Jc(135,`table`)(136,`thead`)(137,`tr`)(138,`th`,6),Tk(139,`Componentes`),Zg(),Jc(140,`th`,6),Tk(141,`Anteriormente`),Zg(),Jc(142,`th`,6),Tk(143,`Substituído por`),Zg()()(),Jc(144,`tbody`)(145,`tr`)(146,`td`)(147,`code`),Tk(148,`PoFieldModule`),Zg()(),Jc(149,`td`)(150,`code`),Tk(151,`[p-focus]`),Zg()(),Jc(152,`td`)(153,`code`),Tk(154,`[p-auto-focus]`),Zg()()(),Jc(155,`tr`)(156,`td`)(157,`code`),Tk(158,`PoHttpResquestInterceptor`),Zg()(),Jc(159,`td`)(160,`code`),Tk(161,`X-Portinari-Screen-Lock`),Zg()(),Jc(162,`td`)(163,`code`),Tk(164,`X-PO-Screen-Lock`),Zg()()(),Jc(165,`tr`)(166,`td`)(167,`code`),Tk(168,`PoHttpResquestInterceptor`),Zg()(),Jc(169,`td`)(170,`code`),Tk(171,`X-Portinari-No-Count-Pending-Requests`),Zg()(),Jc(172,`td`)(173,`code`),Tk(174,`X-PO-No-Count-Pending-Requests`),Zg()()(),Jc(175,`tr`)(176,`td`)(177,`code`),Tk(178,`PoHttpInterceptor`),Zg()(),Jc(179,`td`)(180,`code`),Tk(181,`X-Portinari-No-Message`),Zg()(),Jc(182,`td`)(183,`code`),Tk(184,`X-PO-No-Message`),Zg()()(),Jc(185,`tr`)(186,`td`)(187,`code`),Tk(188,`PoPageEdit`),Zg()(),Jc(189,`td`,6),Tk(190,`Possuir a ação `),Jc(191,`code`),Tk(192,`cancel() {}`),Zg(),Tk(193,` no TS`),Zg(),Jc(194,`td`)(195,`code`),Tk(196,`(p-cancel)`),Zg()()(),Jc(197,`tr`)(198,`td`)(199,`code`),Tk(200,`PoPageEdit`),Zg()(),Jc(201,`td`,6),Tk(202,`Possuir a ação `),Jc(203,`code`),Tk(204,`save() {}`),Zg(),Tk(205,` no TS`),Zg(),Jc(206,`td`)(207,`code`),Tk(208,`(p-save)`),Zg()()(),Jc(209,`tr`)(210,`td`)(211,`code`),Tk(212,`PoPageEdit`),Zg()(),Jc(213,`td`,6),Tk(214,`Possuir a ação `),Jc(215,`code`),Tk(216,`saveNew() {}`),Zg(),Tk(217,` no TS`),Zg(),Jc(218,`td`)(219,`code`),Tk(220,`(p-save-new)`),Zg()()(),Jc(221,`tr`)(222,`td`)(223,`code`),Tk(224,`PoPageDetail`),Zg()(),Jc(225,`td`,6),Tk(226,`Possuir a ação `),Jc(227,`code`),Tk(228,`back() {}`),Zg(),Tk(229,` no TS`),Zg(),Jc(230,`td`)(231,`code`),Tk(232,`(p-back)`),Zg()()(),Jc(233,`tr`)(234,`td`)(235,`code`),Tk(236,`PoPageDetail`),Zg()(),Jc(237,`td`,6),Tk(238,`Possuir a ação `),Jc(239,`code`),Tk(240,`edit() {}`),Zg(),Tk(241,` no TS`),Zg(),Jc(242,`td`)(243,`code`),Tk(244,`(p-edit)`),Zg()()(),Jc(245,`tr`)(246,`td`)(247,`code`),Tk(248,`PoPageDetail`),Zg()(),Jc(249,`td`,6),Tk(250,`Possuir a ação `),Jc(251,`code`),Tk(252,`remove() {}`),Zg(),Tk(253,` no TS`),Zg(),Jc(254,`td`)(255,`code`),Tk(256,`(p-remove)`),Zg()()()()(),Jc(257,`h4`),Tk(258,`Depreciação`),Zg(),Jc(259,`p`),Tk(260,`Nas versões `),Jc(261,`code`),Tk(262,`1.x.x`),Zg(),Tk(263,` era possível passar funções para nossas propriedades sem informar o `),Jc(264,`code`),Tk(265,`.bind(this)`),Zg(),Tk(266,`,
pois captur\xE1vamos o componente pai e consegu\xEDamos acessar o contexto corrente. Por\xE9m depreciamos este comportamento,
agora necessita passar a refer\xEAncia da fun\xE7\xE3o utilizando o `),Jc(267,`code`),Tk(268,`.bind(this)`),Zg(),Tk(269,` para que o mesmo execute a função no contexto invocado, tanto em funções dentro de `),Jc(270,`em`),Tk(271,`arrays`),Zg(),Tk(272,` quanto em funções via `),Jc(273,`em`),Tk(274,`property bind`),Zg(),Tk(275,`.`),Zg(),Jc(276,`p`),Tk(277,`Os componentes que sofrerão esta depreciação, são:`),Zg(),Jc(278,`ul`)(279,`li`)(280,`a`,7)(281,`strong`),Tk(282,`PageChangePassword`),Zg()()(),Jc(283,`li`)(284,`a`,8)(285,`strong`),Tk(286,`ButtonGroup`),Zg()()(),Jc(287,`li`)(288,`a`,9)(289,`strong`),Tk(290,`Menu`),Zg()()(),Jc(291,`li`)(292,`a`,10)(293,`strong`),Tk(294,`MenuPanel`),Zg()()(),Jc(295,`li`)(296,`a`,11)(297,`strong`),Tk(298,`Navbar`),Zg()()(),Jc(299,`li`)(300,`a`,12)(301,`strong`),Tk(302,`PageList`),Zg()()(),Jc(303,`li`)(304,`a`,13)(305,`strong`),Tk(306,`PageDefault`),Zg()()(),Jc(307,`li`)(308,`a`,14)(309,`strong`),Tk(310,`Popup`),Zg()()(),Jc(311,`li`)(312,`a`,15)(313,`strong`),Tk(314,`Stepper`),Zg()()(),Jc(315,`li`)(316,`a`,16)(317,`strong`),Tk(318,`Table`),Zg()()(),Jc(319,`li`)(320,`a`,17)(321,`strong`),Tk(322,`Toolbar`),Zg()()()(),Jc(323,`p`),Tk(324,`Abaixo listamos dois exemplos comparativos com essas depreciações em alguns componentes.`),Zg(),Jc(325,`p`),Tk(326,`Exemplo via funções dentro de arrays:`),Zg(),Jc(327,`ul`)(328,`li`),Tk(329,`Antes:`),Zg()(),Jc(330,`pre`)(331,`code`),Tk(332,`<po-page-default p-title="P\xE1gina" [p-actions]="actions">
   ...
</po-page-default>
`),Zg()(),Jc(333,`pre`)(334,`code`),Tk(335,`export class ExampleFunction () {

  actions: Array<PoPageAction> = [
    { label: 'Adicionar', action: this.add }
  ]

  add() {
    ...
  }
}
`),Zg()(),Jc(336,`ul`)(337,`li`),Tk(338,`Agora:`),Zg()(),Jc(339,`pre`)(340,`code`),Tk(341,`<po-page-default p-title="P\xE1gina" [p-actions]="actions">
   ...
</po-page-default>
`),Zg()(),Jc(342,`pre`)(343,`code`),Tk(344,`export class ExampleFunction () {

  actions: Array<PoPageAction> = [
    { label: 'Adicionar', action: this.add.bind(this) }
  ]

  add() {
    ...
  }
}
`),Zg()(),Jc(345,`p`),Tk(346,`Exemplo funções via `),Jc(347,`em`),Tk(348,`property bind`),Zg()(),Jc(349,`ul`)(350,`li`),Tk(351,`Antes:`),Zg()(),Jc(352,`pre`)(353,`code`),Tk(354,`<po-stepper>
  <po-step p-label="Personal" [p-can-active-next-step]="canActiveNextStep">
  </po-step>
</po-stepper>
`),Zg()(),Jc(355,`ul`)(356,`li`),Tk(357,`Agora:`),Zg()(),Jc(358,`pre`)(359,`code`),Tk(360,`<po-stepper>
  <po-step p-label="Personal" [p-can-active-next-step]="canActiveNextStep.bind(this)">
  </po-step>
</po-stepper>
`),Zg()(),Jc(361,`p`),_u(362,`a`,18),Zg(),Jc(363,`h3`),Tk(364,`ng update @po-ui/ng-sync`),Zg(),Jc(365,`p`),Tk(366,`Para poder utilizar o comando e realizar a migração, execute os comandos abaixo:`),Zg(),Jc(367,`p`)(368,`code`),Tk(369,`npm i --save @po-ui/ng-sync@2`),Zg()(),Jc(370,`p`)(371,`code`),Tk(372,`ng update @po-ui/ng-sync --from 1 --migrate-only`),Zg()(),Jc(373,`h4`),Tk(374,`Breaking Changes`),Zg(),Jc(375,`p`),Tk(376,`Nesta nova versão o nome dos pacotes foram alterados, de acordo com a tabela abaixo:`),Zg(),Jc(377,`table`)(378,`thead`)(379,`tr`)(380,`th`,6),Tk(381,`Pacotes`),Zg(),Jc(382,`th`,6),Tk(383,`Substituído por`),Zg()()(),Jc(384,`tbody`)(385,`tr`)(386,`td`)(387,`code`),Tk(388,`@portinari/portinari-sync`),Zg()(),Jc(389,`td`)(390,`code`),Tk(391,`@po-ui/ng-sync`),Zg()()(),Jc(392,`tr`)(393,`td`)(394,`code`),Tk(395,`@portinari/portinari-storage`),Zg()(),Jc(396,`td`)(397,`code`),Tk(398,`@po-ui/ng-storage`),Zg()()(),Jc(399,`tr`)(400,`td`)(401,`code`),Tk(402,`@portinari/tslint`),Zg()(),Jc(403,`td`)(404,`code`),Tk(405,`@po-ui/ng-tslint`),Zg()()()()(),Jc(406,`h4`),Tk(407,`Depreciação`),Zg(),Jc(408,`p`),Tk(409,`Também foi realizada uma depreciação, onde ainda será aceito o modelo anterior, porém na versão 3 será removido.`),Zg(),Jc(410,`p`),Tk(411,`A depreciação ocorreu no retorno do `),Jc(412,`code`),Tk(413,`Endpoint de sincronização`),Zg(),Tk(414,`, onde anteriomente deveria retornar a data da \xFAltima sincroniza\xE7\xE3o
na propriedade `),Jc(415,`code`),Tk(416,`portinari_sync_date`),Zg(),Tk(417,`, que agora passa a ser `),Jc(418,`code`),Tk(419,`po_sync_date`),Zg(),Tk(420,`, veja o antes e depois:`),Zg(),Jc(421,`pre`)(422,`code`),Tk(423,`{
  "hasNext": false,
  "items": [],
  "portinari_sync_date": "2018-10-08T13:57:55.008Z"
}
`),Zg()(),Jc(424,`p`),Tk(425,`A propriedade `),Jc(426,`code`),Tk(427,`portinari_sync_date`),Zg(),Tk(428,` foi depreciada e o nova propriedade é:`),Zg(),Jc(429,`pre`)(430,`code`),Tk(431,`{
  "hasNext": false,
  "items": [],
  "po_sync_date": "2018-10-08T13:57:55.008Z"
}
`),Zg()()())},dependencies:[Tze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var w=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:233,vars:0,consts:[[`p-title`,`Migração do PO UI`,1,`guides`,`app-portal`],[`href`,`guides/migration-poui-v2`],[`href`,`https://github.com/po-ui/po-angular/wiki#vers%C3%B5es-angular-x-po-ui`],[`href`,`https://update.angular.io/`],[`href`,`https://angular.io/cli/update`],[`href`,`guides/migration-poui#components`],[`href`,`guides/migration-poui#sync`],[`id`,`components`],[`href`,`https://github.com/po-ui/po-angular/blob/master/CHANGELOG.md`],[`id`,`sync`],[1,`language-json`],[`href`,`guides/deprecations`]],template:function(o,s){o&1&&(Jc(0,`po-page-default`,0)(1,`p`),Tk(2,`Este guia contém informações sobre a migração do seu projeto para a versão mais atualizada do PO UI.`),Zg(),Jc(3,`blockquote`)(4,`p`),Tk(5,`Caso você não estiver utilizando a versão anterior da mais atualizada, é importante realizar a migração para a mesma.`),Zg()(),Jc(6,`blockquote`)(7,`p`),Tk(8,`Se seu projeto estiver na v1, veja este Guia de Migração do PO UI para `),Jc(9,`a`,1)(10,`strong`),Tk(11,`V2`),Zg()(),Tk(12,`.`),Zg()(),Jc(13,`h2`),Tk(14,`Atualizando o projeto com Angular`),Zg(),Jc(15,`p`),Tk(16,`Antes de atualizar a vers\xE3o do PO UI, \xE9 importante que voc\xEA tenha atualizado o seu projeto para
o Angular que o PO UI est\xE1 homologado, veja nossa
`),Jc(17,`a`,2),Tk(18,`tabela de compatibilidade`),Zg(),Tk(19,` em nosso Github Wiki.`),Zg(),Jc(20,`blockquote`)(21,`p`),Tk(22,`Caso o seu projeto não possua a dependência `),Jc(23,`code`),Tk(24,`@angular-devkit/schematics`),Zg(),Tk(25,`, realize a instalação do pacote para o nosso script de atualização funcionar corretamente:`),Zg()(),Jc(26,`pre`)(27,`code`),Tk(28,`npm install @angular-devkit/schematics --save-dev
`),Zg()(),Jc(29,`p`),Tk(30,`Para atualizar o Angular, execute o comando abaixo:`),Zg(),Jc(31,`pre`)(32,`code`),Tk(33,`ng update @angular/cli@<version> @angular/core@<version> --force
`),Zg()(),Jc(34,`p`),Tk(35,`Por exemplo:`),Zg(),Jc(36,`pre`)(37,`code`),Tk(38,`ng update @angular/cli@22 @angular/core@22 --force
`),Zg()(),Jc(39,`blockquote`)(40,`p`),Tk(41,`Para realizar a migração completa e avaliar se não precisa fazer alguma alteração veja o `),Jc(42,`a`,3)(43,`strong`),Tk(44,`Guia de Upgrade do Angular`),Zg()(),Tk(45,`.`),Zg()(),Jc(46,`p`),Tk(47,`O nosso pacote possu\xEDa depend\xEAncias que eram compat\xEDveis com a vers\xE3o anterior do Angular, portanto
devemos utilizar a `),Jc(48,`em`),Tk(49,`flag`),Zg(),Jc(50,`code`),Tk(51,`--force`),Zg(),Tk(52,` para que o Angular realize a migra\xE7\xE3o do seu projeto, ignorando a vers\xE3o das depend\xEAncias.
Para avaliar as `),Jc(53,`em`),Tk(54,`flags`),Zg(),Tk(55,` disponíveis veja a `),Jc(56,`a`,4)(57,`strong`),Tk(58,`documentação do ng update`),Zg()(),Tk(59,`.`),Zg(),Jc(60,`h2`),Tk(61,`Atualizando o PO UI`),Zg(),Jc(62,`p`),Tk(63,`Para facilitar a migração do seu projeto para o PO UI mais recente, implementamos o `),Jc(64,`code`),Tk(65,`ng update`),Zg(),Tk(66,` nos pacotes abaixo:`),Zg(),Jc(67,`ul`)(68,`li`)(69,`a`,5)(70,`strong`),Tk(71,`@po-ui/ng-components`),Zg()()(),Jc(72,`li`)(73,`a`,6)(74,`strong`),Tk(75,`@po-ui/ng-sync`),Zg()()()(),Jc(76,`p`),_u(77,`a`,7),Zg(),Jc(78,`h3`),Tk(79,`ng update @po-ui/ng-components`),Zg(),Jc(80,`p`),Tk(81,`Para realizar a migração, devemos executar o comando `),Jc(82,`code`),Tk(83,`ng update`),Zg(),Tk(84,`, conforme exemplo abaixo. Mas antes verifique se comitou os arquivos alterados pela migra\xE7\xE3o do Angular, se preferir voc\xEA pode utilizar a
`),Jc(85,`em`),Tk(86,`flag`),Zg(),Jc(87,`code`),Tk(88,`--allow-dirty`),Zg(),Tk(89,` em conjunto.`),Zg(),Jc(90,`pre`)(91,`code`),Tk(92,`ng update @po-ui/ng-components@<version> --allow-dirty --force
`),Zg()(),Jc(93,`p`),Tk(94,`Por exemplo:`),Zg(),Jc(95,`pre`)(96,`code`),Tk(97,`ng update @po-ui/ng-components@next --allow-dirty --force
`),Zg()(),Jc(98,`blockquote`)(99,`p`),Tk(100,`Caso ocorra um erro ao concluir o comando acima pode ser necessário fazer uma instalação limpa no projeto apagando a pasta `),Jc(101,`code`),Tk(102,`node_modules`),Zg(),Tk(103,` e o arquivo `),Jc(104,`code`),Tk(105,`package-lock.json`),Zg(),Tk(106,` e executando o comando `),Jc(107,`code`),Tk(108,`npm i --legacy-peer-deps`),Zg(),Tk(109,` antes de realizar o `),Jc(110,`code`),Tk(111,`ng update`),Zg(),Tk(112,`.`),Zg()(),Jc(113,`p`),Tk(114,`O `),Jc(115,`code`),Tk(116,`ng update`),Zg(),Tk(117,` ajudará nas alterações necessárias para seu projeto seguir atualizado, que são elas:`),Zg(),Jc(118,`ul`)(119,`li`),Tk(120,`Caso houver `),Jc(121,`em`),Tk(122,`breaking changes`),Zg(),Tk(123,`, serão realizados as alterações possíveis, mas fique atento ao `),Jc(124,`a`,8),Tk(125,`CHANGELOG`),Zg(),Tk(126,`;`),Zg(),Jc(127,`li`),Tk(128,`Atualizar as versões dos pacotes:`),Jc(129,`ul`)(130,`li`)(131,`code`),Tk(132,`@po-ui/ng-components`),Zg(),Tk(133,`;`),Zg(),Jc(134,`li`)(135,`code`),Tk(136,`@po-ui/ng-templates`),Zg(),Tk(137,`;`),Zg(),Jc(138,`li`)(139,`code`),Tk(140,`@po-ui/ng-code-editor`),Zg(),Tk(141,`;`),Zg(),Jc(142,`li`)(143,`code`),Tk(144,`@po-ui/ng-storage`),Zg(),Tk(145,`;`),Zg(),Jc(146,`li`)(147,`code`),Tk(148,`@po-ui/ng-sync`),Zg(),Tk(149,`;`),Zg(),Jc(150,`li`)(151,`code`),Tk(152,`@po-ui/style`),Zg(),Tk(153,`;`),Zg()()()(),Jc(154,`p`),Tk(155,`Além disso, será realizada uma pergunta para que o usuário decida se quer utilizar a nova biblioteca de ícones. Caso a escolha seja positiva, o processo de update irá substituir classes de ícones do po-ui pelas novas referências.`),Zg(),Jc(156,`p`),_u(157,`a`,9),Zg(),Jc(158,`h3`),Tk(159,`ng update @po-ui/ng-sync`),Zg(),Jc(160,`blockquote`)(161,`p`),Tk(162,`Caso você também utilize `),Jc(163,`code`),Tk(164,`@po-ui/ng-components`),Zg(),Tk(165,` não há necessidade de executar o `),Jc(166,`em`),Tk(167,`ng update`),Zg(),Tk(168,` do `),Jc(169,`code`),Tk(170,`@po-ui/ng-sync`),Zg(),Tk(171,`.`),Zg()(),Jc(172,`p`),Tk(173,`Para realizar a migração, devemos executar o comando `),Jc(174,`code`),Tk(175,`ng update`),Zg(),Tk(176,`, conforme exemplo abaixo. Mas antes verifique se comitou os arquivos alterados pela migra\xE7\xE3o do Angular, se preferir voc\xEA pode utilizar a
`),Jc(177,`em`),Tk(178,`flag`),Zg(),Jc(179,`code`),Tk(180,`--allow-dirty`),Zg(),Tk(181,` em conjunto.`),Zg(),Jc(182,`pre`)(183,`code`),Tk(184,`ng update @po-ui/ng-sync@<version> --allow-dirty --force
`),Zg()(),Jc(185,`p`),Tk(186,`Por exemplo:`),Zg(),Jc(187,`pre`)(188,`code`),Tk(189,`ng update @po-ui/ng-sync@next --allow-dirty --force
`),Zg()(),Jc(190,`p`),Tk(191,`O `),Jc(192,`code`),Tk(193,`ng update`),Zg(),Tk(194,` ajudará nas alterações necessárias para seu projeto, que será atualizar as versões dos pacotes:`),Zg(),Jc(195,`ul`)(196,`li`)(197,`code`),Tk(198,`@po-ui/ng-sync`),Zg(),Tk(199,`;`),Zg(),Jc(200,`li`)(201,`code`),Tk(202,`@po-ui/ng-storage`),Zg(),Tk(203,`;`),Zg()(),Jc(204,`blockquote`)(205,`p`),Tk(206,`Pode ocorrer o seguinte erro `),Jc(207,`code`),Tk(208,`TypeError: Failed to fetch dynamically imported module...`),Zg(),Tk(209,`, sendo necessário adicionar ao arquivo `),Jc(210,`code`),Tk(211,`angular.json`),Zg(),Tk(212,` as seguintes configurações:`),Zg(),Jc(213,`pre`)(214,`code`,10),Tk(215,`{
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
`),Zg()()(),Jc(216,`h2`),Tk(217,`Depreciações e Breaking Changes`),Zg(),Jc(218,`p`),Tk(219,`Possuimos uma documentação que lista as depreciações correntes e os `),Jc(220,`em`),Tk(221,`breaking changes`),Zg(),Tk(222,` j\xE1 realizados na biblioteca,
para consult\xE1-lo acesse o guia `),Jc(223,`a`,11),Tk(224,`Depreciações`),Zg()(),Jc(225,`p`),Tk(226,`Verifique também nosso `),Jc(227,`a`,8),Tk(228,`CHANGELOG`),Zg(),Tk(229,` para obter
mais detalhes dos `),Jc(230,`em`),Tk(231,`breaking changes`),Zg(),Tk(232,` realizados.`),Zg()())},dependencies:[Tze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var G=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:63,vars:0,consts:[[`p-title`,`Migração do THF para o PO UI v1.x`,1,`guides`,`app-portal`]],template:function(o,s){o&1&&(Jc(0,`po-page-default`,0)(1,`p`),Tk(2,`Para facilitar a migração do seu projeto com o THF para o PO UI, disponibilizamos um pacote para fazer esta conversão. `),Zg(),Jc(3,`p`),Tk(4,`Este pacote, irá passar pelos arquivos do seu projeto alterando as palavras-chaves do THF para a nova nomenclatura do PO UI.`),Zg(),Jc(5,`h3`),Tk(6,`Antes de iniciar a migração`),Zg(),Jc(7,`p`),Tk(8,`Antes de iniciar a migração certifique-se que:`),Zg(),Jc(9,`ul`)(10,`li`),Tk(11,`Este pacote de migração é apenas para a migração do `),Jc(12,`strong`),Tk(13,`THF versão 4 ou superior para o PO UI versão 1.x`),Zg(),Tk(14,` que é compatível com a versão 8 do Angular. `),Zg(),Jc(15,`li`),Tk(16,`As dependências do THF encontram-se na versão 4 ou superior.`),Zg(),Jc(17,`li`),Tk(18,`Todos os arquivos estão salvos.`),Zg(),Jc(19,`li`),Tk(20,`Se as pastas e os arquivos possuem permissão para terceiros alterá-los.`),Zg()(),Jc(21,`h3`),Tk(22,`Instalação do pacote de migração`),Zg(),Jc(23,`p`),Tk(24,`Instale globalmente o pacote `),Jc(25,`code`),Tk(26,`po-migration`),Zg(),Tk(27,` utilizando o npm, conforme o comando abaixo:`),Zg(),Jc(28,`pre`)(29,`code`),Tk(30,`npm install -g po-migration
`),Zg()(),Jc(31,`h3`),Tk(32,`Migrando o seu projeto`),Zg(),Jc(33,`p`),Tk(34,`Após a instalação, navegue até a pasta do projeto que você deseja migrar para o PO UI.`),Zg(),Jc(35,`p`),Tk(36,`Para iniciar a migração, execute o comando:`),Zg(),Jc(37,`pre`)(38,`code`),Tk(39,`po-migration start
`),Zg()(),Jc(40,`p`),Tk(41,`Este comando irá utilizar um dicionário de palavras-chaves do próprio THF para realizar a migração, ou seja, se tiver outra palavra que você criou e que não faz parte do THF, ele não irá alterar.`),Zg(),Jc(42,`p`),Tk(43,`No entanto, caso você queira alterar até mesmo palavras criadas por você, utilize o seguinte comando:`),Zg(),Jc(44,`pre`)(45,`code`),Tk(46,`po-migration start --all
`),Zg()(),Jc(47,`p`),Tk(48,`Este comando atualiza todas as palavras do projeto que contém "thf, t-, ou totvs".`),Zg(),Jc(49,`blockquote`)(50,`p`),Tk(51,`Ao utilizar a opção `),Jc(52,`code`),Tk(53,`--all`),Zg(),Tk(54,` certifique-se que n\xE3o foi alterado nenhuma palavra que fa\xE7a parte
do caminho de algum arquivo, que voc\xEA possa ter colocado com o nome contendo algumas das palavras "thf, t-, ou totvs".`),Zg()(),Jc(55,`p`),Tk(56,`Veja a documentação completa do pacote `),Jc(57,`code`),Tk(58,`po-migration`),Zg(),Tk(59,` executando o comando:`),Zg(),Jc(60,`pre`)(61,`code`),Tk(62,`po-migration --help
`),Zg()()())},dependencies:[Tze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var U=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:81,vars:0,consts:[[`p-title`,`Press Kit`,1,`guides`,`app-portal`],[`href`,`https://creativecommons.org/licenses/by/4.0/`],[1,`docs-presskit-row`,`po-mb-5`],[`src`,`./assets/po-logos/po_color_bg.svg`,`width`,`128`,`height`,`128`,`alt`,`Logo com segundo plano degradê`],[1,`po-ml-md-2`],[`href`,`./assets/po-logos/po_color_bg.png`,`download`,``],[`href`,`./assets/po-logos/po_color_bg.svg`,`download`,``],[`src`,`./assets/po-logos/po_color.svg`,`width`,`128`,`height`,`128`,`alt`,`Logo degradê`],[`href`,`./assets/po-logos/po_color.png`,`download`,``],[`href`,`./assets/po-logos/po_color.svg`,`download`,``],[`src`,`./assets/po-logos/po_black.svg`,`width`,`128`,`height`,`128`,`alt`,`Logo preto`],[`href`,`./assets/po-logos/po_black.png`,`download`,``],[`href`,`./assets/po-logos/po_black.svg`,`download`,``],[`src`,`./assets/po-logos/po_inverse.svg`,`width`,`128`,`height`,`128`,`alt`,`Logo branco com segundo plano preto`],[`href`,`./assets/po-logos/po_inverse.png`,`download`,``],[`href`,`./assets/po-logos/po_inverse.svg`,`download`,``],[`src`,`./assets/po-logos/po_white_mock_bg.png`,`width`,`128`,`height`,`128`,`alt`,`Logo branco com segundo plano transparente`],[`href`,`./assets/po-logos/po_white.png`,`download`,``],[`href`,`./assets/po-logos/po_white.svg`,`download`,``]],template:function(o,s){o&1&&(Jc(0,`po-page-default`,0)(1,`h2`),Tk(2,`Logomarca`),Zg(),Jc(3,`p`),Tk(4,`A licença para uso das variações de logomarca do `),Jc(5,`strong`),Tk(6,`PO UI`),Zg(),Tk(7,` é seguida de acordo com a `),Jc(8,`a`,1),Tk(9,`CC BY 4.0`),Zg(),Tk(10,`. Ou seja, pode-se utilizá-las como convier e para qualquer uso, como por exemplo na impressão em camisetas, divulgação em websites, etc.`),Zg(),Jc(11,`div`,2)(12,`div`),_u(13,`img`,3),Zg(),Jc(14,`div`,4)(15,`h3`),Tk(16,`Versão com segundo plano degradê`),Zg(),Jc(17,`p`),Tk(18,`Logo com segundo plano degradê (png) - `),Jc(19,`a`,5),Tk(20,`Download`),Zg()(),Jc(21,`p`),Tk(22,`Logo com segundo plano degradê (svg) - `),Jc(23,`a`,6),Tk(24,`Download`),Zg()()()(),Jc(25,`div`,2)(26,`div`),_u(27,`img`,7),Zg(),Jc(28,`div`,4)(29,`h3`),Tk(30,`Versão do logo degradê`),Zg(),Jc(31,`p`),Tk(32,`Logo degradê (png) - `),Jc(33,`a`,8),Tk(34,`Download`),Zg()(),Jc(35,`p`),Tk(36,`Logo degradê (svg) - `),Jc(37,`a`,9),Tk(38,`Download`),Zg()()()(),Jc(39,`div`,2)(40,`div`),_u(41,`img`,10),Zg(),Jc(42,`div`,4)(43,`h3`),Tk(44,`Versão do logo em preto`),Zg(),Jc(45,`p`),Tk(46,`Logo preto (png) - `),Jc(47,`a`,11),Tk(48,`Download`),Zg()(),Jc(49,`p`),Tk(50,`Logo preto (svg) - `),Jc(51,`a`,12),Tk(52,`Download`),Zg()()()(),Jc(53,`div`,2)(54,`div`),_u(55,`img`,13),Zg(),Jc(56,`div`,4)(57,`h3`),Tk(58,`Versão branco com segundo plano preto`),Zg(),Jc(59,`p`),Tk(60,`Logo branco (png) - `),Jc(61,`a`,14),Tk(62,`Download`),Zg()(),Jc(63,`p`),Tk(64,`Logo branco (svg) - `),Jc(65,`a`,15),Tk(66,`Download`),Zg()()()(),Jc(67,`div`,2)(68,`div`),_u(69,`img`,16),Zg(),Jc(70,`div`,4)(71,`h3`),Tk(72,`Versão branco com segundo plano transparente`),Zg(),Jc(73,`p`),Tk(74,`Logo branco (png) - `),Jc(75,`a`,17),Tk(76,`Download`),Zg()(),Jc(77,`p`),Tk(78,`Logo branco (svg) - `),Jc(79,`a`,18),Tk(80,`Download`),Zg()()()()())},dependencies:[Tze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var R=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:187,vars:0,consts:[[`p-title`,`Lançamentos e suporte`,1,`guides`,`app-portal`],[1,`po-row`],[1,`po-xl-12`,`po-lg-12`,`po-md-12`,`po-sm-12`],[`src`,`./assets/graphics/release-schedule.jpg`,`alt`,`Cronograma de Lançamentos`,2,`max-width`,`100%`,`max-height`,`33vh`],[1,`po-xl-10`,`po-lg-12`,`po-md-12`,`po-sm-12`],[1,`po-table`,`po-text-color-neutral-dark-40`],[1,`po-table-header`],[1,`po-table-header-ellipsis`],[1,`po-table-row`],[1,`po-table-column`],[`href`,`https://semver.org/`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://angular.dev/reference/releases`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`guides/releases`],[`href`,`guides/migration-poui`],[`href`,`guides/getting-started`]],template:function(o,s){o&1&&(Jc(0,`po-page-default`,0)(1,`p`),Tk(2,`Suporte estendido para versões principais ímpares por até 18 meses, a partir da versão 17.`),Zg(),Jc(3,`h3`),Tk(4,`Cronograma de Lançamentos`),Zg(),Jc(5,`div`,1)(6,`div`,2),_u(7,`img`,3),Zg()(),Jc(8,`h3`),Tk(9,`Janela de Suporte PO UI`),Zg(),Jc(10,`p`),Tk(11,`Todas as versões Major Ímpares possuem período ativo de 12 meses + suporte (LTS) de 18 meses:`),Zg(),Jc(12,`div`,1)(13,`div`,4)(14,`table`,5)(15,`thead`)(16,`tr`,6)(17,`th`,7),Tk(18,`Estágio de suporte`),Zg(),Jc(19,`th`,7),Tk(20,`Tempo de suporte`),Zg(),Jc(21,`th`,7),Tk(22,`Detalhes`),Zg()()(),Jc(23,`tbody`)(24,`tr`,8)(25,`td`,9),Tk(26,`Active (versões major ímpares)`),Zg(),Jc(27,`td`,9),Tk(28,`12 meses`),Zg(),Jc(29,`td`,9),Tk(30,`Atualizações e correções programadas regularmente`),Zg()(),Jc(31,`tr`,8)(32,`td`,9),Tk(33,`Longo prazo (LTS) (versões major ímpares)`),Zg(),Jc(34,`td`,9),Tk(35,`18 meses`),Zg(),Jc(36,`td`,9),Tk(37,`Apenas correções nas versões ímpares`),Zg()(),Jc(38,`tr`,8)(39,`td`,9),Tk(40,`Active (versões major pares)`),Zg(),Jc(41,`td`,9),Tk(42,`6 meses`),Zg(),Jc(43,`td`,9),Tk(44,`Atualizações e correções programadas regularmente até o lançamento da próxima versão major ímpar`),Zg()()()()()(),Jc(45,`h3`),Tk(46,`Versões PO UI`),Zg(),Jc(47,`p`),Tk(48,`As bibliotecas seguem as regras de versionamento definidas pelo Semantic Versioning (SemVer), conforme descrito em: `),Jc(49,`a`,10),Tk(50,`https://semver.org/`),Zg()(),Jc(51,`div`,1)(52,`div`,4)(53,`table`,5)(54,`thead`)(55,`tr`,6)(56,`th`,7),Tk(57,`Versão`),Zg(),Jc(58,`th`,7),Tk(59,`Status`),Zg(),Jc(60,`th`,7),Tk(61,`Lançado`),Zg(),Jc(62,`th`,7),Tk(63,`Fim do período ativo`),Zg(),Jc(64,`th`,7),Tk(65,`Fim do LTS`),Zg()()(),Jc(66,`tbody`)(67,`tr`,8)(68,`td`,9),Tk(69,`^23.0.0*`),Zg(),Jc(70,`td`,9),Tk(71,`Previsto`),Zg(),Jc(72,`td`,9),Tk(73,`Janeiro/2027`),Zg(),Jc(74,`td`,9),Tk(75,`Dezembro/2027`),Zg(),Jc(76,`td`,9),Tk(77,`Junho/2029`),Zg()(),Jc(78,`tr`,8)(79,`td`,9),Tk(80,`^22.0.0*`),Zg(),Jc(81,`td`,9),Tk(82,`Previsto`),Zg(),Jc(83,`td`,9),Tk(84,`Julho/2026`),Zg(),Jc(85,`td`,9),Tk(86,`Dezembro/2026`),Zg(),Jc(87,`td`,9),Tk(88,`N/A`),Zg()(),Jc(89,`tr`,8)(90,`td`,9),Tk(91,`^21.0.0`),Zg(),Jc(92,`td`,9),Tk(93,`Active`),Zg(),Jc(94,`td`,9),Tk(95,`Janeiro/2026`),Zg(),Jc(96,`td`,9),Tk(97,`Dezembro/2026`),Zg(),Jc(98,`td`,9),Tk(99,`Junho/2028`),Zg()(),Jc(100,`tr`,8)(101,`td`,9),Tk(102,`^19.0.0`),Zg(),Jc(103,`td`,9),Tk(104,`LTS`),Zg(),Jc(105,`td`,9),Tk(106,`Janeiro/2025`),Zg(),Jc(107,`td`,9),Tk(108,`Dezembro/2025`),Zg(),Jc(109,`td`,9),Tk(110,`Junho/2027`),Zg()(),Jc(111,`tr`,8)(112,`td`,9),Tk(113,`^20.0.0`),Zg(),Jc(114,`td`,9),Tk(115,`Active Encerrado`),Zg(),Jc(116,`td`,9),Tk(117,`Setembro/2025`),Zg(),Jc(118,`td`,9),Tk(119,`Janeiro/2026`),Zg(),Jc(120,`td`,9),Tk(121,`N/A`),Zg()(),Jc(122,`tr`,8)(123,`td`,9),Tk(124,`^18.0.0`),Zg(),Jc(125,`td`,9),Tk(126,`Active Encerrado`),Zg(),Jc(127,`td`,9),Tk(128,`Julho/2024`),Zg(),Jc(129,`td`,9),Tk(130,`Dezembro/2024`),Zg(),Jc(131,`td`,9),Tk(132,`N/A`),Zg()(),Jc(133,`tr`,8)(134,`td`,9),Tk(135,`^17.0.0`),Zg(),Jc(136,`td`,9),Tk(137,`LTS Encerrado`),Zg(),Jc(138,`td`,9),Tk(139,`Março/2024`),Zg(),Jc(140,`td`,9),Tk(141,`Agosto/2024`),Zg(),Jc(142,`td`,9),Tk(143,`Agosto/2025`),Zg()()()()()(),Jc(144,`p`),Tk(145,`Versões LTS recebem apenas correções de segurança e bugs críticos. Não há novas funcionalidades ou melhorias visuais.`),Zg(),Jc(146,`blockquote`)(147,`p`),Tk(148,`*Datas aproximadas, sujeitas a alterações.`),Zg()(),Jc(149,`h3`),Tk(150,`Segurança — Vulnerabilidades em versões LTS`),Zg(),Jc(151,`p`),Tk(152,`Versões LTS podem apresentar `),Jc(153,`strong`),Tk(154,`vulnerabilidades altas ou críticas`),Zg(),Tk(155,` no `),Jc(156,`code`),Tk(157,`npm audit`),Zg(),Jc(158,`strong`),Tk(159,`sem patch disponível`),Zg(),Tk(160,`, especialmente quando o Angular (peer dependency) já encerrou o suporte da versão utilizada (`),Jc(161,`strong`),Tk(162,`EOL`),Zg(),Tk(163,`).`),Zg(),Jc(164,`blockquote`)(165,`p`),Tk(166,`O Status EOL reflete o estado do suporte ao respectivo produto no lançamento da release. O PO UI prestará suporte em sistemas operacionais, produtos, bibliotecas terceiras ou serviços (incluindo o Angular), apenas dentro do ciclo de vida e correções de vulnerabilidades estabelecidos por seus respectivos fabricantes e mantenedores. `),Jc(167,`strong`),Tk(168,`O PO UI não prestará suporte`),Zg(),Tk(169,` em sistemas operacionais, produtos, bibliotecas terceiras ou serviços fora de seus ciclos de vida ativos.`),Zg()(),Jc(170,`p`),Tk(171,`Planeje a migração para a versão Active quando possível.`),Zg(),Jc(172,`p`),Tk(173,`Referências:`),Zg(),Jc(174,`ul`)(175,`li`)(176,`a`,11),Tk(177,`Angular Release Schedule`),Zg()(),Jc(178,`li`)(179,`a`,12),Tk(180,`Releases e versionamento`),Zg()(),Jc(181,`li`)(182,`a`,13),Tk(183,`Migração do PO UI`),Zg()(),Jc(184,`li`)(185,`a`,14),Tk(186,`Primeiros passos`),Zg()()()())},dependencies:[Tze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var N=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:253,vars:0,consts:[[`p-title`,`Releases`,1,`guides`,`app-portal`],[`href`,`https://semver.org/`],[1,`po-row`],[1,`po-xl-6`,`po-lg-8`,`po-md-10`,`po-sm-12`],[1,`po-table`,`po-text-color-neutral-dark-40`],[1,`po-table-header`],[1,`po-table-header-ellipsis`],[1,`po-table-row`],[1,`po-table-column`],[`href`,`guides/migration-poui`],[`href`,`guides/migration-poui-v2`],[`href`,`guides/migration-thf-to-po-ui`],[`href`,`https://github.com/po-ui/po-angular/issues/1184`],[`href`,`https://www.npmjs.com/package/@po-ui/ng-components?activeTab=versions`],[`href`,`guides/release-schedule`]],template:function(o,s){o&1&&(Jc(0,`po-page-default`,0)(1,`p`),Tk(2,`Reconhecemos que você precisa da estabilidade da estrutura PO UI. A estabilidade garante que os componentes, samples e tutoriais não se tornem obsoletos inesperadamente. A estabilidade é essencial para um ecossistema com angular e PO UI prosperar.`),Zg(),Jc(3,`p`),Tk(4,`Também compartilhamos com você o desejo de que o PO UI continue evoluindo. Nós nos esforçamos para garantir que a biblioteca de componentes sobre a qual está construindo sua aplicação continue melhorando e permitindo que você se mantenha atualizado com o resto do ecossistema do Angular e com as necessidades do usuário.`),Zg(),Jc(5,`p`),Tk(6,`Este documento contém as práticas que seguimos para fornecer a você uma biblioteca de componentes de ponta, equilibrada e com estabilidade. Nós nos esforçamos para garantir que as mudanças futuras sejam sempre introduzidas de forma previsível. Queremos que todos que dependam do PO UI saibam quando e como os novos recursos serão adicionados e estejam bem preparados quando os obsoletos são removidos.`),Zg(),Jc(7,`h2`),Tk(8,`Controle de Versão PO UI`),Zg(),Jc(9,`p`),Tk(10,`Os números de versão do PO UI indicam o nível de mudanças introduzidas pelo lançamento. Este uso de `),Jc(11,`a`,1),Tk(12,`versionamento semântico`),Zg(),Tk(13,` ajuda a entender o impacto potencial de atualizar para uma nova versão.`),Zg(),Jc(14,`p`),Tk(15,`Números de versão PO UI tem três partes: `),Jc(16,`code`),Tk(17,`major.minor.patch`),Zg(),Tk(18,`. Por exemplo, a versão 4.16.1 indica a versão principal 4, a versão secundária 2 e o nível de patch 1.`),Zg(),Jc(19,`p`),Tk(20,`O número da versão principal é incrementado com base na versão do Angular que ele atende.`),Zg(),Jc(21,`ul`)(22,`li`)(23,`strong`),Tk(24,`As versões principais`),Zg(),Tk(25,` contêm os novos recursos disponibilizados pelo Angular, mas espera-se uma assistência mínima do desenvolvedor durante a atualização. Ao atualizar para uma nova versão principal, pode ser necessário executar scripts de atualização, refatorar códigos, executar testes adicionais e aprender novas APIs.`),Zg(),Jc(26,`li`)(27,`strong`),Tk(28,`Versões secundárias`),Zg(),Tk(29,` contém novos recursos menores. Versões menores são totalmente compatíveis com versões anteriores; nenhuma assistência do desenvolvedor é esperada durante a atualização, mas você pode opcionalmente modificar seus aplicativos e bibliotecas para começar a usar novas APIs, recursos e capacidades que foram adicionados na versão. São incrementadas regularmente ao final de nossas sprints.`),Zg(),Jc(30,`li`)(31,`strong`),Tk(32,`Lançamentos de patch`),Zg(),Tk(33,` são lançamentos de correção de bugs. Nenhuma ajuda do desenvolvedor é esperada durante a atualização.`),Zg()(),Jc(34,`h2`),Tk(35,`Caminhos de atualização suportados`),Zg(),Jc(36,`p`),Tk(37,`Em alinhamento com o esquema de controle de versão descrito acima, nos comprometemos a oferecer suporte aos seguintes caminhos de atualização:`),Zg(),Jc(38,`ul`)(39,`li`),Tk(40,`Se você estiver atualizando na `),Jc(41,`strong`),Tk(42,`versão principal`),Zg(),Tk(43,`, poderá pular todas as versões intermediárias e atualizar diretamente para a versão de destino. Por exemplo, você pode atualizar diretamente da versão 4.0.0 para a 4.17.0.`),Zg(),Jc(44,`li`),Tk(45,`Se você estiver atualizando de `),Jc(46,`strong`),Tk(47,`uma versão principal para outra`),Zg(),Tk(48,`, recomendamos que `),Jc(49,`strong`),Tk(50,`não ignore as versões principais`),Zg(),Tk(51,`. Siga as instruções para atualizar de forma incremental para a próxima versão principal, testando e validando em cada erapa. Por exemplo, se você deseja atualizar da versão 2.xx para a versão 4.xx, recomendamos que você atualize para a versão 3.xx mais recente primeiro. Depois de atualizar com sucesso para a versão 3.xx, você pode atualizar para a 4.xx.`),Zg()(),Jc(52,`p`),Tk(53,`Consulte abaixo nossos guias de migração de versão para obter mais informações sobre como atualizar o PO UI para a versão mais recente nos seus projetos Angular.`),Zg(),Jc(54,`h3`),Tk(55,`Comparativo de versões Angular x PO UI`),Zg(),Jc(56,`div`,2)(57,`div`,3)(58,`table`,4)(59,`thead`)(60,`tr`,5)(61,`th`,6),Tk(62,`Angular`),Zg(),Jc(63,`th`,6),Tk(64,`PO UI`),Zg(),Jc(65,`th`,6),Tk(66,`Migração`),Zg()()(),Jc(67,`tbody`)(68,`tr`,7)(69,`td`,8),Tk(70,`22.0.0`),Zg(),Jc(71,`td`,8),Tk(72,`22.0.0`),Zg(),Jc(73,`td`,8)(74,`a`,9),Tk(75,`Migração do PO UI`),Zg()()(),Jc(76,`tr`,7)(77,`td`,8),Tk(78,`21.0.0`),Zg(),Jc(79,`td`,8),Tk(80,`21.0.0`),Zg(),Jc(81,`td`,8)(82,`a`,9),Tk(83,`Migração do PO UI`),Zg()()(),Jc(84,`tr`,7)(85,`td`,8),Tk(86,`20.0.0`),Zg(),Jc(87,`td`,8),Tk(88,`20.0.0`),Zg(),Jc(89,`td`,8)(90,`a`,9),Tk(91,`Migração do PO UI`),Zg()()(),Jc(92,`tr`,7)(93,`td`,8),Tk(94,`19.0.0`),Zg(),Jc(95,`td`,8),Tk(96,`19.0.0`),Zg(),Jc(97,`td`,8)(98,`a`,9),Tk(99,`Migração do PO UI`),Zg()()(),Jc(100,`tr`,7)(101,`td`,8),Tk(102,`18.0.0`),Zg(),Jc(103,`td`,8),Tk(104,`18.0.0`),Zg(),Jc(105,`td`,8)(106,`a`,9),Tk(107,`Migração do PO UI`),Zg()()(),Jc(108,`tr`,7)(109,`td`,8),Tk(110,`17.0.0`),Zg(),Jc(111,`td`,8),Tk(112,`17.0.0`),Zg(),Jc(113,`td`,8)(114,`a`,9),Tk(115,`Migração do PO UI`),Zg()()(),Jc(116,`tr`,7)(117,`td`,8),Tk(118,`16.0.0`),Zg(),Jc(119,`td`,8),Tk(120,`16.0.0`),Zg(),Jc(121,`td`,8)(122,`a`,9),Tk(123,`Migração do PO UI`),Zg()()(),Jc(124,`tr`,7)(125,`td`,8),Tk(126,`15.0.0`),Zg(),Jc(127,`td`,8),Tk(128,`15.0.0`),Zg(),Jc(129,`td`,8)(130,`a`,9),Tk(131,`Migração do PO UI`),Zg()()(),Jc(132,`tr`,7)(133,`td`,8),Tk(134,`14.0.0`),Zg(),Jc(135,`td`,8),Tk(136,`14.0.0`),Zg(),Jc(137,`td`,8)(138,`a`,9),Tk(139,`Migração do PO UI`),Zg()()(),Jc(140,`tr`,7)(141,`td`,8),Tk(142,`13.0.0`),Zg(),Jc(143,`td`,8),Tk(144,`6.0.0`),Zg(),Jc(145,`td`,8)(146,`a`,9),Tk(147,`Migração do PO UI`),Zg()()(),Jc(148,`tr`,7)(149,`td`,8),Tk(150,`12.0.0`),Zg(),Jc(151,`td`,8),Tk(152,`5.0.0`),Zg(),Jc(153,`td`,8)(154,`a`,9),Tk(155,`Migração do PO UI`),Zg()()(),Jc(156,`tr`,7)(157,`td`,8),Tk(158,`11.0.0`),Zg(),Jc(159,`td`,8),Tk(160,`4.0.0`),Zg(),Jc(161,`td`,8)(162,`a`,9),Tk(163,`Migração do PO UI`),Zg()()(),Jc(164,`tr`,7)(165,`td`,8),Tk(166,`10.0.0`),Zg(),Jc(167,`td`,8),Tk(168,`3.0.0`),Zg(),Jc(169,`td`,8)(170,`a`,9),Tk(171,`Migração do PO UI`),Zg()()(),Jc(172,`tr`,7)(173,`td`,8),Tk(174,`9.0.0`),Zg(),Jc(175,`td`,8),Tk(176,`2.0.0`),Zg(),Jc(177,`td`,8)(178,`a`,10),Tk(179,`Migração do PO UI para V2`),Zg()()(),Jc(180,`tr`,7)(181,`td`,8),Tk(182,`8.0.0`),Zg(),Jc(183,`td`,8),Tk(184,`1.0.0`),Zg(),Jc(185,`td`,8)(186,`a`,11),Tk(187,`Migração THF para PO UI v1.x`),Zg()()()()()()(),Jc(188,`blockquote`)(189,`p`),Tk(190,`Conforme agenda de publicação de novas versões estáveis do Angular, nós atualizamos nossas versões como de costume e aproveitaremos para fazer uma mudança na nomenclatura das nossas versões. A versão `),Jc(191,`code`),Tk(192,`v7.x.x`),Zg(),Tk(193,` foi lançada como `),Jc(194,`strong`)(195,`code`),Tk(196,`v14.x.x`),Zg()(),Tk(197,`, assim `),Jc(198,`code`),Tk(199,`a versão 14.x.x do PO UI tem compatibilidade com a v14 do Angular`),Zg(),Tk(200,` e assim por diante. `),Jc(201,`a`,12),Tk(202,`Mais informações`),Zg(),Tk(203,`.`),Zg()(),Jc(204,`h2`),Tk(205,`Versões prévias`),Zg(),Jc(206,`p`),Tk(207,`Permitimos que você visualize o que está por vir, fornecendo pré-lançamentos `),Jc(208,`code`),Tk(209,`next`),Zg(),Tk(210,` ou Release Candidates (`),Jc(211,`code`),Tk(212,`rc`),Zg(),Tk(213,`) para cada versão principal:`),Zg(),Jc(214,`ul`)(215,`li`)(216,`strong`),Tk(217,`Next`),Zg(),Tk(218,`: a versão que está em desenvolvimento, com testes ativos e com breaking changes a resolver. O próximo lançamento é indicado por uma tag de lançamento anexada ao identificador `),Jc(219,`code`),Tk(220,`-next`),Zg(),Tk(221,`, como `),Jc(222,`code`),Tk(223,`17.0.0-next`),Zg(),Tk(224,`.`),Zg(),Jc(225,`li`)(226,`strong`),Tk(227,`Release Candidate`),Zg(),Tk(228,`: um lançamento com recurso concluído, teste finalizado e sem breaking changes a resolver. Um candidato a lançamento é indicado por uma tag de lançamento anexada ao identificador `),Jc(229,`code`),Tk(230,`-rc`),Zg(),Tk(231,`, como versão `),Jc(232,`code`),Tk(233,`17.0.0-rc`),Zg(),Tk(234,`.`),Zg()(),Jc(235,`p`),Tk(236,`A versão mais recente `),Jc(237,`code`),Tk(238,`next`),Zg(),Tk(239,` ou de pré-lançamento `),Jc(240,`code`),Tk(241,`rc`),Zg(),Tk(242,` fica disponível no `),Jc(243,`a`,13),Tk(244,`npm do projeto`),Zg(),Tk(245,`.`),Zg(),Jc(246,`h2`),Tk(247,`Lançamentos e suporte`),Zg(),Jc(248,`p`),Tk(249,`Para informações sobre o cronograma de lançamentos, janela de suporte (Active/LTS) e política de segurança em versões LTS, consulte o guia `),Jc(250,`a`,14),Tk(251,`Lançamentos e suporte`),Zg(),Tk(252,`.`),Zg()())},dependencies:[Tze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var L=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:60,vars:0,consts:[[`p-title`,`Schematics`,1,`guides`,`app-portal`],[`href`,`https://angular.io/cli`]],template:function(o,s){o&1&&(Jc(0,`po-page-default`,0)(1,`p`),Tk(2,`O PO contém `),Jc(3,`em`),Tk(4,`schematics`),Zg(),Tk(5,` do `),Jc(6,`a`,1),Tk(7,`Angular CLI`),Zg(),Tk(8,` em seu pacote, para facilitar o desenvolvimento de aplicações PO.`),Zg(),Jc(9,`h2`),Tk(10,`Instalando`),Zg(),Jc(11,`p`),Tk(12,`Um vez que for instalado o pacotes, teremos disponível os `),Jc(13,`em`),Tk(14,`schematics`),Zg(),Tk(15,` através do Angular CLI.`),Zg(),Jc(16,`h3`),Tk(17,`PO UI Components`),Zg(),Jc(18,`p`),Tk(19,`Caso esteja iniciando uma aplica\xE7\xE3o com PO, indica-se utilizar o comando abaixo,
no qual ser\xE1 instalado o pacote `),Jc(20,`code`),Tk(21,`@po-ui/ng-components`),Zg(),Tk(22,` e realizadas algumas configurações, que serão descritas em seguida:`),Zg(),Jc(23,`pre`)(24,`code`),Tk(25,`ng add @po-ui/ng-components@next
`),Zg()(),Jc(26,`ul`)(27,`li`),Tk(28,`Substitui o `),Jc(29,`code`),Tk(30,`AppComponent`),Zg(),Tk(31,` com uma estrutura incial de um projeto, utilizando os components `),Jc(32,`code`),Tk(33,`po-page-default`),Zg(),Tk(34,`, `),Jc(35,`code`),Tk(36,`po-toolbar`),Zg(),Tk(37,`, e `),Jc(38,`code`),Tk(39,`po-menu`),Zg(),Tk(40,`;`),Zg(),Jc(41,`li`),Tk(42,`Importa o módulo do PO;`),Zg(),Jc(43,`li`),Tk(44,`Configura o tema do PO no projeto;`),Zg()(),Jc(45,`h3`),Tk(46,`PO UI Templates`),Zg(),Jc(47,`p`),Tk(48,`Para a utiliza\xE7\xE3o de componentes de template o processo para inclus\xE3o \xE9 semelhante.
Primeiramente, deve-se utilizar o comando abaixo, no qual ser\xE1 instalado o pacote `),Jc(49,`code`),Tk(50,`@po-ui/ng-templates`),Zg(),Tk(51,`:`),Zg(),Jc(52,`pre`)(53,`code`),Tk(54,`ng add @po-ui/ng-templates@next
`),Zg()(),Jc(55,`ul`)(56,`li`),Tk(57,`Importa o módulo do PO;`),Zg(),Jc(58,`li`),Tk(59,`Configura o tema do PO no projeto caso não possua;`),Zg()()())},dependencies:[Tze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var _=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:1071,vars:0,consts:[[`p-title`,`Fundamentos do PO Sync`,1,`guides`,`app-portal`],[`href`,`guides/sync-fundamentals#introduction`],[`href`,`guides/sync-fundamentals#knowledge`],[`href`,`guides/sync-fundamentals#schemas`],[`href`,`guides/sync-fundamentals#create-schema`],[`href`,`guides/sync-fundamentals#schematic`],[`href`,`guides/sync-fundamentals#prepare-api`],[`href`,`guides/sync-fundamentals#logical-deletion`],[`href`,`guides/sync-fundamentals#sync-url`],[`href`,`guides/sync-fundamentals#prepare`],[`href`,`guides/sync-fundamentals#periodic`],[`href`,`guides/sync-fundamentals#load-data`],[`href`,`guides/sync-fundamentals#po-entity`],[`href`,`guides/sync-fundamentals#find-data`],[`href`,`guides/sync-fundamentals#save-and-remove`],[`href`,`guides/sync-fundamentals#sync`],[`href`,`guides/sync-fundamentals#advanced-techniques`],[`href`,`guides/sync-fundamentals#on-sync`],[`href`,`guides/sync-fundamentals#po-data-transform`],[`href`,`guides/sync-fundamentals#get-responses`],[`href`,`guides/sync-fundamentals#insert-http-command`],[`href`,`guides/sync-fundamentals#custom-request-id`],[`href`,`guides/sync-fundamentals#schemas-definition`],[`href`,`guides/sync-fundamentals#po-conference`],[`id`,`introduction`],[2,`text-align`,`center`],[`src`,`./assets/graphics/po-sync/event-sourcing.jpg`,1,`po-mt-2`,`po-mb-2`,2,`max-width`,`100%`],[`src`,`./assets/graphics/po-sync/sync-send.jpg`,1,`po-mt-2`,`po-mb-2`,2,`max-width`,`100%`],[`src`,`./assets/graphics/po-sync/sync-get.jpg`,1,`po-mt-2`,`po-mb-2`,2,`max-width`,`100%`],[`href`,`/documentation/po-sync`],[`href`,`guides/sync-get-started`],[`id`,`knowledge`],[`href`,`http://es6-features.org`],[`href`,`http://es6-features.org/#PromiseUsage`],[`href`,`https://ionicframework.com/`],[`href`,`http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html`],[`href`,`https://rxjs-dev.firebaseapp.com/guide/overview`],[`id`,`schemas`],[`id`,`create-schema`],[1,`language-shell`],[1,`language-typescript`],[`id`,`schematic`],[`id`,`prepare-api`],[`id`,`logical-deletion`],[1,`language-javascript`],[`id`,`sync-url`],[`href`,`https://po-sample-conference.onrender.com/conferences/diff/2018-10-08T13:23:31.893Z`],[`href`,`https://po-ui.io/guides/api`],[`id`,`prepare`],[`id`,`periodic`],[`id`,`load-data`],[`id`,`po-entity`],[`href`,`/documentation/po-entity`],[`id`,`find-data`],[`href`,`/documentation/po-query-builder`],[`id`,`save-and-remove`],[`id`,`sync`],[`id`,`advanced-techniques`],[`id`,`on-sync`],[`id`,`po-data-transform`],[`href`,`/documentation/po-data-transform`],[`id`,`get-responses`],[`href`,`/documentation/po-event-sourcing-error-response`],[`id`,`insert-http-command`],[`id`,`custom-request-id`],[`id`,`schemas-definition`],[`id`,`po-conference`],[`href`,`https://github.com/ionic-team/ionic-conference-app`],[`href`,`https://github.com/po-ui/po-sample-conference`]],template:function(o,s){o&1&&(Jc(0,`po-page-default`,0)(1,`h2`),Tk(2,`Conteúdo`),Zg(),Jc(3,`ul`)(4,`li`)(5,`a`,1),Tk(6,`Introdução`),Zg()(),Jc(7,`li`)(8,`a`,2),Tk(9,`Conhecimentos necessários`),Zg()(),Jc(10,`li`)(11,`a`,3)(12,`em`),Tk(13,`Schemas`),Zg()(),Jc(14,`ul`)(15,`li`)(16,`a`,4),Tk(17,`Como criar um `),Jc(18,`em`),Tk(19,`schema`),Zg()()(),Jc(20,`li`)(21,`a`,5),Tk(22,`Schematic`),Zg()()()(),Jc(23,`li`)(24,`a`,6),Tk(25,`Preparando a API para a sincronização`),Zg(),Jc(26,`ul`)(27,`li`)(28,`a`,7),Tk(29,`Exclusão lógica`),Zg()(),Jc(30,`li`)(31,`a`,8)(32,`em`),Tk(33,`Endpoint`),Zg(),Tk(34,` de sincronização`),Zg()()()(),Jc(35,`li`)(36,`a`,9),Tk(37,`Preparando a aplicação`),Zg(),Jc(38,`ul`)(39,`li`)(40,`a`,10),Tk(41,`Sincronização periódica`),Zg()(),Jc(42,`li`)(43,`a`,11),Tk(44,`Carga inicial dos dados`),Zg()()()(),Jc(45,`li`)(46,`a`,12),Tk(47,`Manipulando os registros de um `),Jc(48,`em`),Tk(49,`schema`),Zg()(),Jc(50,`ul`)(51,`li`)(52,`a`,13),Tk(53,`Buscando os registros`),Zg()(),Jc(54,`li`)(55,`a`,14),Tk(56,`Criação, atualização e exclusão de um registro`),Zg()()()(),Jc(57,`li`)(58,`a`,15),Tk(59,`Sincronização manual`),Zg()(),Jc(60,`li`)(61,`a`,16),Tk(62,`Técnicas avançadas`),Zg(),Jc(63,`ul`)(64,`li`)(65,`a`,17),Tk(66,`Notificação pós-sincronização`),Zg()(),Jc(67,`li`)(68,`a`,18),Tk(69,`Adaptando a resposta da API para o padrão do PO UI`),Zg()(),Jc(70,`li`)(71,`a`,19),Tk(72,`Capturando respostas da sincronização`),Zg()(),Jc(73,`li`)(74,`a`,20),Tk(75,`Inserindo requisições HTTP na fila de eventos`),Zg()(),Jc(76,`li`)(77,`a`,21),Tk(78,`Criação de identificador customizado para eventos da fila`),Zg()(),Jc(79,`li`)(80,`a`,22),Tk(81,`Alterando as definições dos `),Jc(82,`em`),Tk(83,`schemas`),Zg()()()()(),Jc(84,`li`)(85,`a`,23),Tk(86,`Aplicativo de demonstração do PO Sync`),Zg()()(),Jc(87,`p`),_u(88,`a`,24),Zg(),Jc(89,`h2`),Tk(90,`Introdução`),Zg(),Jc(91,`p`),Tk(92,`O PO Sync \xE9 uma biblioteca que possibilita armazenar dados na aplica\xE7\xE3o local mantendo a sincroniza\xE7\xE3o entre os dados locais e o servidor.
Permitindo que o usu\xE1rio utilize a aplica\xE7\xE3o tanto `),Jc(93,`em`),Tk(94,`online`),Zg(),Tk(95,` quanto `),Jc(96,`em`),Tk(97,`offline`),Zg(),Tk(98,`, com a mesma experiência de uso.`),Zg(),Jc(99,`h3`),Tk(100,`Como o PO Sync mantém os dados atualizados com o servidor?`),Zg(),Jc(101,`p`),Tk(102,`Todas as modifica\xE7\xF5es nos registros como criar, alterar e excluir acontecem primeiramente no armazenamento local.
Para cada modifica\xE7\xE3o feita em um registro tamb\xE9m \xE9 criado um evento. Este evento representa uma opera\xE7\xE3o, sendo
composto basicamente pelo tipo de opera\xE7\xE3o (cria\xE7\xE3o, altera\xE7\xE3o ou remo\xE7\xE3o) e o registro modificado.
Este evento \xE9 adicionado a uma fila de eventos que ser\xE1 consumida pelo processo de sincroniza\xE7\xE3o (atualiza\xE7\xE3o dos dados).
Este processo \xE9 demonstrado na figura a seguir:`),Zg(),Jc(103,`p`,25),_u(104,`img`,26),Zg(),Jc(105,`p`),Tk(106,`É no processo de sincronização que os dados são atualizados tanto da aplicação local para o servidor quanto do servidor para a aplicação local.`),Zg(),Jc(107,`blockquote`)(108,`p`),Tk(109,`A sincronização sempre acontece com a aplicação `),Jc(110,`em`),Tk(111,`online`),Zg(),Tk(112,` e em segundo plano, permitindo que o usuário continue utilizando a aplicação normalmente.`),Zg()(),Jc(113,`h4`),Tk(114,`Como ocorre a sincronização?`),Zg(),Jc(115,`p`),Tk(116,`A sincronização dos dados acontece em duas etapas:`),Zg(),Jc(117,`p`)(118,`strong`),Tk(119,`1)`),Zg(),Tk(120,` Busca os itens da fila de eventos e envia os dados modificados da aplicação local para o servidor sequencialmente:`),Zg(),Jc(121,`p`,25),_u(122,`img`,27),Zg(),Jc(123,`p`)(124,`strong`),Tk(125,`2)`),Zg(),Tk(126,` Busca os dados que foram modificados no servidor e atualiza na aplicação local:`),Zg(),Jc(127,`p`,25),_u(128,`img`,28),Zg(),Jc(129,`p`),Tk(130,`Esta sincronização pode ser acionada (gatilho) das seguintes formas:`),Zg(),Jc(131,`ul`)(132,`li`)(133,`p`),Tk(134,`Reativa: toda vez que houver alguma mudança no hardware do dispositivo, como na troca do tipo de rede 4G para WI-FI;`),Zg()(),Jc(135,`li`)(136,`p`)(137,`a`,10),Tk(138,`Periódica`),Zg(),Tk(139,`: será acionada periodicamente baseada nos parâmetros de configurações do `),Jc(140,`a`,29),Tk(141,`PoSyncConfig`),Zg(),Tk(142,`;`),Zg()(),Jc(143,`li`)(144,`p`)(145,`a`,15),Tk(146,`Manualmente`),Zg(),Tk(147,`: será acionada na chamada manual do método `),Jc(148,`code`),Tk(149,`PoSyncService.sync()`),Zg(),Tk(150,`.`),Zg()()(),Jc(151,`blockquote`)(152,`p`),Tk(153,`Antes de continuar os próximos passos, siga as instruções do `),Jc(154,`a`,30),Tk(155,`Começando com o PO Sync`),Zg(),Tk(156,` para
saber como criar um novo projeto com Ionic 7 utilizando o PO Sync.`),Zg()(),Jc(157,`p`),_u(158,`a`,31),Zg(),Jc(159,`h2`),Tk(160,`Conhecimentos necessários`),Zg(),Jc(161,`p`),Tk(162,`Para compreender o funcionamento do PO Sync e utilizá-lo é necessário ter conhecimento técnico em:`),Zg(),Jc(163,`ul`)(164,`li`)(165,`a`,32),Tk(166,`JavaScript (ES6)`),Zg(),Tk(167,`, em particular a utilização do padrão `),Jc(168,`a`,33)(169,`em`),Tk(170,`Promises`),Zg()(),Tk(171,`;`),Zg(),Jc(172,`li`)(173,`a`,34),Tk(174,`Ionic`),Zg(),Tk(175,`;`),Zg(),Jc(176,`li`)(177,`a`,35),Tk(178,`Observable`),Zg(),Tk(179,` do `),Jc(180,`a`,36),Tk(181,`RxJS`),Zg(),Tk(182,`;`),Zg(),Jc(183,`li`),Tk(184,`Protocolo de comunicação HTTP;`),Zg(),Jc(185,`li`),Tk(186,`Arquitetura REST.`),Zg()(),Jc(187,`p`),_u(188,`a`,37),Zg(),Jc(189,`h2`)(190,`em`),Tk(191,`Schemas`),Zg()(),Jc(192,`p`),Tk(193,`O PO Sync sincroniza os dados com base em um conjunto de `),Jc(194,`em`),Tk(195,`schemas`),Zg(),Tk(196,`. Onde cada `),Jc(197,`em`),Tk(198,`schema`),Zg(),Tk(199,` representa um modelo de dados,
ou seja, a estrutura l\xF3gica e as caracter\xEDsticas de um conjunto de registros. Sendo semelhante a uma tabela
convencional de um banco de dados, como por exemplo uma tabela de clientes, produtos ou autom\xF3veis. No entanto os `),Jc(200,`em`),Tk(201,`schemas`),Zg(),Tk(202,`
n\xE3o possuem relacionamentos entre si como as tabelas convencionais.`),Zg(),Jc(203,`p`),_u(204,`a`,38),Zg(),Jc(205,`h3`),Tk(206,`Como criar um `),Jc(207,`em`),Tk(208,`schema`),Zg()(),Jc(209,`p`),Tk(210,`Cada `),Jc(211,`em`),Tk(212,`schema`),Zg(),Tk(213,` deve implementar a interface `),Jc(214,`a`,29),Tk(215,`PoSyncSchema`),Zg(),Tk(216,`. Para criar um `),Jc(217,`em`),Tk(218,`schema`),Zg(),Tk(219,` que represente uma "Confer\xEAncia"
podemos fazer:`),Zg(),Jc(220,`pre`)(221,`code`,39),Tk(222,`ng generate @po-ui/ng-sync:schema --name=conference
`),Zg()(),Jc(223,`p`),Tk(224,`O comando ng generate do Angular CLI criará um arquivo com uma estrutura semelhante a essa:`),Zg(),Jc(225,`pre`)(226,`code`,40),Tk(227,`import { PoSyncSchema } from '@po-ui/ng-sync';

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
`),Zg()(),Jc(228,`p`),Tk(229,`Nesta definição de `),Jc(230,`em`),Tk(231,`schema`),Zg(),Tk(232,` podem ser configurados os `),Jc(233,`em`),Tk(234,`endpoints`),Zg(),Tk(235,` para os m\xE9todos HTTP: GET, POST, DELETE e PATCH,
sendo somente o `),Jc(236,`em`),Tk(237,`endpoint`),Zg(),Tk(238,` do m\xE9todo GET obrigat\xF3rio. Caso os demais n\xE3o sejam informados, ser\xE1 utilizado o mesmo endere\xE7o
do `),Jc(239,`em`),Tk(240,`endpoint`),Zg(),Tk(241,` do método GET para os outros métodos.`),Zg(),Jc(242,`p`),Tk(243,`A propriedade `),Jc(244,`code`),Tk(245,`fields`),Zg(),Tk(246,` da interface `),Jc(247,`a`,29),Tk(248,`PoSyncSchema`),Zg(),Tk(249,` representa os campos que estar\xE3o no registro.
Por exemplo, para um `),Jc(250,`em`),Tk(251,`schema`),Zg(),Tk(252,` do tipo Pessoa, poderíamos ter os campos: nome, idade e endereço.`),Zg(),Jc(253,`p`),Tk(254,`N\xE3o necessariamente precisam ser representados todos os campos retornados pela API, somente os necess\xE1rios para as
manipula\xE7\xF5es atrav\xE9s do PO Sync.`),Zg(),Jc(255,`p`),_u(256,`a`,41),Zg(),Jc(257,`h3`),Tk(258,`Schematic`),Zg(),Jc(259,`p`),Tk(260,`Você pode utilizar um schematic para criar o arquivo com a estrutura básica do schema.`),Zg(),Jc(261,`p`),Tk(262,`Para isso utilize o comando`),Zg(),Jc(263,`pre`)(264,`code`,39),Tk(265,`ng generate @po-ui/ng-sync:schema
`),Zg()(),Jc(266,`p`),Tk(267,`Você também pode informar um caminho completo.`),Zg(),Jc(268,`pre`)(269,`code`,39),Tk(270,`ng generate @po-ui/ng-sync:schema --name=conference/schema/conference
`),Zg()(),Jc(271,`p`),Tk(272,`Ou apenas o nome do schema que ele criará o arquivo na pasta que o comando for executado.`),Zg(),Jc(273,`pre`)(274,`code`,39),Tk(275,`ng generate @po-ui/ng-sync:schema --name=conference
`),Zg()(),Jc(276,`p`),_u(277,`a`,42),Zg(),Jc(278,`h2`),Tk(279,`Preparando a API para a sincronização`),Zg(),Jc(280,`p`),Tk(281,`Para que a sincronização aconteça corretamente é necessário que a API tenha implementado a `),Jc(282,`a`,7),Tk(283,`exclusão lógica`),Zg(),Tk(284,` e um `),Jc(285,`a`,8)(286,`em`),Tk(287,`endpoint`),Zg(),Tk(288,` de sincronização`),Zg(),Tk(289,`.`),Zg(),Jc(290,`p`),_u(291,`a`,43),Zg(),Jc(292,`h3`),Tk(293,`Exclusão lógica`),Zg(),Jc(294,`p`),Tk(295,`A exclus\xE3o dos registros na API dever\xE1 ser feita de forma l\xF3gica, ou seja, \xE9 necess\xE1rio que cada registro contenha um
campo que representa se aquele registro foi exclu\xEDdo, por exemplo:`),Zg(),Jc(296,`pre`)(297,`code`,44),Tk(298,`{
  "id": 1,
  "title": "PO conference 2018",
  "date": "2018-08-11T00:00:00Z",
  "location": "Av. Santos Dumont, 831 - Santo Ant\xF4nio, Joinville - SC",
  "description": "Conference organized by PO",
  // Campo informando se o registro foi exclu\xEDdo
  "isDeleted": false
}
`),Zg()(),Jc(299,`p`),Tk(300,`No registro acima o campo chamado `),Jc(301,`code`),Tk(302,`isDeleted`),Zg(),Tk(303,` descreve se ele foi excluído ou não.`),Zg(),Jc(304,`p`),Tk(305,`Esta informação do campo deverá ser fornecida ao PO Sync dentro da declaração de cada `),Jc(306,`em`),Tk(307,`schema`),Zg(),Tk(308,`, para isso temos a
propriedade `),Jc(309,`code`),Tk(310,`deletedField`),Zg(),Tk(311,` na interface `),Jc(312,`a`,29),Tk(313,`PoSyncSchema`),Zg(),Tk(314,`, por exemplo:`),Zg(),Jc(315,`pre`)(316,`code`,40),Tk(317,`import { PoSyncSchema } from '@po-ui/ng-sync';

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
`),Zg()(),Jc(318,`h4`),Tk(319,`Porque exclusão lógica?`),Zg(),Jc(320,`p`),Tk(321,`A exclusão lógica é utilizada para que outras aplicações possam saber se um registro foi removido.`),Zg(),Jc(322,`p`),Tk(323,`Imagine que dois aplicativos estejam manipulando o mesmo registro através de um `),Jc(324,`em`),Tk(325,`endpoint`),Zg(),Tk(326,`. Um dos aplicativos remove
este registro, como o outro aplicativo saber\xE1 que este registro foi removido? Atrav\xE9s da exclus\xE3o l\xF3gica, o PO Sync
tem o controle dessa informa\xE7\xE3o.`),Zg(),Jc(327,`p`),_u(328,`a`,45),Zg(),Jc(329,`h3`)(330,`em`),Tk(331,`Endpoint`),Zg(),Tk(332,` de sincronização`),Zg(),Jc(333,`p`),Tk(334,`Sempre que houver uma sincronização, uma requisição é feita neste `),Jc(335,`em`),Tk(336,`endpoint`),Zg(),Tk(337,` utilizando a data da \xFAltima sincroniza\xE7\xE3o
como refer\xEAncia (como par\xE2metro da URL). Ao receber esta data, o `),Jc(338,`em`),Tk(339,`endpoint`),Zg(),Tk(340,` deve retornar todos os registros que
tiveram a \xFAltima atualiza\xE7\xE3o maior ou igual a data que foi recebida como par\xE2metro, logo, somente os dados n\xE3o
sincronizados ser\xE3o retornados. Para cada um dos `),Jc(341,`em`),Tk(342,`schemas`),Zg(),Tk(343,` é necessário ter um `),Jc(344,`em`),Tk(345,`endpoint`),Zg(),Tk(346,` de sincronização.`),Zg(),Jc(347,`p`),Tk(348,`Abra o seu navegador e acesse a URL
`),Jc(349,`a`,46),Tk(350,`https://po-sample-conference.onrender.com/conferences/diff/2018-10-08T13:23:31.893Z`),Zg(),Tk(351,`.`),Zg(),Jc(352,`p`),Tk(353,`O `),Jc(354,`em`),Tk(355,`endpoint`),Zg(),Tk(356,` de sincronização deve retornar uma resposta com a estrutura como a da URL acima, por exemplo:`),Zg(),Jc(357,`pre`)(358,`code`,44),Tk(359,`{
  "hasNext": false,
  "items": [],
  "po_sync_date": "2018-10-08T13:57:55.008Z"
}
`),Zg()(),Jc(360,`p`),Tk(361,`Onde:`),Zg(),Jc(362,`ul`)(363,`li`)(364,`code`),Tk(365,`hasNext`),Zg(),Tk(366,`: Indica se existe uma próxima página com mais registros para aquela coleção de itens.`),Zg(),Jc(367,`li`)(368,`code`),Tk(369,`items`),Zg(),Tk(370,`: Lista de itens retornados.`),Zg(),Jc(371,`li`)(372,`code`),Tk(373,`po_sync_date`),Zg(),Tk(374,`: Data da \xFAltima sincroniza\xE7\xE3o. Ao realizar esta requisi\xE7\xE3o estamos solicitando uma
sincroniza\xE7\xE3o, ent\xE3o esta data deve ser a data em que o servidor est\xE1 devolvendo a resposta. Se na requisi\xE7\xE3o o `),Jc(375,`em`),Tk(376,`endpoint`),Zg(),Tk(377,`
n\xE3o enviar esta data, n\xE3o ser\xE1 poss\xEDvel fazer a pr\xF3xima sincroniza\xE7\xE3o, pois esta data ser\xE1 utilizada
para a pr\xF3xima URL de sincroniza\xE7\xE3o.`),Zg()(),Jc(378,`blockquote`)(379,`p`),Tk(380,`Esta estrutura de resposta é padronizada pelo `),Jc(381,`a`,47),Tk(382,`Guia de implementação de APIs`),Zg(),Tk(383,`.`),Zg()(),Jc(384,`blockquote`)(385,`p`)(386,`strong`),Tk(387,`Primeira sincronização:`),Zg(),Tk(388,` como na primeira sincronização o PO Sync ainda não recebeu nenhuma data dos `),Jc(389,`em`),Tk(390,`endpoints`),Zg(),Tk(391,`, a URL \xE9 montada com uma data muito
antiga, o que faz com que todos os dados sejam retornados na primeira sincroniza\xE7\xE3o.`),Zg()(),Jc(392,`p`),Tk(393,`A definição deste `),Jc(394,`em`),Tk(395,`endpoint`),Zg(),Tk(396,` deve ser feita na propriedade `),Jc(397,`code`),Tk(398,`diffUrlApi`),Zg(),Tk(399,` da sua definição do `),Jc(400,`em`),Tk(401,`schema`),Zg(),Tk(402,`, como no exemplo
abaixo:`),Zg(),Jc(403,`pre`)(404,`code`,40),Tk(405,`import { PoSyncSchema } from '@po-ui/ng-sync';

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
`),Zg()(),Jc(406,`p`),_u(407,`a`,48),Zg(),Jc(408,`h2`),Tk(409,`Preparando a aplicação`),Zg(),Jc(410,`p`),Tk(411,`Após ter criado os `),Jc(412,`em`),Tk(413,`schemas`),Zg(),Tk(414,` e preparado a API, \xE9 necess\xE1rio preparar a aplica\xE7\xE3o para utilizar o PO Sync passando para
ele os `),Jc(415,`em`),Tk(416,`schemas`),Zg(),Tk(417,` e as configurações iniciais. Se você seguiu o guia `),Jc(418,`a`,30),Tk(419,`Começando com o PO Sync`),Zg(),Tk(420,`,
dentro do arquivo `),Jc(421,`code`),Tk(422,`src/app/app.component.ts`),Zg(),Tk(423,`, no método `),Jc(424,`code`),Tk(425,`initSync()`),Zg(),Tk(426,` foi feita a seguinte implementação:`),Zg(),Jc(427,`pre`)(428,`code`,40),Tk(429,`const config: PoSyncConfig = {
  type: PoNetworkType.ethernet
};
const schemas = [conferenceSchema];

this.poSync.prepare(schemas, config).then(() => {
  this.poSync.sync();
  ...
});
`),Zg()(),Jc(430,`p`),Tk(431,`A variável `),Jc(432,`code`),Tk(433,`config`),Zg(),Tk(434,` implementa a interface `),Jc(435,`a`,29),Tk(436,`PoSyncConfig`),Zg(),Tk(437,` e representa as configura\xE7\xF5es iniciais de sincroniza\xE7\xE3o. Neste
exemplo, a propriedade `),Jc(438,`code`),Tk(439,`type`),Zg(),Tk(440,` descreve o tipo de conex\xE3o que ir\xE1 permitir que aconte\xE7a o sincronismo. Ao terminar de
preparar a aplica\xE7\xE3o os dados estar\xE3o dispon\xEDveis para serem sincronizados do servidor para a aplica\xE7\xE3o local. Por esta raz\xE3o,
ap\xF3s a conclus\xE3o da promessa deste m\xE9todo, o `),Jc(441,`code`),Tk(442,`poSync.sync()`),Zg(),Tk(443,` pode ser chamado para sincronizar os dados.`),Zg(),Jc(444,`p`),_u(445,`a`,49),Zg(),Jc(446,`h3`),Tk(447,`Sincronização periódica`),Zg(),Jc(448,`p`),Tk(449,`Para que os dados sejam atualizados dentro de um período de tempo, modifique a constante `),Jc(450,`code`),Tk(451,`config`),Zg(),Tk(452,` do exemplo
anterior para ficar da seguinte forma:`),Zg(),Jc(453,`pre`)(454,`code`,40),Tk(455,`const config: PoSyncConfig = {
  type: PoNetworkType.ethernet,
  // Linha adicionada
  period: 30
};

const schemas = [conferenceSchema];

this.poSync.prepare(schemas, config).then(() => {
  this.poSync.sync();
  ...
});
`),Zg()(),Jc(456,`p`),Tk(457,`Onde o valor da propriedade `),Jc(458,`code`),Tk(459,`period`),Zg(),Tk(460,` define que o sincronismo deverá ser ativado a cada 30 segundos.`),Zg(),Jc(461,`p`),_u(462,`a`,50),Zg(),Jc(463,`h3`),Tk(464,`Carga inicial dos dados`),Zg(),Jc(465,`p`),Tk(466,`Caso queira fazer a carga inicial dos dados que estão no servidor antes de fazer o primeiro sincronismo, o serviço `),Jc(467,`a`,29),Tk(468,`PoSyncService`),Zg(),Tk(469,`
disponibiliza um m\xE9todo chamado `),Jc(470,`code`),Tk(471,`PoSyncService.loadData()`),Zg(),Tk(472,`.`),Zg(),Jc(473,`blockquote`)(474,`p`)(475,`strong`),Tk(476,`Atenção:`),Zg(),Tk(477,` este método deve ser chamado apenas uma vez para carregar os dados iniciais e antes do primeiro sincronismo.`),Zg()(),Jc(478,`p`),Tk(479,`Para implementar a carga inicial no código anterior, basta substituir a linha onde estava `),Jc(480,`code`),Tk(481,`this.poSync.sync();`),Zg(),Tk(482,` pela
seguinte implementa\xE7\xE3o:`),Zg(),Jc(483,`pre`)(484,`code`,40),Tk(485,`const config: PoSyncConfig = {
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
`),Zg()(),Jc(486,`p`),Tk(487,`Onde `),Jc(488,`code`),Tk(489,`<condicao>`),Zg(),Tk(490,` deve ser substitu\xEDda por uma valida\xE7\xE3o que verifique se \xE9 a primeira vez em que os dados est\xE3o sendo
carregados na aplica\xE7\xE3o, como por exemplo na instala\xE7\xE3o do aplicativo.`),Zg(),Jc(491,`p`),_u(492,`a`,51),Zg(),Jc(493,`h2`),Tk(494,`Manipulando os registros de um `),Jc(495,`em`),Tk(496,`schema`),Zg()(),Jc(497,`p`),Tk(498,`Toda a manipulação dos registros de um `),Jc(499,`em`),Tk(500,`schema`),Zg(),Tk(501,` como salvar, remover e buscar \xE9 feita atrav\xE9s da inst\xE2ncia da classe
`),Jc(502,`a`,52),Tk(503,`PoEntity`),Zg(),Tk(504,` que pode ser obtida a partir do método `),Jc(505,`code`),Tk(506,`PoSyncService.getModel()`),Zg(),Tk(507,`, por exemplo:`),Zg(),Jc(508,`pre`)(509,`code`,40),Tk(510,`this.conferenceModel = await this.poSync.getModel('conference');
`),Zg()(),Jc(511,`p`),Tk(512,`Onde o parâmetro "conference" representa o nome do `),Jc(513,`em`),Tk(514,`schema`),Zg(),Tk(515,` que se deseja manipular.
Este \xE9 o mesmo valor colocado na propriedade `),Jc(516,`code`),Tk(517,`name`),Zg(),Tk(518,` da interface `),Jc(519,`a`,29),Tk(520,`PoSyncSchema`),Zg(),Tk(521,`.`),Zg(),Jc(522,`p`),Tk(523,`Agora com esta instância podemos utilizar todos os métodos do `),Jc(524,`a`,52),Tk(525,`PoEntity`),Zg(),Tk(526,` para manipular os registros.`),Zg(),Jc(527,`p`),_u(528,`a`,53),Zg(),Jc(529,`h3`),Tk(530,`Buscando os registros`),Zg(),Jc(531,`blockquote`)(532,`p`),Tk(533,`A busca dos registros sempre é feita na aplicação local, pois a mesma é atualizada com o servidor através do processo de sincronização.`),Zg()(),Jc(534,`p`),Tk(535,`Com a instância de `),Jc(536,`a`,52),Tk(537,`PoEntity`),Zg(),Tk(538,` armazenada na propriedade `),Jc(539,`code`),Tk(540,`this.conferenceModel`),Zg(),Tk(541,` podemos buscar
os registros com o `),Jc(542,`code`),Tk(543,`PoEntity.find()`),Zg(),Tk(544,` da seguinte forma:`),Zg(),Jc(545,`pre`)(546,`code`,40),Tk(547,`this.conferences = await this.conferenceModel.find().exec();
`),Zg()(),Jc(548,`p`),Tk(549,`Podemos notar que após usar o método, foi necessário concatená-lo com o método `),Jc(550,`code`),Tk(551,`PoQueryBuilder.exec()`),Zg(),Tk(552,`
para que a busca pudesse ser conclu\xEDda e os registros serem retornados.`),Zg(),Jc(553,`p`),Tk(554,`Isso acontece porque o método `),Jc(555,`code`),Tk(556,`PoEntity.find()`),Zg(),Tk(557,` retorna uma instância da classe `),Jc(558,`a`,54),Tk(559,`PoQueryBuilder`),Zg(),Tk(560,` e todos os m\xE9todos
desta classe podem ser encadeados e no final chamar o m\xE9todo `),Jc(561,`code`),Tk(562,`PoQueryBuilder.exec()`),Zg(),Tk(563,` para concluir a busca.`),Zg(),Jc(564,`p`),Tk(565,`Por exemplo, para buscar os dados e ordená-los pelo campo do `),Jc(566,`em`),Tk(567,`schema`),Zg(),Tk(568,` chamado `),Jc(569,`code`),Tk(570,`title`),Zg(),Tk(571,`, podemos fazer:`),Zg(),Jc(572,`pre`)(573,`code`,40),Tk(574,`this.conferences = await this.conferenceModel.find().sort('title').exec();
`),Zg()(),Jc(575,`p`),Tk(576,`E se quisermos retornar somente os campos `),Jc(577,`code`),Tk(578,`title`),Zg(),Tk(579,` e `),Jc(580,`code`),Tk(581,`location`),Zg(),Tk(582,`, podemos fazer:`),Zg(),Jc(583,`pre`)(584,`code`,40),Tk(585,`this.conferences = await this.conferenceModel.find().sort('title').select('title location').exec();
`),Zg()(),Jc(586,`blockquote`)(587,`p`),Tk(588,`Para saber mais sobre os métodos para construção de consultas, acesse `),Jc(589,`a`,54),Tk(590,`PoQueryBuilder`),Zg(),Tk(591,`.`),Zg()(),Jc(592,`p`),_u(593,`a`,55),Zg(),Jc(594,`h3`),Tk(595,`Criação, atualização e exclusão de um registro`),Zg(),Jc(596,`p`),Tk(597,`Ainda com a instância de `),Jc(598,`a`,52),Tk(599,`PoEntity`),Zg(),Tk(600,` podemos utilizar o método `),Jc(601,`code`),Tk(602,`PoEntity.save()`),Zg(),Tk(603,` para criar um
novo registro. Portanto para criar uma nova confer\xEAncia no nosso exemplo, podemos fazer:`),Zg(),Jc(604,`pre`)(605,`code`,40),Tk(606,`const conference = { title: 'BrasilJS', location: 'Barra Shopping Sul - Porto Alegre, RS - Brasil' };

this.conferenceModel.save(conference).then(() => {
  // Confer\xEAncia criada!
});
`),Zg()(),Jc(607,`p`),Tk(608,`E para atualizar a conferência, é necessário ter o registro buscado através do `),Jc(609,`a`,52),Tk(610,`PoEntity`),Zg(),Tk(611,`,
pois este registro dever\xE1 conter o `),Jc(612,`em`),Tk(613,`id`),Zg(),Tk(614,` depois que for salvo.`),Zg(),Jc(615,`p`),Tk(616,`Por exemplo, para buscarmos e atualizarmos a conferência que criamos acima, podemos fazer:`),Zg(),Jc(617,`p`)(618,`strong`),Tk(619,`1)`),Zg(),Tk(620,` Buscar a conferência pelo título "BrasilJS":`),Zg(),Jc(621,`pre`)(622,`code`,40),Tk(623,`const conferenceUpdated = await this.conferenceModel.find().filter({ title: 'BrasilJS' }).exec();
`),Zg()(),Jc(624,`p`)(625,`strong`),Tk(626,`2)`),Zg(),Tk(627,` Podemos atualizar a localização, por exemplo:`),Zg(),Jc(628,`pre`)(629,`code`,40),Tk(630,`conferenceUpdated.location = 'UFRGS - Porto Alegre, RS - Brasil';
`),Zg()(),Jc(631,`p`)(632,`strong`),Tk(633,`3)`),Zg(),Tk(634,` Utilizamos o método `),Jc(635,`code`),Tk(636,`PoEntity.save()`),Zg(),Tk(637,` para efetuar a atualização:`),Zg(),Jc(638,`pre`)(639,`code`,40),Tk(640,`this.conferenceModel.save(conferenceUpdated).then(() => {
  // Confer\xEAncia atualizada!
});
`),Zg()(),Jc(641,`p`),Tk(642,`Para excluir um registro também é necessário buscá-lo através do `),Jc(643,`a`,52),Tk(644,`PoEntity`),Zg(),Tk(645,`
como na atualiza\xE7\xE3o e ap\xF3s esta busca utilizar o m\xE9todo `),Jc(646,`code`),Tk(647,`PoEntity.remove()`),Zg(),Tk(648,` para remover o registro, por exemplo:`),Zg(),Jc(649,`pre`)(650,`code`,40),Tk(651,`const conferenceRemove = await this.conferenceModel.find().filter({ title: 'BrasilJS' }).exec();

this.conferenceModel.remove(conferenceRemove).then(() => {
  // Confer\xEAncia removida!
});
`),Zg()(),Jc(652,`p`),_u(653,`a`,56),Zg(),Jc(654,`h2`),Tk(655,`Sincronização manual`),Zg(),Jc(656,`p`),Tk(657,`Existem casos onde o usu\xE1rio do aplicativo deseja ativar manualmente a sincroniza\xE7\xE3o, como por exemplo apertando um
bot\xE3o para atualizar os dados.`),Zg(),Jc(658,`p`),Tk(659,`Esta operação pode ser feita através do método `),Jc(660,`code`),Tk(661,`PoSyncService.sync()`),Zg(),Tk(662,`. Por exemplo:`),Zg(),Jc(663,`pre`)(664,`code`,40),Tk(665,`this.poSync.sync().then(() => {
  // Sincroniza\xE7\xE3o conclu\xEDda
}).catch(() => {
  // Erro durante a sincroniza\xE7\xE3o
});
`),Zg()(),Jc(666,`p`),_u(667,`a`,57),Zg(),Jc(668,`h2`),Tk(669,`Técnicas avançadas`),Zg(),Jc(670,`p`),_u(671,`a`,58),Zg(),Jc(672,`h3`),Tk(673,`Notificação pós-sincronização`),Zg(),Jc(674,`p`),Tk(675,`Em algumas situa\xE7\xF5es, \xE9 necess\xE1rio ser notificado sempre que uma sincroniza\xE7\xE3o acontecer para, por exemplo, atualizar a tela do usu\xE1rio com os dados sincronizados. Para isso, se inscreva atrav\xE9s do m\xE9todo
`),Jc(676,`code`),Tk(677,`PoSyncService.onSync()`),Zg(),Tk(678,` que irá notificá-lo sempre que uma sincronização acontecer com sucesso.`),Zg(),Jc(679,`p`),Tk(680,`Por exemplo, no guia `),Jc(681,`a`,30),Tk(682,`Começando com o PO Sync`),Zg(),Tk(683,` temos a utiliza\xE7\xE3o do m\xE9todo
`),Jc(684,`code`),Tk(685,`PoSyncService.onSync()`),Zg(),Tk(686,` dentro do `),Jc(687,`code`),Tk(688,`constructor()`),Zg(),Tk(689,`, localizado no arquivo `),Jc(690,`code`),Tk(691,`src/pages/home/home.ts`),Zg(),Tk(692,`:`),Zg(),Jc(693,`pre`)(694,`code`,40),Tk(695,`constructor(public navCtrl: NavController, private poSync: PoSyncService) {
  // Deve chamar o m\xE9todo loadHomePage() sempre que acontecer uma sincroniza\xE7\xE3o
  this.poSync.onSync().subscribe(() => this.loadHomePage());
}

async loadHomePage() {
  this.conference = await this.poSync.getModel('conference').findOne().exec();
}
`),Zg()(),Jc(696,`blockquote`)(697,`p`),Tk(698,`Para saber mais sobre este método acesse `),Jc(699,`a`,29),Tk(700,`PoSyncService.onSync()`),Zg(),Tk(701,`.`),Zg()(),Jc(702,`p`),_u(703,`a`,59),Zg(),Jc(704,`h3`),Tk(705,`Adaptando a resposta da API para o padrão do PO`),Zg(),Jc(706,`p`),Tk(707,`O PO Sync necessita que as APIs utilizem o padrão de respostas que está no `),Jc(708,`a`,47),Tk(709,`Guia de implementação de APIs`),Zg(),Tk(710,` que segue a seguinte estrutura:`),Zg(),Jc(711,`pre`)(712,`code`,44),Tk(713,`{
  "hasNext": boolean,
  "items": [],
  "po_sync_date": date
}
`),Zg()(),Jc(714,`p`),Tk(715,`No entanto, existem APIs que ainda não seguem este padrão. Imagine que você possua uma API que sempre retorne a seguinte estrutura:`),Zg(),Jc(716,`pre`)(717,`code`,40),Tk(718,`{
  "next": string,
  "data": [],
  "sync_date": date
}
`),Zg()(),Jc(719,`p`),Tk(720,`Onde:`),Zg(),Jc(721,`ul`)(722,`li`)(723,`code`),Tk(724,`next`),Zg(),Tk(725,`: é a URL da próxima página. Por exemplo: `),Jc(726,`code`),Tk(727,`https://<url>?page=3`),Zg(),Tk(728,`;`),Zg(),Jc(729,`li`)(730,`code`),Tk(731,`data`),Zg(),Tk(732,`: lista de itens retornados;`),Zg(),Jc(733,`li`)(734,`code`),Tk(735,`sync_date`),Zg(),Tk(736,`: data da última sincronização.`),Zg()(),Jc(737,`p`),Tk(738,`E a API espera para paginação os seguintes parâmetros na URL:`),Zg(),Jc(739,`ul`)(740,`li`)(741,`code`),Tk(742,`pageNumber`),Zg(),Tk(743,`: indica o número da página;`),Zg(),Jc(744,`li`)(745,`code`),Tk(746,`size`),Zg(),Tk(747,`: quantidade de itens por página.`),Zg()(),Jc(748,`p`),Tk(749,`Por exemplo:`),Zg(),Jc(750,`pre`)(751,`code`),Tk(752,`http://<url>/?pageNumber=2&size=10
`),Zg()(),Jc(753,`p`),Tk(754,`É possível fazer a adaptação desta resposta utilizando a classe `),Jc(755,`a`,60),Tk(756,`PoDataTransform`),Zg(),Tk(757,`.
Esta classe possui uma propriedade chamada `),Jc(758,`code`),Tk(759,`data`),Zg(),Tk(760,` que representa a resposta que o `),Jc(761,`em`),Tk(762,`endpoint`),Zg(),Tk(763,` retornou.`),Zg(),Jc(764,`p`),Tk(765,`Para fazer a adaptação desta estrutura de resposta:`),Zg(),Jc(766,`p`)(767,`strong`),Tk(768,`1)`),Zg(),Tk(769,` Crie uma nova classe e a faça herdar a classe `),Jc(770,`a`,60),Tk(771,`PoDataTransform`),Zg(),Tk(772,`:`),Zg(),Jc(773,`pre`)(774,`code`,40),Tk(775,`import { PoDataTransform } from '@po-ui/ng-sync';

class MyDataTransform extends PoDataTransform {
  ...
}
`),Zg()(),Jc(776,`p`)(777,`strong`),Tk(778,`2)`),Zg(),Tk(779,` Implemente os métodos da classe `),Jc(780,`a`,60),Tk(781,`PoDataTransform`),Zg(),Tk(782,`:`),Zg(),Jc(783,`pre`)(784,`code`,40),Tk(785,`import { PoDataTransform } from '@po-ui/ng-sync';

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
`),Zg()(),Jc(786,`p`),Tk(787,`Os primeiros quatro m\xE9todos representam os nomes que ir\xE3o corresponder a cada par\xE2metro. No nosso exemplo, a cole\xE7\xE3o de
registros n\xE3o est\xE1 em uma propriedade `),Jc(788,`code`),Tk(789,`items`),Zg(),Tk(790,` conforme o padrão PO UI, mas sim em `),Jc(791,`code`),Tk(792,`data`),Zg(),Tk(793,`, ent\xE3o no m\xE9todo
`),Jc(794,`code`),Tk(795,`MyDataTransform.getItemsFieldName()`),Zg(),Tk(796,` será retornado o valor `),Jc(797,`code`),Tk(798,`data`),Zg(),Tk(799,`.`),Zg(),Jc(800,`p`),Tk(801,`O método `),Jc(802,`code`),Tk(803,`MyDataTransform.hasNext()`),Zg(),Tk(804,` deve retornar um valor `),Jc(805,`em`),Tk(806,`booleano`),Zg(),Tk(807,` que determina se existe mais p\xE1ginas para serem
buscadas ou n\xE3o. No nosso exemplo podemos acessar a pr\xF3xima p\xE1gina com a propriedade `),Jc(808,`code`),Tk(809,`next`),Zg(),Tk(810,`.
Como temos acesso a resposta da API atrav\xE9s da propriedade `),Jc(811,`code`),Tk(812,`data`),Zg(),Tk(813,`, podemos saber se existe uma próxima página do seguinte modo:`),Zg(),Jc(814,`pre`)(815,`code`,40),Tk(816,`hasNext(): boolean {
  return !!this.data.next;
}
`),Zg()(),Jc(817,`p`)(818,`strong`),Tk(819,`3)`),Zg(),Tk(820,` Por fim, deve ser criado uma instância desta classe `),Jc(821,`code`),Tk(822,`MyDataTransform`),Zg(),Tk(823,` e incluí-la na propriedade do objeto `),Jc(824,`code`),Tk(825,`PoSyncConfig`),Zg(),Tk(826,`
que \xE9 inserido no m\xE9todo `),Jc(827,`code`),Tk(828,`PoSyncService.prepare()`),Zg(),Tk(829,`, da seguinte forma:`),Zg(),Jc(830,`pre`)(831,`code`,40),Tk(832,`const config: PoSyncConfig = {
  type: PoNetworkType.ethernet,
  period: 30,
  // Inst\xE2ncia da classe MyDataTransform
  dataTransform: new MyDataTransform()
};

const schemas = [conferenceSchema];

this.poSync.prepare(schemas, config).then(() => {
  ...
});
`),Zg()(),Jc(833,`p`),Tk(834,`Com isto, todas as respostas dos `),Jc(835,`em`),Tk(836,`endpoints`),Zg(),Tk(837,` dos schemas ser\xE3o adaptados para seguir o padr\xE3o de API do PO UI esperado pelo
PO Sync.`),Zg(),Jc(838,`p`),_u(839,`a`,61),Zg(),Jc(840,`h3`),Tk(841,`Capturando respostas da sincronização`),Zg(),Jc(842,`p`),Tk(843,`Conforme os itens que est\xE3o na fila de eventos s\xE3o enviados para o servidor \xE9 poss\xEDvel fazer este monitoramento
atrav\xE9s da inscri\xE7\xE3o no m\xE9todo `),Jc(844,`code`),Tk(845,`PoSyncService.getResponses()`),Zg(),Tk(846,`.
A inscri\xE7\xE3o realizada atrav\xE9s do m\xE9todo `),Jc(847,`code`),Tk(848,`.subscribe()`),Zg(),Tk(849,`, retorna um objeto do tipo `),Jc(850,`code`),Tk(851,`PoSyncResponse`),Zg(),Tk(852,` que cont\xE9m as
informa\xE7\xF5es do item que foi consumido da fila de eventos. Exemplo de utiliza\xE7\xE3o:`),Zg(),Jc(853,`pre`)(854,`code`,40),Tk(855,`this.poSync.getResponses().subscribe(poSyncResponse => {
  // Foi consumido um item da fila de eventos.
});
`),Zg()(),Jc(856,`h4`),Tk(857,`Em que situações este monitoramento pode ser útil?`),Zg(),Jc(858,`p`),Tk(859,`Este monitoramento \xE9 \xFAtil para saber se os itens conseguiram ser enviados para o servidor com sucesso. Caso um item
enviado n\xE3o tiver sucesso, o consumo da fila de eventos ser\xE1 suspenso e os demais itens n\xE3o ser\xE3o enviados para o
servidor enquanto este item que n\xE3o est\xE1 sendo enviado for resolvido.`),Zg(),Jc(860,`p`),Tk(861,`O consumo da fila de eventos pode ser suspenso em duas situações:`),Zg(),Jc(862,`ul`)(863,`li`),Tk(864,`Se o servidor rejeitar a requisição com `),Jc(865,`em`),Tk(866,`status`),Zg(),Tk(867,` diferente da classe de `),Jc(868,`em`),Tk(869,`status 2xx`),Zg(),Tk(870,` (sucesso);`),Zg(),Jc(871,`li`),Tk(872,`Se um item da fila representa uma requisição de alteração ou exclusão e o registro envolvido não possuir `),Jc(873,`em`),Tk(874,`id`),Zg(),Tk(875,`.`),Zg()(),Jc(876,`p`),Tk(877,`Para resolver este tipo de problema, uma solução é remover este item da fila de eventos, isto pode ser feito da seguinte forma:`),Zg(),Jc(878,`pre`)(879,`code`,40),Tk(880,`// Monitora o consumo da fila de eventos
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
`),Zg()(),Jc(881,`blockquote`)(882,`p`),Tk(883,`Saiba mais sobre `),Jc(884,`a`,29),Tk(885,`PoSyncService.getResponses()`),Zg(),Tk(886,`, `),Jc(887,`a`,29),Tk(888,`PoSyncService.removeItemOfSync()`),Zg(),Tk(889,`
e `),Jc(890,`a`,62),Tk(891,`PoEventSourcingErrorResponse`),Zg(),Tk(892,`.`),Zg()(),Jc(893,`p`),_u(894,`a`,63),Zg(),Jc(895,`h3`),Tk(896,`Inserindo requisições HTTP na fila de eventos`),Zg(),Jc(897,`p`),Tk(898,`A manipula\xE7\xE3o da fila de eventos \xE9 feita pelo PO Sync, mas existe a possibilidade de criar um evento na fila contendo uma
requisi\xE7\xE3o HTTP customizada. Isso pode ser feito atrav\xE9s da utiliza\xE7\xE3o do m\xE9todo `),Jc(899,`code`),Tk(900,`PoSyncService.insertHttpCommand()`),Zg(),Tk(901,`.
Este m\xE9todo recebe como primeiro par\xE2metro um objeto no formato `),Jc(902,`a`,29),Tk(903,`PoHttpRequestData`),Zg(),Tk(904,` que cont\xE9m as informa\xE7\xF5es da requisi\xE7\xE3o.
Exemplo de utiliza\xE7\xE3o:`),Zg(),Jc(905,`pre`)(906,`code`,40),Tk(907,`const poHttpRequestData: PoHttpRequestData = {
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
`),Zg()(),Jc(908,`p`),Tk(909,`O método `),Jc(910,`code`),Tk(911,`PoSyncService.insertHttpCommand()`),Zg(),Tk(912,` retorna uma promessa e no parâmetro do `),Jc(913,`em`),Tk(914,`callback`),Zg(),Tk(915,` da promessa \xE9 fornecido
o identificador daquele evento. Este identificador por ser armazenado e utilizado posteriormente em alguma valida\xE7\xE3o no m\xE9todo
`),Jc(916,`a`,29),Tk(917,`PoSyncService.getResponses()`),Zg(),Tk(918,`, por exemplo:`),Zg(),Jc(919,`pre`)(920,`code`,40),Tk(921,`this.poSync.getResponses().subscribe(poSyncResponse => {

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
`),Zg()(),Jc(922,`p`),Tk(923,`Também é possível fazer o envio de arquivo (File) para o servidor utilizando o `),Jc(924,`code`),Tk(925,`Content-Type: multipart/form-data`),Zg(),Tk(926,`. Para isso, deve ser informado no `),Jc(927,`code`),Tk(928,`body`),Zg(),Tk(929,` o `),Jc(930,`code`),Tk(931,`rawFile`),Zg(),Tk(932,`, conforme exemplo abaixo:`),Zg(),Jc(933,`pre`)(934,`code`,40),Tk(935,`public insertFileHttpCommand(file: File) {
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
`),Zg()(),Jc(936,`blockquote`)(937,`p`),Tk(938,`Caso não seja passado nenhum valor para a propriedade `),Jc(939,`code`),Tk(940,`formField`),Zg(),Tk(941,` será aplicado o valor padrão `),Jc(942,`code`),Tk(943,`file`),Zg(),Tk(944,`.`),Zg()(),Jc(945,`blockquote`)(946,`p`),Tk(947,`Para o envio de arquivos recomendamos o uso prioritário do `),Jc(948,`code`),Tk(949,`lokijs`),Zg(),Tk(950,` nas configurações do `),Jc(951,`code`),Tk(952,`PoStorageModule`),Zg(),Tk(953,` por sua maior capacidade de armazenamento.
A configura\xE7\xE3o deve ser feita no `),Jc(954,`code`),Tk(955,`app.module.ts`),Zg(),Tk(956,` da sua aplicação, por exemplo:`),Zg()(),Jc(957,`pre`)(958,`code`,40),Tk(959,`...
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
`),Zg()(),Jc(960,`p`),_u(961,`a`,64),Zg(),Jc(962,`h3`),Tk(963,`Criação de identificador customizado para eventos da fila`),Zg(),Jc(964,`p`),Tk(965,`Para monitorar se um evento em espec\xEDfico foi enviado ou n\xE3o para o servidor \xE9 poss\xEDvel criar um identificador customizado
para ele e inseri-lo como par\xE2metro nos m\xE9todos `),Jc(966,`code`),Tk(967,`PoEntity.save()`),Zg(),Tk(968,`, `),Jc(969,`code`),Tk(970,`PoEntity.remove()`),Zg(),Tk(971,` ou `),Jc(972,`code`),Tk(973,`PoSync.insertHttpCommand`),Zg(),Tk(974,`. Este identificador é retornado junto com o objeto `),Jc(975,`code`),Tk(976,`PoSyncResponse`),Zg(),Tk(977,` do método `),Jc(978,`code`),Tk(979,`PoSync.getResponses()`),Zg(),Tk(980,`, o que possibilita identificar se o evento foi enviado ou não, da seguinte forma:`),Zg(),Jc(981,`p`),Tk(982,`Na criação ou alteração de um registro:`),Zg(),Jc(983,`pre`)(984,`code`,40),Tk(985,`// Capturando os eventos enviados ao servidor
this.poSync.getResponses().subscribe(poSyncResponse => {

  if (poSyncResponse.customRequestId === customId) {
    // A cria\xE7\xE3o/altera\xE7\xE3o com o id-1234 foi processado no servidor
  }

});

const conferenceModel = this.poSync.getModel('conference');

const customId = 'id-1234';

// Inserido o identificador 'customId' no segundo par\xE2metro
conferenceModel.save(conference, customId).then(() => {});
`),Zg()(),Jc(986,`p`),Tk(987,`Na remoção de um registro:`),Zg(),Jc(988,`pre`)(989,`code`,40),Tk(990,`// Capturando os eventos enviados ao servidor
this.poSync.getResponses().subscribe(poSyncResponse => {

  if (poSyncResponse.customRequestId === customId) {
    // A remo\xE7\xE3o com o id-ABC foi processado no servidor
  }

});

const conferenceModel = this.poSync.getModel('conference');

const customId = 'id-ABC';

// Inserido o identificador 'customId' no segundo par\xE2metro
conferenceModel.remove(conference, customId).then(() => {});
`),Zg()(),Jc(991,`p`),Tk(992,`Ou na criação de uma requisição HTTP customizada:`),Zg(),Jc(993,`pre`)(994,`code`,40),Tk(995,`// Capturando os eventos enviados ao servidor
this.poSync.getResponses().subscribe(poSyncResponse => {
  
  if (poSyncResponse.customRequestId === customId) {
    // A requisi\xE7\xE3o HTTP com o id-XYZ foi processado no servidor
  }

});

const customId = 'id-XYZ';

// Inserido o identificador 'customId' no segundo par\xE2metro
this.poSync.insertHttpCommand(poHttpRequestData, customId).then(() => {});
`),Zg()(),Jc(996,`p`),_u(997,`a`,65),Zg(),Jc(998,`h3`),Tk(999,`Alterando as definições dos `),Jc(1e3,`em`),Tk(1001,`schemas`),Zg()(),Jc(1002,`p`),Tk(1003,`Em algumas situações, pode existir a necessidade de alterar a definição do `),Jc(1004,`em`),Tk(1005,`schema`),Zg(),Tk(1006,` que foi inserido como parâmetro dentro do método `),Jc(1007,`code`),Tk(1008,`PoSyncService.prepare()`),Zg(),Tk(1009,`. Uma alternativa para fazer esta alteração é:`),Zg(),Jc(1010,`p`)(1011,`strong`),Tk(1012,`1)`),Zg(),Tk(1013,` Chamar o método `),Jc(1014,`a`,29)(1015,`code`),Tk(1016,`PoSynceService.destroy()`),Zg()(),Tk(1017,`:`),Zg(),Jc(1018,`pre`)(1019,`code`,40),Tk(1020,`this.poSync.destroy().then(() => {
  // As defini\xE7\xF5es dos schemas, os itens da fila de eventos e todos os registros foram destru\xEDdos
});
`),Zg()(),Jc(1021,`blockquote`)(1022,`p`)(1023,`strong`),Tk(1024,`Atenção:`),Zg(),Tk(1025,` ao utilizar o método `),Jc(1026,`code`),Tk(1027,`PoSynceService.destroy()`),Zg(),Tk(1028,`, todos os registros armazenados localmente
ser\xE3o removidos inclusive os itens que estiverem na fila de eventos esperando para sincronizar.`),Zg()(),Jc(1029,`p`)(1030,`strong`),Tk(1031,`2)`),Zg(),Tk(1032,` E após a conclusão da promessa do método `),Jc(1033,`code`),Tk(1034,`PoSynceService.destroy()`),Zg(),Tk(1035,` chamar o m\xE9todo
`),Jc(1036,`code`),Tk(1037,`PoSyncService.prepare()`),Zg(),Tk(1038,` com a nova definição:`),Zg(),Jc(1039,`pre`)(1040,`code`,40),Tk(1041,`// Schemas atualizados
const schemasUpdated = [...];

this.poSync.destroy()
  .then(() => this.poSync.prepare(schemasUpdated, config))
  .then(() => {
    // Defini\xE7\xF5es dos schemas atualizadas
  });
`),Zg()(),Jc(1042,`blockquote`)(1043,`p`)(1044,`strong`),Tk(1045,`Atenção:`),Zg(),Tk(1046,` para que não venham ocorrer erros em ações que dependem das definições dos `),Jc(1047,`em`),Tk(1048,`schemas`),Zg(),Tk(1049,`, recomenda-se utilizar
o m\xE9todo `),Jc(1050,`code`),Tk(1051,`PoSyncService.prepare()`),Zg(),Tk(1052,` logo após o método `),Jc(1053,`code`),Tk(1054,`PoSynceService.destroy()`),Zg(),Tk(1055,`.`),Zg()(),Jc(1056,`p`),_u(1057,`a`,66),Zg(),Jc(1058,`h2`),Tk(1059,`Aplicativo de demonstração do PO Sync`),Zg(),Jc(1060,`p`),Tk(1061,`PO Conference Application é um aplicativo de demonstração do PO Sync baseado no `),Jc(1062,`a`,67),Tk(1063,`Ionic Conference Application`),Zg(),Tk(1064,`. Tendo como objetivo, demonstrar as funcionalidades do PO Sync de forma didática.`),Zg(),Jc(1065,`blockquote`)(1066,`p`),Tk(1067,`Acesse o repositório do aplicativo `),Jc(1068,`a`,68),Tk(1069,`neste link`),Zg(),Tk(1070,`.`),Zg()()())},dependencies:[Tze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var B=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:414,vars:0,consts:[[`p-title`,`Começando com o PO Sync`,1,`guides`,`app-portal`],[`href`,`https://ionicframework.com/docs`],[`href`,`/guides/sync-fundamentals`],[`href`,`/documentation/po-sync`],[`href`,`https://nodejs.org/en/`],[`href`,`https://cli.angular.io/`],[1,`language-shell`],[`href`,`https://ionicframework.com/docs/cli/`],[1,`language-json`],[1,`language-typescript`],[1,`language-html`],[`href`,`https://github.com/ionic-team/ionicons/issues/1011`],[`src`,`./assets/graphics/po-sync/app-get-started.gif`,`alt`,`Getting Started App`],[`href`,`./guides/sync-fundamentals`],[`href`,`./documentation/po-sync`]],template:function(o,s){o&1&&(Jc(0,`po-page-default`,0)(1,`p`),Tk(2,`Esse guia servirá para criar e configurar uma aplicação em `),Jc(3,`a`,1),Tk(4,`Ionic`),Zg(),Tk(5,` com o uso do PO Sync.`),Zg(),Jc(6,`p`),Tk(7,`Para maiores detalhes sobre os servi\xE7os e m\xE9todos utilizados neste tutorial, consulte a documenta\xE7\xE3o de
`),Jc(8,`a`,2),Tk(9,`Fundamentos do PO Sync`),Zg(),Tk(10,` e a documentação de referência de `),Jc(11,`a`,3),Tk(12,`API do PO Sync`),Zg(),Tk(13,`.`),Zg(),Jc(14,`h3`),Tk(15,`Pré-requisitos`),Zg(),Jc(16,`ul`)(17,`li`)(18,`a`,4),Tk(19,`Node.js e NPM`),Zg()(),Jc(20,`li`)(21,`a`,5),Tk(22,`Angular CLI`),Zg(),Tk(23,` (~22.2.1):`),Jc(24,`ul`)(25,`li`)(26,`pre`)(27,`code`,6),Tk(28,`npm install -g @angular/cli@22
`),Zg()()()()(),Jc(29,`li`)(30,`a`,7),Tk(31,`Ionic`),Zg(),Tk(32,`:`),Jc(33,`ul`)(34,`li`)(35,`pre`)(36,`code`,6),Tk(37,`npm install -g @ionic/cli
`),Zg()()()()()(),Jc(38,`blockquote`)(39,`p`),Tk(40,`É importante ter conhecimento prévio em Angular e Ionic para seguir esta documentação e obter melhor entendimento do PO Sync.`),Zg()(),Jc(41,`h3`),Tk(42,`Passo 1 - Criando o aplicativo`),Zg(),Jc(43,`p`),Tk(44,`Para a aplicação de exemplo usaremos o template `),Jc(45,`em`),Tk(46,`blank`),Zg(),Tk(47,` do Ionic. Para isso, execute o seguinte comando:`),Zg(),Jc(48,`pre`)(49,`code`,6),Tk(50,`ionic start po-sync-getting-started blank
`),Zg()(),Jc(51,`p`),Tk(52,`Caso surja a questão relacionada ao framework desejado, opte por `),Jc(53,`code`),Tk(54,`Angular`),Zg(),Tk(55,`.`),Zg(),Jc(56,`h3`),Tk(57,`Passo 2 - Instalando as dependências`),Zg(),Jc(58,`p`),Tk(59,`É necessário realizar alguns ajustes de compatibilidade do PO UI para o projeto criado.`),Zg(),Jc(60,`p`),Tk(61,`Navegue até a pasta do aplicativo:`),Zg(),Jc(62,`pre`)(63,`code`,6),Tk(64,`cd po-sync-getting-started
`),Zg()(),Jc(65,`p`),Tk(66,`Veja abaixo a lista de dependências e as versões compatíveis, elas devem ser conferidas e se necessário, ajustadas no seu projeto.`),Zg(),Jc(67,`pre`)(68,`code`,8),Tk(69,`  ...
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
`),Zg()(),Jc(70,`blockquote`)(71,`p`)(72,`strong`),Tk(73,`Nota para projetos com módulos (NgModule)`),Zg(),Tk(74,`: A CLI do Ionic pode gerar projetos com o arquivo `),Jc(75,`code`),Tk(76,`src/main.ts`),Zg(),Tk(77,` utilizando o `),Jc(78,`code`),Tk(79,`platformBrowserDynamic`),Zg(),Tk(80,`. Caso isso aconteça, será necessário adicionar o pacote `),Jc(81,`code`),Tk(82,`@angular/platform-browser-dynamic`),Zg(),Tk(83,` no arquivo `),Jc(84,`code`),Tk(85,`package.json`),Zg(),Tk(86,` (dentro de `),Jc(87,`code`),Tk(88,`dependencies`),Zg(),Tk(89,`), juntamente com as outras dependências listadas acima:`),Zg(),Jc(90,`pre`)(91,`code`,8),Tk(92,`"dependencies": {
  ...
  "@angular/platform-browser-dynamic": "~22.2.1",
  ...
}
`),Zg()()(),Jc(93,`blockquote`)(94,`p`),Tk(95,`Após configurar seu arquivo, certifique-se de salvar as alterações realizadas.`),Zg()(),Jc(96,`p`),Tk(97,`Realize a limpeza do arquivo `),Jc(98,`code`),Tk(99,`package-lock.json`),Zg(),Tk(100,` e da pasta `),Jc(101,`code`),Tk(102,`node_modules/`),Zg(),Tk(103,`, para então executar o seguinte comando para instalar as dependências:`),Zg(),Jc(104,`pre`)(105,`code`,6),Tk(106,`npm install
`),Zg()(),Jc(107,`h3`),Tk(108,`Passo 3 - Instalando o po-sync`),Zg(),Jc(109,`p`),Tk(110,`Para instalar o `),Jc(111,`code`),Tk(112,`po-sync`),Zg(),Tk(113,` no aplicativo execute o seguinte comando:`),Zg(),Jc(114,`pre`)(115,`code`,6),Tk(116,`ng add @po-ui/ng-sync@next
`),Zg()(),Jc(117,`h3`),Tk(118,`Passo 4 - Utilizando o po-sync`),Zg(),Jc(119,`h4`),Tk(120,`Passo 4.1 (NgModule) - Importando o `),Jc(121,`code`),Tk(122,`po-sync`),Zg(),Tk(123,` e o `),Jc(124,`code`),Tk(125,`po-storage`),Zg()(),Jc(126,`p`),Tk(127,`No arquivo `),Jc(128,`code`),Tk(129,`src/app/app.module.ts`),Zg(),Tk(130,`, adicione a importação dos módulos do `),Jc(131,`code`),Tk(132,`po-storage`),Zg(),Tk(133,` e do `),Jc(134,`code`),Tk(135,`po-sync`),Zg(),Tk(136,`:`),Zg(),Jc(137,`pre`)(138,`code`,9),Tk(139,`import { NgModule } from '@angular/core';
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
`),Zg()(),Jc(140,`h4`),Tk(141,`Passo 4.1 (Standalone) - Importando o `),Jc(142,`code`),Tk(143,`po-sync`),Zg(),Tk(144,` e o `),Jc(145,`code`),Tk(146,`po-storage`),Zg()(),Jc(147,`p`),Tk(148,`No arquivo `),Jc(149,`code`),Tk(150,`src/main.ts`),Zg(),Tk(151,`, avalie se foi feita a importação dos módulos do `),Jc(152,`code`),Tk(153,`po-storage`),Zg(),Tk(154,` e do `),Jc(155,`code`),Tk(156,`po-sync`),Zg(),Tk(157,`: `),Zg(),Jc(158,`pre`)(159,`code`,9),Tk(160,`import { bootstrapApplication } from '@angular/platform-browser';
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
`),Zg()(),Jc(161,`h4`),Tk(162,`Passo 4.2 - Mapeando seu primeiro `),Jc(163,`em`),Tk(164,`schema`),Zg()(),Jc(165,`p`),Tk(166,`O `),Jc(167,`code`),Tk(168,`po-sync`),Zg(),Tk(169,` utiliza a definição de `),Jc(170,`code`),Tk(171,`schemas`),Zg(),Tk(172,`, onde cada `),Jc(173,`code`),Tk(174,`schema`),Zg(),Tk(175,` representa um modelo de dados armazenado no dispositivo.`),Zg(),Jc(176,`p`),Tk(177,`Crie o arquivo `),Jc(178,`code`),Tk(179,`src/app/home/conference-schema.constants.ts`),Zg(),Tk(180,` e adicione o conteúdo abaixo:`),Zg(),Jc(181,`pre`)(182,`code`,9),Tk(183,`import { PoSyncSchema } from '@po-ui/ng-sync';

export const conferenceSchema: PoSyncSchema = {
  getUrlApi: 'https://po-sample-conference.onrender.com/conferences',
  diffUrlApi: 'https://po-sample-conference.onrender.com/conferences/diff',
  deletedField: 'deleted',
  fields: [ 'id', 'title', 'location', 'description' ],
  idField: 'id',
  name: 'conference',
  pageSize: 1
};
`),Zg()(),Jc(184,`h3`),Tk(185,`Passo 5 - Configurando o método prepare`),Zg(),Jc(186,`p`),Tk(187,`Após ter o seu primeiro `),Jc(188,`em`),Tk(189,`schema`),Zg(),Tk(190,` criado, configure o seu aplicativo utilizando o `),Jc(191,`code`),Tk(192,`po-sync`),Zg(),Tk(193,` através do método `),Jc(194,`code`),Tk(195,`PoSyncService.prepare()`),Zg(),Tk(196,`.`),Zg(),Jc(197,`h4`),Tk(198,`Passo 5.1 (NgModule) - Alterando o `),Jc(199,`code`),Tk(200,`src/app/app.component.ts`),Zg()(),Jc(201,`p`),Tk(202,`Substitua o conteúdo do arquivo pelo conteúdo abaixo:`),Zg(),Jc(203,`pre`)(204,`code`,9),Tk(205,`import { Component, OnInit, inject } from '@angular/core';
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
`),Zg()(),Jc(206,`p`),Tk(207,`Após utilizar o método `),Jc(208,`code`),Tk(209,`PoSyncService.prepare()`),Zg(),Tk(210,`, a aplicação estará pronta para sincronizar os dados através do método `),Jc(211,`code`),Tk(212,`PoSyncService.sync()`),Zg(),Tk(213,`.`),Zg(),Jc(214,`h4`),Tk(215,`Passo 5.1 (Standalone) - Alterando o `),Jc(216,`code`),Tk(217,`src/app/app.component.ts`),Zg()(),Jc(218,`p`),Tk(219,`Substitua o conteúdo do arquivo pelo conteúdo abaixo:`),Zg(),Jc(220,`pre`)(221,`code`,9),Tk(222,`import { Component, OnInit, inject } from '@angular/core';
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
`),Zg()(),Jc(223,`h3`),Tk(224,`Passo 6 (NgModule) - Acessando os dados`),Zg(),Jc(225,`p`),Tk(226,`Caso o projeto tenha sido gerado em uma versão anterior a 9.x do `),Jc(227,`code`),Tk(228,`@ionic/angular`),Zg(),Tk(229,`, no arquivo `),Jc(230,`code`),Tk(231,`po-sync-getting-started/src/app/home/home.module.ts`),Zg(),Tk(232,`, atualize a importação do `),Jc(233,`code`),Tk(234,`IonicModule`),Zg(),Tk(235,` para utilizar o caminho `),Jc(236,`code`),Tk(237,`import { IonicModule } from '@ionic/angular';`),Zg(),Tk(238,`:`),Zg(),Jc(239,`pre`)(240,`code`,9),Tk(241,`import { NgModule } from '@angular/core';
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
`),Zg()(),Jc(242,`blockquote`)(243,`p`)(244,`strong`),Tk(245,`Nota sobre importação do `),Jc(246,`code`),Tk(247,`IonicModule`),Zg()(),Tk(248,`: As versões anteriores à 9.x do `),Jc(249,`code`),Tk(250,`@ionic/angular`),Zg(),Tk(251,` não possuem o export `),Jc(252,`code`),Tk(253,`lazy`),Zg(),Tk(254,`, devendo ser feito o import de `),Jc(255,`code`),Tk(256,`@ionic/angular`),Zg(),Tk(257,`. A partir da versão 9.x, o import de `),Jc(258,`code`),Tk(259,`@ionic/angular/lazy`),Zg(),Tk(260,` funciona normalmente (sendo o padrão da CLI do ionic para projetos standalone).`),Zg()(),Jc(261,`p`),Tk(262,`Localize o arquivo `),Jc(263,`code`),Tk(264,`src/app/home/home.page.ts`),Zg(),Tk(265,` e faça as seguintes alterações:`),Zg(),Jc(266,`pre`)(267,`code`,9),Tk(268,`import { Component, inject, signal } from '@angular/core';

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
`),Zg()(),Jc(269,`p`),Tk(270,`No construtor, foi realizado uma inscrição no método `),Jc(271,`code`),Tk(272,`PoSyncService.onSync()`),Zg(),Tk(273,`, para quando ocorrer uma sincronização, o método `),Jc(274,`code`),Tk(275,`loadHomePage()`),Zg(),Tk(276,` busque um registro do `),Jc(277,`em`),Tk(278,`schema`),Zg(),Tk(279,` "Conference".`),Zg(),Jc(280,`h3`),Tk(281,`Passo 6 (Standalone) - Acessando os dados`),Zg(),Jc(282,`p`),Tk(283,`Localize o arquivo `),Jc(284,`code`),Tk(285,`src/app/home/home.page.ts`),Zg(),Tk(286,` e faça as seguintes alterações:`),Zg(),Jc(287,`pre`)(288,`code`,9),Tk(289,`import { Component, inject, signal } from '@angular/core';

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
`),Zg()(),Jc(290,`h3`),Tk(291,`Passo 7 - Exibindo os dados em tela`),Zg(),Jc(292,`p`),Tk(293,`No arquivo `),Jc(294,`code`),Tk(295,`src/app/home/home.page.html`),Zg(),Tk(296,` crie a seguinte estrutura:`),Zg(),Jc(297,`pre`)(298,`code`,10),Tk(299,`<ion-content class="ion-padding">
  <ion-button expand="full" (click)="loadHomePage()" (keyup.enter)="loadHomePage()">Buscar informa\xE7\xF5es</ion-button>  
  <ion-button expand="full" color="danger" (click)="clear()" (keyup.enter)="clear()">Apagar informa\xE7\xF5es</ion-button>

  @if (conference(); as conference) {
    <ion-card>
      <ion-card-content>
        <ion-card-title>
          `),Jc(300,`span`),B_(),Tk(301,`{{`),j_(),Zg(),Tk(302,` conference.title `),Jc(303,`span`),B_(),Tk(304,`}}`),j_(),Zg(),Tk(305,`
        </ion-card-title>
        <p>`),Jc(306,`span`),B_(),Tk(307,`{{`),j_(),Zg(),Tk(308,` conference.description `),Jc(309,`span`),B_(),Tk(310,`}}`),j_(),Zg(),Tk(311,`</p>
        <p>`),Jc(312,`span`),B_(),Tk(313,`{{`),j_(),Zg(),Tk(314,` conference.location `),Jc(315,`span`),B_(),Tk(316,`}}`),j_(),Zg(),Tk(317,`</p>
      </ion-card-content>
    </ion-card>
  }
</ion-content>
`),Zg()(),Jc(318,`h3`),Tk(319,`Passo 8 - Executando o aplicativo`),Zg(),Jc(320,`p`),Tk(321,`Execute o comando `),Jc(322,`code`),Tk(323,`ionic serve`),Zg(),Tk(324,` e verifique o funcionamento do aplicativo Ionic com `),Jc(325,`code`),Tk(326,`po-sync`),Zg(),Tk(327,`.`),Zg(),Jc(328,`blockquote`)(329,`p`),Tk(330,`Pode ocorrer o seguinte erro `),Jc(331,`code`),Tk(332,`TypeError: Failed to fetch dynamically imported module...`),Zg(),Tk(333,`, sendo necessário adicionar ao arquivo `),Jc(334,`code`),Tk(335,`angular.json`),Zg(),Tk(336,` as seguintes configurações:`),Zg(),Jc(337,`pre`)(338,`code`,8),Tk(339,`{
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
`),Zg()()(),Jc(340,`blockquote`)(341,`p`),Tk(342,`Pode ocorrer o seguinte erro `),Jc(343,`code`),Tk(344,`TS2320: Interface 'HTMLIonIconElement' cannot simultaneously extend types 'IonIcon' and 'HTMLStencilElement'`),Zg(),Tk(345,` por conta da versão do TypeScript conforme esta `),Jc(346,`a`,11),Tk(347,`issue`),Zg(),Tk(348,`, neste caso adicione no arquivo `),Jc(349,`strong`),Tk(350,`tsconfig.json`),Zg(),Jc(351,`code`),Tk(352,`"skipLibCheck": true`),Zg(),Tk(353,`.`),Zg()(),Jc(354,`blockquote`)(355,`p`),Tk(356,`Ao executar um projeto standalone, pode ocorrer o seguinte erro: `),Jc(357,`code`),Tk(358,`[ERROR] Invalid project type: angular-standalone (project config: ./ionic.config.json).`),Zg(),Tk(359,`. Para corrigir, edite o arquivo `),Jc(360,`code`),Tk(361,`ionic.config.json`),Zg(),Tk(362,` e ajuste a propriedade `),Jc(363,`code`),Tk(364,`type`),Zg(),Tk(365,` para o valor `),Jc(366,`code`),Tk(367,`angular`),Zg(),Tk(368,`.`),Zg()(),Jc(369,`h4`),Tk(370,`Passo 8.1 - Entendendo o funcionamento do `),Jc(371,`code`),Tk(372,`po-sync`),Zg()(),Jc(373,`ul`)(374,`li`)(375,`p`),Tk(376,`O aplicativo sincroniza os dados que estão no servidor através do método `),Jc(377,`code`),Tk(378,`PoSyncService.sync()`),Zg(),Tk(379,`;`),Zg()(),Jc(380,`li`)(381,`p`),Tk(382,`Durante esta sincronização é efetuada a busca dos registros utilizando a URL de GET, informada no `),Jc(383,`code`),Tk(384,`conference-schema.constants.ts`),Zg(),Tk(385,`, e o retorno é salvo no dispositivo do cliente;`),Zg()(),Jc(386,`li`)(387,`p`),Tk(388,`Com os dados salvos no dispositivo, é possível desabilitar o acesso à internet do aplicativo e ainda continuar acessando os dados através do `),Jc(389,`code`),Tk(390,`po-sync`),Zg(),Tk(391,`.`),Zg()()(),Jc(392,`p`),Tk(393,`Demonstração do aplicativo acessando os dados `),Jc(394,`em`),Tk(395,`offline`),Zg(),Tk(396,`:`),Zg(),Jc(397,`p`),_u(398,`img`,12),Zg(),Jc(399,`h3`),Tk(400,`Próximos passos`),Zg(),Jc(401,`ul`)(402,`li`)(403,`p`),Tk(404,`Leia sobre os principais `),Jc(405,`a`,13),Tk(406,`fundamentos do PO Sync`),Zg(),Tk(407,`.`),Zg()(),Jc(408,`li`)(409,`p`),Tk(410,`Saiba mais sobre a `),Jc(411,`a`,14),Tk(412,`API do PO Sync`),Zg(),Tk(413,`.`),Zg()()()())},dependencies:[Tze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var H=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:298,vars:0,consts:[[`p-title`,`Customização de Temas usando o serviço PO-UI`,1,`guides`,`app-portal`],[1,`po-row`,2,`margin`,`20px 0`],[1,`po-lg-2`,`po-md-5`,`po-sm-12`,2,`padding`,`10px`],[2,`text-align`,`center`],[`p-icon`,`an an-palette`,2,`font-size`,`24px`],[`p-icon`,`an an-sun`,2,`font-size`,`24px`],[`p-icon`,`an an-moon`,2,`font-size`,`24px`],[`p-icon`,`an an-wheelchair-motion`,2,`font-size`,`24px`],[`p-icon`,`an an-wrench`,2,`font-size`,`24px`],[`p-icon`,`an an-lightning`,2,`font-size`,`24px`],[`href`,`guides/theme-service#introduction`],[`href`,`guides/theme-service#whyUse`],[`href`,`guides/theme-service#config`],[`href`,`guides/theme-service#configModule`],[`href`,`guides/theme-service#configStyle`],[`href`,`guides/theme-service#configService`],[`href`,`guides/theme-service#howToUse`],[`href`,`guides/theme-service#howToUseBasic`],[`href`,`guides/theme-service#howToUseComplete`],[`href`,`guides/theme-service#applyTheme`],[`href`,`guides/theme-service#applyThemeInitial`],[`href`,`guides/theme-service#applyThemeDynamic`],[`href`,`guides/theme-service#advanced`],[`href`,`guides/theme-service#advancedOverride`],[`href`,`guides/theme-service#advancedReset`],[`href`,`guides/theme-service#advancedPersist`],[`href`,`guides/theme-service#advancedSize`],[`href`,`guides/theme-service#more`],[`href`,`guides/theme-service#sampleStackblitz`],[`id`,`introduction`],[`id`,`whyUse`],[`id`,`config`],[`id`,`configModule`],[1,`language-typescript`],[`id`,`configStyle`],[1,`language-json`],[`id`,`configService`],[`id`,`howToUse`],[`id`,`howToUseBasic`],[`id`,`howToUseComplete`],[`id`,`applyTheme`],[`id`,`applyThemeInitial`],[`id`,`applyThemeDynamic`],[`id`,`advanced`],[`id`,`advancedOverride`],[1,`language-html`],[1,`language-css`],[`id`,`advancedReset`],[`id`,`advancedPersist`],[`id`,`advancedSize`],[`id`,`more`],[`href`,`documentation/po-theme`],[`href`,`https://doc.animaliads.io/`],[`id`,`sampleStackblitz`],[`href`,`https://stackblitz.com/edit/poui-theme-service`,`target`,`_blank`,`rel`,`noreferrer`],[`src`,`https://developer.stackblitz.com/img/open_in_stackblitz.svg`,`alt`,`Open in StackBlitz`]],template:function(o,s){o&1&&(Jc(0,`po-page-default`,0)(1,`p`),Tk(2,`A partir da versão 19.X.X, o PO-UI oferece um serviço completo para criação e gestão de temas personalizados, permitindo controle total sobre cores, tipografia, acessibilidade e comportamentos específicos de componente.`),Zg(),Jc(3,`p`),Tk(4,`Principais Recursos:`),Zg(),Jc(5,`div`,1)(6,`div`,2)(7,`div`,3),_u(8,`po-icon`,4),Jc(9,`p`),Tk(10,`Paletas de cores`),Zg()()(),Jc(11,`div`,2)(12,`div`,3)(13,`div`),_u(14,`po-icon`,5)(15,`po-icon`,6),Zg(),Jc(16,`p`),Tk(17,`Temas light/dark`),Zg()()(),Jc(18,`div`,2)(19,`div`,3),_u(20,`po-icon`,7),Jc(21,`p`),Tk(22,`Acessibilidade (AA/AAA)`),Zg()()(),Jc(23,`div`,2)(24,`div`,3),_u(25,`po-icon`,8),Jc(26,`p`),Tk(27,`Sobrescrita de estilos`),Zg()()(),Jc(28,`div`,2)(29,`div`,3),_u(30,`po-icon`,9),Jc(31,`p`),Tk(32,`Aplicação dinâmica`),Zg()()()(),Jc(33,`h3`),Tk(34,`Conteúdo`),Zg(),Jc(35,`ul`)(36,`li`)(37,`a`,10),Tk(38,`Introdução à Customização de Temas no PO UI`),Zg()(),Jc(39,`li`)(40,`a`,11),Tk(41,`Por Que Usar o PoThemeService?`),Zg()(),Jc(42,`li`)(43,`a`,12),Tk(44,`Configuração Inicial`),Zg(),Jc(45,`ul`)(46,`li`)(47,`a`,13),Tk(48,`Importação do Módulo`),Zg()(),Jc(49,`li`)(50,`a`,14),Tk(51,`Estilo PO-UI`),Zg()(),Jc(52,`li`)(53,`a`,15),Tk(54,`Injeção do Serviço`),Zg()()()(),Jc(55,`li`)(56,`a`,16),Tk(57,`Como Utilizar o Serviço de Tema`),Zg(),Jc(58,`ul`)(59,`li`)(60,`a`,17),Tk(61,`Estrutura Básica`),Zg()(),Jc(62,`li`)(63,`a`,18),Tk(64,`Exemplo Completo`),Zg()()()(),Jc(65,`li`)(66,`a`,19),Tk(67,`Aplicando o Tema`),Zg(),Jc(68,`ul`)(69,`li`)(70,`a`,20),Tk(71,`Aplicação Inicial`),Zg()(),Jc(72,`li`)(73,`a`,21),Tk(74,`Aplicação Dinâmica`),Zg()()()(),Jc(75,`li`)(76,`a`,22),Tk(77,`Técnicas Avançadas`),Zg(),Jc(78,`ul`)(79,`li`)(80,`a`,23),Tk(81,`Sobrescrita de Variáveis`),Zg()(),Jc(82,`li`)(83,`a`,24),Tk(84,`Reset para Tema Padrão`),Zg()(),Jc(85,`li`)(86,`a`,25),Tk(87,`Persistência de Tema`),Zg()(),Jc(88,`li`)(89,`a`,26),Tk(90,`Gerenciamento de Tamanhos`),Zg()()()(),Jc(91,`li`)(92,`a`,27),Tk(93,`Mais informações`),Zg()(),Jc(94,`li`)(95,`a`,28),Tk(96,`Exemplo Completo no Stackblitz`),Zg()()(),Jc(97,`p`),_u(98,`a`,29),Zg(),Jc(99,`h3`),Tk(100,`Introdução à Customização de Temas no PO UI`),Zg(),Jc(101,`p`),Tk(102,`O PO UI oferece um sistema robusto e flexível para personalização visual de componentes, permitindo que desenvolvedores e designers criem experiências únicas e alinhadas às necessidades específicas de cada projeto. A customização vai além da simples alteração de cores - é um sistema completo que abrange desde variáveis CSS globais até a criação de temas dinâmicos com suporte a light/dark mode, acessibilidade avançada e controle granular sobre cada componente.`),Zg(),Jc(103,`p`),_u(104,`a`,30),Zg(),Jc(105,`h3`),Tk(106,`Por Que Usar o PoThemeService?`),Zg(),Jc(107,`p`),Tk(108,`O serviço de temas do PO UI (PoThemeService) é o coração do sistema de customização, oferecendo:`),Zg(),Jc(109,`details`)(110,`summary`)(111,`strong`),Tk(112,`Aplicação Dinâmica de Temas`),Zg()(),Jc(113,`ul`)(114,`li`),Tk(115,`Alterações em tempo real sem recarregar a aplicação`),Zg(),Jc(116,`li`),Tk(117,`Transições suaves entre temas light/dark`),Zg()()(),Jc(118,`details`)(119,`summary`)(120,`strong`),Tk(121,`Gestão Centralizada`),Zg()(),Jc(122,`ul`)(123,`li`),Tk(124,`Criação e armazenamento de múltiplos temas`),Zg(),Jc(125,`li`),Tk(126,`Combinação de temas globais e customizações locais`),Zg()()(),Jc(127,`details`)(128,`summary`)(129,`strong`),Tk(130,`Integração com Estado da Aplicação`),Zg()(),Jc(131,`ul`)(132,`li`),Tk(133,`Persistência de preferências (localStorage)`),Zg(),Jc(134,`li`),Tk(135,`Sincronização com configurações do usuário`),Zg()()(),Jc(136,`details`)(137,`summary`)(138,`strong`),Tk(139,`Controle de Acessibilidade`),Zg()(),Jc(140,`ul`)(141,`li`),Tk(142,`Ativação de níveis AA/AAA conforme requisitos`),Zg(),Jc(143,`li`),Tk(144,`Ajustes automáticos de contrastes`),Zg()()(),Jc(145,`details`)(146,`summary`)(147,`strong`),Tk(148,`Sobrescrita Flexível`),Zg()(),Jc(149,`ul`)(150,`li`),Tk(151,`Hierarquia clara: Tema > Variáveis Globais > Estilos Locais`),Zg()()(),Jc(152,`p`),_u(153,`a`,31),Zg(),Jc(154,`h3`),Tk(155,`Configuração Inicial`),Zg(),Jc(156,`p`),_u(157,`a`,32),Zg(),Jc(158,`h4`),Tk(159,`Importação do Módulo`),Zg(),Jc(160,`pre`)(161,`code`,33),Tk(162,`import { PoModule } from '@po-ui/ng-components';

@NgModule({
  imports: [
    PoThemeModule
  ]
})
export class AppModule { }
`),Zg()(),Jc(163,`p`),_u(164,`a`,34),Zg(),Jc(165,`h4`),Tk(166,`Estilo PO-UI`),Zg(),Jc(167,`p`),Tk(168,`Configurar o arquivo angular.json da seguinte maneira:`),Zg(),Jc(169,`pre`)(170,`code`,35),Tk(171,`"styles": [
  "node_modules/@po-ui/style/css/po-theme-default.min.css", 
  "src/styles.css"
]
`),Zg()(),Jc(172,`p`),_u(173,`a`,36),Zg(),Jc(174,`h4`),Tk(175,`Injeção do Serviço`),Zg(),Jc(176,`p`),Tk(177,`Injeção do Serviço no construtor do componente:`),Zg(),Jc(178,`pre`)(179,`code`,33),Tk(180,`import { PoThemeService } from '@po-ui/ng-components';

export class AppComponent {
  constructor(private poThemeService: PoThemeService) { }
}
`),Zg()(),Jc(181,`p`),_u(182,`a`,37),Zg(),Jc(183,`h3`),Tk(184,`Como Utilizar o Serviço de Tema`),Zg(),Jc(185,`p`),Tk(186,`Criando um Tema Personalizado`),Zg(),Jc(187,`p`),_u(188,`a`,38),Zg(),Jc(189,`h4`),Tk(190,`Estrutura Básica`),Zg(),Jc(191,`pre`)(192,`code`,33),Tk(193,`const meuTema: PoTheme = {
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
`),Zg()(),Jc(194,`p`),_u(195,`a`,39),Zg(),Jc(196,`h4`),Tk(197,`Exemplo Completo`),Zg(),Jc(198,`pre`)(199,`code`,33),Tk(200,`import { PoTheme, PoThemeTypeEnum } from '@po-ui/ng-components';

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
`),Zg()(),Jc(201,`p`),_u(202,`a`,40),Zg(),Jc(203,`h3`),Tk(204,`Aplicando o Tema`),Zg(),Jc(205,`p`),_u(206,`a`,41),Zg(),Jc(207,`h4`),Tk(208,`Aplicação Inicial`),Zg(),Jc(209,`pre`)(210,`code`,33),Tk(211,`ngOnInit() {
  this.poTheme.setTheme(meuTema, PoThemeTypeEnum.light, PoThemeA11yEnum.AAA);
}
`),Zg()(),Jc(212,`p`),_u(213,`a`,42),Zg(),Jc(214,`h4`),Tk(215,`Aplicação Dinâmica`),Zg(),Jc(216,`pre`)(217,`code`,33),Tk(218,`// Alternar entre light/dark mode
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
`),Zg()(),Jc(219,`p`),_u(220,`a`,43),Zg(),Jc(221,`h3`),Tk(222,`Técnicas Avançadas`),Zg(),Jc(223,`p`),_u(224,`a`,44),Zg(),Jc(225,`h4`),Tk(226,`Sobrescrita de Variáveis`),Zg(),Jc(227,`blockquote`)(228,`p`)(229,`strong`),Tk(230,`Recomendação:`),Zg(),Tk(231,` Utilize sempre o serviço `),Jc(232,`code`),Tk(233,`PoThemeService`),Zg(),Tk(234,` para manipulação de temas. Reserve esta técnica para casos extremos.`),Zg()(),Jc(235,`p`)(236,`strong`),Tk(237,`Quando usar?`),Zg()(),Jc(238,`ul`)(239,`li`),Tk(240,`Necessidade de ajustes pontuais não cobertos pelos tokens padrão `),Zg(),Jc(241,`li`),Tk(242,`Prototipagem rápida`),Zg()(),Jc(243,`p`)(244,`strong`),Tk(245,`Implementação:`),Zg()(),Jc(246,`pre`)(247,`code`,45),Tk(248,`<html class='override-theme'>
`),Zg()(),Jc(249,`pre`)(250,`code`,46),Tk(251,`/* styles.scss */
:root .override-theme {
  --color-brand-01-base: #FF0000;
  --po-density-header-padding: 2rem; /* Padding interno em headers (inclui pages, dynamics, page slide e modal) */
  --po-density-content-padding: 1rem; /* Padding interno em contents (inclui pages, dynamics, container, list view, page slide, modal, stepper e disclaimer-group) */
  --po-density-footer-padding: 1rem; /* Padding interno em footers (inclui modal e page slide) */
  --po-density-gap-header-content: 1rem; /* Espa\xE7o interno entre o header e o content (inclui pages, tabs e stepper) */
  --po-density-gap-spacing: 1rem; /* Espa\xE7o interno entre blocos de conte\xFAdo presentes no header e content (inclui dividers e gaps) */
  --po-density-floating-padding: 0.5rem; /* Padding interno de componentes flutuantes como tooltip e popover */ 
}
`),Zg()(),Jc(252,`p`),_u(253,`a`,47),Zg(),Jc(254,`h4`),Tk(255,`Reset para Tema Padrão`),Zg(),Jc(256,`p`),Tk(257,`Restaura todos os valores para o tema base configurado:`),Zg(),Jc(258,`pre`)(259,`code`,33),Tk(260,`// Em qualquer componente/service:
resetarTema() {
  this.poThemeService.resetBaseTheme();
}
`),Zg()(),Jc(261,`p`),_u(262,`a`,48),Zg(),Jc(263,`h4`),Tk(264,`Persistência de Tema`),Zg(),Jc(265,`p`),Tk(266,`Fluxo recomendado:`),Zg(),Jc(267,`pre`)(268,`code`,33),Tk(269,`ngOnInit() {
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
`),Zg()(),Jc(270,`p`),_u(271,`a`,49),Zg(),Jc(272,`h4`),Tk(273,`Gerenciamento de Tamanhos`),Zg(),Jc(274,`p`),Tk(275,`Padrão acessível (AAA):`),Zg(),Jc(276,`pre`)(277,`code`,33),Tk(278,`  // Habilitar tamanhos para small
  this.themeService.setA11yDefaultSizeSmall(true);

  // Verificar configura\xE7\xE3o atual
  const currentSize = this.poThemeService.getDefaultSize();
`),Zg()(),Jc(279,`p`),_u(280,`a`,50),Zg(),Jc(281,`h4`),Tk(282,`Referências Técnicas`),Zg(),Jc(283,`ul`)(284,`li`)(285,`a`,51),Tk(286,`PoThemeService API`),Zg(),Tk(287,` - Métodos completos do serviço`),Zg(),Jc(288,`li`)(289,`a`,52),Tk(290,`Animalia DS`),Zg(),Tk(291,` - Base dos nossos tokens de design`),Zg()(),Jc(292,`p`),_u(293,`a`,53),Zg(),Jc(294,`h3`),Tk(295,`Exemplo Completo no Stackblitz`),Zg(),Jc(296,`a`,54),_u(297,`img`,55),Zg()())},dependencies:[Tt,Tze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var V=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:149,vars:0,consts:[[`p-title`,`Criando um tema para o PO UI`,1,`guides`,`app-portal`],[1,`language-json`],[`href`,`https://caniuse.com/#search=CSS%20Variables`]],template:function(o,s){o&1&&(Jc(0,`po-page-default`,0)(1,`p`),Tk(2,`Para criação de novos temas vamos utilizar a ferramenta `),Jc(3,`strong`),Tk(4,`Po Theme Cli`),Zg()(),Jc(5,`h2`),Tk(6,`Instalação`),Zg(),Jc(7,`p`),Tk(8,`Faça a instalação global da ferramenta:`),Zg(),Jc(9,`pre`)(10,`code`),Tk(11,`npm install -g @po-ui/theme-cli
`),Zg()(),Jc(12,`p`),Tk(13,`Você pode ver as opções disponíveis através do comando:`),Zg(),Jc(14,`pre`)(15,`code`),Tk(16,`po-theme -help
`),Zg()(),Jc(17,`h2`),Tk(18,`Iniciando um projeto para o novo tema customizado`),Zg(),Jc(19,`p`),Tk(20,`Navegue até o diretório que você deseja e execute o comando:`),Zg(),Jc(21,`pre`)(22,`code`),Tk(23,`po-theme new my-custom-po-theme
`),Zg()(),Jc(24,`p`),Tk(25,`Isso irá gerar um novo diretório com o nome `),Jc(26,`code`),Tk(27,`my-custom-po-theme`),Zg(),Tk(28,` e com os arquivos iniciais
para seu tema.`),Zg(),Jc(29,`p`),Tk(30,`Acesse o arquivo `),Jc(31,`code`),Tk(32,`src/po-theme-custom.css`),Zg(),Tk(33,` e faça as customizações necessárias.`),Zg(),Jc(34,`blockquote`)(35,`p`),Tk(36,`Para customização das fontes você deve colocar seus arquivos na pasta `),Jc(37,`code`),Tk(38,`src/assets/fonts`),Zg(),Tk(39,`.`),Zg()(),Jc(40,`h2`),Tk(41,`Gerando build do tema customizado`),Zg(),Jc(42,`p`),Tk(43,`Para fazer o build e preparar o tema para publica\xE7\xE3o, voc\xEA deve executar o seguinte comando dentro da
pasta do projeto:`),Zg(),Jc(44,`pre`)(45,`code`),Tk(46,`po-theme build
`),Zg()(),Jc(47,`blockquote`)(48,`p`),Tk(49,`Caso queira atribuir um nome ao arquivo a ser gerado, deve-se utilizar o parâmetro `),Jc(50,`code`),Tk(51,`--name`),Zg(),Tk(52,` informando o nome desejado.`),Zg()(),Jc(53,`blockquote`)(54,`p`),Tk(55,`Se você estiver customizando as fontes do tema, você deve usar o parâmetro `),Jc(56,`code`),Tk(57,`--fonts`),Zg(),Tk(58,`.`),Zg()(),Jc(59,`p`),Tk(60,`Após a execução do comando de `),Jc(61,`em`),Tk(62,`build`),Zg(),Tk(63,`, irá ser gerado uma pasta chamada `),Jc(64,`code`),Tk(65,`dist`),Zg(),Tk(66,` dentro do diret\xF3rio
do seu projeto.`),Zg(),Jc(67,`blockquote`)(68,`p`),Tk(69,`Você pode modificar seu `),Jc(70,`code`),Tk(71,`package.json`),Zg(),Tk(72,` adicionando informa\xE7\xF5es sobre o seu pacote, como name, version,
entre outras informa\xE7\xF5es importantes.`),Zg()(),Jc(73,`h3`),Tk(74,`Publicando o novo tema customizado`),Zg(),Jc(75,`p`),Tk(76,`Acesse a pasta `),Jc(77,`code`),Tk(78,`dist`),Zg(),Tk(79,` e execute o seguinte comando:`),Zg(),Jc(80,`pre`)(81,`code`),Tk(82,`npm publish
`),Zg()(),Jc(83,`h2`),Tk(84,`Utilizando o tema customizado`),Zg(),Jc(85,`p`),Tk(86,`Existem 3 formas de você usar o tema customizado após a publicação.`),Zg(),Jc(87,`p`),Tk(88,`Configure o arquivo `),Jc(89,`code`),Tk(90,`angular.json`),Zg(),Tk(91,` da aplicação conforme for mais conveniente as suas necessidade.`),Zg(),Jc(92,`h3`),Tk(93,`1 - Usar o arquivo "compilado" com todo o CSS.`),Zg(),Jc(94,`pre`)(95,`code`,1),Tk(96,`"styles": [
  "node_modules/my-custom-po-theme/css/po-theme-custom.min.css",
  "src/styles.css"
],
`),Zg()(),Jc(97,`p`)(98,`strong`),Tk(99,`Prós:`),Zg(),Tk(100,` Modo mais simples de usar e atende aos browser suportados.`),Zg(),Jc(101,`p`)(102,`strong`),Tk(103,`Contras:`),Zg(),Tk(104,` O tema customizado deve ser sempre atualizado conforme o tema padr\xE3o for publicado, pois
pode ficar sem os novos estilos publicados.`),Zg(),Jc(105,`h3`),Tk(106,`2 - Usar o arquivo de variáveis do tema customizado + arquivo CSS do tema padrão`),Zg(),Jc(107,`pre`)(108,`code`,1),Tk(109,`"styles": [
  "node_modules/my-custom-po-theme/css/po-theme-custom-variables.min.css",
  "node_modules/@po-ui/style/css/po-theme-core.min.css",
  "src/styles.css"
],
`),Zg()(),Jc(110,`blockquote`)(111,`p`),Tk(112,`Atenção a ordem dos arquivos`),Zg()(),Jc(113,`p`)(114,`strong`),Tk(115,`Prós:`),Zg(),Tk(116,` Permite que o usu\xE1rio do tema customizado aplique customiza\xE7\xF5es em cima do tema customizado
na aplica\xE7\xE3o final.`),Zg(),Jc(117,`p`)(118,`strong`),Tk(119,`Contras:`),Zg(),Tk(120,` O tema customizado deve ser sempre atualizado conforme o tema padr\xE3o for publicado e pode
ter incompatibilidade com `),Jc(121,`em`),Tk(122,`browsers`),Zg(),Tk(123,` antigos que não dão suporte a variáveis no CSS.`),Zg(),Jc(124,`h3`),Tk(125,`3 - Usar o arquivo de variáveis do tema padrão + variáveis do tema customizado + arquivo CSS do tema padrão`),Zg(),Jc(126,`pre`)(127,`code`,1),Tk(128,`"styles": [
  "node_modules/@po-ui/style/css/po-theme-default-variables.min.css",
  "node_modules/my-custom-po-theme/css/po-theme-custom-variables.min.css",
  "node_modules/@po-ui/style/css/po-theme-core.min.css",
  "src/styles.css"
],
`),Zg()(),Jc(129,`blockquote`)(130,`p`),Tk(131,`Atenção a ordem dos arquivos`),Zg()(),Jc(132,`p`)(133,`strong`),Tk(134,`Prós:`),Zg(),Tk(135,` N\xE3o corre risco de perder novos estilos, permite que o usu\xE1rio do tema customizado aplique
customiza\xE7\xF5es em cima do tema customizado na aplica\xE7\xE3o final.`),Zg(),Jc(136,`p`)(137,`strong`),Tk(138,`Contras:`),Zg(),Tk(139,` Pode ter incompatibilidade com `),Jc(140,`em`),Tk(141,`browsers`),Zg(),Tk(142,` antigos que não dão suporte a variáveis no CSS.`),Zg(),Jc(143,`blockquote`)(144,`p`),Tk(145,`Atenção: Para saber quais browsers dão suporte a variáveis você pode consultar a ferramenta `),Jc(146,`a`,2),Tk(147,`Can I use`),Zg(),Tk(148,`.`),Zg()()())},dependencies:[Tze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var W=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:402,vars:0,consts:[[`p-title`,`Grid System`,1,`guides`,`app-portal`],[`href`,`https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout`],[1,`po-row`,`guides-grid-system-box`],[1,`po-xl-1`,`po-lg-1`,`po-md-1`,`po-sm-1`],[1,`language-html`],[`href`,`/guides/how-install`],[1,`po-xl-6`,`po-lg-6`,`po-md-6`,`po-sm-6`],[1,`po-xl-8`,`po-lg-8`,`po-md-8`,`po-sm-8`],[1,`po-xl-4`,`po-lg-4`,`po-md-4`,`po-sm-4`],[1,`po-md-6`],[1,`po-lg-4`],[1,`po-xl-6`,`po-lg-6`,`po-md-12`,`po-sm-12`],[1,`guides-grid-system-containers`],[1,`po-visible-sm`,`po-sm-12`],[1,`po-visible-md`,`po-md-12`],[1,`po-visible-lg-12`],[1,`po-visible-xl-12`],[1,`po-hidden-sm`,`po-md-12`,`po-lg-12`,`po-xl-12`],[1,`po-hidden-md`,`po-sm-12`,`po-lg-12`,`po-xl-12`],[1,`po-hidden-lg`,`po-sm-12`,`po-md-12`,`po-xl-12`],[1,`po-hidden-xl`,`po-sm-12`,`po-md-12`,`po-lg-12`],[1,`po-xl-4`,`po-lg-4`,`po-md-6`,`po-sm-12`],[1,`po-offset-lg-4`,`po-offset-xl-4`,`po-xl-4`,`po-lg-4`,`po-md-6`,`po-sm-12`],[1,`po-offset-lg-3`,`po-offset-xl-3`,`po-xl-4`,`po-lg-4`,`po-md-6`,`po-sm-12`],[1,`po-xl-3`,`po-lg-3`,`po-md-6`,`po-sm-12`],[1,`language-css`],[1,`language-typescript`],[1,`po-row`],[1,`po-xl-6`,`po-lg-8`,`po-md-10`,`po-sm-12`],[1,`po-table`,`po-text-color-neutral-dark-40`],[1,`po-table-header`],[1,`po-table-header-ellipsis`],[1,`po-table-row`],[1,`po-table-column`]],template:function(o,s){o&1&&(Jc(0,`po-page-default`,0)(1,`p`),Tk(2,`O `),Jc(3,`a`,1),Tk(4,`Grid System`),Zg(),Tk(5,` \xE9 uma estrutura
que permite combinar os elementos em linhas ou em colunas. Esta estrutura costuma seguir um padr\xE3o de configura\xE7\xE3o, determinando:`),Zg(),Jc(6,`ul`)(7,`li`),Tk(8,`Um número máximo de colunas que uma tela pode ser dividida.`),Zg(),Jc(9,`li`),Tk(10,`Padrão na nomenclatura das classes que referem-se as colunas.`),Zg(),Jc(11,`li`),Tk(12,`As colunas podem ser envolvidas por uma classe que delimita e representa a linha.`),Zg(),Jc(13,`li`),Tk(14,`O somat\xF3rio dos n\xFAmeros das colunas de uma linha deve ser igual ao n\xFAmero m\xE1ximo de colunas. Por exemplo, supondo que o
n\xFAmero m\xE1ximo seja igual a 12 colunas, ent\xE3o: po-md-5 + po-md-7 = 12 colunas.`),Zg()(),Jc(15,`p`),Tk(16,`O Grid System do PO, trabalha com a divis\xE3o m\xE1xima da tela em 12 colunas, ou seja, o somat\xF3rio de todas as colunas dentro
de uma linha deve ser igual a 12. No exemplo abaixo, temos 12 colunas de tamanho igual a 1. Cada uma dessas colunas tem o
tamanho igual a 1/12 do seu elemento pai. `),Zg(),Jc(17,`div`,2),_u(18,`div`,3)(19,`div`,3)(20,`div`,3)(21,`div`,3)(22,`div`,3)(23,`div`,3)(24,`div`,3)(25,`div`,3)(26,`div`,3)(27,`div`,3)(28,`div`,3)(29,`div`,3),Zg(),Jc(30,`pre`)(31,`code`,4),Tk(32,`<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
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
`),Zg()(),Jc(33,`blockquote`)(34,`p`),Tk(35,`Estas classes podem ser usadas instalando o `),Jc(36,`code`),Tk(37,`@po-ui/style`),Zg(),Tk(38,` do `),Jc(39,`strong`),Tk(40,`PO`),Zg(),Tk(41,`. Veja mais em `),Jc(42,`a`,5),Tk(43,`Como instalar o PO`),Zg(),Tk(44,`.`),Zg()(),Jc(45,`h2`),Tk(46,`Nomenclatura das classes e tamanhos das telas`),Zg(),Jc(47,`p`),Tk(48,`A nomenclatura das classes das colunas seguem o padrão: `),Jc(49,`code`),Tk(50,`po-<tamanho-tela>-<tamanho-coluna>`),Zg(),Tk(51,`, como por exemplo a classe
`),Jc(52,`code`),Tk(53,`po-md-6`),Zg(),Tk(54,` que representa uma coluna com tamanho m\xE9dio e que utiliza 6/12 da largura do elemento pai. Para os intervalos
de tamanhos, tem-se o padr\xE3o:`),Zg(),Jc(55,`ul`)(56,`li`)(57,`code`),Tk(58,`po-sm-*`),Zg(),Tk(59,` para telas com tamanho máximo de 480px.`),Zg(),Jc(60,`li`)(61,`code`),Tk(62,`po-md-*`),Zg(),Tk(63,` para telas com tamanho entre 481px e 960px.`),Zg(),Jc(64,`li`)(65,`code`),Tk(66,`po-lg-*`),Zg(),Tk(67,` para telas com tamanho entre 961px e 1366px.`),Zg(),Jc(68,`li`)(69,`code`),Tk(70,`po-xl-*`),Zg(),Tk(71,` para telas com tamanho mínimo de 1367px.`),Zg()(),Jc(72,`p`),Tk(73,`Para dividir a tela em duas colunas do mesmo tamanho, basta criar dois elementos com classes de tamanho 6, conforme o pr\xF3ximo
exemplo:`),Zg(),Jc(74,`div`,2),_u(75,`div`,6)(76,`div`,6),Zg(),Jc(77,`pre`)(78,`code`,4),Tk(79,`<div class="po-row">
  <div class="po-xl-6 po-lg-6 po-md-6 po-sm-6"></div>
  <div class="po-xl-6 po-lg-6 po-md-6 po-sm-6"></div>
</div>
`),Zg()(),Jc(80,`p`),Tk(81,`Outro exemplo para criar duas colunas, sendo uma com tamanho 8 e outra com tamanho 4:`),Zg(),Jc(82,`div`,2),_u(83,`div`,7)(84,`div`,8),Zg(),Jc(85,`pre`)(86,`code`,4),Tk(87,`<div class="po-xl-8 po-lg-8 po-md-8 po-sm-8"></div>
<div class="po-xl-4 po-lg-4 po-md-4 po-sm-4"></div>
`),Zg()(),Jc(88,`p`),Tk(89,`Ao definir apenas a classe `),Jc(90,`code`),Tk(91,`po-md-*`),Zg(),Tk(92,`, os tamanhos de tela menores que po-md assumem o tamanho de coluna igual a 12 e os
maiores o tamanho definido no `),Jc(93,`code`),Tk(94,`*`),Zg(),Tk(95,`. Da mesma forma ocorre com a classe `),Jc(96,`code`),Tk(97,`po-lg-*`),Zg(),Tk(98,`, os tamanhos menores ficam igual a 12 e
os maiores igual ao tamanho do `),Jc(99,`code`),Tk(100,`*`),Zg(),Tk(101,`.`),Zg(),Jc(102,`blockquote`)(103,`p`),Tk(104,`Este comportamento limita-se apenas as classes `),Jc(105,`code`),Tk(106,`po-md-*`),Zg(),Tk(107,` e `),Jc(108,`code`),Tk(109,`po-lg-*`),Zg(),Tk(110,`.`),Zg()(),Jc(111,`p`),Tk(112,`O exemplo abaixo mostra este comportamento, para isso redimensione a tela do navegador.`),Zg(),Jc(113,`div`,2)(114,`div`,9),Tk(115,`po-md-6`),Zg(),Jc(116,`div`,9),Tk(117,`po-md-6`),Zg()(),Jc(118,`div`,2)(119,`div`,10),Tk(120,`po-lg-4`),Zg(),Jc(121,`div`,10),Tk(122,`po-lg-4`),Zg(),Jc(123,`div`,10),Tk(124,`po-lg-4`),Zg()(),Jc(125,`pre`)(126,`code`,4),Tk(127,`<div class="po-row">
  <div class="po-md-6">po-md-6</div>
  <div class="po-md-6">po-md-6</div>
</div>

<div class="po-row">
  <div class="po-lg-4">po-lg-4</div>
  <div class="po-lg-4">po-lg-4</div>
  <div class="po-lg-4">po-lg-4</div>
</div>
`),Zg()(),Jc(128,`blockquote`)(129,`p`),Tk(130,`A classe para envolver as colunas é chamada de `),Jc(131,`code`),Tk(132,`po-row`),Zg(),Tk(133,`, sendo o seu uso opcional. Normalmente sendo utilizada para poder
organizar telas que cont\xE9m diversas linhas. `),Zg()(),Jc(134,`h2`),Tk(135,`Responsividade`),Zg(),Jc(136,`p`),Tk(137,`Para alterar a largura das colunas conforme o tamanho da tela, \xE9 necess\xE1rio determinar que tamanho estar\xE1 a coluna em cada
tamanho de tela. Supondo que se tenha uma tela com duas colunas do mesmo tamanho, conforme o exemplo abaixo:`),Zg(),Jc(138,`div`,2),_u(139,`div`,6)(140,`div`,6),Zg(),Jc(141,`pre`)(142,`code`,4),Tk(143,`<div class="po-row">
  <div class="po-xl-6 po-lg-6 po-md-6 po-sm-6"></div>
  <div class="po-xl-6 po-lg-6 po-md-6 po-sm-6"></div>
</div>
`),Zg()(),Jc(144,`p`),Tk(145,`No entanto, quando a tela diminui os elementos no interior da coluna podem n\xE3o ficar bem estruturados, ent\xE3o podemos determinar
que quando a tela estiver pequena estas duas colunas ter\xE3o a largura total do seu elemento pai, da seguinte forma:`),Zg(),Jc(146,`div`,2),_u(147,`div`,11)(148,`div`,11),Zg(),Jc(149,`pre`)(150,`code`,4),Tk(151,`<div class="po-row">
  <div class="po-xl-6 po-lg-6 po-md-12 po-sm-12"></div>
  <div class="po-xl-6 po-lg-6 po-md-12 po-sm-12"></div>
</div>
`),Zg()(),Jc(152,`p`),Tk(153,`Se a tela for redimensionada, as colunas ir\xE3o mudar de tamanho. Desta mesma forma, pode-se determinar e estruturar diversos
tamanhos de colunas para cada tamanho de tela.`),Zg(),Jc(154,`blockquote`)(155,`p`),Tk(156,`Consulte o Style Guide do PO UI, para saber o número máximo de colunas por tamanho de tela.`),Zg()(),Jc(157,`h2`),Tk(158,`Classes visible e hidden`),Zg(),Jc(159,`p`),Tk(160,`Para poder deixar um determinado tamanho visível ou não, existem disponíveis as classes `),Jc(161,`code`),Tk(162,`po-visible-[tamanho]`),Zg(),Tk(163,` e `),Jc(164,`code`),Tk(165,`po-hidden-[tamanho]`),Zg(),Tk(166,`.`),Zg(),Jc(167,`h3`),Tk(168,`po-visible-[tamanho]`),Zg(),Jc(169,`p`),Tk(170,`Esta classe determina que o elemento será visível na tela quando estiver em determinado tamanho. Ao fazer essa declaração, o elemento assume a propriedade `),Jc(171,`code`),Tk(172,`display: block`),Zg(),Tk(173,` e os demais tamanhos ficarão invisíveis `),Jc(174,`code`),Tk(175,`(display: none)`),Zg(),Tk(176,`. Existem duas formas de descrever a classe po-visible. Uma forma seria a definição de visibilidade separado da definição do tamanho, como `),Jc(177,`code`),Tk(178,`po-visible-sm po-sm-6`),Zg(),Tk(179,`. Outra forma seria a opção de utilizar a definição junto com a declaração do tamanho, como: `),Jc(180,`code`),Tk(181,`po-visible-sm-6`),Zg(),Tk(182,`.`),Zg(),Jc(183,`p`),Tk(184,`Abaixo tem-se um exemplo onde só irá aparecer a `),Jc(185,`code`),Tk(186,`<div>`),Zg(),Tk(187,` quando atingir o tamanho especificado no po-visible. `),Zg(),Jc(188,`blockquote`)(189,`p`),Tk(190,`Para isso, redimensione a tela do seu navegador.`),Zg()(),Jc(191,`div`,12)(192,`div`,13),Tk(193,`Visível no tamanho 'sm'`),Zg(),Jc(194,`div`,14),Tk(195,`Visível no tamanho 'md'`),Zg(),Jc(196,`div`,15),Tk(197,`Visível no tamanho 'lg'`),Zg(),Jc(198,`div`,16),Tk(199,`Visível no tamanho 'xl'`),Zg()(),Jc(200,`pre`)(201,`code`,4),Tk(202,`<div class="po-visible-sm po-sm-12">Vis\xEDvel no tamanho 'sm'</div>
<div class="po-visible-md po-md-12">Vis\xEDvel no tamanho 'md'</div>
<div class="po-visible-lg-12">Vis\xEDvel no tamanho 'lg'</div>
<div class="po-visible-xl-12">Vis\xEDvel no tamanho 'xl'</div>
`),Zg()(),Jc(203,`blockquote`)(204,`p`),Tk(205,`Atenção: ao utilizar esta classe, o elemento recebe a propriedade `),Jc(206,`code`),Tk(207,`display`),Zg(),Tk(208,` com o valor `),Jc(209,`code`),Tk(210,`block`),Zg(),Tk(211,`. `),Zg()(),Jc(212,`h3`),Tk(213,`po-hidden-[tamanho]`),Zg(),Jc(214,`p`),Tk(215,`Ao utilizar esta classe, o elemento ficará invisível `),Jc(216,`code`),Tk(217,`(display: none)`),Zg(),Tk(218,` ao atingir o tamanho especificado. Por exemplo, as `),Jc(219,`code`),Tk(220,`<div>`),Zg(),Tk(221,` abaixo irão desaparecer quando atingir o tamanho especificado no po-hidden. `),Zg(),Jc(222,`blockquote`)(223,`p`),Tk(224,`Para isso, redimensione a tela do seu navegador.`),Zg()(),Jc(225,`div`,12)(226,`div`,17),Tk(227,`Ficará invisível no tamanho 'sm'`),Zg(),Jc(228,`div`,18),Tk(229,`Ficará invisível no tamanho 'md'`),Zg(),Jc(230,`div`,19),Tk(231,`Ficará invisível no tamanho 'lg'`),Zg(),Jc(232,`div`,20),Tk(233,`Ficará invisível no tamanho 'xl'`),Zg()(),Jc(234,`pre`)(235,`code`,4),Tk(236,`<div class="po-hidden-sm po-md-12 po-lg-12 po-xl-12">Ficar\xE1 invis\xEDvel no tamanho 'sm'</div>
<div class="po-hidden-md po-sm-12 po-lg-12 po-xl-12">Ficar\xE1 invis\xEDvel no tamanho 'md'</div>
<div class="po-hidden-lg po-sm-12 po-md-12 po-xl-12">Ficar\xE1 invis\xEDvel no tamanho 'lg'</div>
<div class="po-hidden-xl po-sm-12 po-md-12 po-lg-12">Ficar\xE1 invis\xEDvel no tamanho 'xl'</div>
`),Zg()(),Jc(237,`h2`),Tk(238,`Deslocamento de colunas (po-offset)`),Zg(),Jc(239,`p`),Tk(240,`É possível fazer o deslocamento das colunas para a direita utilizando a classe `),Jc(241,`code`),Tk(242,`po-offset-[ sm | md | lg | xl ]-[tamanho]`),Zg(),Tk(243,`.
Quando esta classe \xE9 definida em um elemento, o mesmo receber\xE1 uma margem \xE0 esquerda quando atingir o tamanho de tela indicado,
como o `),Jc(244,`code`),Tk(245,`sm`),Zg(),Tk(246,` ou `),Jc(247,`code`),Tk(248,`md`),Zg(),Tk(249,`. A quantidade de deslocamento \xE9 definida por n\xFAmero de colunas, assim como no tamanho. Ent\xE3o, para ter
um deslocamento com tamanho 2 no tamanho de tela `),Jc(250,`code`),Tk(251,`sm`),Zg(),Tk(252,`, basta escrever: `),Jc(253,`code`),Tk(254,`po-offset-sm-2`),Zg(),Tk(255,`.`),Zg(),Jc(256,`p`),Tk(257,`No exemplo abaixo, tem-se duas linhas e ambas utilizam o deslocamento para a direita quando atingirem o tamanho `),Jc(258,`code`),Tk(259,`lg`),Zg(),Tk(260,` e `),Jc(261,`code`),Tk(262,`xl`),Zg(),Tk(263,`.
A primeira linha tem um deslocamento igual \xE0 4 na segunda coluna. E a segunda linha tem um deslocamento igual \xE0 3 na primeira
coluna.`),Zg(),Jc(264,`div`,2)(265,`div`,21),Tk(266,`Tamanho 4 e sem offset`),Zg(),Jc(267,`div`,22),Tk(268,`Tamanho 4 e offset 4`),Zg()(),Jc(269,`div`,2)(270,`div`,23),Tk(271,`Tamanho 4 e offset 3`),Zg(),Jc(272,`div`,24),Tk(273,`Tamanho 3 e sem offset`),Zg()(),Jc(274,`pre`)(275,`code`,4),Tk(276,`<div class="po-row">
  <div class="po-xl-4 po-lg-4  po-md-6 po-sm-12">Tamanho 4 e sem offset</div>
  <div class="po-offset-lg-4 po-offset-xl-4 po-xl-4 po-lg-4 po-md-6 po-sm-12">Tamanho 4 e offset 4</div>
</div>

<div class="po-row">
  <div class="po-offset-lg-3 po-offset-xl-3 po-xl-4 po-lg-4 po-md-6 po-sm-12">Tamanho 4 e offset 3</div>
  <div class="po-xl-3 po-lg-3 po-md-6 po-sm-12">Tamanho 3 e sem offset</div>
</div>
`),Zg()(),Jc(277,`blockquote`)(278,`p`),Tk(279,`O número de colunas para o deslocamento não necessita ser igual ao tamanho do elemento. Por exemplo: `),Jc(280,`code`),Tk(281,`po-offset-lg-3 po-lg-4`),Zg(),Tk(282,`.`),Zg()(),Jc(283,`blockquote`)(284,`p`),Tk(285,`É importante lembrar que o somatório de colunas com po-offset e os tamanhos dos elementos deve ser menor ou igual a 12.`),Zg()(),Jc(286,`blockquote`)(287,`p`),Tk(288,`Os tamanhos de deslocamentos do po-offset variam de 1 a 11, não incluindo o espaçamento igual a 12.`),Zg()(),Jc(289,`h2`),Tk(290,`Customização dos breakpoints`),Zg(),Jc(291,`p`),Tk(292,`Atualmente, os navegadores não interpretam a leitura de variáveis em regras de breakpoint como por exemplo:`),Zg(),Jc(293,`p`)(294,`code`),Tk(295,`@media (min-width: var(--variavel-customizavel))`),Zg()(),Jc(296,`p`),Tk(297,`Porém, disponibilizamos os tokens de breakpoint no formato `),Jc(298,`code`),Tk(299,`var(--nome-da-variavel)`),Zg(),Tk(300,` junto as regras de media query permitindo ao desenvolvedor realizar a customização dos breakpoints em tempo de execução através do serviço `),Jc(301,`code`),Tk(302,`PoMediaQueryService`),Zg(),Tk(303,`.`),Zg(),Jc(304,`h3`),Tk(305,`Tokens de breakpoint customizáveis:`),Zg(),Jc(306,`ul`)(307,`li`)(308,`code`),Tk(309,`--gridSystemSmMaxWidth`),Zg(),Tk(310,`: 480px (valor padrão)`),Zg(),Jc(311,`li`)(312,`code`),Tk(313,`--gridSystemMdMinWidth`),Zg(),Tk(314,`: 481px (valor padrão)`),Zg(),Jc(315,`li`)(316,`code`),Tk(317,`--gridSystemMdMaxWidth`),Zg(),Tk(318,`: 960px (valor padrão)`),Zg(),Jc(319,`li`)(320,`code`),Tk(321,`--gridSystemLgMinWidth`),Zg(),Tk(322,`: 961px (valor padrão)`),Zg(),Jc(323,`li`)(324,`code`),Tk(325,`--gridSystemLgMaxWidth`),Zg(),Tk(326,`: 1366px (valor padrão)`),Zg(),Jc(327,`li`)(328,`code`),Tk(329,`--gridSystemXlMinWidth`),Zg(),Tk(330,`: 1367px (valor padrão)`),Zg(),Jc(331,`li`)(332,`code`),Tk(333,`--gridSystemPullMaxWidth`),Zg(),Tk(334,`: 480px (valor padrão)`),Zg(),Jc(335,`li`)(336,`code`),Tk(337,`--gidSystemOffsetMaxWidth`),Zg(),Tk(338,`: 480px (valor padrão)`),Zg()(),Jc(339,`p`),Tk(340,`Nos arquivos de `),Jc(341,`code`),Tk(342,`grid-system`),Zg(),Tk(343,` do `),Jc(344,`code`),Tk(345,`po-style`),Zg(),Tk(346,`, a regra de breakpoint está escrita conforme modelo:`),Zg(),Jc(347,`pre`)(348,`code`,25),Tk(349,`@media (min-width: var(--gridSystemMdMinWidth)) and (max-width: var(--gridSystemMdMaxWidth)){...}
`),Zg()(),Jc(350,`p`),Tk(351,`No exemplo acima está demonstrado o formato da regra de breakpoint para `),Jc(352,`code`),Tk(353,`gridsystem-md`),Zg(),Tk(354,`.`),Zg(),Jc(355,`p`),Tk(356,`Para o desenvolvedor customizar a regra do grid-system acima, poderá utilizar o serviço PoMediaQueryService na inicialização do seu app, informando a regra e os respectivos valores, conforme o exemplo abaixo:`),Zg(),Jc(357,`pre`)(358,`code`,26),Tk(359,`const tokens: PoMediaQueryTokens =  {
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
`),Zg()(),Jc(360,`p`),Tk(361,`A seguir segue a relação das regras de breakpoints do grid-system caso necessite customizá-las:`),Zg(),Jc(362,`div`,27)(363,`div`,28)(364,`table`,29)(365,`thead`)(366,`tr`,30)(367,`th`,31),Tk(368,`Grid-System`),Zg(),Jc(369,`th`,31),Tk(370,`Regra de breakpoint`),Zg()()(),Jc(371,`tbody`)(372,`tr`,32)(373,`td`,33),Tk(374,`po-grid-system-sm`),Zg(),Jc(375,`td`,33),Tk(376,`(max-width: var(--gridSystemSmMaxWidth))`),Zg()(),Jc(377,`tr`,32)(378,`td`,33),Tk(379,`po-grid-system-md`),Zg(),Jc(380,`td`,33),Tk(381,`(min-width: var(--gridSystemMdMinWidth)) and (max-width: var(--gridSystemMdMaxWidth))`),Zg()(),Jc(382,`tr`,32)(383,`td`,33),Tk(384,`po-grid-system-lg`),Zg(),Jc(385,`td`,33),Tk(386,`(min-width: var(--gridSystemLgMinWidth)) and (max-width: var(--gridSystemLgMaxWidth))`),Zg()(),Jc(387,`tr`,32)(388,`td`,33),Tk(389,`po-grid-system-xl`),Zg(),Jc(390,`td`,33),Tk(391,`(min-width: var(--gridSystemXlMinWidth))`),Zg()(),Jc(392,`tr`,32)(393,`td`,33),Tk(394,`po-grid-system-pull`),Zg(),Jc(395,`td`,33),Tk(396,`(max-width: var(--gridSystemPullMaxWidth))`),Zg()(),Jc(397,`tr`,32)(398,`td`,33),Tk(399,`po-grid-system-offset`),Zg(),Jc(400,`td`,33),Tk(401,`(min-width: var(--gridSystemOffsetMaxWidth)) and (max-width: var(--gridSystemOffsetMaxWidth))`),Zg()()()()()()())},dependencies:[Tze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var Q=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:287,vars:0,consts:[[`p-title`,`Espaçamento`,1,`guides`,`app-portal`],[`href`,`/guides/how-install`],[1,`guides-spacing-sample-container`,`po-mt-1`,`po-mb-1`],[1,`guides-spacing`],[1,`po-m-5`],[1,`po-ml-5`],[1,`po-ml-md-5`],[1,`po-ml-lg-5`],[1,`po-ml-5`,`po-mr-5`],[1,`po-ml-md-5`,`po-ml-xl-0`],[1,`language-html`],[`href`,`https://www.w3schools.com/cssref/pr_margin.asp`]],template:function(o,s){o&1&&(Jc(0,`po-page-default`,0)(1,`p`),Tk(2,`O PO conta com um set de classes CSS utilitárias para modificação do espaçamento entre elementos HTML.`),Zg(),Jc(3,`h2`),Tk(4,`Como funciona`),Zg(),Jc(5,`p`),Tk(6,`Na composição de telas é eventual o ajuste do espaçamento entre os elementos adjacentes envolvidos. Exemplos disso são vistos quando trabalha-se responsivamente um grupo de elementos, como `),Jc(7,`em`),Tk(8,`widgets`),Zg(),Tk(9,` (po-widget) ou linhas de um `),Jc(10,`em`),Tk(11,`grid system`),Zg(),Tk(12,` (po-row).`),Zg(),Jc(13,`p`),Tk(14,`Há cinco dimensões disponíveis para definição de `),Jc(15,`strong`),Tk(16,`margin`),Zg(),Tk(17,` e também para `),Jc(18,`strong`),Tk(19,`padding`),Zg(),Tk(20,`. A unidade de medida utilizada para elas no CSS é a REM. Basicamente, a REM sempre terá o valor do contexto do ROOT, ou seja, o valor de font-size definido em `),Jc(21,`em`),Tk(22,`body`),Zg(),Tk(23,`. Considerando que `),Jc(24,`code`),Tk(25,`font-family: 16px`),Zg(),Tk(26,` é o padrão no PO, então `),Jc(27,`code`),Tk(28,`margin: 1rem`),Zg(),Tk(29,` também equivale a 16px. As variantes das classes de margem e padding vão de 0.5rem (8px) a 2.5rem (40px).`),Zg(),Jc(30,`h2`),Tk(31,`Definições`),Zg(),Jc(32,`p`),Tk(33,`Os nomes das classes usam o formato: `),Zg(),Jc(34,`ul`)(35,`li`)(36,`code`),Tk(37,`po-<propriedade>-<tamanho-espaçamento>`),Zg(),Tk(38,` para definição em todos os lados do elemento. Por exemplo: `),Jc(39,`code`),Tk(40,`po-m-1`),Zg(),Tk(41,`; `),Zg(),Jc(42,`li`)(43,`code`),Tk(44,`po-<propriedade><lado>-<tamanho-espaçamento>`),Zg(),Tk(45,` para apenas um dos lados. Por exemplo: `),Jc(46,`code`),Tk(47,`po-ml-1`),Zg(),Tk(48,`;`),Zg(),Jc(49,`li`)(50,`code`),Tk(51,`po-<propriedade><lado>-<tamanho-tela>-<tamanho-espaçamento>`),Zg(),Tk(52,` para tamanhos específicos de telas. Por exemplo: `),Jc(53,`code`),Tk(54,`po-ml-md-1`),Zg(),Tk(55,`.`),Zg()(),Jc(56,`p`),Tk(57,`As definições de propridades são:`),Zg(),Jc(58,`ul`)(59,`li`)(60,`code`),Tk(61,`m`),Zg(),Tk(62,` - para classes de ajuste de `),Jc(63,`code`),Tk(64,`margin`),Zg(),Tk(65,`;`),Zg(),Jc(66,`li`)(67,`code`),Tk(68,`p`),Zg(),Tk(69,` - para classes de ajuste de `),Jc(70,`code`),Tk(71,`padding`),Zg(),Tk(72,`.`),Zg()(),Jc(73,`p`),Tk(74,`As definições de lados são:`),Zg(),Jc(75,`ul`)(76,`li`)(77,`code`),Tk(78,`t`),Zg(),Tk(79,` - para ajustes de `),Jc(80,`code`),Tk(81,`margin-top`),Zg(),Tk(82,` ou `),Jc(83,`code`),Tk(84,`padding-top`),Zg(),Tk(85,`;`),Zg(),Jc(86,`li`)(87,`code`),Tk(88,`r`),Zg(),Tk(89,` - para ajustes de `),Jc(90,`code`),Tk(91,`margin-right`),Zg(),Tk(92,` ou `),Jc(93,`code`),Tk(94,`padding-right`),Zg(),Tk(95,`;`),Zg(),Jc(96,`li`)(97,`code`),Tk(98,`b`),Zg(),Tk(99,` - para ajustes de `),Jc(100,`code`),Tk(101,`margin-bottom`),Zg(),Tk(102,` ou `),Jc(103,`code`),Tk(104,`padding-bottom`),Zg(),Tk(105,`;`),Zg(),Jc(106,`li`)(107,`code`),Tk(108,`l`),Zg(),Tk(109,` - para ajustes de `),Jc(110,`code`),Tk(111,`margin-left`),Zg(),Tk(112,` ou `),Jc(113,`code`),Tk(114,`padding-left`),Zg(),Tk(115,`;`),Zg(),Jc(116,`li`)(117,`em`),Tk(118,`Para todos os lados basta ignorar essa definição`),Zg(),Tk(119,`;`),Zg()(),Jc(120,`p`),Tk(121,`As definições de tamanho de tela são:`),Zg(),Jc(122,`ul`)(123,`li`)(124,`code`),Tk(125,`sm`),Zg(),Tk(126,` - para telas com tamanho máximo de `),Jc(127,`code`),Tk(128,`480px`),Zg(),Tk(129,`;`),Zg(),Jc(130,`li`)(131,`code`),Tk(132,`md`),Zg(),Tk(133,` - para telas com tamanho a partir de `),Jc(134,`code`),Tk(135,`481px`),Zg(),Tk(136,`;`),Zg(),Jc(137,`li`)(138,`code`),Tk(139,`lg`),Zg(),Tk(140,` - para telas com tamanho a partir de `),Jc(141,`code`),Tk(142,`961px`),Zg(),Tk(143,`;`),Zg(),Jc(144,`li`)(145,`code`),Tk(146,`xl`),Zg(),Tk(147,` - para telas com tamanho a partir de `),Jc(148,`code`),Tk(149,`1367px`),Zg(),Tk(150,`.`),Zg()(),Jc(151,`p`),Tk(152,`As definições de tamanhos disponíveis são:`),Zg(),Jc(153,`ul`)(154,`li`)(155,`code`),Tk(156,`0`),Zg(),Tk(157,` - `),Jc(158,`code`),Tk(159,`margin`),Zg(),Tk(160,` ou `),Jc(161,`code`),Tk(162,`padding`),Zg(),Tk(163,` com valor igual a `),Jc(164,`code`),Tk(165,`0`),Zg(),Tk(166,`; `),Zg(),Jc(167,`li`)(168,`code`),Tk(169,`1`),Zg(),Tk(170,` - `),Jc(171,`code`),Tk(172,`margin`),Zg(),Tk(173,` ou `),Jc(174,`code`),Tk(175,`padding`),Zg(),Tk(176,` com valor igual a `),Jc(177,`code`),Tk(178,`8px`),Zg(),Tk(179,`; `),Zg(),Jc(180,`li`)(181,`code`),Tk(182,`2`),Zg(),Tk(183,` - `),Jc(184,`code`),Tk(185,`margin`),Zg(),Tk(186,` ou `),Jc(187,`code`),Tk(188,`padding`),Zg(),Tk(189,` com valor igual a `),Jc(190,`code`),Tk(191,`16px`),Zg(),Tk(192,`; `),Zg(),Jc(193,`li`)(194,`code`),Tk(195,`3`),Zg(),Tk(196,` - `),Jc(197,`code`),Tk(198,`margin`),Zg(),Tk(199,` ou `),Jc(200,`code`),Tk(201,`padding`),Zg(),Tk(202,` com valor igual a `),Jc(203,`code`),Tk(204,`24px`),Zg(),Tk(205,`; `),Zg(),Jc(206,`li`)(207,`code`),Tk(208,`4`),Zg(),Tk(209,` - `),Jc(210,`code`),Tk(211,`margin`),Zg(),Tk(212,` ou `),Jc(213,`code`),Tk(214,`padding`),Zg(),Tk(215,` com valor igual a `),Jc(216,`code`),Tk(217,`32px`),Zg(),Tk(218,`; `),Zg(),Jc(219,`li`)(220,`code`),Tk(221,`5`),Zg(),Tk(222,` - `),Jc(223,`code`),Tk(224,`margin`),Zg(),Tk(225,` ou `),Jc(226,`code`),Tk(227,`padding`),Zg(),Tk(228,` com valor igual a `),Jc(229,`code`),Tk(230,`40px`),Zg(),Tk(231,`;`),Zg()(),Jc(232,`blockquote`)(233,`p`),Tk(234,`Estas classes podem ser usadas instalando o `),Jc(235,`code`),Tk(236,`@po-ui/style`),Zg(),Tk(237,` do `),Jc(238,`strong`),Tk(239,`PO`),Zg(),Tk(240,`. Veja mais em `),Jc(241,`a`,1),Tk(242,`Como instalar o PO`),Zg(),Tk(243,`.`),Zg()(),Jc(244,`h2`),Tk(245,`Exemplos`),Zg(),Jc(246,`p`),Tk(247,`Alguns exemplos de aplicação das classes:`),Zg(),Jc(248,`div`,2)(249,`div`,3)(250,`div`,4),Tk(251,`po-m-5`),Zg()()(),Jc(252,`div`,2)(253,`div`,3)(254,`div`,5),Tk(255,`po-ml-5`),Zg()()(),Jc(256,`div`,2)(257,`div`,3)(258,`div`,6),Tk(259,`po-ml-md-5`),Zg()()(),Jc(260,`div`,2)(261,`div`,3)(262,`div`,7),Tk(263,`po-ml-lg-5`),Zg()()(),Jc(264,`div`,2)(265,`div`,3)(266,`div`,8),Tk(267,`po-ml-5 po-mr-5`),Zg()()(),Jc(268,`div`,2)(269,`div`,3)(270,`div`,9),Tk(271,`po-ml-md-5 po-ml-xl-0`),Zg()()(),Jc(272,`pre`)(273,`code`,10),Tk(274,`<div class="po-m-5">po-m-5</div>
<div class="po-ml-5">po-ml-5</div>
<div class="po-ml-md-5">po-ml-md-5</div>
<div class="po-ml-lg-5">po-ml-lg-5</div>
<div class="po-ml-5 po-mr-5">po-ml-5 po-mr-5</div>
<div class="po-ml-md-5 po-ml-xl-0">po-ml-md-5 po-ml-xl-0</div>
`),Zg()(),Jc(275,`blockquote`)(276,`p`),Tk(277,`Quando duas margens verticais entrarem em contato entre si, ocorrerá um `),Jc(278,`a`,11),Tk(279,`colapso de margem`),Zg(),Tk(280,`. Se uma margem for maior que a outra, esta sobrescreverá o valor da menor, sobrando apenas a definição de margem com maior valor.`),Zg()(),Jc(281,`blockquote`)(282,`p`),Tk(283,`É considerada uma boa prática de CSS trabalhar, sempre que possível, apenas com definições de `),Jc(284,`code`),Tk(285,`margin-bottom`),Zg(),Tk(286,` para espaçamento entre elementos adjacentes.`),Zg()()())},dependencies:[Tze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var X=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:122,vars:0,consts:[[`p-title`,`Personalizando o Tema Padrão com Tokens CSS`,1,`guides`,`app-portal`],[`href`,`guides/theme-service`],[1,`language-json`],[1,`language-css`],[`src`,`./assets/graphics/theme/button-green-and-black.png`,`alt`,`Componente Button com a cor preta.`],[`src`,`./assets/graphics/theme/components-custom-colors.png`,`alt`,`Exemplo dos componentes com cores customizadas. Scroll da página com track amarelo e thumb laranja.`],[`href`,`https://doc.animaliads.io/docs/components/button/#live-demo`],[`href`,`https://caniuse.com/#search=CSS%20Variables`]],template:function(o,s){o&1&&(Jc(0,`po-page-default`,0)(1,`blockquote`)(2,`p`)(3,`strong`),Tk(4,`⚠️ Atualização Importante para Versões 18+`),Zg(),_u(5,`br`),Tk(6,`A partir da versão 18.X.X do PO-UI, recomendamos `),Jc(7,`strong`),Tk(8,`fortemente`),Zg(),Tk(9,` a utilização do `),Jc(10,`code`),Tk(11,`PoThemeService`),Zg(),Tk(12,` para todas as customizações de temas, incluindo:`),Zg(),Jc(13,`ul`)(14,`li`),Tk(15,`Tokens globais (cores, tipografia, espaçamentos) `),Zg(),Jc(16,`li`),Tk(17,`Estilos específicos por componente `),Zg(),Jc(18,`li`),Tk(19,`Gerenciamento de dark/light mode `),Zg(),Jc(20,`li`),Tk(21,`Controle de acessibilidade (AA/AAA)`),Zg()(),Jc(22,`p`)(23,`strong`),Tk(24,`Benefícios:`),Zg(),_u(25,`br`),Tk(26,`✅ Maior consistência visual`),_u(27,`br`),Tk(28,`✅ Manutenção simplificada`),_u(29,`br`),Tk(30,`✅ Transições suaves entre temas`),_u(31,`br`),Tk(32,`✅ Suporte integrado a acessibilidade `),Zg(),Jc(33,`p`),Tk(34,`📚 `),Jc(35,`a`,1),Tk(36,`Guia completo de Customização de Temas`),Zg()()(),Jc(37,`p`),Tk(38,`A partir da versão 1.9.0, o `),Jc(39,`strong`),Tk(40,`PO UI`),Zg(),Tk(41,` oferece a flexibilidade de personalização do tema padrão. Você pode ajustar várias propriedades como as cores, fonte, tamanho da fonte entre outros. Para isso, basta modificar os valores das variáveis utilizadas no CSS do tema padrão.`),Zg(),Jc(42,`h3`),Tk(43,`Como o tema do PO UI funciona`),Zg(),Jc(44,`p`),Tk(45,`Se voc\xEA j\xE1 tem uma aplica\xE7\xE3o que est\xE1 usando o tema padr\xE3o do PO UI, voc\xEA deve ter seu arquivo
`),Jc(46,`code`),Tk(47,`angular.json`),Zg(),Tk(48,` configurado da seguinte maneira.`),Zg(),Jc(49,`pre`)(50,`code`,2),Tk(51,`"styles": [
  // Arquivo com o tema do PO UI com as vari\xE1veis "compiladas"
  "node_modules/@po-ui/style/css/po-theme-default.min.css", 
  "src/styles.css"
],
`),Zg()(),Jc(52,`p`),Tk(53,`Essa configuração usa o arquivo CSS minificado e `),Jc(54,`em`),Tk(55,`"compilado"`),Zg(),Tk(56,`, ou seja, as vari\xE1veis do CSS foram
substitu\xEDdas pelos valores hexadecimais correspondentes das cores usadas (entre outras coisas). Na pr\xE1tica e resumidamente falando, o que aconteceu com esse arquivo foi o seguinte:`),Zg(),Jc(57,`pre`)(58,`code`,3),Tk(59,`/* Isso "compilando" ... */
po-button {
  --color: var(--color-action-default);
  --background-color: var(--color-transparent);
}

/* ... vira isso. */
.po-button{background-color: transparent;color: #753399;}
`),Zg()(),Jc(60,`h3`),Tk(61,`Configurando sua aplicação para permitir personalização abrangente`),Zg(),Jc(62,`p`),Tk(63,`Para possibilitar uma personalização abrangente, o `),Jc(64,`em`),Tk(65,`package`),Zg(),Jc(66,`code`),Tk(67,`@po-ui/style`),Zg(),Tk(68,` agora disponibiliza os arquivos contendo as variáveis CSS, bem como o arquivo de estilo sem a `),Jc(69,`em`),Tk(70,`"compilação"`),Zg(),Tk(71,` das variáveis. Isso permite não apenas a modificação das cores, mas também de outras propriedades via tokens. Para realizar essa configuração em seu projeto, é necessário carregar esses novos arquivos, substituindo o arquivo anterior que restringia a modificação abrangente das cores.`),Zg(),Jc(72,`pre`)(73,`code`,2),Tk(74,`"styles": [
  // Arquivo de vari\xE1veis (tema padr\xE3o)
  "node_modules/@po-ui/style/css/po-theme-default-variables.min.css",
  // Arquivo com os estilos sem as vari\xE1veis "compiladas"
  "node_modules/@po-ui/style/css/po-theme-core.min.css",
  "src/styles.css"
],
`),Zg()(),Jc(75,`blockquote`)(76,`p`),Tk(77,`Só isso não vai fazer diferença no seu projeto, as cores padrões ainda serão mantidas.`),Zg()(),Jc(78,`h3`),Tk(79,`Customizando Estilos no Seu Projeto`),Zg(),Jc(80,`p`),Tk(81,`Para personalizar os estilos no seu projeto Angular, voc\xEA pode criar um novo arquivo CSS ou editar um existente e
adicionar as seguintes linhas de c\xF3digo:`),Zg(),Jc(82,`pre`)(83,`code`,3),Tk(84,`po-button {
    --color: rgb(43, 215, 60);
    --border-radius: 12px;
    --font-size: 16px;
    --background-color: black;
}
`),Zg()(),Jc(85,`p`),Tk(86,`Só com isso já conseguimos dar uma nova cara para os nossos botões.`),Zg(),Jc(87,`p`),_u(88,`img`,4),Zg(),Jc(89,`p`),Tk(90,`Caso queira personalizar cores de forma global, é possível sobrescrever algumas variáveis globais:`),Zg(),Jc(91,`pre`)(92,`code`,3),Tk(93,`:root {
  --color-track: #ffecb3;
  --color-thumb: orange;
}
`),Zg()(),Jc(94,`p`),_u(95,`img`,5),Zg(),Jc(96,`p`),Tk(97,`Com essas personalizações, você terá controle não apenas sobre as cores, mas também sobre outros aspectos visuais dos componentes e templates em sua aplicação que utilizam o PO UI.`),Zg(),Jc(98,`blockquote`)(99,`p`),Tk(100,`Para descobrir quais variáveis você pode personalizar, consulte o arquivo `),Jc(101,`code`),Tk(102,`po-theme-default-variables.css`),Zg(),Tk(103,` na pasta `),Jc(104,`code`),Tk(105,`node_modules/@po-ui/style/css`),Zg(),Tk(106,`, l\xE1, voc\xEA
encontrar\xE1 uma lista completa de todas as vari\xE1veis utilizadas pelo tema padr\xE3o. Voc\xEA tamb\xE9m pode consultar a documenta\xE7\xE3o de cada componente no pr\xF3prio portal.`),Zg()(),Jc(107,`blockquote`)(108,`p`),Tk(109,`Para customização do componente `),Jc(110,`code`),Tk(111,`po-button`),Zg(),Tk(112,` verificar `),Jc(113,`a`,6),Tk(114,`variáveis customizaveis`),Zg(),Tk(115,` na aba de customização.`),Zg()(),Jc(116,`blockquote`)(117,`p`),Tk(118,`Atenção: Para saber quais browsers dão suporte a variáveis você pode consultar a ferramenta `),Jc(119,`a`,7),Tk(120,`Can I use`),Zg(),Tk(121,`.`),Zg()()())},dependencies:[Tze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var J=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:378,vars:0,consts:[[`p-title`,`Tipografia`,1,`guides`,`app-portal`],[1,`language-html`],[1,`po-font-text`],[1,`po-row`],[1,`po-md-8`,`po-lg-6`,`po-offset-md-2`,`po-offset-lg-3`,`po-offset-xl-3`,`po-shadow-card`],[1,`po-font-display`],[1,`po-sm-6`],[1,`po-font-text-large-bold`],[1,`po-font-large`],[1,`po-md-12`,`po-text-center`],[1,`po-font-title`],[1,`po-font-subtitle`],[1,`po-font-text-large`],[1,`po-font-text-bold`],[1,`po-font-text-uppercase`],[1,`po-font-text-small`],[1,`po-font-text-small-bold`],[1,`po-font-text-smaller`]],template:function(o,s){o&1&&(Jc(0,`po-page-default`,0)(1,`p`),Tk(2,`O PO disponibiliza as fontes usadas pelos componentes, essas fontes foram disponibilizadas no Style Guide pela equipe de UX.`),Zg(),Jc(3,`h3`),Tk(4,`Como Usar?`),Zg(),Jc(5,`pre`)(6,`code`,1),Tk(7,`<font class="po-font-text">Texto usado pelo PO</font>
`),Zg()(),Jc(8,`p`)(9,`font`,2),Tk(10,`Texto usado pelo PO`),Zg()(),Jc(11,`h3`),Tk(12,`Tipos Disponíveis`),Zg(),Jc(13,`div`,3)(14,`div`,4)(15,`div`,3)(16,`font`,5),Tk(17,`Display`),Zg()(),_u(18,`hr`),Jc(19,`div`,3)(20,`div`,6)(21,`font`,7),Tk(22,`Typeface:`),Zg()(),Jc(23,`div`,6)(24,`font`,8),Tk(25,`NunitoSans-ExtraLight`),Zg()()(),Jc(26,`div`,3)(27,`div`,6)(28,`font`,7),Tk(29,`Font-size:`),Zg()(),Jc(30,`div`,6)(31,`font`,8),Tk(32,`50`),Zg()()(),Jc(33,`div`,3)(34,`div`,6)(35,`font`,7),Tk(36,`Line-height:`),Zg()(),Jc(37,`div`,6)(38,`font`,8),Tk(39,`64`),Zg()()(),Jc(40,`div`,3)(41,`div`,9)(42,`font`,7),Tk(43,`.po-font-display`),Zg()()()()(),_u(44,`br`),Jc(45,`div`,3)(46,`div`,4)(47,`div`,3)(48,`font`,10),Tk(49,`Title`),Zg()(),_u(50,`hr`),Jc(51,`div`,3)(52,`div`,6)(53,`font`,7),Tk(54,`Typeface:`),Zg()(),Jc(55,`div`,6)(56,`font`,8),Tk(57,`NunitoSans-ExtraLight`),Zg()()(),Jc(58,`div`,3)(59,`div`,6)(60,`font`,7),Tk(61,`Font-size:`),Zg()(),Jc(62,`div`,6)(63,`font`,8),Tk(64,`34`),Zg()()(),Jc(65,`div`,3)(66,`div`,6)(67,`font`,7),Tk(68,`Line-height:`),Zg()(),Jc(69,`div`,6)(70,`font`,8),Tk(71,`48`),Zg()()(),Jc(72,`div`,3)(73,`div`,9)(74,`font`,7),Tk(75,`.po-font-title`),Zg()()()()(),_u(76,`br`),Jc(77,`div`,3)(78,`div`,4)(79,`div`,3)(80,`font`,11),Tk(81,`Subtitle`),Zg()(),_u(82,`hr`),Jc(83,`div`,3)(84,`div`,6)(85,`font`,7),Tk(86,`Typeface:`),Zg()(),Jc(87,`div`,6)(88,`font`,8),Tk(89,`NunitoSans`),Zg()()(),Jc(90,`div`,3)(91,`div`,6)(92,`font`,7),Tk(93,`Font-size:`),Zg()(),Jc(94,`div`,6)(95,`font`,8),Tk(96,`24`),Zg()()(),Jc(97,`div`,3)(98,`div`,6)(99,`font`,7),Tk(100,`Line-height:`),Zg()(),Jc(101,`div`,6)(102,`font`,8),Tk(103,`32`),Zg()()(),Jc(104,`div`,3)(105,`div`,9)(106,`font`,7),Tk(107,`.po-font-subtitle`),Zg()()()()(),_u(108,`br`),Jc(109,`div`,3)(110,`div`,4)(111,`div`,3)(112,`font`,12),Tk(113,`Text Large`),Zg()(),_u(114,`hr`),Jc(115,`div`,3)(116,`div`,6)(117,`font`,7),Tk(118,`Typeface:`),Zg()(),Jc(119,`div`,6)(120,`font`,8),Tk(121,`NunitoSans`),Zg()()(),Jc(122,`div`,3)(123,`div`,6)(124,`font`,7),Tk(125,`Font-size:`),Zg()(),Jc(126,`div`,6)(127,`font`,8),Tk(128,`16`),Zg()()(),Jc(129,`div`,3)(130,`div`,6)(131,`font`,7),Tk(132,`Line-height:`),Zg()(),Jc(133,`div`,6)(134,`font`,8),Tk(135,`24`),Zg()()(),Jc(136,`div`,3)(137,`div`,9)(138,`font`,7),Tk(139,`.po-font-text-large`),Zg()()()()(),_u(140,`br`),Jc(141,`div`,3)(142,`div`,4)(143,`div`,3)(144,`font`,7),Tk(145,`Text Large Bold`),Zg()(),_u(146,`hr`),Jc(147,`div`,3)(148,`div`,6)(149,`font`,7),Tk(150,`Typeface:`),Zg()(),Jc(151,`div`,6)(152,`font`,8),Tk(153,`NunitoSans-Bold`),Zg()()(),Jc(154,`div`,3)(155,`div`,6)(156,`font`,7),Tk(157,`Font-size:`),Zg()(),Jc(158,`div`,6)(159,`font`,8),Tk(160,`16`),Zg()()(),Jc(161,`div`,3)(162,`div`,6)(163,`font`,7),Tk(164,`Line-height:`),Zg()(),Jc(165,`div`,6)(166,`font`,8),Tk(167,`24`),Zg()()(),Jc(168,`div`,3)(169,`div`,9)(170,`font`,7),Tk(171,`.po-font-text-large-bold`),Zg()()()()(),_u(172,`br`),Jc(173,`div`,3)(174,`div`,4)(175,`div`,3)(176,`font`,2),Tk(177,`Text`),Zg()(),_u(178,`hr`),Jc(179,`div`,3)(180,`div`,6)(181,`font`,7),Tk(182,`Typeface:`),Zg()(),Jc(183,`div`,6)(184,`font`,8),Tk(185,`NunitoSans`),Zg()()(),Jc(186,`div`,3)(187,`div`,6)(188,`font`,7),Tk(189,`Font-size:`),Zg()(),Jc(190,`div`,6)(191,`font`,8),Tk(192,`14`),Zg()()(),Jc(193,`div`,3)(194,`div`,6)(195,`font`,7),Tk(196,`Line-height:`),Zg()(),Jc(197,`div`,6)(198,`font`,8),Tk(199,`24`),Zg()()(),Jc(200,`div`,3)(201,`div`,9)(202,`font`,7),Tk(203,`.po-font-text`),Zg()()()()(),_u(204,`br`),Jc(205,`div`,3)(206,`div`,4)(207,`div`,3)(208,`font`,13),Tk(209,`Text Bold`),Zg()(),_u(210,`hr`),Jc(211,`div`,3)(212,`div`,6)(213,`font`,7),Tk(214,`Typeface:`),Zg()(),Jc(215,`div`,6)(216,`font`,8),Tk(217,`NunitoSans-Bold`),Zg()()(),Jc(218,`div`,3)(219,`div`,6)(220,`font`,7),Tk(221,`Font-size:`),Zg()(),Jc(222,`div`,6)(223,`font`,8),Tk(224,`14`),Zg()()(),Jc(225,`div`,3)(226,`div`,6)(227,`font`,7),Tk(228,`Line-height:`),Zg()(),Jc(229,`div`,6)(230,`font`,8),Tk(231,`24`),Zg()()(),Jc(232,`div`,3)(233,`div`,9)(234,`font`,7),Tk(235,`.po-font-text-bold`),Zg()()()()(),_u(236,`br`),Jc(237,`div`,3)(238,`div`,4)(239,`div`,3)(240,`font`,14),Tk(241,`Text Uppercase`),Zg()(),_u(242,`hr`),Jc(243,`div`,3)(244,`div`,6)(245,`font`,7),Tk(246,`Typeface:`),Zg()(),Jc(247,`div`,6)(248,`font`,8),Tk(249,`NunitoSans-Bold`),Zg()()(),Jc(250,`div`,3)(251,`div`,6)(252,`font`,7),Tk(253,`Font-size:`),Zg()(),Jc(254,`div`,6)(255,`font`,8),Tk(256,`14`),Zg()()(),Jc(257,`div`,3)(258,`div`,6)(259,`font`,7),Tk(260,`Line-height:`),Zg()(),Jc(261,`div`,6)(262,`font`,8),Tk(263,`24`),Zg()()(),Jc(264,`div`,3)(265,`div`,6)(266,`font`,7),Tk(267,`Transform:`),Zg()(),Jc(268,`div`,6)(269,`font`,8),Tk(270,`Uppercase`),Zg()()(),Jc(271,`div`,3)(272,`div`,9)(273,`font`,7),Tk(274,`.po-font-text-uppercase`),Zg()()()()(),_u(275,`br`),Jc(276,`div`,3)(277,`div`,4)(278,`div`,3)(279,`font`,15),Tk(280,`Text Small`),Zg()(),_u(281,`hr`),Jc(282,`div`,3)(283,`div`,6)(284,`font`,7),Tk(285,`Typeface:`),Zg()(),Jc(286,`div`,6)(287,`font`,8),Tk(288,`NunitoSans`),Zg()()(),Jc(289,`div`,3)(290,`div`,6)(291,`font`,7),Tk(292,`Font-size:`),Zg()(),Jc(293,`div`,6)(294,`font`,8),Tk(295,`12`),Zg()()(),Jc(296,`div`,3)(297,`div`,6)(298,`font`,7),Tk(299,`Line-height:`),Zg()(),Jc(300,`div`,6)(301,`font`,8),Tk(302,`16`),Zg()()(),Jc(303,`div`,3)(304,`div`,9)(305,`font`,7),Tk(306,`.po-font-text-small`),Zg()()()()(),_u(307,`br`),Jc(308,`div`,3)(309,`div`,4)(310,`div`,3)(311,`font`,16),Tk(312,`Text Small Bold`),Zg()(),_u(313,`hr`),Jc(314,`div`,3)(315,`div`,6)(316,`font`,7),Tk(317,`Typeface:`),Zg()(),Jc(318,`div`,6)(319,`font`,8),Tk(320,`NunitoSans-Bold`),Zg()()(),Jc(321,`div`,3)(322,`div`,6)(323,`font`,7),Tk(324,`Font-size:`),Zg()(),Jc(325,`div`,6)(326,`font`,8),Tk(327,`12`),Zg()()(),Jc(328,`div`,3)(329,`div`,6)(330,`font`,7),Tk(331,`Line-height:`),Zg()(),Jc(332,`div`,6)(333,`font`,8),Tk(334,`16`),Zg()()(),Jc(335,`div`,3)(336,`div`,9)(337,`font`,7),Tk(338,`.po-font-text-small-bold`),Zg()()()()(),_u(339,`br`),Jc(340,`div`,3)(341,`div`,4)(342,`div`,3)(343,`font`,17),Tk(344,`Text Smaller`),Zg()(),_u(345,`hr`),Jc(346,`div`,3)(347,`div`,6)(348,`font`,7),Tk(349,`Typeface:`),Zg()(),Jc(350,`div`,6)(351,`font`,8),Tk(352,`NunitoSans-Bold`),Zg()()(),Jc(353,`div`,3)(354,`div`,6)(355,`font`,7),Tk(356,`Font-size:`),Zg()(),Jc(357,`div`,6)(358,`font`,8),Tk(359,`10`),Zg()()(),Jc(360,`div`,3)(361,`div`,6)(362,`font`,7),Tk(363,`Line-height:`),Zg()(),Jc(364,`div`,6)(365,`font`,8),Tk(366,`16`),Zg()()(),Jc(367,`div`,3)(368,`div`,6)(369,`font`,7),Tk(370,`Transform:`),Zg()(),Jc(371,`div`,6)(372,`font`,8),Tk(373,`Uppercase`),Zg()()(),Jc(374,`div`,3)(375,`div`,9)(376,`font`,7),Tk(377,`.po-font-text-smaller`),Zg()()()()()())},dependencies:[Tze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var Y=[{path:``,component:F,children:[{path:`api`,component:T},{path:`browser-support`,component:O},{path:`deprecations`,component:D},{path:`development-flow`,component:M},{path:`getting-started`,component:I},{path:`guide-charts`,component:j},{path:`migration-poui-v2`,component:k},{path:`migration-poui`,component:w},{path:`migration-thf-to-po-ui`,component:G},{path:`press-kit`,component:U},{path:`release-schedule`,component:R},{path:`releases`,component:N},{path:`schematics`,component:L},{path:`sync-fundamentals`,component:_},{path:`sync-get-started`,component:B},{path:`theme-service`,component:H},{path:`create-theme-customization`,component:V},{path:`grid-system`,component:W},{path:`spacing`,component:Q},{path:`theme-customization`,component:X},{path:`typography`,component:J},{path:``,pathMatch:`full`,redirectTo:`getting-started`}]}];var K=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[WV.forChild(Y),WV]})}return a})();var Nt=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[M$1,K]})}return a})();export{Nt as GuideModule};