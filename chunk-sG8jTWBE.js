import{Da as pe,Fa as rg,Ga as vx,Ha as v_,Ii as b,Mr as I1,Ra as ue,Xt as ere,Ya as wg,ai as Sn,gr as Dx,ia as ir,ji as __,ki as Zn,ma as lO,mt as Tze,rr as Ax,rt as Qae,sa as jc,ui as UE,va as mt,wr as Fx,xa as nu}from"./chunk-VuVfKKNQ.js";import{n as P,t as M}from"./main-7FOYFSS2.js";var F=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-step-doc`]],standalone:!1,decls:215,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-stepper`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`((currentStep)`,`=>`,`boolean)`],[`pan`,``,1,`docs-api-property-type`,`((currentStep)`,`=>`,`Observable<boolean>)`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`]],template:function(n,r){n&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoStepperModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`Módulo do componente po-stepper`),wg()(),jc(7,`h3`,3),lO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),lO(11,`PoStepComponent`),wg()(),jc(12,`div`,2)(13,`p`),lO(14,`O componente `),jc(15,`code`),lO(16,`po-step`),wg(),lO(17,` é utilizado para envolver e renderizar o conteúdo de um passo (`),jc(18,`em`),lO(19,`step`),wg(),lO(20,`) do `),jc(21,`code`),lO(22,`po-stepper`),wg(),lO(23,`, por exemplo:`),wg(),jc(24,`pre`)(25,`code`),lO(26,`<po-stepper>

  <po-step p-label="Endere\xE7o">

      <!-- Conte\xFAdo referente ao endere\xE7o -->

  </po-step>

  <po-step p-label="Pagamento">

      <!-- Conte\xFAdo referente ao pagamento -->

  </po-step>

</po-stepper>
`),wg()(),jc(27,`p`),lO(28,`A renderiza\xE7\xE3o do conte\xFAdo envolvido na tela e o controle dos status s\xE3o feitos automaticamente. No qual, o primeiro
`),jc(29,`code`),lO(30,`po-step`),wg(),lO(31,` encontrado será colocado como ativo, o próximo fica com o status `),jc(32,`em`),lO(33,`default`),wg(),lO(34,` e os demais ficam
desabilitados (`),jc(35,`em`),lO(36,`disabled`),wg(),lO(37,`).`),wg(),jc(38,`p`),lO(39,`Ao clicar no `),jc(40,`code`),lO(41,`po-step`),wg(),lO(42,` que está com o status `),jc(43,`em`),lO(44,`default`),wg(),lO(45,`, o que est\xE1 ativo ficar\xE1 com o
status de conclu\xEDdo (`),jc(46,`em`),lO(47,`done`),wg(),lO(48,`) e o próximo que estava desabilitado ficará com o status `),jc(49,`em`),lO(50,`default`),wg(),lO(51,` e o restante permanecer\xE1
com o status desabilitado.`),wg(),jc(52,`blockquote`)(53,`p`),lO(54,`Ao utilizar o `),jc(55,`code`),lO(56,`po-step`),wg(),lO(57,`, o componente `),jc(58,`code`),lO(59,`po-stepper`),wg(),lO(60,` funcionar\xE1 de forma sequencial, ou seja, n\xE3o ser\xE1 poss\xEDvel
pular para outro `),jc(61,`code`),lO(62,`po-step`),wg(),lO(63,` que esteja com o status igual a desabilitado (`),jc(64,`em`),lO(65,`disabled`),wg(),lO(66,`).`),wg()(),jc(67,`p`),lO(68,`Acesse a `),jc(69,`a`,6),lO(70,`documentação do `),jc(71,`code`),lO(72,`po-stepper`),wg()(),lO(73,` para ter mais informa\xE7\xF5es sobre o seu funcionamento
e exemplos de uso.`),wg()(),jc(74,`div`,7)(75,`h4`,8),lO(76,`Seletor`),wg(),jc(77,`pre`,9),lO(78,`<po-step
    p-can-active-next-step="((currentStep) => boolean) | ((currentStep) => Observable<boolean>)"
    p-icon-default="string | TemplateRef<void>"
    p-label="string" >
</po-step>
`),wg()(),jc(79,`h4`,10),lO(80,`Propriedades`),wg(),jc(81,`table`,11)(82,`tr`,12)(83,`th`,13),lO(84,`Nome`),wg(),jc(85,`th`,13),lO(86,`Tipo`),wg(),jc(87,`th`,13),lO(88,`Padrão`),wg(),jc(89,`th`,13),lO(90,`Descrição`),wg()(),jc(91,`tr`,14)(92,`td`,15)(93,`div`,16)(94,`span`,17),lO(95,` p-can-active-next-step`),nu(96,`br`),wg()()(),jc(97,`td`,18)(98,`code`,19),lO(99,`((currentStep) => boolean) `),wg(),jc(100,`code`,20),lO(101,` ((currentStep) => Observable<boolean>)`),wg()(),jc(102,`td`,21),lO(103,`-`),wg(),jc(104,`td`,22)(105,`em`)(106,`strong`),lO(107,`(opcional)`),wg()(),jc(108,`p`),lO(109,`Função chamada quando o próximo `),jc(110,`em`),lO(111,`step`),wg(),lO(112,` for clicado ou quando o método `),jc(113,`code`),lO(114,`PoStepperComponent.next()`),wg(),lO(115,` for chamado.
Ao retornar `),jc(116,`code`),lO(117,`true`),wg(),lO(118,` define que esse `),jc(119,`em`),lO(120,`step`),wg(),lO(121,` ficará ativo e o atual como concluído (`),jc(122,`em`),lO(123,`done`),wg(),lO(124,`).
Tamb\xE9m aceita fun\xE7\xF5es que retornem `),jc(125,`code`),lO(126,`Observable<boolean>`),wg(),lO(127,`. Ao retornar um `),jc(128,`code`),lO(129,`Observable<boolean>`),wg(),lO(130,`,
garanta que esse `),jc(131,`code`),lO(132,`Observable`),wg(),lO(133,` ser\xE1 completado, caso houver algum erro durante o processo n\xE3o ser\xE1 poss\xEDvel prosseguir
ao pr\xF3ximo `),jc(134,`em`),lO(135,`step`),wg(),lO(136,`.`),wg(),jc(137,`p`),lO(138,`Ao ser disparada, a mesma receberá por parâmetro o `),jc(139,`code`),lO(140,`PoStepComponent`),wg(),lO(141,` atual.`),wg(),jc(142,`p`),lO(143,`O contexto da função que será chamada, será o mesmo que o do `),jc(144,`code`),lO(145,`PoStepComponent`),wg(),lO(146,`, ent\xE3o para poder alterar
para o contexto do componente que o est\xE1 utilizando, pode ser utilizado a propriedade `),jc(147,`code`),lO(148,`bind`),wg(),lO(149,` do Javascript.
Por exemplo, para a fun\xE7\xE3o `),jc(150,`code`),lO(151,`validate`),wg(),lO(152,`:`),wg(),jc(153,`pre`)(154,`code`),lO(155,`<po-step p-label="Step 1" [p-can-active-next-step]="validate.bind(this)">
...
</po-step>
`),wg()()()(),jc(156,`tr`,14)(157,`td`,15)(158,`div`,16)(159,`span`,17),lO(160,` p-icon-default`),nu(161,`br`),wg()()(),jc(162,`td`,18)(163,`code`,23),lO(164,`string `),wg(),jc(165,`code`,24),lO(166,` TemplateRef<void>`),wg()(),jc(167,`td`,21),lO(168,`-`),wg(),jc(169,`td`,22)(170,`em`)(171,`strong`),lO(172,`(opcional)`),wg()(),jc(173,`p`),lO(174,`Define o ícone padrão do step em seu status `),jc(175,`em`),lO(176,`default`),wg(),lO(177,`.
Esta propriedade permite usar \xEDcones da `),jc(178,`a`,25),lO(179,`Biblioteca de ícones`),wg(),lO(180,`.`),wg(),jc(181,`pre`)(182,`code`),lO(183,`<po-stepper>
   ...
   <po-step p-icon-default="an an-map-pin"></po-step>
</po-stepper>
`),wg()(),jc(184,`p`),lO(185,`Outra opção seria a customização do ícone através do `),jc(186,`code`),lO(187,`TemplateRef`),wg(),lO(188,`, conforme exemplo abaixo:`),wg(),jc(189,`pre`)(190,`code`),lO(191,`<po-stepper>
   ...
   <po-step [p-icon-default]="template"></po-step>
</po-stepper>

<ng-template #template>
   <i class="an an-shopping-cart"></i>
</ng-template
`),wg()(),jc(192,`blockquote`)(193,`p`),lO(194,`Deve-se usar `),jc(195,`code`),lO(196,`font-size: inherit`),wg(),lO(197,` para ajustar ícones que não se ajustam automaticamente.`),wg()()()(),jc(198,`tr`,14)(199,`td`,15)(200,`div`,16)(201,`span`,17),lO(202,` p-label`),nu(203,`br`),wg()()(),jc(204,`td`,18)(205,`code`,23),lO(206,`string`),wg()(),jc(207,`td`,21),lO(208,`-`),wg(),jc(209,`td`,22)(210,`p`),lO(211,`Título que será exibido descrevendo o passo (`),jc(212,`em`),lO(213,`step`),wg(),lO(214,`).`),wg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return i})();function O(i,R){if(i&1){let a=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(a);let r=Fx();return __(r.changeTab(`web`))}),wg()}if(i&2){let a=Fx();UE(`p-active`,a.activeTab===`web`)}}var j=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||i)(b(ir),b(Sn))};static ɵcmp=Zn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Step`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(n,r){n&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,O,1,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return r.changeTab(`doc`)}),nu(4,`sample-po-step-doc`),wg()()()),n&2&&(UE(`p-actions`,r.actions),rg(2),Dx(r.hidePoWebSample?-1:2),rg(),UE(`p-active`,r.activeTab===`doc`))},dependencies:[Tze,Qae,ere,F],encapsulation:2,changeDetection:1})}return i})()}];var A=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=pe({type:i});static ɵinj=ue({imports:[I1.forChild(j),I1]})}return i})();var Y=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=pe({type:i});static ɵinj=ue({imports:[M,A]})}return i})();export{Y as DocPoStepModule};