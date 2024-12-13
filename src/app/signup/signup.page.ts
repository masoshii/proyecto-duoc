import { Component,ChangeDetectorRef } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  email: string = '';
  username: string = '';
  rut: string = '';
  asignatura: string = ''; 
  cantalumnos: string = '';
  comuna: string = '';
  curso: string = '';
  colegio: string = '';
  selectedRole: string = '';
  isRoleSelected: boolean = false;
  tipoEstablecimiento: string = '';
  password: string = '';
  confirmPassword: string = '';
  passwordType: string = 'password'; 
  regiones = [
    {
      name: ' Arica y Parinacota',
      comunas: ['Arica', 'Camarones', 'Putre', 'General Lagos']
    },
    {
      name: ' Tarapacá',
      comunas: ['Iquique', 'Alto Hospicio', 'Pozo Almonte', 'Pica', 'Huara', 'Camiña', 'Colchane']
    },
    {
      name: ' Antofagasta',
      comunas: ['Antofagasta', 'Mejillones', 'Sierra Gorda', 'Taltal', 'Calama', 'Ollagüe', 'San Pedro de Atacama', 'Tocopilla', 'María Elena']
    },
    {
      name: ' Atacama',
      comunas: ['Copiapó', 'Caldera', 'Tierra Amarilla', 'Chañaral', 'Diego de Almagro', 'Vallenar', 'Huasco', 'Freirina', 'Alto del Carmen']
    },
    {
      name: ' Coquimbo',
      comunas: ['La Serena', 'Coquimbo', 'La Higuera', 'Paihuano', 'Vicuña', 'Illapel', 'Canela', 'Los Vilos', 'Salamanca', 'Ovalle', 'Monte Patria', 'Combarbalá', 'Punitaqui', 'Río Hurtado']
    },
    {
      name: ' Valparaíso',
      comunas: ['Valparaíso', 'Viña del Mar', 'Concón', 'Quintero', 'Puchuncaví', 'Casablanca', 'Juan Fernández', 'Quilpué', 'Villa Alemana', 'Limache', 'Olmué', 'Quillota', 'La Calera', 'Hijuelas', 'La Cruz', 'Nogales', 'San Antonio', 'Algarrobo', 'Cartagena', 'El Quisco', 'El Tabo', 'Santo Domingo', 'Isla de Pascua', 'Petorca', 'La Ligua', 'Cabildo', 'Papudo', 'Zapallar', 'San Felipe', 'Putaendo', 'Santa María', 'Los Andes', 'Calle Larga', 'Rinconada', 'San Esteban']
    },
    {
      name: ' Metropolitana de Santiago',
      comunas: ['Santiago', 'Cerrillos', 'Cerro Navia', 'Conchalí', 'El Bosque', 'Estación Central', 'Huechuraba', 'Independencia', 'La Cisterna', 'La Florida', 'La Granja', 'La Pintana', 'La Reina', 'Las Condes', 'Lo Barnechea', 'Lo Espejo', 'Lo Prado', 'Macul', 'Maipú', 'Ñuñoa', 'Pedro Aguirre Cerda', 'Peñalolén', 'Providencia', 'Pudahuel', 'Quilicura', 'Quinta Normal', 'Recoleta', 'Renca', 'San Joaquín', 'San Miguel', 'San Ramón', 'Vitacura', 'Puente Alto', 'Pirque', 'San José de Maipo', 'Colina', 'Lampa', 'Tiltil', 'San Bernardo', 'Buin', 'Calera de Tango', 'Paine', 'Melipilla', 'Alhué', 'Curacaví', 'María Pinto', 'San Pedro', 'Talagante', 'El Monte', 'Isla de Maipo', 'Padre Hurtado', 'Peñaflor']
    },
    {
      name: ' O’Higgins',
      comunas: ['Rancagua', 'Codegua', 'Coinco', 'Coltauco', 'Doñihue', 'Graneros', 'Las Cabras', 'Machalí', 'Malloa', 'Mostazal', 'Olivar', 'Peumo', 'Pichidegua', 'Quinta de Tilcoco', 'Rengo', 'Requínoa', 'San Vicente', 'Pichilemu', 'La Estrella', 'Litueche', 'Marchigüe', 'Navidad', 'Paredones', 'San Fernando', 'Chépica', 'Chimbarongo', 'Lolol', 'Nancagua', 'Palmilla', 'Peralillo', 'Placilla', 'Pumanque', 'Santa Cruz']
    },
    {
      name: ' del Maule',
      comunas: ['Talca', 'Constitución', 'Curepto', 'Empedrado', 'Maule', 'Pelarco', 'Pencahue', 'Río Claro', 'San Clemente', 'San Rafael', 'Cauquenes', 'Chanco', 'Pelluhue', 'Curicó', 'Hualañé', 'Licantén', 'Molina', 'Rauco', 'Romeral', 'Sagrada Familia', 'Teno', 'Vichuquén', 'Linares', 'Colbún', 'Longaví', 'Parral', 'Retiro', 'San Javier', 'Villa Alegre', 'Yerbas Buenas']
    },
    {
      name: 'Ñuble',
      comunas: ['Chillán', 'Chillán Viejo', 'El Carmen', 'Pemuco', 'Pinto', 'Quillón', 'San Ignacio', 'Yungay', 'Bulnes', 'Cobquecura', 'Coelemu', 'Ninhue', 'Portezuelo', 'Quirihue', 'Ránquil', 'Treguaco', 'San Carlos', 'Coihueco', 'Ñiquén', 'San Fabián', 'San Nicolás']
    },
    {
      name: ' Biobío',
      comunas: ['Concepción', 'Coronel', 'Chiguayante', 'Florida', 'Hualqui', 'Lota', 'Penco', 'San Pedro de la Paz', 'Santa Juana', 'Talcahuano', 'Tomé', 'Hualpén', 'Lebu', 'Arauco', 'Cañete', 'Contulmo', 'Curanilahue', 'Los Álamos', 'Tirúa', 'Los Ángeles', 'Antuco', 'Cabrero', 'Laja', 'Mulchén', 'Nacimiento', 'Negrete', 'Quilaco', 'Quilleco', 'San Rosendo', 'Santa Bárbara', 'Tucapel', 'Yumbel']
    },
    {
      name: ' La Araucanía',
      comunas: ['Temuco', 'Carahue', 'Cunco', 'Curarrehue', 'Freire', 'Galvarino', 'Gorbea', 'Lautaro', 'Loncoche', 'Melipeuco', 'Nueva Imperial', 'Padre Las Casas', 'Perquenco', 'Pitrufquén', 'Pucón', 'Saavedra', 'Teodoro Schmidt', 'Toltén', 'Vilcún', 'Villarrica', 'Cholchol', 'Angol', 'Collipulli', 'Curacautín', 'Ercilla', 'Lonquimay', 'Los Sauces', 'Lumaco', 'Purén', 'Renaico', 'Traiguén', 'Victoria']
    },
    {
      name: ' Los Ríos',
      comunas: ['Valdivia', 'Corral', 'Lanco', 'Los Lagos', 'Máfil', 'Mariquina', 'Paillaco', 'Panguipulli', 'La Unión', 'Futrono', 'Lago Ranco', 'Río Bueno']
    },
    {
      name: ' Los Lagos',
      comunas: ['Puerto Montt', 'Calbuco', 'Cochamó', 'Fresia', 'Frutillar', 'Los Muermos', 'Llanquihue', 'Maullín', 'Puerto Varas', 'Castro', 'Ancud', 'Chonchi', 'Curaco de Vélez', 'Dalcahue', 'Puqueldón', 'Queilén', 'Quellón', 'Quemchi', 'Quinchao', 'Osorno', 'Puerto Octay', 'Purranque', 'Puyehue', 'Río Negro', 'San Juan de la Costa', 'San Pablo', 'Chaitén', 'Futaleufú', 'Hualaihué', 'Palena']
    },
    {
      name: ' de Aysén',
      comunas: ['Coyhaique', 'Lago Verde', 'Aysén', 'Cisnes', 'Guaitecas', 'Cochrane', 'O’Higgins', 'Tortel', 'Chile Chico', 'Río Ibáñez']
    },
    {
      name: ' Magallanes y de la Antártica Chilena',
      comunas: ['Punta Arenas', 'Laguna Blanca', 'Río Verde', 'San Gregorio', 'Cabo de Hornos', 'Antártica', 'Porvenir', 'Primavera', 'Timaukel', 'Natales', 'Torres del Paine']
    }
  ];

  selectedRegion: string = '';
  selectedComuna: string = '';
  comunas: string[] = [];

  constructor(private alertController: AlertController, private navCtrl: NavController,private cdr:ChangeDetectorRef) {}

  togglePasswordVisibility() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: '',
      message: message,
      buttons: ['Continuar']
    });

    await alert.present();
  }

  registerUser() {
   
    if (!this.email || !this.username || !this.rut || !this.cantalumnos|| !this.tipoEstablecimiento) {
      this.presentAlert('Por favor, completa todos los campos.');
      return;
    }

    if (!this.validateEmail(this.email)) {
      this.presentAlert('El correo no es válido.');
      return;
    }

    if (!this.password) {
      this.presentAlert('La contraseña no puede estar vacía.');
      return;
    }

    if (this.password.length < 6) {
      this.presentAlert('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    
    if (this.password !== this.confirmPassword) {
      this.presentAlert('Las contraseñas no coinciden.');
      return;
    }

    console.log('Usuario registrado:', this.email);
    this.presentAlert('Usuario registrado exitosamente.');
    this.navCtrl.navigateRoot('/login');
  }

  validateEmail(email: string): boolean {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  }
  onRegionChange(event: any) {
    const regionName = event.detail.value;
    const region = this.regiones.find(r => r.name === regionName);
    if (region) {
      this.comunas = region.comunas;
    } else {
      this.comunas = [];
    }
    this.selectedComuna = ''; // Reiniciar la comuna
  }
  onRoleChange(event: any) {
    this.selectedRole = event.detail.value;
    this.isRoleSelected = true; // Oculta el selector y muestra el formulario
    this.cdr.detectChanges(); // Forzar actualización de la vista
  }

  resetRole() {
    this.selectedRole = '';
    this.isRoleSelected = false;
  }
}
