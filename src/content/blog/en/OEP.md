---
title: "OEP - The open source eyepiece"
publishDate: 2025-09-12
img: "/assets/OEP1.png"
---

# How to make your own Plössl!
## OEP for "Open Eyepiece Project"

For some time now, I've been working on an idea: designing an open source 3D printed eyepiece.
The initial goal is to make a Plössl eyepiece, a fairly common model appreciated for its simplicity and optical quality. Later, I would like to explore other optical designs like the double Plössl in order to offer a small library of free and reproducible eyepieces.

## A design made for DIY

The structure is entirely designed to be 3D printed, allowing everyone to easily make their own eyepiece.
On the optics side, I start with lenses available on AliExpress, to prototype quickly at low cost.

![3D eyepiece](/assets/OE3D.png)

## Red Henry

In my approach, I was greatly inspired by the work of Red Henry, a passionate amateur based in the United States, who makes his own eyepieces and shares his experiences and advice.
There is even a Facebook group dedicated to his work and that of the community: [ATM Eyepieces (Red Henry)](https://www.facebook.com/groups/1484777181687589/)

## The optical diagram

It consists of two symmetrical doublets, each formed of two cemented lenses. These two doublets are placed facing each other, separated by a small space called a spacer.

![OEP eyepiece with lens orientation visible](/assets/OEPdraw.PNG)

## A tool?

A Plössl eyepiece consists of two symmetrical achromatic doublets. Its effective focal length (F) can be approximated by the general formula for compound optical systems:

![Plössl optical formula](/assets/OEPFormuleplossl.png)

- **f1 and f2** = focal lengths of the two doublets,
- **d** = distance separating the two doublets (measured between their principal planes).

Note: this formula is only an approximation. To precisely model a Plössl, you need to use ray tracing methods or optical matrix methods (ABCD method), and not just limit yourself to the two-lens formula.

Following his recommendations and calculations, I developed my own tool to calculate an eyepiece's focal length, accessible online: My focal length calculator

---SPLIT_CONTENT_HERE---

Note: this formula is only an approximation. To precisely model a Plössl, you need to use ray tracing methods or optical matrix methods (ABCD method), and not just limit yourself to the two-lens formula.

## The first prototypes

The eyepiece assembly diagram:
![OEP assembly diagram](/assets/OEPSchema.png)
The different parts:
![OEP eyepiece on mouse pad](/assets/OEP2.png)
![OEP eyepiece on desk](/assets/OEP4.png)

![OEP open source eyepiece](/assets/OEP3.png)

The files are not yet available on my Printables page.

Good evening!

**Raphaël - La 3ème Dimension**
