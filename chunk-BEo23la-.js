import{m as P,p as M$1}from"./main-FL7X32TP.js";import{Ar as I,Lr as Kg,Oi as VO,Pn as tre,Pr as Jn,Pt as are,Ti as U_,Ui as YO,Va as p,W as Mze,Zi as ar,ar as An,cr as B_,gi as Rb,io as vu,li as Qc,lt as Ss,na as de,oo as wg,ro as vt,sa as ek,ua as ge,vi as Sk,wr as GV,xr as FO}from"./chunk-DtUf9FxZ.js";var M=(()=>{class n{router=p(An);openDoc(i){this.router.navigate([`/documentation`,i],{queryParams:{view:`doc`}})}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-table-cell-template-doc`]],standalone:!1,decls:70,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-related`],[`p-value`,`Table`,3,`p-click`],[1,`docs-api-h3`],[`id`,`class-po-table-cell-template-directive`,1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``]],template:function(a,l){a&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoTableModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente po-table`),Kg()(),Qc(7,`blockquote`,3)(8,`strong`),Sk(9,`Faz parte de:`),Kg(),Qc(10,`po-tag`,4),vt(`p-click`,function(){return l.openDoc(`po-table`)}),Kg()(),Qc(11,`h3`,5),Sk(12,`Componente`),Kg(),Qc(13,`h4`,6)(14,`code`,7),Sk(15,`PoTableCellTemplateDirective`),Kg()(),Qc(16,`div`,2)(17,`p`),Sk(18,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),Kg(),Qc(19,`p`),Sk(20,`Em seu uso, deve-se apenas adicionar a diretiva `),Qc(21,`strong`),Sk(22,`p-table-cell-template`),Kg(),Sk(23,` à tag `),Qc(24,`code`),Sk(25,`ng-template`),Kg(),Sk(26,`.`),Kg(),Qc(27,`p`),Sk(28,`Retorno:`),Kg(),Qc(29,`ul`)(30,`li`)(31,`code`),Sk(32,`column`),Kg(),Sk(33,`: conteúdo da coluna corrente.`),Kg(),Qc(34,`li`)(35,`code`),Sk(36,`row`),Kg(),Sk(37,`: conteúdo da linha corrente`),Kg()(),Qc(38,`p`),Sk(39,`Modo de uso:`),Kg(),Qc(40,`pre`)(41,`code`),Sk(42,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
    <ng-template p-table-cell-template let-column="column" let-row="row">
     <div *ngIf="column.property === 'status' && row.status === 'CANCELED'">
       <h1 [style.background]="'red'">CANCELADA</h1>
       <span (click)="onClick()"><small>clique aqui</small></span>
     </div>
     <h1 *ngIf="column.property === 'status' && row.status === 'FINISHED'" [style.background]="'green'">FINALIZADA</h1>
     <h1 *ngIf="column.property === 'status' && row.status === 'OPENED'" [style.background]="'orange'">ABERTA</h1>
     <h1 *ngIf="column.property === 'status2'">Conte\xFAdo do status 2</h1>
     <h1 *ngIf="column.property === 'status3'">Conte\xFAdo do status 3</h1>
   </ng-template>
...
`),Kg()(),Qc(43,`blockquote`)(44,`p`),Sk(45,`No exemplo acima, o usuário tem como retorno `),Qc(46,`code`),Sk(47,`row`),Kg(),Sk(48,` e a `),Qc(49,`code`),Sk(50,`column`),Kg(),Sk(51,` corrente, neste caso ele tem total liberdade para manipular os objetos.`),Kg()(),Qc(52,`p`),Sk(53,`Abaixo, a declaração dos dados de entrada do PO-TABLE para o uso da directiva.`),Kg(),Qc(54,`pre`)(55,`code`),Sk(56,`...
export class AppComponent {

   items = [{
     code: 1200,
     product: 'Rice',
     status: 'CANCELED',
     status2: '',
     status3: ''
     },{
     code: 1355,
     product: 'Bean',
     status: 'FINISHED',
     status2: '',
     status3: ''
     }];

   columns = [
      { property: 'code', label: 'ID' },
      { property: 'product', label: 'PRODUTO' },
      { property: 'status', label: 'STATUS', type: 'cellTemplate' },
      { property: 'status2', label: 'STATUS 2', type: 'cellTemplate' },
      { property: 'status3', label: 'STATUS 3', type: 'cellTemplate' }
   ];
}
...
`),Kg()(),Qc(57,`blockquote`)(58,`p`),Sk(59,`Observação: Sempre adicionar o `),Qc(60,`strong`),Sk(61,`type`),Kg(),Sk(62,` da coluna que deseja manipular com a directiva como `),Qc(63,`code`),Sk(64,`cellTemplate`),Kg()()()(),Qc(65,`div`,8)(66,`h4`,9),Sk(67,`Seletor`),Kg(),Qc(68,`pre`,10),Sk(69,`<[p-table-cell-template] >
</[p-table-cell-template]>
`),Kg()()())},dependencies:[P,Ss],encapsulation:2,changeDetection:1})}return n})();function L(n,B){if(n&1){let i=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(i);let l=ek();return U_(l.changeTab(`web`))}),Kg()}if(n&2){let i=ek();Rb(`p-active`,i.activeTab===`web`)}}var O=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(i,a){this.route=i,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(i=>{let a=i.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`})}changeTab(i){this.router.navigate([],{queryParams:{view:i},queryParamsHandling:`merge`}),this.activeTab=i}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(I(ar),I(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Table Cell Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,l){a&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,L,1,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return l.changeTab(`doc`)}),vu(4,`sample-po-table-cell-template-doc`),Kg()()()),a&2&&(Rb(`p-actions`,l.actions),wg(2),VO(l.hidePoWebSample?-1:2),wg(),Rb(`p-active`,l.activeTab===`doc`))},dependencies:[Mze,tre,are,M],encapsulation:2,changeDetection:1})}return n})()}];var q=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[GV.forChild(O),GV]})}return n})();var ne=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[M$1,q]})}return n})();export{ne as DocPoTableCellTemplateModule};