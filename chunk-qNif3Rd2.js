import{m as P,p as M}from"./main-5ZHUK4IE.js";import{Ar as I,Lr as Kg,Oi as VO,Pn as tre,Pr as Jn,Pt as are,Ti as U_,Ui as YO,W as Mze,Zi as ar,ar as An,cr as B_,gi as Rb,io as vu,li as Qc,na as de,oo as wg,ro as vt,sa as ek,ua as ge,vi as Sk,wr as GV,xr as FO}from"./chunk-DtUf9FxZ.js";var _=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-list-view-content-template-doc`]],standalone:!1,decls:101,vars:0,consts:[[1,`docs-api`],[1,`docs-api-part-of`],[`href`,`/documentation/po-list-view?view=doc`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-list-view-content-template-directive`,1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-title`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`(item)`,`=>`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`]],template:function(o,r){o&1&&(Qc(0,`div`,0)(1,`p`,1),Sk(2,` Faz parte de `),Qc(3,`a`,2),Sk(4,`List View`),Kg(),Sk(5,`. `),Kg(),Qc(6,`p`,3)(7,`code`),Sk(8,`import { PoListViewModule } from '@po-ui/ng-components';`),Kg()(),Qc(9,`div`,4)(10,`p`),Sk(11,`Módulo do componente `),Qc(12,`code`),Sk(13,`po-list-view`),Kg(),Sk(14,`.`),Kg()(),Qc(15,`h3`,5),Sk(16,`Componente`),Kg(),Qc(17,`h4`,6)(18,`code`,7),Sk(19,`PoListViewContentTemplateDirective`),Kg()(),Qc(20,`div`,4)(21,`p`),Sk(22,`Esta diretiva permite que sejam apresentadas informações essenciais de cada item.`),Kg(),Qc(23,`p`),Sk(24,`Deve-se utilizar como parâmetro a referência do item e/ou índice, sendo por padrão o item.`),Kg(),Qc(25,`ul`)(26,`li`),Sk(27,`Item: `),Qc(28,`code`),Sk(29,`item`),Kg(),Sk(30,` determina o item da linha corrente.`),Kg(),Qc(31,`li`),Sk(32,`Índice: `),Qc(33,`code`),Sk(34,`index`),Kg(),Sk(35,` determina o índice da linha corrente.`),Kg()(),Qc(36,`p`),Sk(37,`Esta diretiva pode ser usada de duas formas: explícita ou `),Qc(38,`em`),Sk(39,`syntax sugar`),Kg(),Sk(40,`. Veja a seguir ambos, respectivamente:`),Kg(),Qc(41,`pre`)(42,`code`),Sk(43,`...
<po-list-view
  p-property-title="name"
  [p-items]="[{id: 1, name: "Register", email: register@po-ui.com}]">

  <ng-template p-list-view-content-template let-item let-code="index">
    <div class="po-row">
      <po-info class="po-md-6" p-label="Code" [p-value]="code"></po-info>
      <po-info class="po-md-6" p-label="Email" [p-value]="item.email"></po-info>
    </div>
  </ng-template>

</po-list-view>

...
`),Kg()(),Qc(44,`pre`)(45,`code`),Sk(46,`...
<po-list-view
   p-property-title="name"
   [p-items]="[{id: 1, name: "Register", email: register@po-ui.com}]">

   <div *p-list-view-content-template="let item, let i=index" class="po-row">
     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
   </div>
</po-list-view>
...
`),Kg()(),Qc(47,`p`),Sk(48,`A diretiva `),Qc(49,`strong`),Sk(50,`p-list-view-content-template`),Kg(),Sk(51,`, possibilita tamb\xE9m alterar o t\xEDtulo dos itens. Para isto,
\xE9 necess\xE1rio atribuir a refer\xEAncia da fun\xE7\xE3o que faz a altera\xE7\xE3o, \xE0 propriedade `),Qc(52,`code`),Sk(53,`p-title`),Kg(),Sk(54,`,
a mesma deve retornar um valor do tipo `),Qc(55,`em`),Sk(56,`string`),Kg(),Sk(57,`. Veja o exemplo a seguir:`),Kg(),Qc(58,`pre`)(59,`code`),Sk(60,`...
@Component({
   selector: 'app-root',
   template: \`
     ...
     <po-list-view
       [p-items]="items">
       <ng-template p-list-view-content-template let-item [p-title]="customTitle">
         <div class="po-row">
           <po-info class="po-md-12" p-label="Customer" [p-value]="item.customer"></po-info>
         </div>
       </ng-template>
     ...
   \`
})
export class AppComponent {
   public items = [{
     code: 1200,
     product: 'Rice',
     customer: 'Supermarket 1',
   }, {
     code: 1355,
     product: 'Bean',
     customer: 'Supermarket 2'
   }];

   customTitle(item) {
     return \`\${item.code} - \${item.product}\`;
   }
}
`),Kg()()(),Qc(61,`div`,8)(62,`h4`,9),Sk(63,`Seletor`),Kg(),Qc(64,`pre`,10),Sk(65,`<[p-list-view-content-template]
    p-title="(item) => string" >
</[p-list-view-content-template]>
`),Kg()(),Qc(66,`h4`,11),Sk(67,`Propriedades`),Kg(),Qc(68,`table`,12)(69,`tr`,13)(70,`th`,14),Sk(71,`Nome`),Kg(),Qc(72,`th`,14),Sk(73,`Tipo`),Kg(),Qc(74,`th`,14),Sk(75,`Padrão`),Kg(),Qc(76,`th`,14),Sk(77,`Descrição`),Kg()(),Qc(78,`tr`,15)(79,`td`,16)(80,`div`,17)(81,`span`,18),Sk(82,` p-title`),vu(83,`br`),Kg()()(),Qc(84,`td`,19)(85,`code`,20),Sk(86,`(item) => string`),Kg()(),Qc(87,`td`,21),Sk(88,`-`),Kg(),Qc(89,`td`,22)(90,`em`)(91,`strong`),Sk(92,`(opcional)`),Kg()(),Qc(93,`p`),Sk(94,`Função que deve retornar um valor do tipo `),Qc(95,`code`),Sk(96,`string`),Kg(),Sk(97,`, que será utilizado como o título de cada item da lista.`),Kg(),Qc(98,`blockquote`)(99,`p`),Sk(100,`Por parâmetro será enviado o item corrente, onde poderá utilizá-lo para recuperar dados sobre o mesmo.`),Kg()()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return n})();function R(n,F){if(n&1){let a=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(a);let r=ek();return U_(r.changeTab(`web`))}),Kg()}if(n&2){let a=ek();Rb(`p-active`,a.activeTab===`web`)}}var q=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,o){this.route=a,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let o=a.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:o||`web`})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||n)(I(ar),I(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`List View Content Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(o,r){o&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,R,1,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return r.changeTab(`doc`)}),vu(4,`sample-po-list-view-content-template-doc`),Kg()()()),o&2&&(Rb(`p-actions`,r.actions),wg(2),VO(r.hidePoWebSample?-1:2),wg(),Rb(`p-active`,r.activeTab===`doc`))},dependencies:[Mze,tre,are,_],encapsulation:2,changeDetection:1})}return n})()}];var k=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[GV.forChild(q),GV]})}return n})();var X=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[M,k]})}return n})();export{X as DocPoListViewContentTemplateModule};