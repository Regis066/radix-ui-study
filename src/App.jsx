import React from "react";
import {
  Flex,
  Button,
  Text,
  Box,
  Kbd,
  AlertDialog,
  Heading,
  AspectRatio,
  Avatar,
  Badge,
  Callout,
  Card,
  ContextMenu,
  Dialog,
  TextField,
  Table,
  TableBody,
  Inset,
  DropdownMenu,
  HoverCard,
  Link,
  IconButton,
  Strong,
  Popover,
  TextArea,
  Checkbox,
  Grid,
  RadioGroup,
  ScrollArea,
  Select,
  Switch,
  Separator,
  Tabs,
  Tooltip,
} from "@radix-ui/themes";
import {
  InfoCircledIcon,
  CaretDownIcon,
  MagnifyingGlassIcon,
  ChatBubbleIcon,
  Link1Icon,
  Share2Icon,
  PlusIcon,
} from "@radix-ui/react-icons";
import "./App.css";

const App = () => {
  return (
    <Box width="100%" height="100%" inset="100%">
      <Badge color="blue" size="2" variant="surface">
        In progress
      </Badge>

      <Card style={{ maxWidth: 240 }} my="4" variant="surface">
        <Flex gap="3" align="center">
          <Avatar
            size="3"
            src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
            radius="full"
            fallback="T"
          />

          <Box>
            <Text as="div" size="2" weight="bold">
              Teodros Girmay
            </Text>
            <Text as="div" size="1" color="grey">
              Engineering
            </Text>
          </Box>
        </Flex>
      </Card>

      <Callout.Root my="4">
        <Callout.Icon>
          <InfoCircledIcon />
        </Callout.Icon>
        <Callout.Text>
          You will need admin privileges to install and access this application.
        </Callout.Text>
      </Callout.Root>
      <Flex direction="row" gap="2">
        <Text weight="medium" size={{ initial: "3", md: "5", xl: "7" }}>
          Hello from Radix UI Themes
        </Text>
        <Button variant="soft" size="4">
          Let's go
          <Kbd>Ctrl + I </Kbd>
        </Button>
      </Flex>

      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button>Revoke access</Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content style={{ maxWidth: 450 }}>
          <AlertDialog.Title>
            <Heading>Revoke Access</Heading>
          </AlertDialog.Title>
          <AlertDialog.Description size="2">
            <Text>
              Are you sure? This application will no longer be accessible and
              any existing sessions will be expired.
            </Text>
          </AlertDialog.Description>
          <Flex mt="4" justify="end" gap="4">
            <AlertDialog.Cancel>
              <Button color="gray">Cancel</Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button color="red">OK</Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
      <Flex gap="3" my="4">
        <Avatar
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
          fallback="A"
          variant="solid"
        />
        <Avatar fallback="A" variant="solid" />
      </Flex>

      {/* <AspectRatio ratio={16 / 8}>
        <img
          src="https://images.unsplash.com/photo-1479030160180-b1860951d696?&auto=format&fit=crop&w=1200&q=80"
          alt="A house in a forest"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            borderRadius: "var(--radius-6)",
          }}
        />
      </AspectRatio> */}

      <ContextMenu.Root>
        <ContextMenu.Trigger>
          <Box style={{ height: 150, background: "#141726", color: "white" }}>
            <Flex align="center" justify="center" height="100%">
              Right-Click here
            </Flex>
          </Box>
        </ContextMenu.Trigger>
        <ContextMenu.Content variant="soft">
          <ContextMenu.Group>
            <ContextMenu.Item shortcut="⌘ E">Edit</ContextMenu.Item>
            <ContextMenu.Item shortcut="⌘ D">Duplicate</ContextMenu.Item>
          </ContextMenu.Group>
          <ContextMenu.Separator />
          <ContextMenu.Item shortcut="⌘ N">Archive</ContextMenu.Item>

          <ContextMenu.Sub>
            <ContextMenu.SubTrigger>More</ContextMenu.SubTrigger>
            <ContextMenu.SubContent>
              <ContextMenu.Item>Move to project…</ContextMenu.Item>
              <ContextMenu.Item>Move to folder…</ContextMenu.Item>
              <ContextMenu.Separator />
              <ContextMenu.Item>Advanced options…</ContextMenu.Item>
            </ContextMenu.SubContent>
          </ContextMenu.Sub>

          <ContextMenu.Separator />
          <ContextMenu.Item>Share</ContextMenu.Item>
          <ContextMenu.Item>Add to favorites</ContextMenu.Item>
          <ContextMenu.Separator />
          <ContextMenu.Item shortcut="⌘ ⌫" color="red">
            Delete
          </ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu.Root>

      <Flex gap="3">
        <Dialog.Root>
          <Dialog.Trigger>
            <Button my="4">Edit profile</Button>
          </Dialog.Trigger>
          <Dialog.Content style={{ maxWidth: 450 }}>
            <Dialog.Title>Edit profile</Dialog.Title>
            <Dialog.Description size="2" mb="4">
              Make changes to your profile.
            </Dialog.Description>
            <Flex direction="column" gap="3">
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Name
                </Text>
                <TextField.Input
                  // defaultValue="Freja Johnsen"
                  placeholder="Enter your full name"
                />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Email
                </Text>
                <TextField.Input
                  // defaultValue="freja@example.com"
                  placeholder="Enter your email"
                />
              </label>
            </Flex>
            <Flex gap="3" mt="4" justify="end">
              <Dialog.Close>
                <Button variant="soft" color="gray">
                  Cancel
                </Button>
              </Dialog.Close>
              <Dialog.Close>
                <Button>Save</Button>
              </Dialog.Close>
            </Flex>
          </Dialog.Content>
        </Dialog.Root>
        <Dialog.Root>
          <Dialog.Trigger>
            <Button my="4">View users</Button>
          </Dialog.Trigger>
          <Dialog.Content>
            <Dialog.Title>Users</Dialog.Title>
            <Dialog.Description>
              The following users have access to this project.
            </Dialog.Description>
            <Inset side="x" my="5">
              <Table.Root>
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
                  </Table.Row>
                </Table.Header>
                <TableBody>
                  <Table.Row>
                    <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
                    <Table.Cell>danilo@example.com</Table.Cell>
                    <Table.Cell>Developer</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
                    <Table.Cell>zahra@example.com</Table.Cell>
                    <Table.Cell>Admin</Table.Cell>
                  </Table.Row>
                </TableBody>
              </Table.Root>
            </Inset>
            <Flex gap="3" justify="end">
              <Dialog.Close>
                <Button variant="soft" color="gray">
                  Close
                </Button>
              </Dialog.Close>
            </Flex>
          </Dialog.Content>
        </Dialog.Root>
      </Flex>

      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Button variant="soft">
            Options
            <CaretDownIcon />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
          <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
            <DropdownMenu.SubContent>
              <DropdownMenu.Item>Move to project…</DropdownMenu.Item>
              <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>

              <DropdownMenu.Separator />
              <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>

          <DropdownMenu.Separator />
          <DropdownMenu.Item>Share</DropdownMenu.Item>
          <DropdownMenu.Item>Add to favorites</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
            Delete
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
      <br />

      <Text>
        Follow{" "}
        <HoverCard.Root>
          <HoverCard.Trigger>
            <Link href="https://twitter.com/radix_ui">@radix_ui</Link>
          </HoverCard.Trigger>
          <HoverCard.Content>
            <Flex gap="4">
              <Avatar
                size="3"
                fallback="R"
                radius="full"
                src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
              />
              <Box>
                <Heading size="4" as="h3">
                  Radix
                </Heading>
                <Text as="div" size="2" color="gray">
                  @radix_ui
                </Text>

                <Text as="div" size="2" style={{ maxWidth: 300 }} mt="3">
                  React components, icons, and colors for building high-quality,
                  accessible UI.
                </Text>
              </Box>
            </Flex>
          </HoverCard.Content>
        </HoverCard.Root>{" "}
        for more updates
      </Text>
      <br />
      <IconButton size="2">
        <MagnifyingGlassIcon width="18" height="18" />
      </IconButton>
      <br />
      <Card size="2" style={{ maxWidth: 240 }}>
        <Inset clip="padding-box" side="top" pb="current">
          <img
            src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            alt="Bold typography"
            style={{
              display: "block",
              objectFit: "cover",
              width: "100%",
              height: 140,
              backgroundColor: "var(--gray-5)",
            }}
          />
        </Inset>
        <Text as="p" size="3">
          <Strong>Typography</Strong> is the art and technique of arranging type
          to make written language legible, readable and appealing when
          displayed.
        </Text>
      </Card>

      <Popover.Root>
        <Popover.Trigger>
          <Button variant="soft">
            <ChatBubbleIcon width="16" height="16" />
            Comment
          </Button>
        </Popover.Trigger>
        <Popover.Content style={{ width: 360 }}>
          <Flex gap="3">
            <Avatar
              size="2"
              src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
              fallback="A"
              radius="full"
            />
            <Box grow="1">
              <TextArea placeholder="Write a comment…" style={{ height: 80 }} />
              <Flex gap="3" mt="3" justify="between">
                <Flex align="center" gap="2" asChild>
                  <Text as="label" size="2">
                    <Checkbox />
                    <Text>Send to group</Text>
                  </Text>
                </Flex>

                <Popover.Close>
                  <Button size="1">Comment</Button>
                </Popover.Close>
              </Flex>
            </Box>
          </Flex>
        </Popover.Content>
      </Popover.Root>

      <Popover.Root>
        <Popover.Trigger>
          <Button variant="soft">
            <Share2Icon width="16" height="16" />
            Share image
          </Button>
        </Popover.Trigger>
        <Popover.Content style={{ width: 360 }}>
          <Grid columns="120px 1fr">
            <Inset side="left" pr="current">
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?&auto=format&fit=crop&w=400&q=80"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </Inset>

            <div>
              <Heading size="2" mb="1">
                Share this image
              </Heading>
              <Text as="p" size="2" mb="4" color="gray">
                Minimalistic 3D rendering wallpaper.
              </Text>

              <Flex direction="column" align="stretch">
                <Popover.Close>
                  <Button size="1" variant="soft">
                    <Link1Icon width="16" height="16" />
                    Copy link
                  </Button>
                </Popover.Close>
              </Flex>
            </div>
          </Grid>
        </Popover.Content>
      </Popover.Root>

      <RadioGroup.Root defaultValue="1">
        <Flex gap="2" direction="column">
          <Text as="label" size="2">
            <Flex gap="2">
              <RadioGroup.Item value="1" disabled /> Default
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2">
              <RadioGroup.Item value="2" /> Comfortable
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2">
              <RadioGroup.Item value="3" /> Compact
            </Flex>
          </Text>
        </Flex>
      </RadioGroup.Root>

      <Grid columns="2" gap="2" style={{ width: 420 }}>
        <ScrollArea type="always" scrollbars="vertical" style={{ height: 150 }}>
          <Flex p="2" pr="8" direction="column" gap="4">
            <Text size="2" trim="both">
              Three fundamental aspects of typography are legibility,
              readability, and aesthetics. Although in a non-technical sense
              "legible" and "readable" are often used synonymously,
              typographically they are separate but related concepts.
            </Text>

            <Text size="2" trim="both">
              Legibility describes how easily individual characters can be
              distinguished from one another. It is described by Walter Tracy as
              "the quality of being decipherable and recognisable". For
              instance, if a "b" and an "h", or a "3" and an "8", are difficult
              to distinguish at small sizes, this is a problem of legibility.
            </Text>
          </Flex>
        </ScrollArea>

        <ScrollArea
          type="always"
          scrollbars="horizontal"
          style={{ height: 150 }}
        >
          <Flex gap="4" p="2" style={{ width: 700 }}>
            <Text size="2" trim="both">
              Three fundamental aspects of typography are legibility,
              readability, and aesthetics. Although in a non-technical sense
              "legible" and "readable" are often used synonymously,
              typographically they are separate but related concepts.
            </Text>

            <Text size="2" trim="both">
              Legibility describes how easily individual characters can be
              distinguished from one another. It is described by Walter Tracy as
              "the quality of being decipherable and recognisable". For
              instance, if a "b" and an "h", or a "3" and an "8", are difficult
              to distinguish at small sizes, this is a problem of legibility.
            </Text>
          </Flex>
        </ScrollArea>
      </Grid>

      <Select.Root size="3">
        <Select.Trigger placeholder="Pick a fruit or vegetable" />
        <Select.Content>
          <Select.Group>
            <Select.Label>Fruits</Select.Label>
            <Select.Item value="orange">Orange</Select.Item>
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="grape" disabled>
              Grape
            </Select.Item>
          </Select.Group>
          <Select.Group>
            <Select.Label>Vegetables</Select.Label>
            <Select.Item value="carrot">Carrot</Select.Item>
            <Select.Item value="potato">Potato</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>

      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
            <Table.Cell>danilo@example.com</Table.Cell>
            <Table.Cell>Developer</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
            <Table.Cell>zahra@example.com</Table.Cell>
            <Table.Cell>Admin</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
            <Table.Cell>jasper@example.com</Table.Cell>
            <Table.Cell>Developer</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
      <Text as="label" size="2">
        <Flex gap="2">
          <Switch defaultChecked /> Sync settings
        </Flex>
      </Text>

      <Text size="2">
        Tools for building high-quality, accessible UI.
        <Separator my="3" size="4" />
        <Flex gap="3" align="center">
          Themes
          <Separator orientation="vertical" />
          Primitives
          <Separator orientation="vertical" />
          Icons
          <Separator orientation="vertical" />
          Colors
        </Flex>
      </Text>

      <Tabs.Root defaultValue="account">
        <Tabs.List>
          <Tabs.Trigger value="account">Account</Tabs.Trigger>
          <Tabs.Trigger value="documents">Documents</Tabs.Trigger>
          <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
        </Tabs.List>

        <Box px="4" pt="3" pb="2">
          <Tabs.Content value="account">
            <Text size="2">Make changes to your account.</Text>
          </Tabs.Content>

          <Tabs.Content value="documents">
            <Text size="2">Access and update your documents.</Text>
          </Tabs.Content>

          <Tabs.Content value="settings">
            <Text size="2">
              Edit your profile or update contact information.
            </Text>
          </Tabs.Content>
        </Box>
      </Tabs.Root>

      <TextField.Root>
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
        <TextField.Input placeholder="Search the docs…" />
      </TextField.Root>

      <Tooltip content="Add to library">
        <IconButton radius="full">
          <PlusIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default App;
