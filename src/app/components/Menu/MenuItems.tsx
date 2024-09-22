export interface MenuItem {
  label: string;
  anchor?: string;
  submenu?: MenuItem[];
}

const MenuItems : MenuItem[] = [
  {
    label: "Sobre",
    submenu: [
      {
        label: "Quem somos",
        anchor: "#quem-somos"
      },
      {
        label: "Papel do paq",
        anchor: "#papel-do-paq"
      },
      {
        label: "Impacto",
        anchor: "#impaqtometro"
      }
    ]
  },
  {
    label: "Apoio",
    anchor: "#como-apoiar"
  },
  {
    label: "Programas",
    anchor: "#programas-e-espacos"
  },
  {
    label: "Histórias",
    anchor: "#historias"
  }
]

export default MenuItems