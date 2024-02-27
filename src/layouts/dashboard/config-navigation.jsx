import SvgColor from 'src/components/svg-color';
// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />

);

const navConfig = [
  {
    title: 'Application',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Pending Certificate',
    path: '/PendingCertificate',
    icon: icon('ic_blog'),
    admin:true
  },
  {
    title: 'Approved Certificate',
    path: '/ApproveCertificate',
    icon: icon('ic_blog'),
    admin:true
  },
  {
    title: 'Reject Certificate',
    path: '/RejectCertificate',
    icon: icon('ic_blog'),
    admin:true
  },
  {
    title: 'My Certificate',
    path: '/mycertificate',
    icon: icon('ic_cart'),
  },
  {
    title: 'Profile',
    path: '/Profile',
    icon: icon('ic_blog'),
  }
];

export default navConfig;
