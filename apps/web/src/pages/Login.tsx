import {
  Box,
  Flex,
  VStack,
  Heading,
  Text,
  Input,
  Button,
  Card,
  CardBody,
  HStack,
  Icon,
  useColorModeValue,
  PinInput,
  PinInputField,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FiStar, FiPhone } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { useAuth } from '../hooks/useAuth'

const MotionBox = motion(Box)

export function Login() {
  const { t } = useTranslation()
  const { login } = useAuth()
  const [step, setStep] = useState<'phone' | 'otp'>('phone')
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  
  const cardBg = useColorModeValue('white', 'gray.800')
  const bgGradient = useColorModeValue(
    'linear(to-br, brand.50, ocean.50)',
    'linear(to-br, gray.900, gray.800)'
  )

  const handlePhoneSubmit = async () => {
    setIsLoading(true)
    // Simulate OTP sending
    await new Promise(resolve => setTimeout(resolve, 1000))
    setStep('otp')
    setIsLoading(false)
  }

  const handleOtpSubmit = async () => {
    setIsLoading(true)
    await login(phone, otp)
    setIsLoading(false)
  }

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bgGradient={bgGradient}
      p={4}
    >
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        w="full"
        maxW="md"
      >
        <Card bg={cardBg} borderRadius="3xl" boxShadow="xl" border="1px solid" borderColor="gray.100">
          <CardBody p={8}>
            <VStack spacing={8}>
              {/* Logo and Title */}
              <VStack spacing={4}>
                <HStack spacing={3}>
                  <Box
                    w={12}
                    h={12}
                    bg="brand.500"
                    borderRadius="2xl"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    className="pulse-glow"
                  >
                    <Icon as={FiStar} color="white" w={6} h={6} />
                  </Box>
                  <Heading size="lg" color="brand.500">
                    BlueCarbon Registry
                  </Heading>
                </HStack>
                <Text color="gray.600" textAlign="center">
                  {t('auth.welcome')}
                </Text>
              </VStack>

              {/* Phone Input Step */}
              {step === 'phone' && (
                <VStack spacing={6} w="full">
                  <VStack spacing={2} w="full">
                    <Text fontSize="lg" fontWeight="medium" color="gray.800">
                      {t('auth.enterPhone')}
                    </Text>
                    <Text fontSize="sm" color="gray.600" textAlign="center">
                      We'll send you a verification code
                    </Text>
                  </VStack>

                  <VStack spacing={4} w="full">
                    <Box position="relative" w="full">
                      <Icon
                        as={FiPhone}
                        position="absolute"
                        left={4}
                        top="50%"
                        transform="translateY(-50%)"
                        color="gray.400"
                        zIndex={2}
                      />
                      <Input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        pl={12}
                        size="lg"
                        borderRadius="2xl"
                        bg="gray.50"
                        border="2px solid"
                        borderColor="gray.100"
                        _focus={{
                          borderColor: 'brand.500',
                          bg: 'white',
                        }}
                      />
                    </Box>

                    <Button
                      onClick={handlePhoneSubmit}
                      isLoading={isLoading}
                      loadingText="Sending OTP..."
                      colorScheme="brand"
                      size="lg"
                      w="full"
                      borderRadius="2xl"
                      isDisabled={!phone}
                    >
                      Send OTP
                    </Button>
                  </VStack>
                </VStack>
              )}

              {/* OTP Input Step */}
              {step === 'otp' && (
                <VStack spacing={6} w="full">
                  <VStack spacing={2} w="full">
                    <Text fontSize="lg" fontWeight="medium" color="gray.800">
                      {t('auth.enterOTP')}
                    </Text>
                    <Text fontSize="sm" color="gray.600" textAlign="center">
                      Enter the 6-digit code sent to {phone}
                    </Text>
                  </VStack>

                  <VStack spacing={4} w="full">
                    <HStack spacing={2} justify="center">
                      <PinInput
                        value={otp}
                        onChange={setOtp}
                        size="lg"
                        placeholder="0"
                      >
                        <PinInputField borderRadius="xl" />
                        <PinInputField borderRadius="xl" />
                        <PinInputField borderRadius="xl" />
                        <PinInputField borderRadius="xl" />
                        <PinInputField borderRadius="xl" />
                        <PinInputField borderRadius="xl" />
                      </PinInput>
                    </HStack>

                    <Button
                      onClick={handleOtpSubmit}
                      isLoading={isLoading}
                      loadingText="Verifying..."
                      colorScheme="brand"
                      size="lg"
                      w="full"
                      borderRadius="2xl"
                      isDisabled={otp.length !== 6}
                    >
                      {t('auth.verifyOTP')}
                    </Button>

                    <HStack spacing={2}>
                      <Text fontSize="sm" color="gray.600">
                        Didn't receive the code?
                      </Text>
                      <Button
                        variant="link"
                        colorScheme="brand"
                        fontSize="sm"
                        onClick={() => setStep('phone')}
                      >
                        {t('auth.resendOTP')}
                      </Button>
                    </HStack>
                  </VStack>
                </VStack>
              )}

              {/* Footer */}
              <Text fontSize="xs" color="gray.500" textAlign="center">
                By continuing, you agree to our Terms of Service and Privacy Policy
              </Text>
            </VStack>
          </CardBody>
        </Card>
      </MotionBox>
    </Flex>
  )
}