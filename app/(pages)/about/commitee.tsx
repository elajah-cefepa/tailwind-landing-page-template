import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  
import * as React from "react";
import Image from 'next/image';
    
  const cardData = [
    { title: "Andrew Sayre", description: "Andrew Sayre is a retired emergency room physician living in Wellsboro with his wife, Janet, and is the father of 7 children and 20 grandchildren. He attends Wellsboro's Christ Church and has served on the CEF Committee for over 40 years.", 
        imagePath: "/images/commitee/Andrew Sayre.jpg" },

    { title: "Carol Wetmore", description: "Carol Wetmore has been serving in Child Evangelism since she was a teen. She is currently teaching in the after-school Good News Clubs, is retired from working in her husband's surveying business, and enjoys connecting with her grandchildren.", 
        imagePath: "/images/commitee/Carol Wetmore.jpg" },

    { title: "Duane Wetmore", description: "Duane Wetmore is a self-employed Land Surveyor, the father of 3 married children, and has 10 grandchildren and 1 great-grandchild. He is an elder at God's Family Fellowship Church in Wellsboro and has served on the CEF committee for over 20 years.", 
        imagePath: "/images/commitee/Duane Wetmore.jpg" },

    { title: "Dave Carpenter", description: "Dave Carpenter was born in Tioga County, PA, and he worked in manufacturing as a machinist for 20 years and as a manufacturing engineer for 25 years. He retired in 2019 and is presently working as a handyman. He and his wife Lori have two children and five grandchildren. Dave attends Tuscarora Baptist Church and has served on the CEF committee since 2009.", 
        imagePath: "/images/commitee/Dave Carpenter.jpg" },

    { title: "Lori Carpenter", description: "Lori is a retired Special Education Paraprofessional living in Tioga Junction with her husband, Dave, and she is the mother of two children and five grandchildren. She attends Tuscarora Baptist Church and has served on the CEF committee since 2009.", 
        imagePath: "/images/commitee/Lori Carpenter.jpg" },

    { title: "Douglas Pfleegor", description: "Doug serves as the treasurer of CEF of Tioga County as well as the worship leader and treasurer of Covington Baptist Church. He is the Financial Manager of a local manufacturing company and several related companies. He has served as a Good News Club teacher and as an AWANA leader. He is married to Beth and has served with CEF for over 30 years.", 
        imagePath: "/images/commitee/Douglas Pfleegor.jpg" },

    { title: "Beth Pfleegor", description: "Beth is the assistant secretary of CEF of Tioga County, and she also serves as the worship leader, AWANA leader, and Financial Secretary of Covington Baptist Church. She has worked as a Deposit Services Representative at a local financial institution and served as a Good News Club teacher. She is married to Doug and has served with CEF for over 30 years.", 
        imagePath: "/images/commitee/Beth Pfleegor.jpg" },
  ];
  

export default function Commitee() {
    return (
        <section className="bg-grey-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-2">
          <div className="pt-32 pb-12 md:pt-10 md:pb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {cardData.map((card, index) => (
                <Card key={index} className="w-80">
                  <CardHeader>
                    <CardTitle>{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* Image */}
                    <div className="mb-5">
                      <Image src={card.imagePath} alt={card.title} width={200} height={200} />
                    </div>
                    <p>{card.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
    }