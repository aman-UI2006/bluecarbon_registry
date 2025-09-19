import {
  Box,
  Heading,
  Text,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  HStack,
  VStack,
  useColorModeValue,
  Card,
  CardBody,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { FiMoreVertical, FiCheck, FiX, FiEdit } from 'react-icons/fi'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

// Mock verification data
const mockVerifications = [
  {
    id: '1',
    projectName: 'Sundarbans Mangrove Restoration',
    submitter: 'John Doe',
    submitterOrg: 'Sundarbans Foundation',
    submittedAt: '2024-01-20',
    status: 'pending',
    carbonEstimate: 125.5,
    area: 12.3,
  },
  {
    id: '2',
    projectName: 'Kerala Backwater Conservation',
    submitter: 'Priya Sharma',
    submitterOrg: 'Kerala Coastal Authority',
    submittedAt: '2024-01-18',
    status: 'verified',
    carbonEstimate: 89.2,
    area: 8.7,
    verifiedAt: '2024-01-19',
    verifier: 'Dr. Rajesh Kumar',
  },
  {
    id: '3',
    projectName: 'Gujarat Coastal Protection',
    submitter: 'Amit Patel',
    submitterOrg: 'Gujarat Forest Department',
    submittedAt: '2024-01-15',
    status: 'rejected',
    carbonEstimate: 156.8,
    area: 15.2,
    verifiedAt: '2024-01-16',
    verifier: 'Dr. Sarah Wilson',
    rejectionReason: 'Insufficient photo evidence',
  },
]

export function Verifications() {
  const { t } = useTranslation()
  const cardBg = useColorModeValue('white', 'gray.800')

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'orange'
      case 'verified':
        return 'green'
      case 'rejected':
        return 'red'
      default:
        return 'gray'
    }
  }

  const pendingVerifications = mockVerifications.filter(v => v.status === 'pending')
  const completedVerifications = mockVerifications.filter(v => v.status !== 'pending')

  return (
    <Box>
      <VStack align="start" spacing={6} mb={8}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading size="xl" color="gray.800">
            {t('verifications.title')}
          </Heading>
          <Text color="gray.600" fontSize="lg" mt={2}>
            Review and verify field data submissions
          </Text>
        </MotionBox>
      </VStack>

      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card bg={cardBg} borderRadius="2xl" boxShadow="sm">
          <CardBody>
            <Tabs variant="soft-rounded" colorScheme="brand">
              <TabList mb={6}>
                <Tab>
                  {t('verifications.pending')} ({pendingVerifications.length})
                </Tab>
                <Tab>
                  {t('verifications.completed')} ({completedVerifications.length})
                </Tab>
              </TabList>

              <TabPanels>
                <TabPanel p={0}>
                  <Table variant="simple">
                    <Thead>
                      <Tr>
                        <Th>Project</Th>
                        <Th>Submitter</Th>
                        <Th>Submitted</Th>
                        <Th>Area (ha)</Th>
                        <Th>Carbon Estimate</Th>
                        <Th>Status</Th>
                        <Th>Actions</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {pendingVerifications.map((verification) => (
                        <Tr key={verification.id}>
                          <Td>
                            <VStack align="start" spacing={1}>
                              <Text fontWeight="medium" noOfLines={1}>
                                {verification.projectName}
                              </Text>
                            </VStack>
                          </Td>
                          <Td>
                            <HStack spacing={3}>
                              <Avatar size="sm" name={verification.submitter} />
                              <VStack align="start" spacing={0}>
                                <Text fontSize="sm" fontWeight="medium">
                                  {verification.submitter}
                                </Text>
                                <Text fontSize="xs" color="gray.500">
                                  {verification.submitterOrg}
                                </Text>
                              </VStack>
                            </HStack>
                          </Td>
                          <Td>
                            <Text fontSize="sm">{verification.submittedAt}</Text>
                          </Td>
                          <Td>
                            <Text fontSize="sm">{verification.area}</Text>
                          </Td>
                          <Td>
                            <Text fontSize="sm">{verification.carbonEstimate} tCO₂</Text>
                          </Td>
                          <Td>
                            <Badge
                              colorScheme={getStatusColor(verification.status)}
                              borderRadius="full"
                              px={3}
                              py={1}
                            >
                              {verification.status}
                            </Badge>
                          </Td>
                          <Td>
                            <HStack spacing={2}>
                              <Button
                                size="sm"
                                colorScheme="green"
                                leftIcon={<Icon as={FiCheck} />}
                                borderRadius="xl"
                              >
                                {t('verifications.actions.approve')}
                              </Button>
                              <Button
                                size="sm"
                                colorScheme="red"
                                variant="outline"
                                leftIcon={<Icon as={FiX} />}
                                borderRadius="xl"
                              >
                                {t('verifications.actions.reject')}
                              </Button>
                              <Menu>
                                <MenuButton
                                  as={Button}
                                  size="sm"
                                  variant="ghost"
                                  borderRadius="xl"
                                >
                                  <Icon as={FiMoreVertical} />
                                </MenuButton>
                                <MenuList>
                                  <MenuItem icon={<FiEdit />}>
                                    {t('verifications.actions.adjust')}
                                  </MenuItem>
                                </MenuList>
                              </Menu>
                            </HStack>
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TabPanel>

                <TabPanel p={0}>
                  <Table variant="simple">
                    <Thead>
                      <Tr>
                        <Th>Project</Th>
                        <Th>Submitter</Th>
                        <Th>Verified By</Th>
                        <Th>Verified Date</Th>
                        <Th>Carbon Estimate</Th>
                        <Th>Status</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {completedVerifications.map((verification) => (
                        <Tr key={verification.id}>
                          <Td>
                            <Text fontWeight="medium" noOfLines={1}>
                              {verification.projectName}
                            </Text>
                          </Td>
                          <Td>
                            <HStack spacing={3}>
                              <Avatar size="sm" name={verification.submitter} />
                              <VStack align="start" spacing={0}>
                                <Text fontSize="sm" fontWeight="medium">
                                  {verification.submitter}
                                </Text>
                                <Text fontSize="xs" color="gray.500">
                                  {verification.submitterOrg}
                                </Text>
                              </VStack>
                            </HStack>
                          </Td>
                          <Td>
                            <Text fontSize="sm">{verification.verifier}</Text>
                          </Td>
                          <Td>
                            <Text fontSize="sm">{verification.verifiedAt}</Text>
                          </Td>
                          <Td>
                            <Text fontSize="sm">{verification.carbonEstimate} tCO₂</Text>
                          </Td>
                          <Td>
                            <Badge
                              colorScheme={getStatusColor(verification.status)}
                              borderRadius="full"
                              px={3}
                              py={1}
                            >
                              {verification.status}
                            </Badge>
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </CardBody>
        </Card>
      </MotionBox>
    </Box>
  )
}