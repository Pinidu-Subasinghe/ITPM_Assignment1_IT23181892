import { test, expect } from '@playwright/test';

test.describe('ITPM Assignment 1 - Automated Testing', () => {

  test.beforeEach(async ({ page }) => {
    test.setTimeout(60000);

    await page.goto('https://www.swifttranslator.com/', {
      waitUntil: 'domcontentloaded',
    });

    const singlishInput = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    const sinhalaOutput = page.locator('div.flex-grow.bg-slate-50');

    await expect(singlishInput).toBeVisible();
    await expect(sinhalaOutput).toBeVisible();
  });

  const getInputs = (page: any) => ({
    singlishInput: page.locator('textarea[placeholder="Input Your Singlish Text Here."]'),
    sinhalaOutput: page.locator('div.flex-grow.bg-slate-50'),
  });

  // ===========================================================================
  // 1. POSITIVE FUNCTIONAL TESTS
  // ===========================================================================

  const positiveTests = [
    { id: 'Pos_Fun_0001', input: 'mama kadeeta yanavaa.', expected: 'මම කඩේට යනවා.' },
    { id: 'Pos_Fun_0002', input: 'mama vaeda ivara karalaa passe kannam.', expected: 'මම වැඩ ඉවර කරලා පස්සෙ කන්නම්.' },
    { id: 'Pos_Fun_0003', input: 'oyaa bath eka hadhanavaa naQQ mama parippu eka hadhannam.', expected: 'ඔයා බත් එක හදනවා නං මම පරිප්පු එක හදන්නම්.' },
    { id: 'Pos_Fun_0004', input: 'podi udhavvak karanna puLuvandha?', expected: 'පොඩි උදව්වක් කරන්න පුළුවන්ද?' },
    { id: 'Pos_Fun_0005', input: 'vahaama eeka bimin thiyanna.', expected: 'වහාම ඒක බිමින් තියන්න.' },
    { id: 'Pos_Fun_0006', input: 'mama ohuva dhanne naehae.', expected: 'මම ඔහුව දන්නෙ නැහැ.' },
    { id: 'Pos_Fun_0007', input: 'iiyea apea geval laGA accident ekak vunaa.', expected: 'ඊයේ අපේ ගෙවල් ලඟ accident එකක් වුනා.' },
    { id: 'Pos_Fun_0008', input: 'mama heta udheama nuvara yanavaa.', expected: 'මම හෙට උදේම නුවර යනවා.' },
    { id: 'Pos_Fun_0009', input: 'oyaalaa ee vaeda tika kaLaadha?', expected: 'ඔයාලා ඒ වැඩ ටික කළාද?' },
    { id: 'Pos_Fun_0010', input: 'magea whatsapp account eka hack vunaa.', expected: 'මගේ whatsapp account එක hack වුනා.' },
    { id: 'Pos_Fun_0011', input: 'api One Galle Face paeththe gihin emudha heta?', expected: 'අපි One Galle Face පැත්තෙ ගිහින් එමුද හෙට?' },
    { id: 'Pos_Fun_0012', input: 'suba upandhinayak veavaa!', expected: 'සුබ උපන්දිනයක් වේවා!' },
    { id: 'Pos_Fun_0013', input: 'adoo gaemmak thamayi ithin.', expected: 'අඩෝ ගැම්මක් තමයි ඉතින්.' },
    { id: 'Pos_Fun_0014', input: 'meaka USD 500.99k venavadha?', expected: 'මේක USD 500.99ක් වෙනවද?' },
    { id: 'Pos_Fun_0015', input: 'mama edhdhi 10.00 PM vagea veyi.', expected: 'මම එද්දි 10.00 PM වගේ වෙයි.' },
    { id: 'Pos_Fun_0016', input: 'dhaen dollar ekath tika tika vaedi venavaa.', expected: 'දැන් dollar එකත් ටික ටික වැඩි වෙනවා.' },
    { id: 'Pos_Fun_0017', input: 'vinaadiyak inna.', expected: 'විනාඩියක් ඉන්න.' },
    { id: 'Pos_Fun_0018', input: 'mama kaeema kaeevaa.\ndhaen dhath madhinna yanavaa.', expected: 'මම කෑම කෑවා.\nදැන් දත් මදින්න යනවා.' },
    { id: 'Pos_Fun_0019', input: 'bosaa       mama gedhara yana          gaman inne.', expected: 'බොසා       මම ගෙදර යන          ගමන් ඉන්නේ.' },
    { id: 'Pos_Fun_0020', input: 'eyaalaa heta gamea yanavaa.', expected: 'එයාලා හෙට ගමේ යනවා.' },
    { id: 'Pos_Fun_0021', input: 'oyaa (kavishka) gedhara vaeda karaadha?', expected: 'ඔයා (කවිශ්ක) ගෙදර වැඩ කරාද?' },
    { id: 'Pos_Fun_0022', input: 'dhaen aapu OTP eka kiyanna.', expected: 'දැන් ආපු OTP එක කියන්න.' },
    { id: 'Pos_Fun_0023', input: 'onna ooka dhiipan mehaata.', expected: 'ඔන්න ඕක දීපන් මෙහාට.' },
    { id: 'Pos_Fun_0024', input: 'siigiriya kiyannee shrii lQQkaavee maathalee dhisthrikkayee dhaBulla kittuva, pas veni siyavaseedhi kaashYApa rajathumaa karavapu looka urumayak. miitar 200k vithara usa loku kaLugal parvathayak uda thiyana mee maaLigaava, lassana bithusithuvam, kaetapath pavura, siQQha paadhaya saha dhiya udhYaana thiyana mee maaLigaava paeraNi nagara nirmaaNakaraNayata hoDHAma udhaaharaNayak.', expected: 'සීගිරිය කියන්නේ ශ්‍රී ලංකාවේ මාතලේ දිස්ත්‍රික්කයේ දඹුල්ල කිට්ටුව, පස් වෙනි සියවසේදි කාශ්‍යප රජතුමා කරවපු ලෝක උරුමයක්. මීටර් 200ක් විතර උස ලොකු කළුගල් පර්වතයක් උඩ තියන මේ මාළිගාව, ලස්සන බිතුසිතුවම්, කැටපත් පවුර, සිංහ පාදය සහ දිය උද්‍යාන තියන මේ මාළිගාව පැරණි නගර නිර්මාණකරණයට හොඳම උදාහරණයක්.' },
  ];

  for (const data of positiveTests) {
    test(data.id, async ({ page }) => {
      const { singlishInput, sinhalaOutput } = getInputs(page);

      await singlishInput.fill('');
      await singlishInput.type(data.input, { delay: 20 });

      // ✅ WAIT until translation appears (not empty)
      await expect(sinhalaOutput).not.toHaveText('', { timeout: 15000 });

      // ✅ THEN validate content
      await expect(sinhalaOutput).toContainText(data.expected);
    });
  }

  // ===========================================================================
  // 2. NEGATIVE FUNCTIONAL TESTS (EXPECTED FAILURES)
  // ===========================================================================

  const negativeTests = [
    { id: 'Neg_Fun_0001', input: 'wenawaa', expected: 'වෙනවා' },
    { id: 'Neg_Fun_0002', input: 'aBA gediya (BA)', expected: 'අඹ ගෙඩිය (ඹ)' },
    { id: 'Neg_Fun_0003', input: 'https://www.swifttranslator.com/', expected: 'https://www.swifttranslator.com/' },
    { id: 'Neg_Fun_0004', input: 'SwissGear / Asus / MacBook Air', expected: 'SwissGear / Asus / MacBook Air' },
    { id: 'Neg_Fun_0005', input: 'oyaa aBhyaasa tika karaadha?', expected: 'ඔයා අභ්‍යාස ටික කරාද?' },
    { id: 'Neg_Fun_0006', input: 'iita passe Ctrl + C press karanna.', expected: 'ඊට පස්සෙ Ctrl + C press කරන්න.' },
    { id: 'Neg_Fun_0007', input: 'x + y = 25, meeka sulu karanna', expected: 'x + y = 25, මේක සුලු කරන්න' },
    { id: 'Neg_Fun_0008', input: '"npx create-react-app my-app" terminal ekee run karalaa project eka hadhaaganna.', expected: '"npx create-react-app my-app" terminal එකේ run කරලා project එක හදාගන්න.' },
    { id: 'Neg_Fun_0009', input: 'Australia vs australia', expected: 'Australia vs australia' },
    { id: 'Neg_Fun_0010', input: 'apee maamaA inne rata.', expected: 'අපේ මාමා ඉන්නේ රට.' },
  ];

  for (const data of negativeTests) {
    test(data.id, async ({ page }) => {
      test.fail(); // Known functional limitation

      const { singlishInput, sinhalaOutput } = getInputs(page);

      await singlishInput.fill('');
      await singlishInput.type(data.input, { delay: 20 });

      await expect(sinhalaOutput).not.toHaveText('', { timeout: 15000 });
      await expect(sinhalaOutput).toHaveText(data.expected);
    });
  }

  // ===========================================================================
  // 3. POSITIVE UI TEST
  // ===========================================================================

  test('Pos_UI_0001: Real-time synchronization', async ({ page }) => {
    const { singlishInput, sinhalaOutput } = getInputs(page);

    await singlishInput.type('mama', { delay: 150 });
    await expect(sinhalaOutput).toContainText('මම');
  });

});
