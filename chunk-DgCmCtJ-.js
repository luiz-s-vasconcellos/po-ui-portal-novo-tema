import{m as P,p as M$1}from"./main-DMA7KEAR.js";import{Ar as I$1,Lr as Kg,Oi as VO,Pn as tre,Pr as Jn,Pt as are,Ti as U_,Ui as YO,Va as p,W as Mze,Zi as ar,ar as An,cr as B_,gi as Rb,io as vu,li as Qc,lt as Ss,na as de,oo as wg,ro as vt,sa as ek,ua as ge,vi as Sk,wr as GV,xr as FO}from"./chunk-DtUf9FxZ.js";var M=(()=>{class n{router=p(An);openDoc(o){this.router.navigate([`/documentation`,o],{queryParams:{view:`doc`}})}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-list-view-content-template-doc`]],standalone:!1,decls:100,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-related`],[`p-value`,`List View`,3,`p-click`],[1,`docs-api-h3`],[`id`,`class-po-list-view-content-template-directive`,1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-title`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`(item)`,`=>`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`]],template:function(a,r){a&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoListViewModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente `),Qc(7,`code`),Sk(8,`po-list-view`),Kg(),Sk(9,`.`),Kg()(),Qc(10,`blockquote`,3)(11,`strong`),Sk(12,`Faz parte de:`),Kg(),Qc(13,`po-tag`,4),vt(`p-click`,function(){return r.openDoc(`po-list-view`)}),Kg()(),Qc(14,`h3`,5),Sk(15,`Componente`),Kg(),Qc(16,`h4`,6)(17,`code`,7),Sk(18,`PoListViewContentTemplateDirective`),Kg()(),Qc(19,`div`,2)(20,`p`),Sk(21,`Esta diretiva permite que sejam apresentadas informações essenciais de cada item.`),Kg(),Qc(22,`p`),Sk(23,`Deve-se utilizar como parâmetro a referência do item e/ou índice, sendo por padrão o item.`),Kg(),Qc(24,`ul`)(25,`li`),Sk(26,`Item: `),Qc(27,`code`),Sk(28,`item`),Kg(),Sk(29,` determina o item da linha corrente.`),Kg(),Qc(30,`li`),Sk(31,`Índice: `),Qc(32,`code`),Sk(33,`index`),Kg(),Sk(34,` determina o índice da linha corrente.`),Kg()(),Qc(35,`p`),Sk(36,`Esta diretiva pode ser usada de duas formas: explícita ou `),Qc(37,`em`),Sk(38,`syntax sugar`),Kg(),Sk(39,`. Veja a seguir ambos, respectivamente:`),Kg(),Qc(40,`pre`)(41,`code`),Sk(42,`...
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
`),Kg()(),Qc(43,`pre`)(44,`code`),Sk(45,`...
<po-list-view
   p-property-title="name"
   [p-items]="[{id: 1, name: "Register", email: register@po-ui.com}]">

   <div *p-list-view-content-template="let item, let i=index" class="po-row">
     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
   </div>
</po-list-view>
...
`),Kg()(),Qc(46,`p`),Sk(47,`A diretiva `),Qc(48,`strong`),Sk(49,`p-list-view-content-template`),Kg(),Sk(50,`, possibilita tamb\xE9m alterar o t\xEDtulo dos itens. Para isto,
\xE9 necess\xE1rio atribuir a refer\xEAncia da fun\xE7\xE3o que faz a altera\xE7\xE3o, \xE0 propriedade `),Qc(51,`code`),Sk(52,`p-title`),Kg(),Sk(53,`,
a mesma deve retornar um valor do tipo `),Qc(54,`em`),Sk(55,`string`),Kg(),Sk(56,`. Veja o exemplo a seguir:`),Kg(),Qc(57,`pre`)(58,`code`),Sk(59,`...
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
`),Kg()()(),Qc(60,`div`,8)(61,`h4`,9),Sk(62,`Seletor`),Kg(),Qc(63,`pre`,10),Sk(64,`<[p-list-view-content-template]
    p-title="(item) => string" >
</[p-list-view-content-template]>
`),Kg()(),Qc(65,`h4`,11),Sk(66,`Propriedades`),Kg(),Qc(67,`table`,12)(68,`tr`,13)(69,`th`,14),Sk(70,`Nome`),Kg(),Qc(71,`th`,14),Sk(72,`Tipo`),Kg(),Qc(73,`th`,14),Sk(74,`Padrão`),Kg(),Qc(75,`th`,14),Sk(76,`Descrição`),Kg()(),Qc(77,`tr`,15)(78,`td`,16)(79,`div`,17)(80,`span`,18),Sk(81,` p-title`),vu(82,`br`),Kg()()(),Qc(83,`td`,19)(84,`code`,20),Sk(85,`(item) => string`),Kg()(),Qc(86,`td`,21),Sk(87,`-`),Kg(),Qc(88,`td`,22)(89,`em`)(90,`strong`),Sk(91,`(opcional)`),Kg()(),Qc(92,`p`),Sk(93,`Função que deve retornar um valor do tipo `),Qc(94,`code`),Sk(95,`string`),Kg(),Sk(96,`, que será utilizado como o título de cada item da lista.`),Kg(),Qc(97,`blockquote`)(98,`p`),Sk(99,`Por parâmetro será enviado o item corrente, onde poderá utilizá-lo para recuperar dados sobre o mesmo.`),Kg()()()()()())},dependencies:[P,Ss],encapsulation:2,changeDetection:1})}return n})();function I(n,N){if(n&1){let o=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(o);let r=ek();return U_(r.changeTab(`web`))}),Kg()}if(n&2){let o=ek();Rb(`p-active`,o.activeTab===`web`)}}var A=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(o,a){this.route=o,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(o=>{let a=o.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`})}changeTab(o){this.router.navigate([],{queryParams:{view:o},queryParamsHandling:`merge`}),this.activeTab=o}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(I$1(ar),I$1(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`List View Content Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,r){a&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,I,1,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return r.changeTab(`doc`)}),vu(4,`sample-po-list-view-content-template-doc`),Kg()()()),a&2&&(Rb(`p-actions`,r.actions),wg(2),VO(r.hidePoWebSample?-1:2),wg(),Rb(`p-active`,r.activeTab===`doc`))},dependencies:[Mze,tre,are,M],encapsulation:2,changeDetection:1})}return n})()}];var q=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[GV.forChild(A),GV]})}return n})();var ne=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[M$1,q]})}return n})();export{ne as DocPoListViewContentTemplateModule};