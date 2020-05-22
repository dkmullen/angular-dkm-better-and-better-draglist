import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop sorting
 */
@Component({
  selector: 'cdk-drag-drop-sorting-example',
  templateUrl: 'cdk-drag-drop-sorting-example.html',
  styleUrls: ['cdk-drag-drop-sorting-example.css'],
})
export class CdkDragDropSortingExample {

    ipsum = 
  `
  Synth hella marfa celiac, street art scenester four loko activated charcoal. Austin shoreditch pitchfork af glossier meggings tilde hella brooklyn. Slow-carb street art authentic migas literally next level. Aesthetic subway tile man braid you probably haven't heard of them. Typewriter kombucha flexitarian slow-carb unicorn gastropub tofu flannel poutine ennui.<br /><br />

Subway tile vaporware ethical PBR&B, gluten-free mustache you probably haven't heard of them actually XOXO af fixie brooklyn leggings kitsch celiac. Copper mug gluten-free readymade hoodie echo park semiotics. Mixtape readymade everyday carry migas trust fund cloud bread roof party chambray vice. Slow-carb fam yuccie, listicle microdosing 8-bit everyday carry lo-fi<br /><br />

I'm baby man braid pug photo booth fingerstache scenester heirloom copper mug helvetica. Venmo coloring book taxidermy man bun pabst authentic post-ironic truffaut tote bag cred echo park biodiesel bespoke. Gluten-free bitters chambray bushwick. Disrupt vexillologist 3 wolf moon cliche listicle. 3 wolf moon gentrify copper mug, put a bird on it hexagon heirloom meggings venmo. Freegan gastropub chicharrones, raclette keytar intelligentsia 90's enamel pin mumblecore. Letterpress kogi celiac chicharrones art party.
  
  `


table = `
<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th></th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td class="icon"><i class="material-icons">edit</i></td>
    <td class="icon"><i class="material-icons">delete</i></td>
  </tr>
  <tr>
    <td>Centro Moctezuma</td>
    <td>Francisco Chang</td>
    <td class="icon"><i class="material-icons">edit</i></td>
    <td class="icon"><i class="material-icons">delete</i></td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td class="icon"><i class="material-icons">edit</i></td>
    <td class="icon"><i class="material-icons">delete</i></td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td class="icon"><i class="material-icons">edit</i></td>
    <td class="icon"><i class="material-icons">delete</i></td>
  </tr>
  <tr>
    <td>Laughing Bacchus</td>
    <td>Yoshi Tannamuri</td>
    <td class="icon"><i class="material-icons">edit</i></td>
    <td class="icon"><i class="material-icons">delete</i></td>
  </tr>
  <tr>
    <td>Magazzini Riuniti</td>
    <td>Giovanni Rovelli</td>
        <td class="icon"><i class="material-icons">edit</i></td>
    <td class="icon"><i class="material-icons">delete</i></td>
  </tr>
    <tr>
    <td>Centro Moctezuma</td>
    <td>Francisco Chang</td>
    <td class="icon"><i class="material-icons">edit</i></td>
    <td class="icon"><i class="material-icons">delete</i></td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td class="icon"><i class="material-icons">edit</i></td>
    <td class="icon"><i class="material-icons">delete</i></td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td class="icon"><i class="material-icons">edit</i></td>
    <td class="icon"><i class="material-icons">delete</i></td>
  </tr>
  <tr>
    <td>Laughing Bacchus</td>
    <td>Yoshi Tannamuri</td>
    <td class="icon"><i class="material-icons">edit</i></td>
    <td class="icon"><i class="material-icons">delete</i></td>
  </tr>
  <tr>
    <td>Magazzini Riuniti</td>
    <td>Giovanni Rovelli</td>
        <td class="icon"><i class="material-icons">edit</i></td>
    <td class="icon"><i class="material-icons">delete</i></td>
  </tr>
</table>
`
todo = [
    {title: 'Users', subtitle: '6 users', id: 'users', big: true, content: this.table},
    {title: 'Groups', subtitle: '11 groups', id: 'groups', big: true, content: this.table},
    {title: 'Cloud Credentials', subtitle: '4 credentials', id: 'cloud', big: true, content: this.table},
    {title: 'Certificates', subtitle: '9 certificates', id: 'certificates', big: true, content: this.table },
    {title: 'Certificate Authorities', subtitle: '3 CAs', id: 'cas', big: true, content: this.ipsum},
  ];

  done = [
    {title: 'SSH Connections', subtitle: '1 connection', id: 'connections', big: true, content: this.ipsum},
    {title: 'SSH Keypairs', subtitle: '3 keypairs', id: 'keypairs', big: true, content: this.table},
    {title: 'Kerberos Realms', subtitle: '1 realm', id: 'krealms', big: true, content: this.table },
    {title: 'LDAP', subtitle: 'LDAP subtitle', id: 'ldap', big: true, content: this.ipsum},
  ];

  drop(event: CdkDragDrop<string[]>) { console.log(event)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
      
    }
  }

    toggle(id: string) {
    console.log(id)
    let l: any = document.getElementById(id);
    l.classList.toggle('big');
    for (let item of this.todo) {
      if (item.id === id) {
        item.big = !item.big;
      }
    }
    for (let item of this.done) {
      if (item.id === id) {
        item.big = !item.big;
      }
    }
  }


}

/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */