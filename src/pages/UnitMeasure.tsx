import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Moon, Sun, Copy, Check, Send } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';
import { AnimatePresence, motion } from 'framer-motion';
import { toast } from 'react-hot-toast';

const measures = [
  { name: 'Nano', value: 1, symbol: 'n' },
  { name: 'Micro', value: 1000, symbol: 'μ' },
  { name: 'Milli', value: 1000000, symbol: 'm' },
  { name: 'Kiloton', value: 1000000000000, symbol: 'k' },
  { name: 'Megaton', value: 1000000000000000, symbol: 'M' },
  { name: 'Gigaton', value: 1000000000000000000, symbol: 'G' },
];

export const UnitMeasure: React.FC = () => {
  const [tonValue, setTonValue] = useState('');
  const [values, setValues] = useState<{ [key: string]: string }>(
    Object.fromEntries(measures.map((m) => [m.name, '']))
  );
  const { theme, setTheme } = useTheme();
  const [copied, setCopied] = useState<string | null>(null);

  const handleTonChange = (value: string) => {
    const cleanValue = value.replace(/[^\d.,]/g, '').replace(',', '.');
    setTonValue(cleanValue);
    if (cleanValue === '') {
      setValues(Object.fromEntries(measures.map((m) => [m.name, ''])));
    } else if (/^\d*\.?\d*$/.test(cleanValue)) {
      const nanoValue = parseFloat(cleanValue) * 1000000000;
      const newValues = Object.fromEntries(
        measures.map((m) => [
          m.name,
          nanoValue ? Math.floor(nanoValue / m.value).toString() : '',
        ])
      );
      setValues(newValues);
    }
  };

  const handleChange = (measure: string, value: string) => {
    const cleanValue = value.replace(/[^\d.,]/g, '').replace(',', '.');
    if (cleanValue === '') {
      setTonValue('');
      setValues(Object.fromEntries(measures.map((m) => [m.name, ''])));
    } else if (/^\d*\.?\d*$/.test(cleanValue)) {
      const nanoValue =
        parseFloat(cleanValue) *
        measures.find((m) => m.name === measure)!.value;
      setTonValue(nanoValue ? (nanoValue / 1000000000).toString() : '');
      const newValues = Object.fromEntries(
        measures.map((m) => [
          m.name,
          nanoValue ? Math.floor(nanoValue / m.value).toString() : '',
        ])
      );
      setValues(newValues);
    }
  };

  const handleCopy = (measure: string) => {
    const valueToCopy = measure === 'TON' ? tonValue : values[measure];
    navigator.clipboard.writeText(valueToCopy);
    setCopied(measure);
    toast.success(`Copied ${measure} value!`);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className='container mx-auto p-4 max-w-4xl'>
      <Card className='mb-8'>
        <CardContent className='p-6'>
          <div className='flex justify-between items-center mb-6'>
            <h2 className='text-2xl font-bold'>TON Converter</h2>
            <Button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              size='icon'
              className='p-0.5'
              variant='outline'
            >
              {theme === 'dark' ? (
                <Sun className='h-[1.2rem] w-[1.2rem]' />
              ) : (
                <Moon className='h-[1.2rem] w-[1.2rem]' />
              )}
            </Button>
          </div>
          <div className='mb-4'>
            <Label htmlFor='ton'>TON Value (Any precision)</Label>
            <div className='relative'>
              <Input
                id='ton'
                value={tonValue}
                onChange={(e) => handleTonChange(e.target.value)}
                placeholder='Enter TON value'
                className='pr-10'
              />
              <AnimatePresence>
                <motion.button
                  key={copied === 'TON' ? 'check' : 'copy'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => handleCopy('TON')}
                  className={`absolute right-0 top-1/2 transform -translate-y-1/2 focus:outline-double ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
                  }`}
                >
                  {copied === 'TON' ? (
                    <Check className='h-4 w-4 text-green-500' />
                  ) : (
                    <Copy className='h-4 w-4' />
                  )}
                </motion.button>
              </AnimatePresence>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {measures.map((measure) => (
              <div key={measure.name} className='flex flex-col'>
                <Label className='pb-1' htmlFor={measure.name}>
                  {measure.name}
                </Label>
                <div className='relative'>
                  <Input
                    id={measure.name}
                    value={values[measure.name]}
                    onChange={(e) => handleChange(measure.name, e.target.value)}
                    placeholder={`Enter ${measure.name}`}
                    className='pr-10'
                  />
                  <AnimatePresence>
                    <motion.button
                      key={copied === measure.name ? 'check' : 'copy'}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => handleCopy(measure.name)}
                      className={`absolute right-0 top-1/2 transform -translate-y-1/2 focus:outline-double ${
                        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
                      }`}
                    >
                      {copied === measure.name ? (
                        <Check className='h-4 w-4 text-green-500' />
                      ) : (
                        <Copy className='h-4 w-4' />
                      )}
                    </motion.button>
                  </AnimatePresence>
                </div>
                <span className='text-sm text-gray-500 mt-1'>
                  {measure.symbol}:{values[measure.name]}
                </span>
              </div>
            ))}
          </div>
        </CardContent>

        <CardFooter className='flex justify-center pt-6'>
          <a
            href='https://t.me/arveer'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center text-sm text-muted-foreground hover:text-primary transition-colors'
          >
            <Send className='h-4 w-4 mr-2' />
            Contact me on Telegram
          </a>
        </CardFooter>
      </Card>
    </div>
  );
};
