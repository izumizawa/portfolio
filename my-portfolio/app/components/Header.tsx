import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();

  return (
    <div>
      <p>{t('job-title')}</p>
    </div>
  );
}

export default Header;