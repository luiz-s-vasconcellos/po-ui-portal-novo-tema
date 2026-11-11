import{n as P,t as M}from"./main-G4GMLTOQ.js";import{Ei as WV,Fr as Jc,H as Mze,Hi as ar,Ii as ZO,Mn as tre,Mt as are,Nr as Ig,Or as H_,Ri as Zg,Rr as Jn,Vi as _u,Zn as $_,ea as ge,er as Ab,gi as Tk,ir as BO,jr as I,nr as An,qa as vt,qi as de,va as nk,xi as VO}from"./chunk-BJubg121.js";var F=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-step-doc`]],standalone:!1,decls:215,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-stepper`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`((currentStep)`,`=>`,`boolean)`],[`pan`,``,1,`docs-api-property-type`,`((currentStep)`,`=>`,`Observable<boolean>)`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`]],template:function(n,r){n&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoStepperModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do componente po-stepper`),Zg()(),Jc(7,`h3`,3),Tk(8,`Componente`),Zg(),Jc(9,`h4`,4)(10,`code`,5),Tk(11,`PoStepComponent`),Zg()(),Jc(12,`div`,2)(13,`p`),Tk(14,`O componente `),Jc(15,`code`),Tk(16,`po-step`),Zg(),Tk(17,` é utilizado para envolver e renderizar o conteúdo de um passo (`),Jc(18,`em`),Tk(19,`step`),Zg(),Tk(20,`) do `),Jc(21,`code`),Tk(22,`po-stepper`),Zg(),Tk(23,`, por exemplo:`),Zg(),Jc(24,`pre`)(25,`code`),Tk(26,`<po-stepper>

  <po-step p-label="Endere\xE7o">

      <!-- Conte\xFAdo referente ao endere\xE7o -->

  </po-step>

  <po-step p-label="Pagamento">

      <!-- Conte\xFAdo referente ao pagamento -->

  </po-step>

</po-stepper>
`),Zg()(),Jc(27,`p`),Tk(28,`A renderiza\xE7\xE3o do conte\xFAdo envolvido na tela e o controle dos status s\xE3o feitos automaticamente. No qual, o primeiro
`),Jc(29,`code`),Tk(30,`po-step`),Zg(),Tk(31,` encontrado será colocado como ativo, o próximo fica com o status `),Jc(32,`em`),Tk(33,`default`),Zg(),Tk(34,` e os demais ficam
desabilitados (`),Jc(35,`em`),Tk(36,`disabled`),Zg(),Tk(37,`).`),Zg(),Jc(38,`p`),Tk(39,`Ao clicar no `),Jc(40,`code`),Tk(41,`po-step`),Zg(),Tk(42,` que está com o status `),Jc(43,`em`),Tk(44,`default`),Zg(),Tk(45,`, o que est\xE1 ativo ficar\xE1 com o
status de conclu\xEDdo (`),Jc(46,`em`),Tk(47,`done`),Zg(),Tk(48,`) e o próximo que estava desabilitado ficará com o status `),Jc(49,`em`),Tk(50,`default`),Zg(),Tk(51,` e o restante permanecer\xE1
com o status desabilitado.`),Zg(),Jc(52,`blockquote`)(53,`p`),Tk(54,`Ao utilizar o `),Jc(55,`code`),Tk(56,`po-step`),Zg(),Tk(57,`, o componente `),Jc(58,`code`),Tk(59,`po-stepper`),Zg(),Tk(60,` funcionar\xE1 de forma sequencial, ou seja, n\xE3o ser\xE1 poss\xEDvel
pular para outro `),Jc(61,`code`),Tk(62,`po-step`),Zg(),Tk(63,` que esteja com o status igual a desabilitado (`),Jc(64,`em`),Tk(65,`disabled`),Zg(),Tk(66,`).`),Zg()(),Jc(67,`p`),Tk(68,`Acesse a `),Jc(69,`a`,6),Tk(70,`documentação do `),Jc(71,`code`),Tk(72,`po-stepper`),Zg()(),Tk(73,` para ter mais informa\xE7\xF5es sobre o seu funcionamento
e exemplos de uso.`),Zg()(),Jc(74,`div`,7)(75,`h4`,8),Tk(76,`Seletor`),Zg(),Jc(77,`pre`,9),Tk(78,`<po-step
    p-can-active-next-step="((currentStep) => boolean) | ((currentStep) => Observable<boolean>)"
    p-icon-default="string | TemplateRef<void>"
    p-label="string" >
</po-step>
`),Zg()(),Jc(79,`h4`,10),Tk(80,`Propriedades`),Zg(),Jc(81,`table`,11)(82,`tr`,12)(83,`th`,13),Tk(84,`Nome`),Zg(),Jc(85,`th`,13),Tk(86,`Tipo`),Zg(),Jc(87,`th`,13),Tk(88,`Padrão`),Zg(),Jc(89,`th`,13),Tk(90,`Descrição`),Zg()(),Jc(91,`tr`,14)(92,`td`,15)(93,`div`,16)(94,`span`,17),Tk(95,` p-can-active-next-step`),_u(96,`br`),Zg()()(),Jc(97,`td`,18)(98,`code`,19),Tk(99,`((currentStep) => boolean) `),Zg(),Jc(100,`code`,20),Tk(101,` ((currentStep) => Observable<boolean>)`),Zg()(),Jc(102,`td`,21),Tk(103,`-`),Zg(),Jc(104,`td`,22)(105,`em`)(106,`strong`),Tk(107,`(opcional)`),Zg()(),Jc(108,`p`),Tk(109,`Função chamada quando o próximo `),Jc(110,`em`),Tk(111,`step`),Zg(),Tk(112,` for clicado ou quando o método `),Jc(113,`code`),Tk(114,`PoStepperComponent.next()`),Zg(),Tk(115,` for chamado.
Ao retornar `),Jc(116,`code`),Tk(117,`true`),Zg(),Tk(118,` define que esse `),Jc(119,`em`),Tk(120,`step`),Zg(),Tk(121,` ficará ativo e o atual como concluído (`),Jc(122,`em`),Tk(123,`done`),Zg(),Tk(124,`).
Tamb\xE9m aceita fun\xE7\xF5es que retornem `),Jc(125,`code`),Tk(126,`Observable<boolean>`),Zg(),Tk(127,`. Ao retornar um `),Jc(128,`code`),Tk(129,`Observable<boolean>`),Zg(),Tk(130,`,
garanta que esse `),Jc(131,`code`),Tk(132,`Observable`),Zg(),Tk(133,` ser\xE1 completado, caso houver algum erro durante o processo n\xE3o ser\xE1 poss\xEDvel prosseguir
ao pr\xF3ximo `),Jc(134,`em`),Tk(135,`step`),Zg(),Tk(136,`.`),Zg(),Jc(137,`p`),Tk(138,`Ao ser disparada, a mesma receberá por parâmetro o `),Jc(139,`code`),Tk(140,`PoStepComponent`),Zg(),Tk(141,` atual.`),Zg(),Jc(142,`p`),Tk(143,`O contexto da função que será chamada, será o mesmo que o do `),Jc(144,`code`),Tk(145,`PoStepComponent`),Zg(),Tk(146,`, ent\xE3o para poder alterar
para o contexto do componente que o est\xE1 utilizando, pode ser utilizado a propriedade `),Jc(147,`code`),Tk(148,`bind`),Zg(),Tk(149,` do Javascript.
Por exemplo, para a fun\xE7\xE3o `),Jc(150,`code`),Tk(151,`validate`),Zg(),Tk(152,`:`),Zg(),Jc(153,`pre`)(154,`code`),Tk(155,`<po-step p-label="Step 1" [p-can-active-next-step]="validate.bind(this)">
...
</po-step>
`),Zg()()()(),Jc(156,`tr`,14)(157,`td`,15)(158,`div`,16)(159,`span`,17),Tk(160,` p-icon-default`),_u(161,`br`),Zg()()(),Jc(162,`td`,18)(163,`code`,23),Tk(164,`string `),Zg(),Jc(165,`code`,24),Tk(166,` TemplateRef<void>`),Zg()(),Jc(167,`td`,21),Tk(168,`-`),Zg(),Jc(169,`td`,22)(170,`em`)(171,`strong`),Tk(172,`(opcional)`),Zg()(),Jc(173,`p`),Tk(174,`Define o ícone padrão do step em seu status `),Jc(175,`em`),Tk(176,`default`),Zg(),Tk(177,`.
Esta propriedade permite usar \xEDcones da `),Jc(178,`a`,25),Tk(179,`Biblioteca de ícones`),Zg(),Tk(180,`.`),Zg(),Jc(181,`pre`)(182,`code`),Tk(183,`<po-stepper>
   ...
   <po-step p-icon-default="an an-map-pin"></po-step>
</po-stepper>
`),Zg()(),Jc(184,`p`),Tk(185,`Outra opção seria a customização do ícone através do `),Jc(186,`code`),Tk(187,`TemplateRef`),Zg(),Tk(188,`, conforme exemplo abaixo:`),Zg(),Jc(189,`pre`)(190,`code`),Tk(191,`<po-stepper>
   ...
   <po-step [p-icon-default]="template"></po-step>
</po-stepper>

<ng-template #template>
   <i class="an an-shopping-cart"></i>
</ng-template
`),Zg()(),Jc(192,`blockquote`)(193,`p`),Tk(194,`Deve-se usar `),Jc(195,`code`),Tk(196,`font-size: inherit`),Zg(),Tk(197,` para ajustar ícones que não se ajustam automaticamente.`),Zg()()()(),Jc(198,`tr`,14)(199,`td`,15)(200,`div`,16)(201,`span`,17),Tk(202,` p-label`),_u(203,`br`),Zg()()(),Jc(204,`td`,18)(205,`code`,23),Tk(206,`string`),Zg()(),Jc(207,`td`,21),Tk(208,`-`),Zg(),Jc(209,`td`,22)(210,`p`),Tk(211,`Título que será exibido descrevendo o passo (`),Jc(212,`em`),Tk(213,`step`),Zg(),Tk(214,`).`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return i})();function O(i,R){if(i&1){let a=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){H_(a);let r=nk();return $_(r.changeTab(`web`))}),Zg()}if(i&2){let a=nk();Ab(`p-active`,a.activeTab===`web`)}}var j=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:n||`web`})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||i)(I(ar),I(An))};static ɵcmp=Jn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Step`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(n,r){n&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,O,1,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return r.changeTab(`doc`)}),_u(4,`sample-po-step-doc`),Zg()()()),n&2&&(Ab(`p-actions`,r.actions),Ig(2),BO(r.hidePoWebSample?-1:2),Ig(),Ab(`p-active`,r.activeTab===`doc`))},dependencies:[Mze,tre,are,F],encapsulation:2,changeDetection:1})}return i})()}];var A=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=ge({type:i});static ɵinj=de({imports:[WV.forChild(j),WV]})}return i})();var Y=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=ge({type:i});static ɵinj=de({imports:[M,A]})}return i})();export{Y as DocPoStepModule};